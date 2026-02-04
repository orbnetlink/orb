import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BUSINESS } from "@/config/business";
import { ShieldCheck, Check } from "lucide-react";
import { Link } from "react-router-dom";

const DoNotSell = () => {
  return (
    <LegalPageLayout
      title="Do Not Sell My Personal Information"
      subtitle="Your privacy rights under California Consumer Privacy Act (CCPA) and other privacy laws."
      icon={ShieldCheck}
    >
      {/* Disclaimer Box */}
      <div className="mb-10 p-6 bg-muted/50 rounded-2xl border border-border">
        <p className="text-sm text-muted-foreground leading-relaxed">{BUSINESS.disclaimer}</p>
      </div>

      <div className="space-y-10">
        {/* Your Privacy Rights */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">1</span>
            Your Privacy Rights
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Under the California Consumer Privacy Act (CCPA) and similar state privacy laws, you have the right 
            to opt out of the "sale" of your personal information. This page explains how to exercise that right 
            with {BUSINESS.name}.
          </p>
        </section>

        {/* Our Commitment */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">2</span>
            Our Commitment
          </h2>
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {BUSINESS.name} <strong className="text-foreground">does not sell your personal information</strong> in exchange for monetary compensation. 
                We are committed to protecting your privacy and handling your information responsibly.
              </p>
            </div>
          </div>
        </section>

        {/* Information Sharing */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">3</span>
            Information Sharing
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            While we do not sell your personal information, we may share information with service providers 
            who help us operate our business. This sharing is for business purposes only and is not considered 
            a "sale" under privacy laws.
          </p>
        </section>

        {/* How to Submit a Request */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">4</span>
            How to Submit a Request
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            If you would like to exercise your privacy rights or have questions about how we handle your 
            personal information, you can contact us through the following methods:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 bg-muted/30 rounded-xl border border-border text-center">
              <span className="text-xs text-muted-foreground/70 block mb-1">Email</span>
              <p className="font-medium text-foreground text-sm break-all">{BUSINESS.email}</p>
            </div>
            <div className="p-5 bg-muted/30 rounded-xl border border-border text-center">
              <span className="text-xs text-muted-foreground/70 block mb-1">Phone</span>
              <p className="font-medium text-foreground text-sm">{BUSINESS.phone}</p>
            </div>
            <div className="p-5 bg-muted/30 rounded-xl border border-border text-center">
              <span className="text-xs text-muted-foreground/70 block mb-1">Mail</span>
              <p className="font-medium text-foreground text-sm">{BUSINESS.address}</p>
            </div>
          </div>
        </section>

        {/* Verification */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">5</span>
            Verification
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            To protect your privacy, we may need to verify your identity before processing your request. 
            We will only use the information you provide to verify your identity and process your request.
          </p>
        </section>

        {/* Non-Discrimination */}
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">6</span>
            Non-Discrimination
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We will not discriminate against you for exercising any of your privacy rights. We will not:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              "Deny you services",
              "Charge you different prices",
              "Provide a different level of service",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Link to Privacy Policy */}
        <div className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            For more information about our privacy practices, please review our{" "}
            <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </LegalPageLayout>
  );
};

export default DoNotSell;
