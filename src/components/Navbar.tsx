import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';

// 🛑 Import the Modal and Form components
import Modal from "./Modal"; // Assuming Modal.tsx is in the same directory or adjust the path
import RegistrationForm from "./RegistrationForm"; // Assuming RegistrationForm.tsx is in the same directory or adjust the path


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // 🛑 New state for controlling the registration modal
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Speakers", href: "/speakers" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "FAQ", href: "/faq" },
  ];

  // 🛑 Function to open the modal
  const openModal = () => setIsModalOpen(true);
  // 🛑 Function to close the modal
  const closeModal = () => setIsModalOpen(false);


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-primary/90 backdrop-blur-lg shadow-elegant"
            : "bg-primary/100 backdrop-blur-lg shadow-elegant"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#hero" className="flex items-center space-x-2 group">
              <div className="text-2xl font-bold text-white">
                E-Summit <span className="text-accent">2025</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-accent transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="default"
                // 🛑 Add onClick handler to open the modal
                onClick={openModal} 
                className="bg-accent text-primary hover:bg-accent/90 shadow-glow font-semibold"
              >
                Register Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileOpen && (
            <div className="md:hidden mt-4 pb-4 animate-fade-in">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors duration-300 font-medium py-2"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  variant="default"
                  // 🛑 Add onClick handler to open the modal (and close the mobile menu)
                  onClick={() => {
                    openModal();
                    setMobileOpen(false); 
                  }}
                  className="bg-accent text-primary hover:bg-accent/90 shadow-glow font-semibold w-full"
                >
                  Register Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* 🛑 Render the Modal component here, outside the <nav> element */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title="E-Summit 2025 Registration"
      >
        <RegistrationForm onSuccess={closeModal} />
      </Modal>
    </>
  );
};

export default Navbar;