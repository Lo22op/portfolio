"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProblemSolverSection from "@/components/ProblemSolverSection";
import ProjectsSection from "@/components/ProjectsSection";
import ArticlesSection from "@/components/ArticlesSection";
import ProgressLogSection from "@/components/ProgressLogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  return (
    <div className="min-h-screen bg-black" >
      <Header  />
      <HeroSection  />
      <SkillsSection  />
      <ProblemSolverSection data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
      <ProjectsSection data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
      <ArticlesSection data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
      <ProgressLogSection data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
      <ContactSection data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" />
      <Footer data-aos="fade-up" />
    </div>
  );
}
