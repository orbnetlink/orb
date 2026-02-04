import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { WhatWeDontDoSection } from "@/components/sections/WhatWeDontDoSection";
import { ParallaxBanner } from "@/components/sections/ParallaxBanner";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ServiceAreasSection } from "@/components/sections/ServiceAreasSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LifestyleSection } from "@/components/sections/LifestyleSection";
import { ImageGallery } from "@/components/sections/ImageGallery";
import { FAQPreviewSection } from "@/components/sections/FAQPreviewSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      
      <AnimatedSection animation="fade-up" delay={0}>
        <StatsSection />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-left" delay={0.1}>
        <WhatWeDoSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <WhyChooseUsSection />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-right" delay={0.1}>
        <WhatWeDontDoSection />
      </AnimatedSection>
      
      <AnimatedSection animation="scale" delay={0}>
        <ParallaxBanner />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <HowItWorksSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0.1}>
        <ServiceAreasSection />
      </AnimatedSection>
      
      <AnimatedSection animation="slide-left" delay={0}>
        <TestimonialsSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <LifestyleSection />
      </AnimatedSection>
      
      <AnimatedSection animation="scale" delay={0}>
        <ImageGallery />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <FAQPreviewSection />
      </AnimatedSection>
      
      <AnimatedSection animation="fade-up" delay={0}>
        <FinalCTASection />
      </AnimatedSection>
    </Layout>
  );
};

export default Index;
