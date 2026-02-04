import { useState, useEffect } from "react";
import { X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/config/business";

export const CallNowPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md animate-fade-in" onClick={() => setIsVisible(false)} />
      
      {/* Popup - Centered */}
      <div className="relative z-10 w-[90%] max-w-md animate-scale-in">
        <div className="bg-card rounded-2xl shadow-2xl border-2 border-primary/20 overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors z-10"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-muted-foreground" />
          </button>

          {/* Content */}
          <div className="p-8 text-center">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-destructive/20 to-accent/20 flex items-center justify-center animate-pulse">
              <Phone className="w-8 h-8 text-destructive" />
            </div>

            {/* Headline */}
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Internet or Cable Not Working?
            </h2>

            {/* Subtext */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Get instant help for slow internet, outages, setup issues, or cable problems.
            </p>

            {/* Phone Number Display */}
            <div className="mb-6 p-4 bg-muted/30 rounded-xl">
              <p className="text-sm text-muted-foreground mb-1">Call us now</p>
              <a 
                href={`tel:${BUSINESS.phone}`}
                className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
              >
                {BUSINESS.phone}
              </a>
            </div>

            {/* CTA Button */}
            <Button 
              variant="destructive" 
              size="lg" 
              className="w-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              asChild
            >
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                CALL SUPPORT NOW
              </a>
            </Button>

            {/* Trust Line */}
            <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2 flex-wrap">
              <span>Quick assistance</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span>No forms</span>
              <span className="w-1 h-1 bg-muted-foreground rounded-full" />
              <span>Talk to a real agent</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
