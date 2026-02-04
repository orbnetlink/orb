import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BUSINESS } from "@/config/business";
import { FileText, Check, X } from "lucide-react";

const TermsConditions = () => {
  return (
    <LegalPageLayout
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before using our services."
      lastUpdated="January 2026"
      icon={FileText}
    >
      {/* Important Disclosure Box */}
      <div className="mb-10 p-6 bg-destructive/5 rounded-2xl border-2 border-destructive/20">
        <h3 className="font-display font-bold text-foreground mb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-destructive/20 flex items-center justify-center">
            <X className="w-4 h-4 text-destructive" />
          </span>
          Important Disclosure
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{BUSINESS.disclaimer}</p>
      </div>

      <div className="space-y-10">
        {/* Acceptance of Terms */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</span>
            Acceptance of Terms
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            By accessing or using the services of {BUSINESS.name}, you agree to be bound by these Terms and Conditions. 
            If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        {/* Nature of Our Services */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</span>
            Nature of Our Services
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {BUSINESS.name} provides independent third-party informational assistance related to internet, broadband, Wi-Fi, 
            and cable TV services.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* What we do */}
            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                Our Services Include:
              </h3>
              <ul className="space-y-2">
                {[
                  "General informational guidance",
                  "Educational resources about service types",
                  "Independent advisory support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What we don't do */}
            <div className="p-6 bg-destructive/5 rounded-2xl border border-destructive/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <X className="w-5 h-5 text-destructive" />
                We Do NOT:
              </h3>
              <ul className="space-y-2">
                {[
                  "Provide internet, cable, or connectivity services",
                  "Represent any service provider",
                  "Have authorization from any telecom company",
                  "Process service orders or account changes",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Disclaimer of Warranties */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</span>
            Disclaimer of Warranties
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our informational services are provided "as is" without warranties of any kind. We do not guarantee the accuracy, 
            completeness, or usefulness of any information provided. Users should verify information with actual service providers.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</span>
            Limitation of Liability
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {BUSINESS.name} shall not be liable for any damages arising from the use of our services or reliance on information 
            we provide. We are not responsible for any decisions made based on our informational guidance.
          </p>
        </section>

        {/* User Responsibilities */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">5</span>
            User Responsibilities
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Users agree to:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Provide accurate information when contacting us",
              "Use our services only for lawful purposes",
              "Verify information with providers before decisions",
              "Not misrepresent our services to others",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-muted/30 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default TermsConditions;
