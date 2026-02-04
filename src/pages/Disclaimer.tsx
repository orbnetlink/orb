import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BUSINESS } from "@/config/business";
import { AlertTriangle, Check, X } from "lucide-react";

const Disclaimer = () => {
  return (
    <LegalPageLayout
      title="Disclaimer"
      subtitle="Please read this important disclaimer carefully before using our services."
      icon={AlertTriangle}
      showDisclaimer={false}
    >
      {/* Main Disclaimer Box */}
      <div className="mb-10 p-8 bg-destructive/5 rounded-2xl border-2 border-destructive/20">
        <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-destructive" />
          Official Disclaimer
        </h2>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {BUSINESS.disclaimer}
        </p>
      </div>

      <div className="space-y-10">
        {/* About Our Company */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</span>
            About Our Company
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {BUSINESS.name} is an independent third-party service assistance provider. We offer general guidance 
            and informational support related to internet, broadband, Wi-Fi, and cable TV services.
          </p>
        </section>

        {/* What This Means */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</span>
            What This Means
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* We ARE */}
            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                We ARE:
              </h3>
              <ul className="space-y-3">
                {[
                  "An independent informational service",
                  "A third-party assistance provider",
                  "A source of general guidance",
                  "Unaffiliated with any provider",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* We are NOT */}
            <div className="p-6 bg-destructive/5 rounded-2xl border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" />
                We are NOT:
              </h3>
              <ul className="space-y-3">
                {[
                  "An internet service provider",
                  "A cable TV company",
                  "Official customer support for any brand",
                  "Authorized or endorsed by any provider",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-destructive flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Brand Names */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</span>
            Brand Names
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Any brand names, trademarks, or service marks mentioned on this website are the property of their 
            respective owners. They are used strictly for informational and educational purposes only. 
            Their use does not imply any affiliation, endorsement, or sponsorship.
          </p>
        </section>

        {/* Information Accuracy */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</span>
            Information Accuracy
          </h2>
          <div className="p-6 bg-muted/30 rounded-2xl">
            <p className="text-muted-foreground leading-relaxed">
              While we strive to provide helpful information, we make no representations or warranties about the 
              accuracy, completeness, or reliability of any information provided. Users should independently verify 
              all information with actual service providers before making any decisions.
            </p>
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default Disclaimer;
