import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: Particle[] = [];
    let animationFrameId: number;
    let resizeTimeout: NodeJS.Timeout;

    // Particle settings adapted for high end premium look
    const connectionDistance = 150;
    const speed = 0.3; // Slower, more elegant movement

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges smoothly
        if (this.x < 0 || this.x > canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > canvasHeight) this.vy *= -1;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        // Slightly larger radius for better visibility in light mode
        const renderRadius = resolvedTheme === 'dark' ? this.radius : this.radius * 1.5;
        ctx.arc(this.x, this.y, renderRadius, 0, Math.PI * 2);
        // Dark theme: soft cyan. Light theme: deep navy (#0a2472) at 40% for clear visibility
        ctx.fillStyle = resolvedTheme === 'dark' ? 'rgba(165, 243, 252, 0.6)' : 'rgba(10, 36, 114, 0.4)'; 
        ctx.fill();
      }
    }

    const init = () => {
      // Set canvas size to parent container (assumed absolute inset)
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      
      const particleCount = Math.min((canvas.width * canvas.height) / 10000, 200); // Increased density
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Opacity scales beautifully based on distance
            const opacity = 1 - (distance / connectionDistance);
            if (resolvedTheme === 'dark') {
              ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * 0.3})`; 
            } else {
              ctx.strokeStyle = `rgba(18, 52, 153, ${opacity * 0.4})`; // #123499 at 40% max opacity
            }
            ctx.lineWidth = resolvedTheme === 'dark' ? 0.6 : 1.0; // Thicker lines in light mode
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(init, 200);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(resizeTimeout);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-100 dark:opacity-70 dark:mix-blend-screen transition-opacity duration-1000"
    />
  );
};
