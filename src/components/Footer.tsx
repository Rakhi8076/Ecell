import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-accent/20 relative overflow-hidden">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 🗺️ Location */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent flex items-center gap-2">
              <MapPin size={18} />
              Location
            </h4>
            <div className="w-full h-48 rounded-xl overflow-hidden  mb-3 shadow-md  hover:bg-white/10 hover:shadow-glow transition-all duration-500 hover:scale-105 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2854383651735!2d77.2284!3d28.6648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683921df7%3A0x9c5ceedd9b7d0685!2sIndira%20Gandhi%20Delhi%20Technical%20University%20for%20Women!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IGDTUW Location"
              ></iframe>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Indira Gandhi Delhi Technical University for Women, Kashmere Gate, New Delhi, India.
            </p>
          </div>

          {/* 🧭 E-Summit IGDTUW */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">E-Summit IGDTUW</h4>
            <ul className="space-y-2">
              {["About Us", "Updates", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/70 hover:text-accent transition-all duration-300 hover:pl-1 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ⚙️ Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Our Services</h4>
            <ul className="space-y-2">
              {["Hackathons", "Insightful Sessions", "Events", "Funding Ideas"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/70 hover:text-accent transition-all duration-300 hover:pl-1 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 📱 Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent">Follow Us</h4>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-all duration-300 hover:translate-x-1"
              >
                <Instagram size={18} />
                <span>Instagram</span>
              </a>

              <a
                href="tel:+387901391839"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-all duration-300 hover:translate-x-1"
              >
                <Phone size={18} />
                <span>+387901391839</span>
              </a>

              <a
                href="mailto:esummit.igdtu@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-all duration-300 hover:translate-x-1"
              >
                <Mail size={18} />
                <span>esummit.igdtu@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Bottom Bar - Full Width Border */}
      <div className="w-screen border-t border-accent/20 ">
        <p className="text-white/60 text-sm text-center tracking-wide py-4">
          © {currentYear} E-Summit IGDTUW. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
