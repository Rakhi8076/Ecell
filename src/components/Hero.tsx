import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set event date (example: March 15, 2025)
    const eventDate = new Date("2025-03-15T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Logo/Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-accent/30">
            <Sparkles className="text-accent" size={20} />
            <span className="text-white font-medium">E-Cell Presents</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            E-Summit <span className="text-gradient">2025</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-4 max-w-3xl mx-auto">
            Innovation Meets Inspiration
          </p>

          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Join India's premier entrepreneurship summit at Indira Gandhi Delhi Technical University for Women
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-8 mb-12">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-white/10 backdrop-blur-lg border border-accent/30 rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px] shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-5xl font-bold text-accent mb-1">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">
                  {unit}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-accent/90 shadow-glow font-semibold text-lg px-8 py-6 transition-bounce hover:scale-105"
            >
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-primary font-semibold text-lg px-8 py-6 transition-smooth"
            >
              View Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-accent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
