import Hero from "@/components/Hero";
import Stats from "@/components/Stats";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
};

export default Index;