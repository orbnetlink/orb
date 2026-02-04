import { Link } from "react-router-dom";
import { Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/config/business";
import globalNetwork from "@/assets/global-network.jpg";

export const ParallaxBanner = () => {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${globalNetwork})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/80" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-full">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground">Lightning-Fast Guidance</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Need Independent Tech Guidance?
          </h2>
          <p className="text-base lg:text-lg text-primary-foreground/80 leading-relaxed">
            Our third-party tech advisors are here to provide cutting-edge informational support for your internet and connectivity questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Talk to an Advisor</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/how-it-works">
                Learn How It Works
              </Link>
            </Button>
          </div>
          <p className="text-xs text-primary-foreground/60">
            {BUSINESS.shortDisclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
