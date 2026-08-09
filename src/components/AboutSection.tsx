"use client";

import React from "react";
import { useI18n } from "@/context/I18nContext";
import { motion } from "framer-motion";
import { ShieldCheck, GraduationCap, Server, Eye, Lock, FileCheck } from "lucide-react";
import { educationData } from "@/data/portfolioData";

export const AboutSection: React.FC = () => {
  const { t } = useI18n();

  const pillars = [
    {
      icon: ShieldCheck,
      title: "SIEM & Log Surveillance",
      desc: "Wazuh integration with Active Directory, pfSense, Linux DMZ & Windows hosts.",
    },
    {
      icon: Server,
      title: "Network Hardening",
      desc: "VLAN segmentation, pfSense firewall rules, VPN tunnels, and Cisco infrastructure.",
    },
    {
      icon: Eye,
      title: "Real-Time Threat Triage",
      desc: "Instant anomaly detection, security log analysis, and incident mitigation.",
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B132B] border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t("about_title")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("about_subtitle")}
          </h2>
          <div className="w-20 h-1 bg-[#00F5D4] mt-4 rounded-full shadow-[0_0_10px_#00F5D4]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Biography Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 rounded-2xl border border-[#00F5D4]/20 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/40 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">ELJALAOUI MOURAD</h3>
                  <p className="text-xs text-[#00F5D4] font-mono">Network & Cybersecurity Engineer</p>
                </div>
              </div>

              <div className="flex flex-col gap-3 font-sans text-[#F8FAFC]">
                {[
                  t("about_bio_l1"),
                  t("about_bio_l2"),
                  t("about_bio_l3"),
                  t("about_bio_l4"),
                  t("about_bio_l5"),
                ].map((line, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0B132B]/80 border border-[#00F5D4]/20 hover:border-[#00F5D4]/50 transition-all flex items-start gap-3 shadow-md"
                  >
                    <span className="text-sm sm:text-base leading-relaxed text-slate-200 font-medium">
                      {line}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Cyber Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="flex flex-col gap-2 p-3 rounded-xl bg-[#0B132B]/50 border border-white/5">
                    <Icon className="w-5 h-5 text-[#00F5D4]" />
                    <span className="text-xs font-mono font-bold text-white">{pillar.title}</span>
                    <span className="text-[11px] text-slate-400 leading-normal">{pillar.desc}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Education & Degrees Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass-panel p-8 rounded-2xl border border-[#4895EF]/30 flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <div className="w-10 h-10 rounded-lg bg-[#4895EF]/10 border border-[#4895EF]/40 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#4895EF]" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                {t("about_education_title")}
              </h3>
            </div>

            <div className="flex flex-col gap-6 relative before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#4895EF]/30">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative pl-9 flex flex-col gap-1">
                  <div className="absolute left-2 top-1.5 w-4 h-4 rounded-full bg-[#050B14] border-2 border-[#4895EF] shadow-[0_0_8px_#4895EF]" />
                  <span className="text-xs font-mono text-[#00F5D4] bg-[#00F5D4]/10 px-2 py-0.5 rounded w-fit">
                    {edu.period}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {t(edu.degreeKey)}
                  </h4>
                  <p className="text-sm text-[#4895EF] font-mono">
                    {t(edu.subKey)}
                  </p>
                  <span className="text-xs text-slate-400">{edu.institution}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto p-4 rounded-xl bg-[#0B132B] border border-[#00F5D4]/20 flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-[#00F5D4] shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold text-white">Specialized Focus</span>
                <span className="text-[11px] text-slate-300">Wazuh SIEM, Active Directory, pfSense, DMZ Hardening</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
