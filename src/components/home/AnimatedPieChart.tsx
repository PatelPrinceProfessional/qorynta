import { useEffect, useState } from 'react';

const segments = [
  { label: 'AI Development', percentage: 40, color: 'hsl(25, 95%, 53%)' },
  { label: 'Data Analytics', percentage: 30, color: 'hsl(186, 100%, 50%)' },
  { label: 'Gen AI', percentage: 20, color: 'hsl(265, 89%, 65%)' },
  { label: 'Digital Systems', percentage: 10, color: 'hsl(160, 84%, 39%)' },
];

export const AnimatedPieChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const size = 320;
  const strokeWidth = 40;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativeOffset = 0;

  return (
    <div className="relative group">
      {/* Glow Effect - enhanced on hover */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-2xl transition-all duration-500 group-hover:from-primary/40" />
      
      <div className="relative">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transition-transform duration-300 ease-out"
          style={{ transform: `rotate(${rotation - 90}deg)` }}
        >
          {/* Background Circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(217, 33%, 17%)"
            strokeWidth={strokeWidth}
          />

          {/* Animated Segments */}
          {segments.map((segment, index) => {
            const segmentLength = (segment.percentage / 100) * circumference;
            const offset = cumulativeOffset;
            cumulativeOffset += segmentLength;

            return (
              <circle
                key={segment.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth={hoveredSegment === index ? strokeWidth + 8 : strokeWidth}
                strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
                strokeDashoffset={-offset}
                strokeLinecap="round"
                className="transition-all duration-500 cursor-pointer"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transformOrigin: 'center',
                  transition: `all 0.8s ease-out ${index * 0.15}s`,
                  filter: hoveredSegment === index ? `drop-shadow(0 0 20px ${segment.color})` : 'none',
                }}
                onMouseEnter={() => setHoveredSegment(index)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
            );
          })}
        </svg>

        {/* Center Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-3xl font-bold text-foreground">ML</span>
            <p className="text-xs text-muted-foreground mt-1">Services</p>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        {segments.map((segment, index) => (
          <div
            key={segment.label}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer border border-transparent ${
              hoveredSegment === index 
                ? 'bg-muted scale-105 shadow-lg border-primary/30' 
                : 'bg-transparent hover:bg-muted/50'
            }`}
            onMouseEnter={() => setHoveredSegment(index)}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            <div
              className="w-3 h-3 rounded-full transition-transform duration-300"
              style={{ 
                backgroundColor: segment.color,
                boxShadow: hoveredSegment === index ? `0 0 12px ${segment.color}` : 'none',
                transform: hoveredSegment === index ? 'scale(1.3)' : 'scale(1)'
              }}
            />
            <div className="flex-1">
              <p className={`text-xs font-medium transition-colors duration-300 ${hoveredSegment === index ? 'text-primary' : 'text-foreground'}`}>{segment.label}</p>
              <p className="text-xs text-muted-foreground">{segment.percentage}%</p>
            </div>
          </div>
        ))}
      </div>

      {/* Caption */}
      <p className="text-center text-xs text-muted-foreground mt-4">
        Aligned with Clutch service distribution
      </p>
    </div>
  );
};
