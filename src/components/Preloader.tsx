import React, { useEffect, useState, useRef } from "react";
import "./Preloader.css";

const taglines = [
  "Ignite Your Ideas!",
  "Where Vision Meets Action!",
  "Entrepreneurship Unleashed!",
  "Innovate. Disrupt. Inspire.",
];

const eventHighlights = [
  "36-Hour Hackathon",
  "15+ Speaker Sessions",
  "₹5 Lakh Prizes",
  "50+ Startup Stalls",
];

const quotes = [
  "“Innovation distinguishes between a leader and a follower.” — Steve Jobs",
  "“Think big. Start small. Move fast.” — APJ Abdul Kalam",
  "“The only limit to our realization of tomorrow is our doubts of today.” — FDR",
];

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [highlightIdx, setHighlightIdx] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Rotating Particles Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    let rotation = 0;
    const particles = Array.from({ length: 80 }).map((_, i) => {
      const angle = (i / 80) * Math.PI * 2;
      const distance = Math.random() * 200 + 50;
      return {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: Math.random() * 2.5 + 0.5,
        vx: Math.cos(angle) * (Math.random() * 1.5 + 0.5),
        vy: Math.sin(angle) * (Math.random() * 1.5 + 0.5),
        opacity: Math.random() * 0.6 + 0.2,
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotation += 0.5;
      const gradient = ctx.createLinearGradient(
        Math.cos((rotation * Math.PI) / 180) * 300,
        Math.sin((rotation * Math.PI) / 180) * 300,
        -Math.cos((rotation * Math.PI) / 180) * 300,
        -Math.sin((rotation * Math.PI) / 180) * 300
      );
      gradient.addColorStop(0, "rgba(245, 197, 24, 0.08)");
      gradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)");
      gradient.addColorStop(1, "rgba(245, 197, 24, 0.08)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x > canvas.width || p.x < 0) p.vx *= -1;
        if (p.y > canvas.height || p.y < 0) p.vy *= -1;
        ctx.fillStyle = Math.random() > 0.7 ? "#f5c518" : "#1a2847";
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      requestAnimationFrame(animate);
    };

    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Progress Animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 1000);
          return 100;
        }
        return Math.min(prev + Math.random() * 3 + 1, 100);
      });
    }, 110);
    return () => clearInterval(interval);
  }, []);

  // Tagline/Highlight/Quote Shuffle
  useEffect(() => {
    const tagInterval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 1700);
    const hiInterval = setInterval(() => {
      setHighlightIdx((prev) => (prev + 1) % eventHighlights.length);
    }, 1300);
    const quoteInterval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 3500);

    return () => {
      clearInterval(tagInterval);
      clearInterval(hiInterval);
      clearInterval(quoteInterval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="preloader-360-wrapper">
      {/* Canvas BG */}
      <canvas ref={canvasRef} className="preloader-360-canvas"></canvas>

      {/* Taglines */}
      <div className="preloader-tagline">
        <h2>{taglines[taglineIndex]}</h2>
      </div>

      {/* Main Logo */}
      <div className="logo-360-section">
        <h1 className="logo-360-text">
          E-Summit <span className="logo-360-year">2025</span>
        </h1>
        <div className="logo-360-underline"></div>
      </div>

      {/* Event Highlight Rotator */}
      <div className="preloader-event-highlight">
        <span>{eventHighlights[highlightIdx]}</span>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-360">
        <div className="progress-track-360">
          <div className="progress-fill-360" style={{ width: `${progress}%` }}>
            <div className="progress-shine-360"></div>
          </div>
        </div>
        <div className="progress-info-360">
          <span className="progress-label-360">
            {Math.floor(progress)}% Complete
          </span>
        </div>
      </div>
      {/* Animated Mascot Example */}
      <div className="preloader-mascot">
        <svg width="56" height="56" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r="26" fill="#f5c518" opacity="0.18" />
          <ellipse cx="28" cy="36" rx="12" ry="6" fill="#fff" opacity="0.5" />
          <circle cx="28" cy="28" r="14" fill="#fff" />
          <circle cx="24" cy="26" r="2.5" fill="#1a2847" />
          <circle cx="32" cy="26" r="2.5" fill="#1a2847" />
          <path d="M23 32 Q28 36 33 32" stroke="#1a2847" strokeWidth="2" fill="none" />
        </svg>
      </div>
      {/* Quote Bubble */}
      <div className="preloader-quote">
        <p>{quotes[quoteIdx]}</p>
      </div>
      {/* Footer */}
      <div className="footer-360-text">
        <p>Powered by E-Cell IGDTUW Innovation Lab</p>
      </div>
    </div>
  );
};

export default Preloader;
