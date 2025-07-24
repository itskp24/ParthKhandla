import { useEffect, useRef } from 'react';

export default function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const particleCount = 50;

    // Clear existing particles
    container.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute rounded-full pointer-events-none';
      
      const size = Math.random() * 4 + 1;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      const hue = Math.random() * 60 + 200;
      particle.style.background = `hsl(${hue}, 70%, 60%)`;
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Animation
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 5;
      const translateY = -100;
      const translateX = Math.random() * 200 - 100;
      
      particle.style.animation = `
        particleFloat ${duration}s linear ${delay}s infinite
      `;
      particle.style.setProperty('--translateX', translateX + 'px');
      particle.style.setProperty('--translateY', translateY + 'px');
      
      container.appendChild(particle);
    }

    // Add keyframes for particle animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        from {
          transform: translate(0, 0);
        }
        to {
          transform: translate(var(--translateX), var(--translateY));
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
