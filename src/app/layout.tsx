import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ELJALAOUI MOURAD | Network & Cybersecurity Engineer",
  description: "Portfolio of ELJALAOUI MOURAD, Network & Cybersecurity Engineer based in Agadir, Morocco. SIEM Wazuh Architect, pfSense Firewall & IT Infrastructure Security.",
  keywords: [
    "ELJALAOUI MOURAD",
    "Cybersecurity Engineer",
    "Network Engineer",
    "Wazuh SIEM",
    "SOC Analyst",
    "pfSense",
    "Active Directory Security",
    "Morocco Cybersecurity",
    "Agadir Network Engineer",
  ],
  authors: [{ name: "ELJALAOUI MOURAD" }],
  openGraph: {
    title: "ELJALAOUI MOURAD | Network & Cybersecurity Engineer",
    description: "Cybersecurity & Network Engineering Portfolio - SIEM Wazuh, pfSense, Active Directory & Infrastructure Defense.",
    images: ["/images/profile.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#050B14] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
