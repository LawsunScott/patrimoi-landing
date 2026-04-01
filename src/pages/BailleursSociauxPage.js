import React, { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import BailleursHero from "@/components/bailleurs/BailleursHero";
import BailleursProbleme from "@/components/bailleurs/BailleursProbleme";
import BailleursSolution from "@/components/bailleurs/BailleursSolution";
import BailleursPictogrammes from "@/components/bailleurs/BailleursPictogrammes";
import BailleursComparaison from "@/components/bailleurs/BailleursComparaison";
import BailleursFonctionnalites from "@/components/bailleurs/BailleursFonctionnalites";
import BailleursROI from "@/components/bailleurs/BailleursROI";
import BailleursTarifs from "@/components/bailleurs/BailleursTarifs";
import BailleursCTA from "@/components/bailleurs/BailleursCTA";
import DemoModal from "@/components/landing/DemoModal";
import { Toaster } from "@/components/ui/sonner";

export default function BailleursSociauxPage() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white" data-testid="bailleurs-page">
      <Toaster position="top-center" />
      <Navbar onDemoClick={() => setDemoOpen(true)} />
      <BailleursHero onDemoClick={() => setDemoOpen(true)} />
      <BailleursProbleme />
      <BailleursSolution />
      <BailleursPictogrammes />
      <BailleursComparaison />
      <BailleursFonctionnalites />
      <BailleursROI />
      <BailleursTarifs onDemoClick={() => setDemoOpen(true)} />
      <BailleursCTA onDemoClick={() => setDemoOpen(true)} />
      <DemoModal open={demoOpen} onOpenChange={setDemoOpen} />
    </div>
  );
}
