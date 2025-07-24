import { useEffect } from 'react';

export function useCursorTrail() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cursorTrail = document.createElement('div');
    cursorTrail.className = 'fixed top-0 left-0 w-5 h-5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full pointer-events-none z-50 opacity-80 blur-sm transition-opacity duration-300';
    cursorTrail.style.mixBlendMode = 'screen';
    document.body.appendChild(cursorTrail);

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;
      
      cursorTrail.style.left = trailX - 10 + 'px';
      cursorTrail.style.top = trailY - 10 + 'px';
      
      requestAnimationFrame(animateTrail);
    };

    const handleMouseEnter = () => {
      cursorTrail.style.opacity = '0.8';
    };

    const handleMouseLeave = () => {
      cursorTrail.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (document.body.contains(cursorTrail)) {
        document.body.removeChild(cursorTrail);
      }
    };
  }, []);
}
