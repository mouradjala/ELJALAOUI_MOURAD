"use client";

import React, { useState } from "react";
import { useI18n } from "@/context/I18nContext";
import { motion } from "framer-motion";
import { skillsData, SkillItem } from "@/data/portfolioData";
import { Shield, Activity, Lock, Zap, Network, Server, Layers, Cpu, Terminal, Wrench, CheckCircle } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const { t } = useI18n();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: t("cat_all") },
    { id: "security", label: t("cat_security") },
    { id: "networking", label: t("cat_networking") },
    { id: "systems", label: t("cat_systems") },
  ];

  const filteredSkills = skillsData.filter((skill) => {
    if (activeCategory === "all") return true;
    return skill.category === activeCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldAlert": return Shield;
      case "Activity": return Activity;
      case "Lock": return Lock;
      case "Zap": return Zap;
      case "Network": return Network;
      case "Server": return Server;
      case "Layers": return Layers;
      case "Cpu": return Cpu;
      case "Terminal": return Terminal;
      case "Wrench": return Wrench;
      default: return Shield;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#050B14] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B132B] border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4] mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t("skills_title")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("skills_subtitle")}
          </h2>
          <div className="w-20 h-1 bg-[#00F5D4] mt-4 rounded-full shadow-[0_0_10px_#00F5D4]" />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeCategory === cat.id
                  ? "bg-[#00F5D4] text-[#050B14] shadow-[0_0_20px_rgba(0,245,212,0.4)] font-bold"
                  : "bg-[#0B132B] text-slate-300 border border-white/10 hover:border-[#00F5D4]/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = getIcon(skill.iconName);
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-panel glass-panel-hover p-6 rounded-xl border border-white/10 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0B132B] border border-[#00F5D4]/30 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00F5D4]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-mono">{skill.name}</h3>
                      <span className="text-xs text-[#4895EF] font-mono">{skill.badge}</span>
                    </div>
                  </div>
                  <span className="text-lg font-mono font-bold text-[#00F5D4]">{skill.level}%</span>
                </div>

                {/* Animated Progress Bar */}
                <div className="w-full h-2 rounded-full bg-[#0B132B] overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#4895EF] to-[#00F5D4] rounded-full shadow-[0_0_10px_#00F5D4]"
                  />
                </div>

                <p className="text-xs text-slate-400 font-sans leading-normal">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Featured Tech Stack Badges Banner */}
        <div className="mt-16 glass-panel p-6 rounded-2xl border border-[#00F5D4]/20 flex flex-col items-center gap-4">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            Core Cybersecurity & Infrastructure Stack
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Wazuh SIEM",
              "pfSense",
              "Active Directory",
              "Linux DMZ",
              "Windows Server",
              "Wireshark",
              "Cisco Switching",
              "Snort IDS/IPS",
              "Syslog",
              "OpenSearch",
              "Nmap",
              "GPO Hardening",
            ].map((tool, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B132B] border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4] shadow-sm hover:border-[#00F5D4] transition-colors"
              >
                <CheckCircle className="w-3.5 h-3.5 text-[#00F5D4]" />
                <span>{tool}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
