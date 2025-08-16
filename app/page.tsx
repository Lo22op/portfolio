"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProblemSolverSection from "@/components/ProblemSolverSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProgressLogSection from "@/components/ProgressLogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <Header data-aos="fade-down" />
      <HeroSection data-aos="fade-up" />
      <SkillsSection data-aos="fade-up" />
      <ProblemSolverSection data-aos="fade-up" />
      <ProjectsSection data-aos="fade-up" />
      <ProgressLogSection data-aos="fade-up" />
      <ContactSection data-aos="fade-up" />
      <Footer data-aos="fade-up" />
    </div>
  );
}
