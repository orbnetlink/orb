import contactCall from "@/assets/contact-call.jpg";
import fiberInstall from "@/assets/fiber-install.jpg";
import techAdvisor from "@/assets/tech-advisor.jpg";

const steps = [
  {
    number: "01",
    title: "Connect With Us",
    description: "Reach out via phone or our contact form with your internet, broadband, or connectivity questions.",
    image: contactCall,
  },
  {
    number: "02",
    title: "Expert Tech Consultation",
    description: "Our independent tech advisors will analyze your needs and provide comprehensive guidance.",
    image: techAdvisor,
  },
  {
    number: "03",
    title: "Get Informed & Empowered",
    description: "Receive detailed technical information and resources to make informed connectivity decisions.",
    image: fiberInstall,
  },
];

export const HowItWorksSection = () => {
  return (
    <section className="py-16 lg:py-24 gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
            How It Works
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground mt-4">
            Getting independent tech assistance is simple. Here's how our informational support process works.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 right-0 w-full h-0.5 bg-border translate-x-1/2 -z-10" />
              )}
              
              <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover-lift">
                {/* Image */}
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{step.number}</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5 lg:p-6">
                  <h3 className="font-display text-lg lg:text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
