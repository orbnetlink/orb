import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BUSINESS } from "@/config/business";
import { Megaphone } from "lucide-react";

const AdvertisingDisclosure = () => {
  return (
    <LegalPageLayout
      title="Advertising Disclosure"
      subtitle="Transparency about our advertising practices and brand relationships."
      lastUpdated="January 2026"
      icon={Megaphone}
    >
      {/* Disclaimer Box */}
      <div className="mb-10 p-6 bg-muted/50 rounded-2xl border border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">{BUSINESS.disclaimer}</p>
      </div>

      <div className="space-y-10">
        {/* Purpose */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</span>
            Purpose of This Disclosure
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            This Advertising Disclosure is provided to ensure transparency about the nature of {BUSINESS.name} 
            and how our services are presented online.
          </p>
        </section>

        {/* Our Advertising */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</span>
            Our Advertising
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {BUSINESS.name} may advertise our informational assistance services through various online channels, 
            including search engines, social media, and display advertising.
          </p>
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <p className="text-muted-foreground leading-relaxed">
              All our advertising clearly identifies us as an independent third-party service assistance provider. 
              We do not represent ourselves as any internet, cable, or telecom service provider.
            </p>
          </div>
        </section>

        {/* No Brand Affiliation */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</span>
            No Brand Affiliation
          </h2>
          <div className="p-6 bg-destructive/5 rounded-2xl border border-destructive/20">
            <p className="text-muted-foreground leading-relaxed">
              We are not affiliated with, authorized by, or endorsed by any internet, broadband, cable TV, or 
              telecom service provider. Any mention of brand names in our advertising or on our website is 
              purely for informational purposes.
            </p>
          </div>
        </section>

        {/* Call-to-Action Statements */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</span>
            Call-to-Action Statements
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our advertisements may include call-to-action statements such as:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              "Talk to a Third-Party Internet Advisor",
              "Call for Independent Service Guidance",
              "Get Independent Assistance",
            ].map((item, i) => (
              <div key={i} className="p-4 bg-muted/30 rounded-xl text-center">
                <p className="text-sm font-medium text-foreground">"{item}"</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed">
            These statements accurately reflect that we provide independent, third-party informational 
            assistance rather than actual internet or cable services.
          </p>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default AdvertisingDisclosure;
