import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Wifi, Globe, Router, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/config/business";
import routerModern from "@/assets/router-modern.jpg";
import laptopStreaming from "@/assets/laptop-streaming.jpg";
import meshWifi from "@/assets/mesh-wifi.jpg";

const assistanceAreas = [
  "Understanding different internet service types",
  "General information about broadband technologies",
  "Wi-Fi coverage and connectivity questions",
  "Comparing service options (informational only)",
  "Basic troubleshooting guidance",
  "Understanding speed and bandwidth",
];

const InternetAssistance = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${routerModern})` }} />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-primary-foreground/80 mb-4">{BUSINESS.shortDisclaimer}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Internet Service Assistance
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get general guidance and informational support about internet services from our independent third-party advisors.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Talk to an Advisor
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="py-24 gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Informational Support</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Areas of Internet Assistance
              </h2>
              <p className="text-muted-foreground mb-8">
                Our independent advisors can provide general guidance on various internet-related topics. Remember, we do not provide actual internet services.
              </p>
              <ul className="space-y-4">
                {assistanceAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img src={laptopStreaming} alt="Person using internet at home" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types Info */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Understanding Internet Service Types
            </h2>
            <p className="text-muted-foreground mt-4">
              General educational information about common internet technologies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Globe, title: "Fiber Internet", desc: "Information about fiber-optic technology and its general benefits for connectivity." },
              { icon: Wifi, title: "Cable Internet", desc: "Understanding how cable-based internet services typically work." },
              { icon: Router, title: "DSL & Wireless", desc: "General information about DSL and fixed wireless internet options." },
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-muted/30 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Have Questions About Internet Services?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{BUSINESS.disclaimer}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href={`tel:${BUSINESS.phone}`}><Phone className="w-5 h-5 mr-2" />Call for Guidance</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InternetAssistance;
