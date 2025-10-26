import { HelpCircle, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is E-Summit 2025?",
    answer: "E-Summit 2025 is IGDTUW's flagship entrepreneurship summit featuring inspiring speakers, competitions, workshops, and networking opportunities for aspiring entrepreneurs and innovators.",
  },
  {
    question: "Who can participate in E-Summit?",
    answer: "E-Summit is open to all college students, young professionals, entrepreneurs, and anyone passionate about innovation and entrepreneurship. No prior experience is required.",
  },
  {
    question: "How do I register for events?",
    answer: "Click on the 'Register Now' button on our website, fill in your details, and select the events you wish to participate in. Early bird registration comes with special benefits!",
  },
  {
    question: "What is the registration fee?",
    answer: "Registration fees vary by event. Individual events range from ₹200-500, while the fest pass (access to all events) is available at ₹999 with early bird discounts.",
  },
  {
    question: "Are there accommodation facilities?",
    answer: "Yes, we provide accommodation assistance for outstation participants. Details will be shared after registration confirmation.",
  },
  {
    question: "How can I become a sponsor?",
    answer: "We welcome corporate partnerships! Please contact our sponsorship team at sponsors@esummit.igdtuw.ac.in for sponsorship packages and opportunities.",
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      
      {/* FAQ Section */}
      <section id="faq-content" className="py-20 bg-gradient-to-b from-primary to-primary/95 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(245,197,24,0.05),transparent_60%)]"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-yellow-500 rounded-2xl mb-6 shadow-lg">
              <HelpCircle className="text-primary" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl">
              Got questions? We've got answers!
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-lg border border-accent/20 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-accent/30 transition-all duration-300 animate-fade-in-up hover:shadow-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-white hover:text-accent text-left font-semibold text-base md:text-lg px-6 py-5 md:py-6 hover:no-underline [&[data-state=open]]:text-accent [&[data-state=open]]:border-b [&[data-state=open]]:border-accent/20">
                  <span className="flex items-start gap-3">
                    <span className="text-accent mt-1 flex-shrink-0">Q{index + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 px-6 pb-6 pt-4 leading-relaxed text-sm md:text-base">
                  <div className="pl-8 border-l-2 border-accent/30">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact CTA */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-block bg-white/5 backdrop-blur-lg border border-accent/20 rounded-2xl p-8 md:p-10 max-w-xl mx-auto hover:bg-white/10 transition-all duration-300">
              <Mail className="text-accent mx-auto mb-4" size={36} />
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-white/60 mb-5 text-sm md:text-base">
                We're here to help! Reach out to our team
              </p>
              <a
                href="mailto:contact@esummit.igdtuw.ac.in"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-yellow-500 text-primary px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/50"
              >
                <Mail size={18} />
                contact@esummit.igdtuw.ac.in
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
