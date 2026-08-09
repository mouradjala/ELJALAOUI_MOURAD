"use client";

import React, { useState, useEffect } from "react";
import { useI18n, Language } from "@/context/I18nContext";
import { Shield, Globe, Menu, X, Download, Terminal, ChevronDown, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export const Navbar: React.FC = () => {
  const { language, setLanguage, t, theme, toggleTheme } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: t("nav_about") },
    { href: "#skills", label: t("nav_skills") },
    { href: "#experience", label: t("nav_experience") },
    { href: "#projects", label: t("nav_projects") },
    { href: "#terminal", label: t("nav_terminal") },
    { href: "#contact", label: t("nav_contact") },
  ];

  const currentLangObj = languages.find((l) => l.code === language) || languages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050B14]/90 backdrop-blur-md border-b border-[#00F5D4]/20 py-3 shadow-lg shadow-[#00F5D4]/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-[#0B132B] border border-[#00F5D4]/40 flex items-center justify-center group-hover:border-[#00F5D4] transition-all shadow-[0_0_15px_rgba(0,245,212,0.2)]">
            <Shield className="w-5 h-5 text-[#00F5D4] group-hover:scale-110 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-lg font-bold text-white tracking-wide group-hover:text-[#00F5D4] transition-colors flex items-center gap-1">
              ELJALAOUI<span className="text-[#00F5D4]">.M</span>
            </span>
            <span className="font-mono text-[10px] text-[#94A3B8] tracking-widest uppercase">
              CYBER_NET_ENG // SOC
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#94A3B8] hover:text-[#00F5D4] transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#00F5D4] group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#00F5D4]" />
            </a>
          ))}
        </nav>

        {/* Actions (Language Switcher, Dark/Light Mode, CV Button) */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Dark / Light Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[#0B132B]/80 border border-[#00F5D4]/20 hover:border-[#00F5D4]/60 text-[#00F5D4] transition-all"
            title="Toggle Dark/Light Cyber Theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#00F5D4]" />}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0B132B]/80 border border-[#00F5D4]/20 hover:border-[#00F5D4]/50 text-xs font-mono text-white transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-[#00F5D4]" />
              <span>{currentLangObj.flag}</span>
              <span className="uppercase">{currentLangObj.code}</span>
              <ChevronDown className="w-3 h-3 text-[#94A3B8]" />
            </button>

            <AnimatePresence>
              {langDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-36 bg-[#0B132B] border border-[#00F5D4]/30 rounded-lg shadow-xl overflow-hidden py-1 z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                        language === lang.code
                          ? "bg-[#00F5D4]/10 text-[#00F5D4] font-semibold"
                          : "text-slate-300 hover:bg-[#1C2541] hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Download CV CTA */}
          <a
            href="/CV_ELJALAOUI_MOURAD.pdf"
            target="_blank"
            download="CV_ELJALAOUI_MOURAD.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00F5D4] text-[#050B14] font-mono text-xs font-bold hover:bg-[#00F5D4]/90 transition-all shadow-[0_0_20px_rgba(0,245,212,0.4)] hover:shadow-[0_0_25px_rgba(0,245,212,0.6)]"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t("nav_download_cv")}</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded bg-[#0B132B] border border-[#00F5D4]/30 text-white"
          >
            {theme === "dark" ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-[#00F5D4]" />}
          </button>

          <button
            onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0B132B] border border-[#00F5D4]/30 text-xs text-white"
          >
            <span>{currentLangObj.flag}</span>
            <span className="uppercase font-mono">{currentLangObj.code}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0B132B] border border-[#00F5D4]/30 text-[#00F5D4]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050B14]/95 border-b border-[#00F5D4]/20 backdrop-blur-xl px-4 pt-3 pb-6 flex flex-col gap-4"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-300 hover:text-[#00F5D4] py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-2">
              <span className="text-xs font-mono text-slate-400">Select Language:</span>
              <div className="grid grid-cols-2 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-center gap-2 p-2 rounded text-xs font-mono border ${
                      language === lang.code
                        ? "bg-[#00F5D4]/20 border-[#00F5D4] text-[#00F5D4]"
                        : "bg-[#0B132B] border-white/10 text-slate-300"
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>

              <a
                href="/CV_ELJALAOUI_MOURAD.pdf"
                target="_blank"
                download="CV_ELJALAOUI_MOURAD.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#00F5D4] text-[#050B14] font-mono text-sm font-bold"
              >
                <Download className="w-4 h-4" />
                <span>{t("nav_download_cv")}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
