"use client";

import React from "react";
import { useI18n } from "@/context/I18nContext";
import { motion } from "framer-motion";
import { experiencesData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, Radio } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="experience" className="py-24 relative bg-[#050B14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B132B] border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4] mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t("exp_title")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("exp_subtitle")}
          </h2>
          <div className="w-20 h-1 bg-[#00F5D4] mt-4 rounded-full shadow-[0_0_10px_#00F5D4]" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00F5D4] via-[#4895EF] to-[#0B132B] sm:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {experiencesData.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#050B14] border-2 border-[#00F5D4] shadow-[0_0_15px_#00F5D4] z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col gap-4 relative">
                      
                      {/* Current Job Pill */}
                      {exp.isCurrent && (
                        <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#00F5D4] text-[#050B14] text-[10px] font-mono font-bold flex items-center gap-1 shadow-[0_0_10px_#00F5D4]">
                          <Radio className="w-3 h-3 animate-pulse" />
                          <span>CURRENT ROLE</span>
                        </div>
                      )}

                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-mono text-[#00F5D4] flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </span>
                        <h3 className="text-xl font-bold text-white font-mono">
                          {t(exp.roleKey)}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[#4895EF] font-semibold font-mono">
                          <span>{exp.company}</span>
                          <span>•</span>
                          <span className="text-xs text-slate-400 font-sans flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {t(exp.descKey)}
                      </p>

                      {/* Skill tags */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md bg-[#0B132B] border border-white/10 text-[11px] font-mono text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
