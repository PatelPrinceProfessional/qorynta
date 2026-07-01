import React, { useState, useEffect, useRef } from 'react';

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number; // Required to prevent CLS
  height: number; // Required to prevent CLS
  className?: string;
  priority?: boolean;
}

export const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px', // Load slightly before it comes into view
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Generate WebP path if using local assets (assuming Vite plugin generates them)
  const webpSrc = src.replace(/\.(png|jpe?g)$/i, '.webp');

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ aspectRatio: `${width}/${height}`, maxWidth: '100%' }}
    >
      {/* Skeleton/Blur placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse dark:bg-slate-800" />
      )}

      {isInView && (
        <picture>
          {/* Serve WebP if available */}
          {src.match(/\.(png|jpe?g)$/i) && (
            <source srcSet={webpSrc} type="image/webp" />
          )}
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};
