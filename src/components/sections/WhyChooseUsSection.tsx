import { CheckCircle, Shield, Users, Headphones, Cpu, Zap, Network, Server } from "lucide-react";
import dataCenter from "@/assets/data-center.jpg";

const reasons = [
  {
    icon: Shield,
    title: "100% Independent",
    description: "No affiliations with any service providers. Completely unbiased tech guidance.",
  },
  {
    icon: Cpu,
    title: "Tech-Savvy Advisors",
    description: "Our team understands modern networking, fiber optics, and smart home technologies.",
  },
  {
    icon: Network,
    title: "Network Expertise",
    description: "Deep knowledge of mesh networks, Wi-Fi optimization, and connectivity solutions.",
  },
  {
    icon: Server,
    title: "Enterprise Knowledge",
    description: "Guidance for both home users and small business connectivity needs.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Get connected with an advisor quickly without long wait times.",
  },
  {
    icon: CheckCircle,
    title: "No Hidden Agenda",
    description: "Pure informational support without any sales pressure whatsoever.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-full bg-gradient-to-l from-secondary/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-up">
              Why Choose Orbnet Link
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 animate-fade-up stagger-1">
              Independent Tech Support You Can{" "}
              <span className="text-primary">Trust</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg mb-8 lg:mb-12 animate-fade-up stagger-2">
              We provide unbiased guidance for all your internet and connectivity questions. As an independent third-party assistance provider, we offer informational support only — no sales pressure, no hidden agendas.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className="flex gap-3 lg:gap-4 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-10 lg:w-12 h-10 lg:h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <reason.icon className="w-5 lg:w-6 h-5 lg:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 text-sm lg:text-base">{reason.title}</h3>
                    <p className="text-xs lg:text-sm text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            {/* Decorative Background */}
            <div className="absolute -top-4 lg:-top-8 -right-4 lg:-right-8 w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] lg:rounded-[3rem] rotate-3 hidden lg:block" />
            
            {/* Main Image */}
            <div className="relative rounded-2xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl border border-border">
              <img
                src={dataCenter}
                alt="Modern data center infrastructure"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              
              {/* Overlay Stats Card */}
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 right-4 lg:right-6 bg-card/90 backdrop-blur-md rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-border">
                <div className="flex items-center justify-between">
                  <div className="text-center flex-1">
                    <p className="font-display text-xl lg:text-2xl font-bold text-primary">50K+</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Customers</p>
                  </div>
                  <div className="w-px h-10 lg:h-12 bg-border" />
                  <div className="text-center flex-1">
                    <p className="font-display text-xl lg:text-2xl font-bold text-primary">24/7</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Available</p>
                  </div>
                  <div className="w-px h-10 lg:h-12 bg-border" />
                  <div className="text-center flex-1">
                    <p className="font-display text-xl lg:text-2xl font-bold text-primary">100%</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Independent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 bg-accent text-accent-foreground px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-coral font-semibold text-xs lg:text-sm">
              Tech Experts
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
