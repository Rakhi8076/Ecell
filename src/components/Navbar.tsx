import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom'; // 👈 Link कॉम्पोनेंट यहाँ से आता है

// 🛑 Import the Modal and Form components
import Modal from "./Modal"; 
import RegistrationForm from "./RegistrationForm"; 


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
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
        { name: "Gallery", href: "/gallery" },
        { name: "Sponsors", href: "/sponsors" },
        { name: "FAQ", href: "/faq" },
    ];

    const openModal = () => setIsModalOpen(true);
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
                        {/* Logo - Changed <a> to Link */}
                        <Link to="/" className="flex items-center space-x-2 group">
                            <div className="text-2xl font-bold text-white">
                                E-Summit <span className="text-accent">2025</span>
                            </div>
                        </Link>

                        {/* Desktop Navigation - Changed <a> to Link */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link // ✨ <a> की जगह <Link>
                                    key={link.name}
                                    to={link.href} // ✨ href की जगह to
                                    className="text-white/80 hover:text-accent transition-colors duration-300 font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                            variant="default"
                            onClick={openModal}
                            className="bg-accent text-primary font-semibold transition-all duration-500 
                            hover:bg-accent/90 hover:shadow-[0_0_20px_#FFD700aa] hover:scale-[1.03]">
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

                    {/* Mobile Navigation - Changed <a> to Link */}
                    {mobileOpen && (
                        <div className="md:hidden mt-4 pb-4 animate-fade-in">
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <Link // ✨ <a> की जगह <Link>
                                        key={link.name}
                                        to={link.href} // ✨ href की जगह to
                                        className="text-white/80 hover:text-accent transition-colors duration-300 font-medium py-2"
                                        onClick={() => setMobileOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button
                                    variant="default"
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

            {/* Modal remains unchanged */}
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