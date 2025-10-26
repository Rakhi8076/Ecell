import { Lightbulb, Code, Briefcase, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button"; 
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const EventsPage = () => {
  const events = [
    {
      icon: Lightbulb,
      title: "Startup Pitch Competition",
      description: "Present your innovative ideas to industry leaders and investors",
      prize: "₹2L Prize Pool",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: Code,
      title: "Hackathon",
      description: "24-hour coding marathon to build groundbreaking solutions",
      prize: "₹1.5L Prize Pool",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Briefcase,
      title: "Business Case Study",
      description: "Analyze real-world business challenges and present strategies",
      prize: "₹1L Prize Pool",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Rocket,
      title: "Innovation Challenge",
      description: "Showcase cutting-edge tech solutions for social impact",
      prize: "₹50K Prize Pool",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-primary">
      <Navbar /> 

      {/* Events Section */}
      <section id="events" className="py-20 bg-gradient-to-b from-primary/95 to-primary relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,197,24,0.05),transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Featured <span className="text-gradient">Events</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              Compete, collaborate, and create in our flagship events
            </p>
          </div>

          {/* Events Grid - Responsive Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.title}
                  className="group relative bg-white/5 backdrop-blur-lg border border-accent/20 rounded-3xl p-6 md:p-8 hover:bg-white/10 hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-scale-in overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${event.color} opacity-20 blur-3xl rounded-full group-hover:opacity-30 group-hover:scale-110 transition-all duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br ${event.color} rounded-2xl mb-5 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-white/70 mb-6 leading-relaxed text-sm md:text-base min-h-[48px]">
                      {event.description}
                    </p>
                    
                    {/* Prize and Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className={`text-accent font-bold text-lg md:text-xl bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                        {event.prize}
                      </div>
                      <Button
                        variant="outline"
                        className="border-accent/50 text-accent hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-105"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All Events Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-yellow-500 text-primary font-bold px-8 py-6 text-lg hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-accent/50"
            >
              View All Events
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
