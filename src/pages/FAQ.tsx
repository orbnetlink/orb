import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/config/business";

const faqs = [
  {
    question: "Are you an official cable or internet service provider?",
    answer: `No. ${BUSINESS.name} is an independent third-party assistance platform, launched in 2025. We are not affiliated with, endorsed by, authorized by, or sponsored by any cable, internet, or streaming service provider. We provide general guidance and informational support only.`,
  },
  {
    question: "Do you sell internet, cable, or streaming plans?",
    answer: `No. We do not sell, resell, or facilitate the sale of any internet, cable, streaming, or telecom services. We provide guidance and assistance only. Our service fees are separate from any provider charges.`,
  },
  {
    question: "Do you charge for your services?",
    answer: `Yes. ${BUSINESS.name} charges a separate service/assistance fee for our guidance services. This fee is independent of and in addition to any charges from actual service providers. Our fees are clearly disclosed before any service is provided.`,
  },
  {
    question: "Will I still be billed by my service provider?",
    answer: `Yes. Any billing from your internet, cable, or streaming service provider remains unchanged and is completely separate from our service fees. We have no access to or control over provider billing.`,
  },
  {
    question: "Do you need my account passwords or sensitive information?",
    answer: `No. We never request provider passwords, full social security numbers, or other sensitive credentials. We only need basic contact information to provide our assistance services.`,
  },
  {
    question: "Which providers do you support?",
    answer: `We may reference multiple providers for informational purposes only. We are not affiliated with, authorized by, or endorsed by any specific provider. All provider names, trademarks™, and registered® marks mentioned are the property of their respective owners.`,
  },
  {
    question: "Are your services refundable?",
    answer: `Yes. Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Please review our Refund Policy page for full eligibility details and terms.`,
  },
  {
    question: "Can you make changes to my existing service account?",
    answer: `No. We cannot make changes to your existing services, billing, or accounts with any provider. We provide informational guidance only. For account changes, you would need to contact your service provider directly.`,
  },
  {
    question: "What makes you different from calling a provider directly?",
    answer: `We are an independent third-party that provides unbiased, general informational support. We have no sales quotas or affiliation with any provider. However, for actual service sign-ups, changes, or technical support, you will need to work with providers directly.`,
  },
  {
    question: "How was your company started?",
    answer: `${BUSINESS.name} is a startup launched in 2025, founded to provide transparent, independent guidance for consumers navigating the complex landscape of cable, internet, and streaming services. We are committed to honest, helpful assistance without any provider affiliation.`,
  },
];

const FAQ = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-primary/10 rounded-xl p-4 mb-6 inline-block">
              <p className="text-sm text-foreground">{BUSINESS.shortDisclaimer}</p>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Get answers to common questions about our independent third-party service assistance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-background rounded-xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our independent advisors are here to provide additional guidance and informational support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href={`tel:${BUSINESS.phone}`}><Phone className="w-5 h-5 mr-2" />Speak With Support</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <p className="text-xs text-primary-foreground/60 mt-8 max-w-2xl mx-auto">{BUSINESS.disclaimer}</p>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
