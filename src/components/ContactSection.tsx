"use client";

import React, { useState } from "react";
import { useI18n } from "@/context/I18nContext";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Phone, Mail, MapPin, Send, Copy, Check, ShieldCheck } from "lucide-react";

export const ContactSection: React.FC = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti effect
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00F5D4", "#4895EF", "#7209B7"],
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#050B14] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B132B] border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{t("contact_title")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("contact_subtitle")}
          </h2>
          <div className="w-20 h-1 bg-[#00F5D4] mt-4 rounded-full shadow-[0_0_10px_#00F5D4]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Details Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-3xl border border-[#00F5D4]/30 flex flex-col gap-6">
              
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00F5D4]/10 border border-[#00F5D4]/40 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#00F5D4]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-mono">ELJALAOUI MOURAD</h3>
                  <span className="text-xs text-[#00F5D4] font-mono">Agadir, Morocco</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0B132B] border border-white/5 hover:border-[#00F5D4]/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#00F5D4]/10 text-[#00F5D4] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-mono">{t("contact_info_phone")}</span>
                    <a href="tel:+212622823460" className="text-sm font-bold text-white hover:text-[#00F5D4] transition-colors font-mono">
                      +212 622-823460
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("+212622823460", "phone")}
                  className="p-2 text-slate-400 hover:text-[#00F5D4] transition-colors"
                  title="Copy Phone"
                >
                  {copiedField === "phone" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-[#0B132B] border border-white/5 hover:border-[#00F5D4]/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#4895EF]/10 text-[#4895EF] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 font-mono">{t("contact_info_email")}</span>
                    <a href="mailto:mouradjala4@gmail.com" className="text-sm font-bold text-white hover:text-[#00F5D4] transition-colors font-mono">
                      mouradjala4@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy("mouradjala4@gmail.com", "email")}
                  className="p-2 text-slate-400 hover:text-[#00F5D4] transition-colors"
                  title="Copy Email"
                >
                  {copiedField === "email" ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#0B132B] border border-white/5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400 font-mono">{t("contact_info_location")}</span>
                  <span className="text-sm font-bold text-white font-mono">Agadir, Morocco 🇲🇦</span>
                </div>
              </div>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/eljalaoui-mourad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 rounded-2xl bg-[#0A66C2] text-white font-mono text-sm font-bold hover:bg-[#0A66C2]/90 transition-all shadow-[0_0_20px_rgba(10,102,194,0.4)]"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <span>LinkedIn Profile</span>
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
              
              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#00F5D4]/10 border border-[#00F5D4] text-center flex flex-col items-center gap-3">
                  <Check className="w-10 h-10 text-[#00F5D4]" />
                  <h4 className="text-xl font-bold text-white font-mono">{t("contact_success")}</h4>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-slate-300">{t("contact_name")}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="px-4 py-3 rounded-xl bg-[#0B132B] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-[#00F5D4] focus:ring-1 focus:ring-[#00F5D4] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-slate-300">{t("contact_email")}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="px-4 py-3 rounded-xl bg-[#0B132B] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-[#00F5D4] focus:ring-1 focus:ring-[#00F5D4] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-slate-300">{t("contact_subject")}</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Security Infrastructure Inquiry"
                      className="px-4 py-3 rounded-xl bg-[#0B132B] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-[#00F5D4] focus:ring-1 focus:ring-[#00F5D4] transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-slate-300">{t("contact_message")}</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="px-4 py-3 rounded-xl bg-[#0B132B] border border-white/10 text-white font-sans text-sm focus:outline-none focus:border-[#00F5D4] focus:ring-1 focus:ring-[#00F5D4] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#00F5D4] text-[#050B14] font-mono text-sm font-bold hover:bg-[#00F5D4]/90 transition-all shadow-[0_0_25px_rgba(0,245,212,0.4)] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t("contact_sending") : t("contact_send")}</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
