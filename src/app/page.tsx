"use client";

import React from "react";
import { I18nProvider } from "@/context/I18nContext";
import { CyberParticlesBackground } from "@/components/CyberParticlesBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectSiemSection } from "@/components/ProjectSiemSection";
import { SocTerminal } from "@/components/SocTerminal";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <I18nProvider>
      <div className="relative min-h-screen bg-[#050B14] text-white selection:bg-[#00F5D4] selection:text-[#050B14]">
        {/* Dynamic Cyber Particles Canvas Background */}
        <CyberParticlesBackground />

        {/* Top Sticky Glassmorphic Navbar */}
        <Navbar />

        {/* Page Main Content */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceTimeline />
          <ProjectSiemSection />
          <SocTerminal />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </I18nProvider>
  );
}
