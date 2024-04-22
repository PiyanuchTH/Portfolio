import React, { useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';

export default function StarsCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    const stars = [];
    const numStars = 100;

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5,
        vx: Math.random() * 0.5,
        vy: Math.random() * 0.5
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < numStars; i++) {
        const star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.fill();

        star.x += star.vx;
        star.y += star.vy;

        if (star.x < 0 || star.x > width) {
          star.vx = -star.vx;
        }

        if (star.y < 0 || star.y > height) {
          star.vy = -star.vy;
        }
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(draw);
  }, []);

  return (
  <Col xs={12} md={6}>
  <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} /></Col>
)
};


