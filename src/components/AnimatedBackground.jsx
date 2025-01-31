import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;
    let lastMouseX = 0;
    let lastMouseY = 0;
    let mouseSpeed = 0;
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    window.addEventListener('mousemove', (e) => {
      mouseSpeed = Math.sqrt(
        Math.pow(e.clientX - lastMouseX, 2) + 
        Math.pow(e.clientY - lastMouseY, 2)
      );
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Create particles
    const particles = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    // Draw wave with mouse distortion
    const drawWave = (frequency, amplitude, yOffset, color, alpha) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      
      for (let x = 0; x < canvas.width; x++) {
        const dx = x - mouseX;
        const dy = yOffset - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const mouseInfluence = Math.max(0, 1 - distance / 200) * mouseSpeed * 0.3;
        const distortion = Math.sin(distance * 0.03 - time * 2) * mouseInfluence;
        
        const y = Math.sin(x * frequency + time) * amplitude + 
                 yOffset + 
                 distortion;
        
        ctx.lineTo(x, y);
      }
      
      ctx.strokeStyle = `rgba(${color}, ${alpha})`;
      ctx.stroke();
    };
    
    const animate = () => {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw multiple waves with light green colors
      ctx.lineWidth = 2;
      drawWave(0.003, 50, canvas.height * 0.3, '220, 252, 231', 0.4);  // Lightest green
      drawWave(0.004, 40, canvas.height * 0.4, '187, 247, 208', 0.3);  // Light green
      drawWave(0.002, 60, canvas.height * 0.5, '167, 243, 208', 0.3);  // Slightly darker green
      
      // Update and draw particles
      particles.forEach(particle => {
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) * 0.01;
          particle.x += Math.cos(angle) * force;
          particle.y += Math.sin(angle) * force;
        }
        
        particle.x += particle.speedX;
        particle.y += particle.speedY + Math.sin(time * 2) * 0.2;
        
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        const particleSize = particle.size * (1 + Math.max(0, 1 - distance / 100) * mouseSpeed * 0.1);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167, 243, 208, ${particle.opacity})`; // Light green particles
        ctx.fill();
      });
      
      // Mouse trail with light green gradient
      if (mouseSpeed > 0) {
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, mouseSpeed * 0.5, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 100);
        gradient.addColorStop(0, 'rgba(167, 243, 208, 0.2)'); // Light green trail
        gradient.addColorStop(1, 'rgba(167, 243, 208, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      }
      
      mouseSpeed *= 0.95;
      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', null);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default AnimatedBackground;
