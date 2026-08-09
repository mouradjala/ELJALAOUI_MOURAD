"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "fr" | "en" | "es" | "de";

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    nav_about: "À propos",
    nav_skills: "Compétences",
    nav_experience: "Expérience",
    nav_projects: "Projets SIEM",
    nav_terminal: "SOC Cyber Lab",
    nav_contact: "Contact",
    nav_download_cv: "Télécharger CV",
    
    // Hero
    hero_badge: "Ingénieur Réseaux & Cybersécurité | SOC / SIEM Architect",
    hero_greeting: "Bonjour, je suis",
    hero_name: "ELJALAOUI MOURAD",
    hero_role_prefix: "Ingénieur",
    hero_location: "Agadir, Maroc",
    hero_summary: "Ingénieur spécialisé en réseaux informatiques, systèmes et cybersécurité. Concepteur d'une solution SIEM d'entreprise basée sur Wazuh, centralisant les logs d'Active Directory, pfSense firewall et serveurs Linux DMZ pour la détection proactive d'incidents.",
    hero_btn_projects: "Explorer le Projet SIEM",
    hero_btn_cv: "Télécharger CV",
    hero_btn_contact: "Me Contacter",
    hero_stat_exp: "Années d'Expérience",
    hero_stat_nodes: "Noeuds Sécurisés",
    hero_stat_siem: "Déploiements SIEM",
    hero_stat_uptime: "Disponibilité Système",

    // About
    about_title: "À Propos de Moi",
    about_subtitle: "Expertise & Passion pour la Sécurité des Infrastructures IT",
    about_bio_l1: "🛡️ Jeune ingénieur spécialisé en réseaux informatiques, systèmes et cybersécurité.",
    about_bio_l2: "⚡ Expert dans la protection et la supervision continue des infrastructures IT critiques.",
    about_bio_l3: "🔒 Concepteur d'une solution SIEM d'entreprise basée sur Wazuh, pfSense et Active Directory.",
    about_bio_l4: "👁️ Spécialiste de la détection proactive d'incidents, du filtrage DMZ et du durcissement système.",
    about_bio_l5: "🚀 Passionné par l'innovation cyber, les architectures Zero-Trust et la haute disponibilité.",
    about_bio1: "Je suis un jeune ingénieur passionné par les réseaux, la gestion des systèmes et la cybersécurité. Mon objectif principal est de protéger les infrastructures critiques contre les cybermenaces émergentes grâce à des technologies de surveillance proactives et des architectures Zero-Trust.",
    about_bio2: "J'ai conçu et mis en œuvre une infrastructure SOC/SIEM complète basée sur Wazuh, intégrant pfSense, Active Directory, ainsi que des serveurs Linux (DMZ) et Windows, permettant la centralisation des logs et la détection d'incidents en temps réel.",
    about_education_title: "Formation & Diplômes",
    about_degree1_title: "Diplôme d'Ingénieur en Informatique",
    about_degree1_sub: "Spécialité Réseaux & Cybersécurité",
    about_degree1_date: "2026",
    about_degree2_title: "Technicien Spécialisé en Réseaux",
    about_degree2_sub: "Infrastructures & Systèmes IT",
    about_degree2_date: "2021",
    about_degree3_title: "Baccalauréat Scientifique",
    about_degree3_sub: "Option Sciences Physiques",
    about_degree3_date: "2016",

    // Skills
    skills_title: "Compétences Techniques",
    skills_subtitle: "Maîtrise des Outils de Cybersécurité, Réseaux et Systèmes",
    cat_all: "Toutes",
    cat_security: "Cybersécurité & SIEM",
    cat_networking: "Réseaux & Infrastructures",
    cat_systems: "Systèmes & Administration",
    skill_level_expert: "Expert",
    skill_level_advanced: "Avancé",
    skill_level_intermediate: "Intermédiaire",

    // Experience
    exp_title: "Parcours Professionnel",
    exp_subtitle: "Mon Expérience au Cœur de la Production et des Infrastructures IT",
    exp_job1_role: "Opérateur de Production",
    exp_job1_company: "Maroc Telecom",
    exp_job1_period: "2022 - Présent",
    exp_job1_desc: "Surveillance et maintien en condition opérationnelle des équipements réseaux et des services télécoms de production. Analyse des incidents et supervision de l'infrastucture critique.",
    exp_job2_role: "Technicien Informatique",
    exp_job2_company: "2easy",
    exp_job2_period: "2021 - 2022",
    exp_job2_desc: "Maintenance informatique, administration des réseaux d'entreprise, assistance utilisateur et sécurisation des postes de travail.",
    exp_job3_role: "Technicien Réseaux",
    exp_job3_company: "CHU Mohammed VI Marrakech",
    exp_job3_period: "2021",
    exp_job3_desc: "Gestion de l'infrastructure réseau hospitalière, dépannage réseau, configuration des switchs/routeurs et assistance technique sur le terrain.",

    // Projects
    projects_title: "Projet Phare : SIEM Wazuh & Architecture SOC",
    projects_subtitle: "Supervision en Temps Réel, Détection d'Attaques & Correlation de Logs",
    siem_title: "Plateforme SIEM Wazuh & Surveillance Multi-Environnement",
    siem_desc: "Déploiement d'une solution SIEM d'entreprise basée sur Wazuh, connectant les pares-feux pfSense, le domaine Active Directory, les serveurs Web/Linux en DMZ et les hôtes Windows pour la détection proactive d'intrusions et l'analyse de logs.",
    siem_arch_title: "Architecture Réseau & Topologie",
    siem_feat1: "Centralisation des journaux d'événements Active Directory (Kerberos, Auth, GPO)",
    siem_feat2: "Intégration du Pare-feu pfSense (Filtrage de paquets, Snort/Suricata, VPN logs)",
    siem_feat3: "Surveillance des serveurs DMZ Linux (Apache, SSH, Integrity Monitoring FIM)",
    siem_feat4: "Alertes en temps réel & Tableaux de bord de réponse aux incidents Kibana/Wazuh",
    view_architecture: "Topologie Réseau & SIEM",
    live_demo_modal: "Console Dashboard Wazuh",
    view_pfsense_modal: "Règles Pare-feu pfSense",

    // Terminal
    terminal_title: "SOC Cyber Terminal & Simulation d'Attaques",
    terminal_subtitle: "Testez des attaques réelles (SSH Brute force, Kerberoasting) et observez la réponse SOC en temps réel",
    terminal_prompt: "Entrez une commande (ex: simulate-attack, mitre, status, scan, logs, wazuh, help)...",

    // Contact
    contact_title: "Contactez-Moi",
    contact_subtitle: "Discutons de vos projets en Cybersécurité et Réseaux",
    contact_name: "Nom complet",
    contact_email: "Adresse Email",
    contact_subject: "Sujet",
    contact_message: "Message",
    contact_send: "Envoyer le Message",
    contact_sending: "Transmission sécurisée...",
    contact_success: "Message envoyé avec succès ! Je vous répondrai sous peu.",
    contact_info_phone: "Téléphone",
    contact_info_email: "Email Direct",
    contact_info_location: "Localisation",
    contact_info_linkedin: "Profil LinkedIn",

    // Footer
    footer_rights: "Tous droits réservés.",
    footer_status: "SOC Operational Status: ONLINE",
  },
  en: {
    // Navigation
    nav_about: "About",
    nav_skills: "Skills",
    nav_experience: "Experience",
    nav_projects: "SIEM Projects",
    nav_terminal: "SOC Cyber Lab",
    nav_contact: "Contact",
    nav_download_cv: "Download CV",

    // Hero
    hero_badge: "Network & Cybersecurity Engineer | SOC / SIEM Architect",
    hero_greeting: "Hello, I'm",
    hero_name: "ELJALAOUI MOURAD",
    hero_role_prefix: "Engineer",
    hero_location: "Agadir, Morocco",
    hero_summary: "Engineer specialized in computer networks, systems and cybersecurity. Architect of an enterprise SIEM solution using Wazuh integrating Active Directory, pfSense, and DMZ Linux servers for threat mitigation.",
    hero_btn_projects: "Explore SIEM Project",
    hero_btn_cv: "Download CV",
    hero_btn_contact: "Contact Me",
    hero_stat_exp: "Years Experience",
    hero_stat_nodes: "Nodes Secured",
    hero_stat_siem: "SIEM Deployments",
    hero_stat_uptime: "System Uptime",

    // About
    about_title: "About Me",
    about_subtitle: "Expertise & Passion for IT Infrastructure & Security",
    about_bio_l1: "🛡️ Young engineer specialized in computer networks, systems, and cybersecurity.",
    about_bio_l2: "⚡ Expert in safeguarding and continuously monitoring critical IT infrastructures.",
    about_bio_l3: "🔒 Architect of an enterprise SIEM solution built on Wazuh, pfSense, and Active Directory.",
    about_bio_l4: "👁️ Specialist in proactive threat detection, DMZ filtering, and system hardening.",
    about_bio_l5: "🚀 Passionate about cyber innovation, Zero-Trust architectures, and high availability.",
    about_bio1: "I am a driven engineer specializing in networking, system administration, and cybersecurity. My main goal is safeguarding critical infrastructure against cyber threats using proactive monitoring technologies and zero-trust architectures.",
    about_bio2: "I built and deployed a complete SOC/SIEM infrastructure using Wazuh, integrating pfSense firewalls, Active Directory, Linux DMZ servers, and Windows endpoints to centralize logs and trigger real-time incident detection.",
    about_education_title: "Education & Degrees",
    about_degree1_title: "Engineering Degree in Computer Science",
    about_degree1_sub: "Networks & Cybersecurity Specialization",
    about_degree1_date: "2026",
    about_degree2_title: "Specialized Technician in Networks",
    about_degree2_sub: "IT Infrastructure & Systems",
    about_degree2_date: "2021",
    about_degree3_title: "Scientific Baccalaureate",
    about_degree3_sub: "Physical Sciences Major",
    about_degree3_date: "2016",

    // Skills
    skills_title: "Technical Skills",
    skills_subtitle: "Proficiency in Cybersecurity, Networking & Systems Engineering",
    cat_all: "All",
    cat_security: "Cybersecurity & SIEM",
    cat_networking: "Networks & Infrastructure",
    cat_systems: "Systems Administration",
    skill_level_expert: "Expert",
    skill_level_advanced: "Advanced",
    skill_level_intermediate: "Intermediate",

    // Experience
    exp_title: "Professional Experience",
    exp_subtitle: "Hands-on experience in telecommunications production and IT management",
    exp_job1_role: "Production Operator",
    exp_job1_company: "Maroc Telecom",
    exp_job1_period: "2022 - Present",
    exp_job1_desc: "Monitoring telecom production services, network hardware operational status, incident analysis, and critical infrastructure maintenance.",
    exp_job2_role: "IT Technician",
    exp_job2_company: "2easy",
    exp_job2_period: "2021 - 2022",
    exp_job2_desc: "IT hardware/software maintenance, corporate network administration, user support, and workstation security hardening.",
    exp_job3_role: "Network Technician",
    exp_job3_company: "CHU Mohammed VI Marrakech",
    exp_job3_period: "2021",
    exp_job3_desc: "Managing hospital network infrastructure, troubleshooting routing/switching, hardware configuration, and field technical support.",

    // Projects
    projects_title: "Featured Project: Wazuh SIEM & SOC Architecture",
    projects_subtitle: "Real-time Supervision, Attack Detection & Log Correlation Engine",
    siem_title: "Enterprise Wazuh SIEM & Multi-Environment Monitoring",
    siem_desc: "Architected an end-to-end SIEM ecosystem leveraging Wazuh to aggregate logs from pfSense firewalls, Active Directory domain controllers, DMZ Linux servers, and Windows hosts for threat detection and audit compliance.",
    siem_arch_title: "Network Architecture & Topology",
    siem_feat1: "Active Directory Log Aggregation (Kerberos, Auth failures, Group Policy)",
    siem_feat2: "pfSense Firewall Integration (Packet filtering, Snort IDS/IPS logs, VPN tunnels)",
    siem_feat3: "DMZ Linux Server Monitoring (Apache, SSH brute-force, File Integrity FIM)",
    siem_feat4: "Real-time Alerting & Custom Incident Dashboard via Wazuh Dashboard",
    view_architecture: "Network & SIEM Topology",
    live_demo_modal: "Wazuh Console Dashboard",
    view_pfsense_modal: "pfSense Firewall Rules",

    // Terminal
    terminal_title: "SOC Cyber Terminal & Attack Simulation",
    terminal_subtitle: "Simulate professional cyber attacks (SSH Brute Force, Kerberoasting) and view live SOC remediation",
    terminal_prompt: "Enter command (e.g., simulate-attack, mitre, status, scan, logs, wazuh, help)...",

    // Contact
    contact_title: "Get In Touch",
    contact_subtitle: "Let's discuss cybersecurity initiatives or engineering opportunities",
    contact_name: "Full Name",
    contact_email: "Email Address",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_send: "Send Message",
    contact_sending: "Securing transmission...",
    contact_success: "Message sent successfully! I will reply to you shortly.",
    contact_info_phone: "Phone Number",
    contact_info_email: "Direct Email",
    contact_info_location: "Location",
    contact_info_linkedin: "LinkedIn Profile",

    // Footer
    footer_rights: "All rights reserved.",
    footer_status: "SOC Operational Status: ONLINE",
  },
  es: {
    // Navigation
    nav_about: "Sobre mí",
    nav_skills: "Habilidades",
    nav_experience: "Experiencia",
    nav_projects: "Proyectos SIEM",
    nav_terminal: "SOC Cyber Lab",
    nav_contact: "Contacto",
    nav_download_cv: "Descargar CV",

    // Hero
    hero_badge: "Ingeniero de Redes y Ciberseguridad | SOC / SIEM Architect",
    hero_greeting: "Hola, soy",
    hero_name: "ELJALAOUI MOURAD",
    hero_role_prefix: "Ingeniero",
    hero_location: "Agadir, Marruecos",
    hero_summary: "Ingeniero especializado en redes, sistemas y ciberseguridad. Creador de una solución SIEM integral con Wazuh centralizando registros de Active Directory, pfSense y servidores Linux en DMZ.",
    hero_btn_projects: "Ver Proyecto SIEM",
    hero_btn_cv: "Descargar CV",
    hero_btn_contact: "Contactar",
    hero_stat_exp: "Años de Experiencia",
    hero_stat_nodes: "Nodos Protegidos",
    hero_stat_siem: "Despliegues SIEM",
    hero_stat_uptime: "Disponibilidad",

    // About
    about_title: "Sobre Mí",
    about_subtitle: "Pasión y Especialización en Ciberseguridad e Infraestructura IT",
    about_bio1: "Soy un ingeniero apasionado por las redes y la seguridad informática. Mi objetivo es proteger infraestructuras críticas mediante sistemas de monitorización proactiva y arquitecturas sólidas.",
    about_bio2: "Diseñé e implementé una solución SOC/SIEM completa con Wazuh, integrando cortafuegos pfSense, Active Directory y servidores Linux/Windows.",
    about_education_title: "Educación y Títulos",
    about_degree1_title: "Ingeniería en Informática",
    about_degree1_sub: "Especialidad en Redes y Ciberseguridad",
    about_degree1_date: "2026",
    about_degree2_title: "Técnico Especializado en Redes",
    about_degree2_sub: "Infraestructuras y Sistemas IT",
    about_degree2_date: "2021",

    // Skills
    skills_title: "Habilidades Técnicas",
    skills_subtitle: "Dominio de herramientas de Ciberseguridad, Redes y Sistemas",
    cat_all: "Todas",
    cat_security: "Ciberseguridad y SIEM",
    cat_networking: "Redes e Infraestructuras",
    cat_systems: "Administración de Sistemas",
    skill_level_expert: "Experto",
    skill_level_advanced: "Avanzado",
    skill_level_intermediate: "Intermedio",

    // Experience
    exp_title: "Experiencia Profesional",
    exp_subtitle: "Trayectoria técnica en producción y soporte de red",
    exp_job1_role: "Operador de Producción",
    exp_job1_company: "Maroc Telecom",
    exp_job1_period: "2022 - Presente",
    exp_job1_desc: "Monitoreo continuo de servicios de telecomunicaciones y soporte a infraestructuras de red críticas.",
    exp_job2_role: "Técnico Informático",
    exp_job2_company: "2easy",
    exp_job2_period: "2021 - 2022",
    exp_job2_desc: "Mantenimiento preventivo y correctivo de hardware/software, seguridad de estaciones de trabajo y redes corporativas.",
    exp_job3_role: "Técnico de Redes",
    exp_job3_company: "CHU Mohammed VI Marrakech",
    exp_job3_period: "2021",
    exp_job3_desc: "Gestión de red hospitalaria, resolución de incidencias en routers y switches, y asistencia técnica.",

    // Projects
    projects_title: "Proyecto Destacado: SIEM Wazuh & SOC",
    projects_subtitle: "Detección de Amenazas y Centralización de Registros",
    siem_title: "Plataforma SIEM Wazuh y Monitoreo Multientorno",
    siem_desc: "Implementación de una plataforma SIEM con Wazuh recolectando logs de pfSense, Active Directory y servidores Linux DMZ para detección proactiva de incidentes.",
    siem_arch_title: "Arquitectura de Red",
    siem_feat1: "Centralización de logs de Active Directory",
    siem_feat2: "Integración de Firewall pfSense y detección IDS/IPS",
    siem_feat3: "Monitoreo de servidores Linux DMZ e integridad de archivos",
    siem_feat4: "Alertas en tiempo real y cuadros de mando en Wazuh Dashboard",
    view_architecture: "Topología de Red & SIEM",
    live_demo_modal: "Consola Wazuh Dashboard",
    view_pfsense_modal: "Reglas Firewall pfSense",

    // Terminal
    terminal_title: "Terminal SOC & Simulación de Ataques",
    terminal_subtitle: "Simule ataques informáticos reales (SSH Brute Force, Kerberoasting) y vea la respuesta SOC",
    terminal_prompt: "Ingrese comando (ej. simulate-attack, mitre, status, scan, logs, wazuh, help)...",

    // Contact
    contact_title: "Contacto",
    contact_subtitle: "Hablemos sobre proyectos de Ciberseguridad",
    contact_name: "Nombre Completo",
    contact_email: "Correo Electrónico",
    contact_subject: "Asunto",
    contact_message: "Mensaje",
    contact_send: "Enviar Mensaje",
    contact_sending: "Transmitiendo...",
    contact_success: "¡Mensaje enviado con éxito!",
    contact_info_phone: "Teléfono",
    contact_info_email: "Correo Directo",
    contact_info_location: "Ubicación",
    contact_info_linkedin: "Perfil LinkedIn",

    // Footer
    footer_rights: "Todos los derechos reservados.",
    footer_status: "Estado del SOC: OPERATIVO",
  },
  de: {
    // Navigation
    nav_about: "Über mich",
    nav_skills: "Fähigkeiten",
    nav_experience: "Erfahrung",
    nav_projects: "SIEM Projekte",
    nav_terminal: "SOC Cyber Lab",
    nav_contact: "Kontakt",
    nav_download_cv: "CV Herunterladen",

    // Hero
    hero_badge: "Netzwerk & Cybersicherheitsingenieur | SOC / SIEM Architect",
    hero_greeting: "Hallo, ich bin",
    hero_name: "ELJALAOUI MOURAD",
    hero_role_prefix: "Ingenieur für",
    hero_location: "Agadir, Marokko",
    hero_summary: "Ingenieur für Netzwerke, Systeme und Cybersicherheit. Entwickler einer SIEM-Lösung mit Wazuh zur Log-Zentralisierung von Active Directory, pfSense und DMZ-Linux-Servern.",
    hero_btn_projects: "SIEM Projekt Erkunden",
    hero_btn_cv: "CV Herunterladen",
    hero_btn_contact: "Kontaktieren",
    hero_stat_exp: "Jahre Erfahrung",
    hero_stat_nodes: "Gesicherte Knoten",
    hero_stat_siem: "SIEM Bereitstellungen",
    hero_stat_uptime: "Systemverfügbarkeit",

    // About
    about_title: "Über Mich",
    about_subtitle: "Expertise & Leidenschaft für IT-Infrastruktur & Sicherheit",
    about_bio1: "Ich bin ein engagierter Ingenieur für Netzwerke, Systemadministration und Cybersicherheit. Mein Ziel ist der Schutz kritischer Infrastrukturen vor Cyberbedrohungen.",
    about_bio2: "Ich habe eine vollständige SOC/SIEM-Infrastruktur mit Wazuh aufgebaut, die pfSense-Firewalls, Active Directory und Linux-DMZ-Server integriert.",
    about_education_title: "Ausbildung & Abschlüsse",
    about_degree1_title: "Ingenieurstudium der Informatik",
    about_degree1_sub: "Spezialisierung Netzwerke & Cybersicherheit",
    about_degree1_date: "2026",
    about_degree2_title: "Spezialisierter Netzwerktechniker",
    about_degree2_sub: "IT-Infrastruktur & Systeme",
    about_degree2_date: "2021",

    // Skills
    skills_title: "Technische Fähigkeiten",
    skills_subtitle: "Kompetenz in Cybersicherheit, Netzwerken & Systemen",
    cat_all: "Alle",
    cat_security: "Cybersicherheit & SIEM",
    cat_networking: "Netzwerke & Infrastruktur",
    cat_systems: "Systemadministration",
    skill_level_expert: "Experte",
    skill_level_advanced: "Fortgeschritten",
    skill_level_intermediate: "Mittelstufe",

    // Experience
    exp_title: "Berufserfahrung",
    exp_subtitle: "Praktische Erfahrung in Telekommunikation und IT-Management",
    exp_job1_role: "Produktionsoperator",
    exp_job1_company: "Maroc Telecom",
    exp_job1_period: "2022 - Heute",
    exp_job1_desc: "Überwachung von Telekommunikationsdiensten, Aufrechterhaltung der Betriebsbereitschaft von Netzwerkelementen und Störungsbehebung.",
    exp_job2_role: "IT-Techniker",
    exp_job2_company: "2easy",
    exp_job2_period: "2021 - 2022",
    exp_job2_desc: "IT-Wartung, Administration von Unternehmensnetzwerken, Benutzersupport und Härtung von Arbeitsplätzen.",
    exp_job3_role: "Netzwerktechniker",
    exp_job3_company: "CHU Mohammed VI Marrakech",
    exp_job3_period: "2021",
    exp_job3_desc: "Verwaltung der Krankenhausnetzwerkinfrastruktur, Troubleshooting von Routing/Switching und technischer Support.",

    // Projects
    projects_title: "Hauptprojekt: Wazuh SIEM & SOC-Architektur",
    projects_subtitle: "Zentralisierte Protokollierung & Bedrohungserkennung",
    siem_title: "Wazuh SIEM Plattform & Multi-Umgebungs-Überwachung",
    siem_desc: "Entwicklung einer Unternehmens-SIEM-Lösung mit Wazuh zur Aggregation von Protokollen aus pfSense, Active Directory und Linux-DMZ-Servern.",
    siem_arch_title: "Netzwerkarchitektur",
    siem_feat1: "Active Directory Log-Zentralisierung",
    siem_feat2: "pfSense Firewall & IDS/IPS-Integration",
    siem_feat3: "Überwachung von DMZ-Linux-Servern und Datei-Integrität",
    siem_feat4: "Echtzeit-Warnungen und benutzerdefinierte Dashboards",
    view_architecture: "Netzwerk & SIEM Topologie",
    live_demo_modal: "Wazuh Konsole Dashboard",
    view_pfsense_modal: "pfSense Firewall Regeln",

    // Terminal
    terminal_title: "SOC Terminal & Angriffssimulation",
    terminal_subtitle: "Simulieren Sie reale Cyber-Angriffe (SSH Brute Force, Kerberoasting) und beobachten Sie die SOC-Antwort",
    terminal_prompt: "Befehl eingeben (z.B. simulate-attack, mitre, status, scan, logs, wazuh, help)...",

    // Contact
    contact_title: "Kontakt",
    contact_subtitle: "Lassen Sie uns über Cybersicherheit und IT sprechen",
    contact_name: "Vollständiger Name",
    contact_email: "E-Mail-Adresse",
    contact_subject: "Betreff",
    contact_message: "Nachricht",
    contact_send: "Nachricht Senden",
    contact_sending: "Sichere Übertragung...",
    contact_success: "Nachricht erfolgreich gesendet!",
    contact_info_phone: "Telefon",
    contact_info_email: "Direkte E-Mail",
    contact_info_location: "Standort",
    contact_info_linkedin: "LinkedIn Profil",

    // Footer
    footer_rights: "Alle Rechte vorbehalten.",
    footer_status: "SOC Status: ONLINE",
  },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("fr");
  const [theme, setThemeState] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Auto detect browser language
    const savedLang = localStorage.getItem("preferred_lang") as Language;
    if (savedLang && ["fr", "en", "es", "de"].includes(savedLang)) {
      setLanguageState(savedLang);
    } else if (typeof window !== "undefined") {
      const browserLang = navigator.language.slice(0, 2).toLowerCase();
      if (browserLang === "fr" || browserLang === "en" || browserLang === "es" || browserLang === "de") {
        setLanguageState(browserLang as Language);
      }
    }

    const savedTheme = localStorage.getItem("preferred_theme") as "dark" | "light";
    if (savedTheme) {
      setThemeState(savedTheme);
      document.documentElement.classList.toggle("light-mode", savedTheme === "light");
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_lang", lang);
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setThemeState(nextTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_theme", nextTheme);
      document.documentElement.classList.toggle("light-mode", nextTheme === "light");
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["fr"]?.[key] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, theme, toggleTheme }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
