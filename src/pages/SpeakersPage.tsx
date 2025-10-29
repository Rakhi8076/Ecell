import { Linkedin, Twitter, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SpeakersPage = () => {
  const speakers = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & CEO, TechVentures",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Rajesh Kumar",
      role: "Serial Entrepreneur & Investor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Ananya Desai",
      role: "VP of Innovation, GlobalCorp",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
    {
      name: "Vikram Singh",
      role: "Startup Mentor & Angel Investor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navbar />

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-gradient-to-b from-primary to-primary/90 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,197,24,0.05),transparent_70%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Inspiring <span className="text-gradient">Speakers</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Learn from industry leaders and successful entrepreneurs
            </p>
          </div>

          {/* Speakers Grid - Responsive Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.name}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-lg border border-accent/20 p-6 hover:shadow-glow transition-all duration-500 hover:-translate-y-3 hover:border-accent/40">
                  {/* Gradient Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                  
                  {/* Speaker Image */}
                  <div className="relative mb-5 overflow-hidden rounded-2xl">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `https://placehold.co/400x400/1e293b/f5c518?text=${speaker.name.split(' ').map(n => n[0]).join('')}`;
                      }}
                    />
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                      <span className="text-accent font-semibold text-sm">View Profile</span>
                    </div>
                  </div>

                  {/* Speaker Info */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                      {speaker.name}
                    </h3>
                    <p className="text-white/60 mb-5 text-sm leading-relaxed min-h-[40px]">
                      {speaker.role}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-4 border-t border-white/10">
                      <a
                        href={speaker.linkedin}
                        className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg hover:bg-accent hover:text-primary text-accent transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={speaker.twitter}
                        className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg hover:bg-accent hover:text-primary text-accent transition-all duration-300 hover:scale-110"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href={speaker.instagram}
                        className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-lg hover:bg-accent hover:text-primary text-accent transition-all duration-300 hover:scale-110"
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="inline-block px-8 py-4 bg-white/5 backdrop-blur-lg border border-accent/20 rounded-full shadow-md  hover:bg-white/10 hover:shadow-glow transition-all duration-500 hover:scale-105 ">
              <p className="text-white/70 text-lg">
                ✨ More speakers will be announced soon!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpeakersPage;
