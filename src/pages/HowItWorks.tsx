import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, MessageSquare, Lightbulb, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/config/business";
import phoneCall from "@/assets/phone-call.jpg";
import supportAgent from "@/assets/support-agent.jpg";
import homeOffice from "@/assets/home-office.jpg";

const steps = [
  {
    number: "01",
    title: "Reach Out to Us",
    description: "Contact our team via phone or through our online contact form. Our independent advisors are here to listen to your questions.",
    image: phoneCall,
    icon: Phone,
  },
  {
    number: "02",
    title: "Discuss Your Questions",
    description: "Speak with one of our third-party advisors who will provide general guidance and informational support based on your specific questions.",
    image: supportAgent,
    icon: MessageSquare,
  },
  {
    number: "03",
    title: "Get Informed",
    description: "Receive helpful information and resources to better understand your options. We provide guidance to help you make informed decisions.",
    image: homeOffice,
    icon: Lightbulb,
  },
];

const HowItWorks = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm text-accent mb-4">{BUSINESS.shortDisclaimer}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              How It Works
            </h1>
            <p className="text-lg text-muted-foreground">
              Getting independent guidance is simple. Here's our straightforward process for informational support.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className={`relative rounded-2xl overflow-hidden shadow-card-hover ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img src={step.image} alt={step.title} className="w-full h-[400px] object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-24 gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Friendly, knowledgeable third-party advisors",
                "General informational support only",
                "No sales pressure or hidden agendas",
                "Clear, honest communication",
                "Respect for your time and questions",
                "Transparent about our limitations",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-card">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{BUSINESS.disclaimer}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href={`tel:${BUSINESS.phone}`}><Phone className="w-5 h-5 mr-2" />Talk to an Advisor</a>
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

export default HowItWorks;
