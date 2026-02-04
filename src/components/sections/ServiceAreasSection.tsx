import { Wifi, Globe, Router, Tv } from "lucide-react";
import advancedRouter from "@/assets/advanced-router.jpg";
import videoCallPro from "@/assets/video-call-pro.jpg";
import smartControl from "@/assets/smart-control.jpg";
import streamingSetup from "@/assets/streaming-setup.jpg";

const services = [
  {
    icon: Globe,
    title: "Internet Assistance",
    description: "General guidance about internet service types including fiber, cable, DSL, and wireless options. Informational support only.",
    image: videoCallPro,
  },
  {
    icon: Wifi,
    title: "Broadband Guidance",
    description: "Helpful information about bandwidth, speed, and choosing broadband technology. We do not sell services.",
    image: advancedRouter,
  },
  {
    icon: Router,
    title: "Wi-Fi & Connectivity",
    description: "Tips on understanding Wi-Fi coverage, mesh networks, and general connectivity guidance.",
    image: smartControl,
  },
  {
    icon: Tv,
    title: "Cable TV & Streaming",
    description: "Information about cable TV and streaming options. We help you understand your choices — we don't sell plans.",
    image: streamingSetup,
  },
];

export const ServiceAreasSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Areas of Assistance
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            Cable & Internet Guidance Areas
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground mt-4">
            We provide independent informational support across these service areas. Remember, we are an independent third-party provider — not an ISP.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover-lift"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
              </div>
              
              {/* Content */}
              <div className="relative p-6 lg:p-8 min-h-[240px] lg:min-h-[280px] flex flex-col justify-end">
                <div className="w-12 lg:w-14 h-12 lg:h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-4">
                  <service.icon className="w-6 lg:w-7 h-6 lg:h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl lg:text-2xl font-semibold text-primary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm lg:text-base text-primary-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-8 font-medium">
          Independent third-party assistance. Not an ISP. No brand affiliation. We provide guidance only — no direct services.
        </p>
      </div>
    </section>
  );
};
