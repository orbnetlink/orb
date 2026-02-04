import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Users, Target, Shield } from "lucide-react";
import { BUSINESS } from "@/config/business";
import supportAgent from "@/assets/support-agent.jpg";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm text-accent mb-4">{BUSINESS.shortDisclaimer}</p>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                About {BUSINESS.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {BUSINESS.description}
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img src={supportAgent} alt="Our support team" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Values
            </h2>
            <p className="text-muted-foreground mt-4">
              What guides our approach to providing independent service assistance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Transparency", desc: "We are always clear about who we are and what we do. No hidden agendas or misleading claims." },
              { icon: Users, title: "Independence", desc: "As a third-party provider, we offer unbiased information without favoring any particular company." },
              { icon: Target, title: "Helpfulness", desc: "Our goal is to provide genuinely useful guidance that helps you understand your options." },
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-2xl bg-muted/30 text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-24 gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                What We Do
              </h2>
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  At <strong className="text-foreground">{BUSINESS.name}</strong>, we help users:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Understand internet and broadband service options</li>
                  <li>Get practical guidance on common connectivity issues</li>
                  <li>Learn how to navigate service provider processes</li>
                  <li>Receive general informational support related to cable TV services</li>
                </ul>
                <p className="italic">
                  Our role is limited to independent guidance and assistance only.
                </p>
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 mt-8">
                What We DO NOT Do
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>To avoid confusion, please note:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We are not an Internet Service Provider (ISP)</li>
                  <li>We do not provide official customer support for any brand</li>
                  <li>We are not affiliated, authorized, or endorsed by any telecom or cable company</li>
                  <li>We do not sell internet or cable subscriptions</li>
                  <li>We do not provide guaranteed technical fixes</li>
                </ul>
                <p className="pt-4 border-t border-border italic">
                  All mentions of providers, if any, are strictly for informational purposes only.
                </p>
                <p className="pt-4 border-t border-border font-semibold">
                  {BUSINESS.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Have Questions?
          </h2>
          <p className="text-primary-foreground/80 mb-8">We're here to provide independent guidance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href={`tel:${BUSINESS.phone}`}><Phone className="w-5 h-5 mr-2" />Call Us</a>
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

export default About;
