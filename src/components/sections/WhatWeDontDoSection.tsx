import { XCircle, Ban, ShieldX, UserX, CreditCard, WifiOff } from "lucide-react";
import { BUSINESS } from "@/config/business";

const limitations = [
  {
    icon: Ban,
    title: "Not an Internet Service Provider (ISP)",
    description: "We do not provide internet, cable, or any connectivity services. We are strictly an informational assistance provider.",
  },
  {
    icon: ShieldX,
    title: "No Brand Affiliation",
    description: "We are not affiliated with, authorized by, or endorsed by any internet, cable, or telecom service provider.",
  },
  {
    icon: UserX,
    title: "Not Official Customer Support",
    description: "We do not provide official customer support for any brand. We cannot access provider accounts on your behalf.",
  },
  {
    icon: CreditCard,
    title: "We Do Not Sell Plans",
    description: "We do not sell internet, cable, or streaming subscriptions. We provide guidance only.",
  },
  {
    icon: XCircle,
    title: "No Guaranteed Fixes",
    description: "We do not provide guaranteed technical fixes. Our service is informational guidance only.",
  },
  {
    icon: WifiOff,
    title: "No Direct Service Changes",
    description: "We cannot make changes to your existing services, billing, or accounts with any provider.",
  },
];

export const WhatWeDontDoSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-destructive uppercase tracking-wider">
            Important Notice
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            What We Do <span className="text-destructive">NOT</span> Do
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            To avoid confusion, please review what our services do not include. Transparency is our priority.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {limitations.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border-2 border-destructive/20 bg-destructive/5 hover:border-destructive/40 transition-all hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Disclaimer */}
        <div className="mt-12 p-6 rounded-2xl bg-muted/50 border border-border max-w-4xl mx-auto">
          <p className="text-sm text-muted-foreground text-center">
            <strong>Disclaimer:</strong> {BUSINESS.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
};
