"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/context/I18nContext";
import { motion } from "framer-motion";
import { Shield, Terminal, MapPin, ArrowRight, Download, Activity, Cpu, CheckCircle2, Lock } from "lucide-react";

export const HeroSection: React.FC = () => {
  const { t } = useI18n();

  // Typing animation phrases
  const phrases = [
    "Network & Cybersecurity Engineer",
    "SIEM & Wazuh SOC Architect",
    "pfSense Firewall Specialist",
    "IT Systems & Infrastructure Defender",
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        if (typedText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        if (typedText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Glow Orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00F5D4]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4895EF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B132B] border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.15)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00F5D4]"></span>
              </span>
              <span>{t("hero_badge")}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[#94A3B8] text-lg font-semibold flex items-center gap-2">
                {t("hero_greeting")} <span className="text-[#00F5D4]">wave</span>
              </span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none">
                {t("hero_name")}
              </h1>
              
              {/* Typing Animation Title */}
              <div className="h-10 sm:h-12 flex items-center">
                <p className="font-mono text-xl sm:text-2xl font-semibold text-[#00F5D4] cyber-glow-cyan flex items-center">
                  <Terminal className="w-6 h-6 mr-2 text-[#4895EF] inline" />
                  <span>{typedText}</span>
                  <span className="animate-pulse ml-1 text-[#00F5D4]">|</span>
                </p>
              </div>
            </div>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-sm text-[#94A3B8] font-mono bg-[#1C2541]/40 px-3 py-1 rounded-md border border-white/5">
              <MapPin className="w-4 h-4 text-[#00F5D4]" />
              <span>{t("hero_location")}</span>
            </div>

            {/* Summary Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
              {t("hero_summary")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#00F5D4] text-[#050B14] font-mono text-sm font-bold hover:bg-[#00F5D4]/90 transition-all shadow-[0_0_25px_rgba(0,245,212,0.4)] group"
              >
                <Shield className="w-4 h-4" />
                <span>{t("hero_btn_projects")}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0B132B] border border-[#00F5D4]/40 text-white font-mono text-sm font-semibold hover:border-[#00F5D4] hover:bg-[#1C2541] transition-all"
              >
                <span>{t("hero_btn_contact")}</span>
              </a>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-white/10 mt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-[#00F5D4]">3+</span>
                <span className="text-xs text-slate-400 font-sans">{t("hero_stat_exp")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-[#4895EF]">200+</span>
                <span className="text-xs text-slate-400 font-sans">{t("hero_stat_nodes")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-white">Wazuh</span>
                <span className="text-xs text-slate-400 font-sans">{t("hero_stat_siem")}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-mono font-bold text-[#00F5D4]">99.9%</span>
                <span className="text-xs text-slate-400 font-sans">{t("hero_stat_uptime")}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              {/* Outer Cyber Radar Ring */}
              <div className="absolute inset-0 rounded-full border border-[#00F5D4]/20 animate-radar" />
              <div className="absolute -inset-4 rounded-full border border-dashed border-[#4895EF]/30" />

              {/* Glowing Avatar Frame */}
              <div className="w-full h-full rounded-full p-2 bg-gradient-to-tr from-[#00F5D4] via-[#4895EF] to-[#0B132B] shadow-[0_0_50px_rgba(0,245,212,0.3)]">
                <div className="w-full h-full rounded-full overflow-hidden relative border-4 border-[#050B14] bg-[#0B132B]">
                  <Image
                    src="/images/profile.png"
                    alt="ELJALAOUI MOURAD - Cybersecurity Engineer"
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Floating Badge 1: Wazuh Certified */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -left-4 glass-panel px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-mono border border-[#00F5D4]/40 text-white shadow-lg"
              >
                <Shield className="w-4 h-4 text-[#00F5D4]" />
                <div className="flex flex-col">
                  <span className="font-bold text-[#00F5D4]">SIEM Wazuh</span>
                  <span className="text-[10px] text-slate-300">Active Monitoring</span>
                </div>
              </motion.div>

              {/* Floating Badge 2: pfSense Defender */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -right-4 glass-panel px-3 py-2 rounded-xl flex items-center gap-2 text-xs font-mono border border-[#4895EF]/40 text-white shadow-lg"
              >
                <Lock className="w-4 h-4 text-[#4895EF]" />
                <div className="flex flex-col">
                  <span className="font-bold text-[#4895EF]">pfSense Firewall</span>
                  <span className="text-[10px] text-slate-300">DMZ & VPN Hardened</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
