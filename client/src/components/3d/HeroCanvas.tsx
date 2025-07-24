import { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || typeof window === 'undefined') return;

    // Simple canvas-based 3D-like animation since Three.js requires additional setup
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const shapes: Array<{
      x: number;
      y: number;
      z: number;
      rotationX: number;
      rotationY: number;
      type: string;
      color: string;
      size: number;
    }> = [];

    const colors = ['#6366f1', '#8b5cf6', '#14b8a6', '#f59e0b'];
    const shapeTypes = ['cube', 'sphere', 'triangle', 'torus'];

    // Initialize shapes
    for (let i = 0; i < 15; i++) {
      shapes.push({
        x: (Math.random() - 0.5) * canvas.width,
        y: (Math.random() - 0.5) * canvas.height,
        z: Math.random() * 100,
        rotationX: Math.random() * Math.PI,
        rotationY: Math.random() * Math.PI,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 30 + 20
      });
    }

    function drawShape(shape: typeof shapes[0]) {
      if (!ctx) return;
      
      ctx.save();
      ctx.translate(canvas.width / 2 + shape.x, canvas.height / 2 + shape.y);
      
      // Apply perspective and rotation effects
      const scale = 1 / (1 + shape.z / 100);
      ctx.scale(scale, scale);
      
      ctx.strokeStyle = shape.color;
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.6;

      // Draw wireframe shapes
      switch (shape.type) {
        case 'cube':
          drawWireframeCube(ctx, shape.size);
          break;
        case 'sphere':
          drawWireframeSphere(ctx, shape.size / 2);
          break;
        case 'triangle':
          drawWireframeTriangle(ctx, shape.size);
          break;
        case 'torus':
          drawWireframeTorus(ctx, shape.size / 2);
          break;
      }
      
      ctx.restore();
    }

    function drawWireframeCube(ctx: CanvasRenderingContext2D, size: number) {
      const half = size / 2;
      ctx.beginPath();
      ctx.rect(-half, -half, size, size);
      ctx.stroke();
      
      // Add some 3D lines
      ctx.beginPath();
      ctx.moveTo(-half, -half);
      ctx.lineTo(-half + 10, -half - 10);
      ctx.moveTo(half, -half);
      ctx.lineTo(half + 10, -half - 10);
      ctx.moveTo(-half, half);
      ctx.lineTo(-half + 10, half - 10);
      ctx.moveTo(half, half);
      ctx.lineTo(half + 10, half - 10);
      ctx.stroke();
    }

    function drawWireframeSphere(ctx: CanvasRenderingContext2D, radius: number) {
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();
      
      // Add latitude and longitude lines
      ctx.beginPath();
      ctx.ellipse(0, 0, radius, radius * 0.5, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 0.5, radius, 0, 0, Math.PI * 2);
      ctx.stroke();
    }

    function drawWireframeTriangle(ctx: CanvasRenderingContext2D, size: number) {
      const height = size * Math.sqrt(3) / 2;
      ctx.beginPath();
      ctx.moveTo(0, -height / 2);
      ctx.lineTo(-size / 2, height / 2);
      ctx.lineTo(size / 2, height / 2);
      ctx.closePath();
      ctx.stroke();
    }

    function drawWireframeTorus(ctx: CanvasRenderingContext2D, radius: number) {
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.6, 0, Math.PI * 2);
      ctx.stroke();
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach((shape, index) => {
        shape.rotationX += 0.01;
        shape.rotationY += 0.01;
        shape.y += Math.sin(Date.now() * 0.001 + index) * 0.5;
        
        drawShape(shape);
      });
      
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
    />
  );
}
