"use client";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProblemSolverSection from "@/components/ProblemSolverSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProgressLogSection from "@/components/ProgressLogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProblemSolverSection />
      <ProjectsSection />
      <ProgressLogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
