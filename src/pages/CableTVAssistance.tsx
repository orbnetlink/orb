import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Tv, MonitorPlay, Settings, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/config/business";
import smartTvSetup from "@/assets/smart-tv-setup.jpg";
import heroFamily from "@/assets/hero-family.jpg";

const assistanceAreas = [
  "Understanding cable TV service options",
  "General information about channel packages",
  "DVR and on-demand features overview",
  "Streaming vs traditional cable information",
  "Equipment and setup questions",
  "General information about service combinations",
];

const CableTVAssistance = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${smartTvSetup})` }} />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-primary-foreground/80 mb-4">{BUSINESS.shortDisclaimer}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Cable TV Service Assistance
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get general guidance and informational support about cable television services from our independent advisors.
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
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover order-2 lg:order-1">
              <img src={heroFamily} alt="Family watching TV" className="w-full h-[400px] object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-medium text-accent uppercase tracking-wider">Informational Support</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Areas of Cable TV Assistance
              </h2>
              <p className="text-muted-foreground mb-8">
                Our independent advisors provide general information about cable TV services. We do not sell or provide cable services directly.
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
          </div>
        </div>
      </section>

      {/* Service Types Info */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Understanding Entertainment Options
            </h2>
            <p className="text-muted-foreground mt-4">
              General educational information about television and entertainment services.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Tv, title: "Traditional Cable", desc: "Information about traditional cable TV services and how they typically work." },
              { icon: MonitorPlay, title: "Streaming Services", desc: "Understanding the landscape of streaming options in today's market." },
              { icon: Settings, title: "Equipment Options", desc: "General information about DVRs, set-top boxes, and smart TV features." },
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
            Have Questions About Cable TV?
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

export default CableTVAssistance;
