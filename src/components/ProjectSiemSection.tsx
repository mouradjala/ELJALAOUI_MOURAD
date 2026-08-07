"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/context/I18nContext";
import { motion, AnimatePresence } from "framer-motion";
import { projectSiemDetails } from "@/data/portfolioData";
import { ShieldAlert, Server, Key, ShieldCheck, Eye, ExternalLink, Layers, CheckCircle2, X } from "lucide-react";

export const ProjectSiemSection: React.FC = () => {
  const { t } = useI18n();
  const [modalImage, setModalImage] = useState<string | null>(null);

  const features = [
    t("siem_feat1"),
    t("siem_feat2"),
    t("siem_feat3"),
    t("siem_feat4"),
  ];

  return (
    <section id="projects" className="py-24 relative bg-[#050B14] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B132B] border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4] mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{t("projects_title")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("projects_subtitle")}
          </h2>
          <div className="w-20 h-1 bg-[#00F5D4] mt-4 rounded-full shadow-[0_0_10px_#00F5D4]" />
        </div>

        {/* Featured Project Showcase Container */}
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#00F5D4]/30 shadow-2xl flex flex-col gap-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Project Specs & Text */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00F5D4] bg-[#00F5D4]/10 px-3 py-1 rounded-md w-fit border border-[#00F5D4]/30">
                <span>FLAGSHIP PROJECT</span>
                <span>•</span>
                <span>ENTERPRISE SIEM</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono leading-tight">
                {t("siem_title")}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {t("siem_desc")}
              </p>

              {/* Bullet points */}
              <div className="flex flex-col gap-3">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => setModalImage("/images/siem_architecture.png")}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00F5D4] text-[#050B14] font-mono text-xs font-bold hover:bg-[#00F5D4]/90 transition-all shadow-[0_0_20px_rgba(0,245,212,0.4)]"
                >
                  <Layers className="w-4 h-4" />
                  <span>{t("view_architecture")}</span>
                </button>

                <button
                  onClick={() => setModalImage("/images/siem_dashboard.png")}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B132B] border border-[#00F5D4]/40 text-white font-mono text-xs font-semibold hover:border-[#00F5D4] transition-all"
                >
                  <Eye className="w-4 h-4 text-[#00F5D4]" />
                  <span>{t("live_demo_modal")}</span>
                </button>
              </div>
            </div>

            {/* Architecture Preview Image Cards */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {/* Image 1: SIEM Architecture */}
              <div
                onClick={() => setModalImage("/images/siem_architecture.png")}
                className="relative h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#00F5D4]/30 group cursor-pointer shadow-lg"
              >
                <Image
                  src="/images/siem_architecture.png"
                  alt="SIEM Wazuh Architecture Topology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-white font-bold bg-[#050B14]/80 px-2.5 py-1 rounded border border-white/10">
                    Network Architecture Diagram
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#00F5D4] text-[#050B14] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Image 2: SIEM Dashboard */}
              <div
                onClick={() => setModalImage("/images/siem_dashboard.png")}
                className="relative h-48 sm:h-52 rounded-2xl overflow-hidden border border-[#4895EF]/30 group cursor-pointer shadow-lg"
              >
                <Image
                  src="/images/siem_dashboard.png"
                  alt="SIEM Wazuh SOC Monitoring Dashboard"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-xs text-white font-bold bg-[#050B14]/80 px-2.5 py-1 rounded border border-white/10">
                    Live Security Incident Dashboard
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#4895EF] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Architecture Components Grid */}
          <div className="pt-8 border-t border-white/10">
            <h4 className="text-lg font-mono font-bold text-white mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#00F5D4]" />
              <span>Integrated Systems & Telemetry Nodes</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectSiemDetails.components.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0B132B]/80 border border-white/10 flex flex-col gap-2 hover:border-[#00F5D4]/40 transition-colors"
                >
                  <div className="flex items-center gap-2 text-[#00F5D4]">
                    {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 1 && <Key className="w-5 h-5" />}
                    {idx === 2 && <Server className="w-5 h-5" />}
                    {idx === 3 && <Eye className="w-5 h-5" />}
                    <span className="font-mono text-sm font-bold text-white">{comp.name}</span>
                  </div>
                  <span className="text-xs text-[#4895EF] font-mono">{comp.role}</span>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Architecture/Dashboard Visuals */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImage(null)}
            className="fixed inset-0 z-50 bg-[#050B14]/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-5xl w-full max-h-[90vh] rounded-2xl overflow-hidden border border-[#00F5D4]/40 bg-[#0B132B]">
              <button
                onClick={() => setModalImage(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#050B14]/80 text-[#00F5D4] border border-[#00F5D4]/40 flex items-center justify-center hover:bg-[#00F5D4] hover:text-[#050B14] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full h-[75vh]">
                <Image
                  src={modalImage}
                  alt="Enlarged Visual"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
