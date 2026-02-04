import { Link } from "react-router-dom";
import { Phone, ArrowRight, Wifi, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/config/business";
import heroImage from "@/assets/hero-tech.jpg";
import { useEffect, useState } from "react";

const features = [
  { icon: Wifi, label: "Cable & Internet Guidance" },
  { icon: Shield, label: "Independent & Trusted" },
  { icon: Headphones, label: "24/7 Available" },
];

export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-dark">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-dark via-slate-dark to-primary/30" />
        <div className="absolute top-1/4 -left-32 w-72 md:w-96 h-72 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-64 md:w-80 h-64 md:h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-ocean-light/5 rounded-full blur-3xl" />
      </div>

      {/* Animated Network Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1={Math.random() * 1000}
              y1={Math.random() * 1000}
              x2={Math.random() * 1000}
              y2={Math.random() * 1000}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </svg>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className={`relative z-10 space-y-6 lg:space-y-8 ${mounted ? 'animate-fade-up' : 'opacity-0'}`}>
            {/* Disclosure Badge - Above the fold - CRITICAL FOR COMPLIANCE */}
            <div className="bg-primary/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-primary/20 shadow-md">
              <p className="text-xs lg:text-sm text-primary-foreground/90 leading-relaxed font-medium">
                {BUSINESS.heroDisclaimer}
              </p>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1]">
              Independent
              <span className="block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-ocean-light to-accent">
                  Internet & Cable
                </span>
              </span>
              <span className="block mt-2">Service Assistance</span>
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg lg:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
              Get general guidance and informational support related to internet, broadband, Wi-Fi, cable TV, and streaming services from an independent third-party assistance provider.
            </p>

            {/* CTA Buttons - Compliant CTAs only */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4">
              <Button variant="hero" size="lg" className="lg:size-xl" asChild>
                <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-3">
                  <div className="relative">
                    <Phone className="w-5 h-5 transition-transform group-hover:rotate-12" />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping" />
                  </div>
                  <span className="hidden sm:inline">Talk to a Third-Party Advisor</span>
                  <span className="sm:hidden">Get Assistance</span>
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="lg:size-xl" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <span className="hidden sm:inline">Call for Independent Guidance</span>
                  <span className="sm:hidden">Request Help</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Micro-text disclaimer */}
            <p className="text-xs text-primary-foreground/60 font-medium">
              {BUSINESS.shortDisclaimer}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 lg:gap-4 pt-2 lg:pt-4">
              {features.map((feature, index) => (
                <div 
                  key={feature.label}
                  className="flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-sm px-3 lg:px-4 py-2 rounded-full border border-primary-foreground/10 animate-fade-up"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span className="text-xs lg:text-sm text-primary-foreground/70">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative ${mounted ? 'animate-scale-in' : 'opacity-0'} hidden lg:block`} style={{ animationDelay: '0.3s' }}>
            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-gradient-to-br from-accent/30 to-transparent rounded-full blur-2xl" />
            
            {/* Main Image Container */}
            <div className="relative">
              {/* Background Shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-[2rem] lg:rounded-[3rem] rotate-3 scale-105 opacity-20" />
              
              {/* Image */}
              <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden border-2 border-primary-foreground/10 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Professional assistance for cable and internet services"
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/60 via-transparent to-transparent" />
                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 glass-card rounded-2xl p-4 backdrop-blur-md bg-slate-dark/60 border border-primary-foreground/10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-ocean-light flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold">Independent Assistance</p>
                      <p className="text-primary-foreground/60 text-sm">Third-party guidance only</p>
                    </div>
                    <div className="ml-auto">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-green-400 text-sm">Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
