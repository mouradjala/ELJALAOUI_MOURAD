"use client";

import React from "react";
import { useI18n } from "@/context/I18nContext";
import { Shield, Radio } from "lucide-react";

export const Footer: React.FC = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-[#050B14] border-t border-[#00F5D4]/20 py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0B132B] border border-[#00F5D4]/40 flex items-center justify-center">
            <Shield className="w-4 h-4 text-[#00F5D4]" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm font-bold text-white">
              ELJALAOUI MOURAD
            </span>
            <span className="font-mono text-[10px] text-slate-400">
              Network & Cybersecurity Engineer
            </span>
          </div>
        </div>

        {/* Operational Status Pill */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B132B] border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5D4] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5D4]"></span>
          </span>
          <span>{t("footer_status")}</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-500 font-mono text-center md:text-right">
          © {new Date().getFullYear()} ELJALAOUI MOURAD. {t("footer_rights")}
        </p>

      </div>
    </footer>
  );
};
