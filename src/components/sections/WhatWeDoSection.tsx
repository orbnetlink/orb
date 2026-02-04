import { HelpCircle, MessageCircle, Lightbulb, Navigation, Shield } from "lucide-react";
import { BUSINESS } from "@/config/business";
import techAdvisor from "@/assets/tech-advisor.jpg";

const services = [
  {
    icon: HelpCircle,
    title: "Understand Service Options",
    description: "We help users understand internet, broadband, cable TV, and streaming service options available in their area.",
  },
  {
    icon: MessageCircle,
    title: "Practical Guidance",
    description: "Get practical guidance on common connectivity issues and questions from our independent advisors.",
  },
  {
    icon: Navigation,
    title: "Navigate Provider Processes",
    description: "Learn how to navigate service provider processes with helpful informational support.",
  },
  {
    icon: Lightbulb,
    title: "General Information",
    description: "Receive general informational support related to cable TV, internet, and streaming services.",
  },
];

export const WhatWeDoSection = () => {
  return (
    <section className="py-16 lg:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-up order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={techAdvisor}
                alt="Independent advisor providing cable and internet guidance"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 bg-card rounded-xl p-4 lg:p-6 shadow-card-hover max-w-[280px] hidden md:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">100% Independent</span>
              </div>
              <p className="text-sm text-muted-foreground">
                No brand affiliation — unbiased guidance only
              </p>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            <div className="space-y-3 lg:space-y-4">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Independent Service Assistance
              </h2>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                At {BUSINESS.name}, we help users understand their cable, internet, and streaming options through independent, unbiased guidance.
              </p>
            </div>
            
            <div className="space-y-4 lg:space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl hover:bg-card transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-4 italic">
              Our role is limited to independent guidance and assistance only.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
