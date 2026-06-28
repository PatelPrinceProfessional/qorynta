import { useEffect, useRef, useState } from 'react';

const codeSnippets = [
  'function integrateAI()',
  'process.data()',
  'await model.predict()',
  'analyzePattern(input)',
  'optimizeWeights()',
  'generate.response()',
  'const neuralNet = new Model()',
  'stream.pipe(transformer)',
  'fetchDataStream()',
  'return ai.synthesize()'
];

export const AIAgentThoughtStream = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeSnippets, setActiveSnippets] = useState<{ id: number; text: string; x: number; y: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate floating text snippets
    const generateSnippets = () => {
      const snippets = Array.from({ length: 4 }).map((_, i) => ({
        id: Math.random(),
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: 10 + Math.random() * 60, // percentage
        y: 20 + Math.random() * 60, // percentage
        delay: Math.random() * 4,
      }));
      setActiveSnippets(snippets);
    };
    
    generateSnippets();
    const interval = setInterval(generateSnippets, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    
    const setSize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    
    setSize();
    window.addEventListener('resize', setSize);

    const particles = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 0.5
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update & draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)'; // Cyan/blue
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 80)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[220px] rounded-2xl overflow-hidden glass-card bg-transparent dark:bg-transparent border border-cyan-500/10 shadow-[0_0_30px_rgba(6,182,212,0.05)]">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 dark:from-cyan-500/10 dark:to-blue-500/10" />
      
      {/* Canvas for particles */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen"
        style={{ pointerEvents: 'none' }}
      />

      {/* Floating Code Snippets */}
      {activeSnippets.map((snippet) => (
        <div
          key={snippet.id}
          className="absolute font-mono text-[10px] sm:text-xs text-cyan-600 dark:text-cyan-400 opacity-0 animate-fade-in-up whitespace-nowrap drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            animationDelay: `${snippet.delay}s`,
            animationDuration: '4s',
            animationFillMode: 'forwards'
          }}
        >
          {snippet.text}
        </div>
      ))}
      
      {/* Abstract scanline overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 0, 0, 1) 50%)', backgroundSize: '100% 4px' }} />
    </div>
  );
};
