import { Crown, Award, Medal, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SponsorsPage = () => {
  const sponsors = {
    platinum: [
      { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
      { name: "InnovateHub", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    ],
    gold: [
      { name: "StartupX", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=180&h=90&fit=crop" },
      { name: "VentureCapital", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=180&h=90&fit=crop" },
      { name: "BizGrowth", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=180&h=90&fit=crop" },
    ],
    silver: [
      { name: "TechSolutions", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop" },
      { name: "DataPro", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop" },
      { name: "CloudFirst", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop" },
      { name: "AIVentures", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=160&h=80&fit=crop" },
    ],
  };

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-gradient-to-b from-primary/90 to-primary relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,197,24,0.05),transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our <span className="text-gradient">Sponsors</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Powered by industry leaders who believe in innovation
            </p>
          </div>

          {/* Platinum Sponsors */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-accent to-yellow-500 p-2 rounded-lg">
                <Crown className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-accent">Platinum Sponsors</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
              {sponsors.platinum.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className="group relative bg-white/10 backdrop-blur-lg border-2 border-accent/30 rounded-2xl
                   p-8 md:p-10 hover:bg-yellow/15 hover:shadow-glow transition-all duration-500 hover:scale-105 animate-scale-in w-full sm:w-64"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent 
                  blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-16 md:h-20 w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/200x100/1e293b/f5c518?text=${sponsor.name}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-2 rounded-lg">
                <Award className="text-primary" size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-yellow-400">Gold Sponsors</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-5 md:gap-6 max-w-5xl mx-auto">
              {sponsors.gold.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className="group relative bg-white/10 backdrop-blur-lg border border-yellow-400/30 rounded-xl p-6 md:p-7 hover:bg-white/15 hover:shadow-card transition-all duration-500 hover:scale-105 animate-scale-in w-full sm:w-56"
                  style={{ animationDelay: `${100 + index * 100}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent 
                  blur-xl rounded-2xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-12 md:h-14 w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/180x90/1e293b/f5c518?text=${sponsor.name}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="bg-gradient-to-r from-slate-300 to-slate-400 p-2 rounded-lg">
                <Medal className="text-primary" size={20} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-300">Silver Sponsors</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-5 max-w-6xl mx-auto">
              {sponsors.silver.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className="group relative bg-white/10 backdrop-blur-lg border border-slate-300/20 rounded-lg p-5 md:p-6 hover:bg-white/15 hover:shadow-card transition-all duration-500 hover:scale-105 animate-scale-in w-full sm:w-48"
                  style={{ animationDelay: `${200 + index * 100}ms` }}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-300/10 to-transparent blur-lg rounded-lg group-hover:blur-xl transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="h-10 md:h-12 w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/160x80/1e293b/f5c518?text=${sponsor.name}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SponsorsPage;
