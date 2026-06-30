import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const WebGLBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    
    // CAMERA SETUP
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    // RENDERER SETUP
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Append canvas to container
    containerRef.current.appendChild(renderer.domElement);

    // PARTICLES SETUP
    const particleCount = window.innerWidth < 768 ? 400 : 800; // Optimize for mobile
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // Brand Colors: Deep Blue (#112D4E) to Soft Purple/Cyan
    // We'll interpolate between some base colors
    const colorA = new THREE.Color('#3B82F6'); // Soft Blue
    const colorB = new THREE.Color('#A855F7'); // Soft Purple
    const colorC = new THREE.Color('#64FFDA'); // Cyan

    for (let i = 0; i < particleCount; i++) {
      // Position: Randomly distributed in a volumetric space
      positions[i * 3] = (Math.random() - 0.5) * 200; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 20; // z (slightly pushed back)

      // Color
      const mixedColor = colorA.clone();
      const rand = Math.random();
      if (rand > 0.66) mixedColor.lerp(colorB, Math.random());
      else if (rand > 0.33) mixedColor.lerp(colorC, Math.random());
      
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Create a circular sprite for particles (soft glowing dot)
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const context = canvas.getContext('2d');
      if (context) {
        // Draw soft glowing circle
        const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.2)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        context.fillStyle = gradient;
        context.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.Texture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const material = new THREE.PointsMaterial({
      size: 2.5,
      vertexColors: true,
      map: createCircleTexture(),
      transparent: true,
      opacity: 0.6,
      depthWrite: false, // Ensures glowing overlaps look good
      blending: THREE.AdditiveBlending // Gives the "bloom" / glowing effect
    });

    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);

    // INTERACTION STATE
    let scrollY = 0;
    let targetScrollVelocity = 0;
    let currentScrollVelocity = 0;
    let lastScrollY = window.scrollY;
    
    let mouseX = 0;
    let mouseY = 0;

    // EVENT LISTENERS
    const handleScroll = () => {
      scrollY = window.scrollY;
      const deltaY = scrollY - lastScrollY;
      targetScrollVelocity = deltaY * 0.05; // Reactivity factor
      lastScrollY = scrollY;
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    let animationFrameId: number;
    let isVisible = true;

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const clock = new THREE.Clock();

    const animate = () => {
      if (!isVisible) {
        // Throttle when tab is not in focus
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      // 1. Smoothly decay scroll velocity back to baseline (Smooth Reset)
      targetScrollVelocity *= 0.95; // Friction
      currentScrollVelocity += (targetScrollVelocity - currentScrollVelocity) * 0.1; // Ease into velocity

      // Baseline slow-drift + Scroll velocity multiplier
      const rotationSpeed = 0.05 + Math.abs(currentScrollVelocity * 0.01);
      
      // Rotate the entire mesh slowly
      particlesMesh.rotation.y += rotationSpeed * 0.01;
      particlesMesh.rotation.x += rotationSpeed * 0.005;

      // 2. Mouse "Lean" Interaction (Smoothly interpolate towards target rotation)
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // 3. Subtle morphing / floating of individual particles
      // To keep it high-performance, we'll just float the whole mesh and let AdditiveBlending handle depth
      particlesMesh.position.y = Math.sin(elapsedTime * 0.5) * 2 - (currentScrollVelocity * 0.5);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
      
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
};
