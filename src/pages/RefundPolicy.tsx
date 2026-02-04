import { LegalPageLayout } from "@/components/layout/LegalPageLayout";
import { BUSINESS } from "@/config/business";

const RefundPolicy = () => {
  return (
    <LegalPageLayout 
      title="Refund Policy"
      subtitle="Understand our refund policy and eligibility requirements."
      lastUpdated="January 2025"
    >
      <div className="space-y-8">
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <p className="text-foreground font-medium text-sm">
            {BUSINESS.disclaimer}
          </p>
        </div>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">1. Overview</h2>
          <p className="text-muted-foreground leading-relaxed">
            At {BUSINESS.name}, we are committed to providing helpful guidance and informational support 
            related to cable, internet, and streaming services. We understand that situations may arise 
            where you may need to request a refund for our assistance services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">2. Refund Window</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Refund requests can be submitted within <strong className="text-foreground">7 to 15 days</strong> of service purchase, 
            depending on the type of assistance provided.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Basic informational guidance: 7-day refund window</li>
            <li>Extended assistance services: 15-day refund window</li>
            <li>Premium guidance packages: 15-day refund window</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">3. Eligibility Requirements</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Refund eligibility depends on:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>The type of service or assistance purchased</li>
            <li>Whether assistance has already been delivered</li>
            <li>The time elapsed since the original purchase</li>
            <li>Compliance with our Terms and Conditions</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">4. How to Request a Refund</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">Contact us:</p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
            <li>Phone: {BUSINESS.phone}</li>
            <li>Email: {BUSINESS.email}</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">5. Important Clarification</h2>
          <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6">
            <p className="text-foreground leading-relaxed">
              <strong>Please Note:</strong> {BUSINESS.name} is an independent third-party service 
              assistance provider. We do not sell internet, cable, or streaming plans. Our refund 
              policy applies only to our service/assistance fees. Any charges from actual service 
              providers are separate and subject to their own refund policies.
            </p>
          </div>
        </section>

        <div className="bg-muted/50 border border-border rounded-xl p-6 mt-8">
          <p className="text-sm text-muted-foreground">{BUSINESS.disclaimer}</p>
        </div>
      </div>
    </LegalPageLayout>
  );
};

export default RefundPolicy;
