import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BUSINESS } from "@/config/business";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      lastUpdated="January 2026"
      icon={Shield}
    >
      {/* Important Notice */}
      <div className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/20">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Important:</strong> {BUSINESS.disclaimer}
        </p>
      </div>

      <div className="space-y-10">
        {/* Introduction */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</span>
            Introduction
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {BUSINESS.name} ("we," "us," or "our") respects your privacy and is committed to protecting your personal information. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</span>
            Information We Collect
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We may collect the following types of information:
          </p>
          <ul className="grid sm:grid-cols-2 gap-3">
            {[
              "Contact information (name, email address, phone number)",
              "Communication records when you contact us",
              "Website usage data (cookies, IP address, browser type)",
              "Any information you voluntarily provide to us",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-xl">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs mt-0.5">✓</span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</span>
            How We Use Your Information
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="space-y-2">
            {[
              "Provide informational guidance and support",
              "Respond to your inquiries and requests",
              "Improve our services and website",
              "Comply with legal obligations",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Information Sharing */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</span>
            Information Sharing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We do not sell your personal information. We may share information with service providers who assist us in operating our business, 
            or when required by law.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">5</span>
            Your Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Depending on your location, you may have rights including:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Access", desc: "Request access to your personal information" },
              { title: "Correction", desc: "Request correction of inaccurate data" },
              { title: "Deletion", desc: "Request deletion of your information" },
              { title: "Opt-out", desc: "Opt-out of certain data processing activities" },
            ].map((right, i) => (
              <div key={i} className="p-4 bg-muted/30 rounded-xl border border-border">
                <h4 className="font-semibold text-foreground mb-1">{right.title}</h4>
                <p className="text-sm text-muted-foreground">{right.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
