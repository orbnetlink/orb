import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are you an official internet or cable provider?",
    answer: "No, we are an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. We provide general guidance and informational support only.",
  },
  {
    question: "What kind of assistance do you provide?",
    answer: "We offer general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services. This includes helping you understand service options, navigate provider processes, and receive general informational support.",
  },
  {
    question: "Is your service free?",
    answer: "Our informational guidance service is designed to help you understand your options. We provide unbiased information without any sales pressure or hidden agendas.",
  },
  {
    question: "Can you set up my internet or cable service?",
    answer: "No, we do not provide internet or cable services directly. We offer informational guidance only. For actual service installation or changes, you would need to contact a service provider directly.",
  },
];

export const FAQPreviewSection = () => {
  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageCircle className="w-4 h-4" />
              Common Questions
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Get quick answers to the most common questions about our independent third-party assistance service.
            </p>
            <Button asChild variant="default" size="lg" className="group">
              <Link to="/faq" className="flex items-center gap-2">
                View All FAQs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-2xl px-6 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
