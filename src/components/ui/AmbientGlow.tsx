import React, { useEffect, useRef } from 'react';

export const AmbientGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    };

    const updatePosition = () => {
      if (glowRef.current) {
        // Transform uses exact coordinates; offset handles centering
        glowRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      animationFrameId = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[50] overflow-hidden mix-blend-screen dark:mix-blend-lighten">
      <div 
        ref={glowRef}
        className="absolute w-[800px] h-[800px] -left-[400px] -top-[400px] rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
          willChange: 'transform' 
        }}
      />
    </div>
  );
};
