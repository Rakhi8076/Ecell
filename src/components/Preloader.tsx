import React, { useEffect, useRef, useState } from "react";
import "./Preloader.css";

const taglines = [
  "Ignite Your Ideas.",
  "Where Vision Meets Action.",
  "Entrepreneurship Unleashed.",
  "Innovate. Disrupt. Inspire.",
];

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [taglineIndex, setTaglineIndex] = useState(0);

  // Progress logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);
    return () => clearInterval(interval);
  }, []);

  // Tagline rotation
  useEffect(() => {
    const tagInterval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 2200);
    return () => clearInterval(tagInterval);
  }, []);

  // Particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let particles: any[] = [];
    const numParticles = 100;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.6,
        speedY: (Math.random() - 0.5) * 0.6,
        alpha: Math.random() * 0.8 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p.alpha})`; // blue glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#3b82f6";
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      requestAnimationFrame(animate);
    };
    animate();

    return () => window.removeEventListener("resize", resize);
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader-container">
      <canvas ref={canvasRef} className="particle-bg"></canvas>

      <div className="logo-wrapper">
        <h1 className="glow-text">
          E-<span>Summit</span>
        </h1>
        <div className="underline"></div>
      </div>

      <p className="typing-text">{taglines[taglineIndex]}</p>

      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="progress-text">{progress}%</span>
      </div>

      <p className="quote">“Fueling Innovation & Entrepreneurship.”</p>
      <br></br>
      <p className="loader-footer">
        Powered by <span className="highlight">E-Summit IGDTUW</span>
      </p>
    </div>
  );
};

export default Preloader;
