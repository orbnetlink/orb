import { ReactNode } from "react";
import { Layout } from "./Layout";
import { BUSINESS } from "@/config/business";
import { LucideIcon } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated?: string;
  icon?: LucideIcon;
  showDisclaimer?: boolean;
  children: ReactNode;
}

export const LegalPageLayout = ({
  title,
  subtitle,
  lastUpdated,
  icon: Icon,
  showDisclaimer = true,
  children,
}: LegalPageLayoutProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Short disclaimer badge */}
            {showDisclaimer && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">{BUSINESS.shortDisclaimer}</span>
              </div>
            )}
            
            <div className="flex items-start gap-4 lg:gap-6">
              {/* Icon */}
              {Icon && (
                <div className="hidden sm:flex w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                </div>
              )}
              
              <div className="flex-1">
                <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-lg text-muted-foreground mb-4">{subtitle}</p>
                )}
                {lastUpdated && (
                  <p className="text-sm text-muted-foreground/70">
                    Last updated: <span className="text-foreground/70">{lastUpdated}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main content */}
            <div className="prose prose-slate max-w-none">
              {children}
            </div>

            {/* Contact Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-muted/30 rounded-2xl p-6 lg:p-8">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                  Questions About This Policy?
                </h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this document, please contact us:
                </p>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground/70">Email</span>
                    <p className="text-foreground font-medium">{BUSINESS.email}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground/70">Phone</span>
                    <p className="text-foreground font-medium">{BUSINESS.phone}</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground/70">Address</span>
                    <p className="text-foreground font-medium">{BUSINESS.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
