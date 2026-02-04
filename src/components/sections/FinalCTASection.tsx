import { Link } from "react-router-dom";
import { Phone, ArrowRight, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/config/business";
import smartLivingRoom from "@/assets/smart-living-room.jpg";

export const FinalCTASection = () => {
  return (
    <section className="relative min-h-[40vh] lg:min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${smartLivingRoom})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-overlay" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
            <Wifi className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm text-primary-foreground">Ready to Connect?</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Ready to Get Independent Tech Guidance?
          </h2>
          <p className="text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
            Connect with our third-party tech advisors for expert informational support about internet, broadband, and connectivity services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="lg:size-xl" asChild>
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Talk to a Third-Party Internet Advisor</span>
                <span className="sm:hidden">Call Advisor</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          <p className="text-xs text-primary-foreground/60 max-w-2xl mx-auto">
            {BUSINESS.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
