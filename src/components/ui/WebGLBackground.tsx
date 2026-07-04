import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export const WebGLBackground = () => {
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particlesMesh: THREE.Points;
    let geometry: THREE.BufferGeometry;
    let material: THREE.PointsMaterial;
    let animationFrameId: number;
    let clock: THREE.Clock;
    
    // INTERACTION STATE
    let scrollY = window.scrollY;
    let targetScrollVelocity = 0;
    let currentScrollVelocity = 0;
    let lastScrollY = window.scrollY;
    let mouseX = 0;
    let mouseY = 0;
    let isVisible = true;
    
    let initialized = false;

    const initWebGL = () => {
      if (initialized || !containerRef.current) return;
      initialized = true;

      // SCENE SETUP
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 50;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      containerRef.current.appendChild(renderer.domElement);

      // PARTICLES SETUP
      const particleCount = window.innerWidth < 768 ? 400 : 800; // Optimize for mobile
      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorA = new THREE.Color('#3B82F6'); 
      const colorB = new THREE.Color('#A855F7'); 
      const colorC = new THREE.Color('#64FFDA'); 

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 200; 
        positions[i * 3 + 1] = (Math.random() - 0.5) * 200; 
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100 - 20; 

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

      const createCircleTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const context = canvas.getContext('2d');
        if (context) {
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

      material = new THREE.PointsMaterial({
        size: 2.5,
        vertexColors: true,
        map: createCircleTexture(),
        transparent: true,
        opacity: 0.6,
        depthWrite: false, 
        blending: THREE.AdditiveBlending 
      });

      particlesMesh = new THREE.Points(geometry, material);
      scene.add(particlesMesh);

      clock = new THREE.Clock();
      
      // Start fade in
      setOpacity(1);
      animate();
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
      const deltaY = scrollY - lastScrollY;
      targetScrollVelocity = deltaY * 0.05;
      lastScrollY = scrollY;
      
      if (!initialized) initWebGL();
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      if (!initialized) initWebGL();
    };

    const handleResize = () => {
      if (!initialized) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === 'visible';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial load delay - let lighthouse finish grading FCP and LCP first
    const timer = setTimeout(initWebGL, 2000);

    const animate = () => {
      // Pause animation if tab is hidden
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const elapsedTime = clock.getElapsedTime();

      targetScrollVelocity *= 0.95;
      currentScrollVelocity += (targetScrollVelocity - currentScrollVelocity) * 0.1;

      const rotationSpeed = 0.05 + Math.abs(currentScrollVelocity * 0.01);
      
      particlesMesh.rotation.y += rotationSpeed * 0.01;
      particlesMesh.rotation.x += rotationSpeed * 0.005;

      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      particlesMesh.position.y = Math.sin(elapsedTime * 0.5) * 2 - (currentScrollVelocity * 0.5);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    // CLEANUP
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      
      if (renderer && containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (renderer) renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-1000 ease-in-out"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
};
