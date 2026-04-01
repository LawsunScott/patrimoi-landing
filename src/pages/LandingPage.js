import React, { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProof from "@/components/landing/SocialProof";
import QRCodeSection from "@/components/landing/QRCodeSection";
import ROICalculator from "@/components/landing/ROICalculator";
import CostOfChaos from "@/components/landing/CostOfChaos";
import BentoFeatures from "@/components/landing/BentoFeatures";
import LegalShield from "@/components/landing/LegalShield";
import MarketingArgument from "@/components/landing/MarketingArgument";
import ComparisonTable from "@/components/landing/ComparisonTable";
import PricingSection from "@/components/landing/PricingSection";
import Testimonials from "@/components/landing/Testimonials";
import FAQSection from "@/components/landing/FAQSection";
import CTAFooter from "@/components/landing/CTAFooter";
import DemoModal from "@/components/landing/DemoModal";
import { Toaster } from "@/components/ui/sonner";

export default function LandingPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white" data-testid="landing-page">
      <Toaster position="top-center" />
      <Navbar onDemoClick={() => setDemoOpen(true)} />
      <HeroSection onDemoClick={() => setDemoOpen(true)} />
      <SocialProof />
      <QRCodeSection />
      <ROICalculator />
      <CostOfChaos />
      <BentoFeatures />
      <LegalShield />
      <MarketingArgument />
      <ComparisonTable />
      <PricingSection onDemoClick={() => setDemoOpen(true)} />
      <Testimonials />
      <FAQSection />
      <CTAFooter onDemoClick={() => setDemoOpen(true)} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
