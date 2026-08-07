export interface SkillItem {
  id: string;
  name: string;
  category: "security" | "networking" | "systems";
  level: number; // percentage 0-100
  iconName: string;
  badge: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  roleKey: string; // key for i18n
  period: string;
  location: string;
  descKey: string;
  skills: string[];
  isCurrent?: boolean;
}

export interface EducationItem {
  id: string;
  degreeKey: string;
  subKey: string;
  institution: string;
  period: string;
}

export const skillsData: SkillItem[] = [
  // Security & SIEM
  {
    id: "wazuh",
    name: "Wazuh SIEM",
    category: "security",
    level: 92,
    iconName: "ShieldAlert",
    badge: "SOC Core",
    description: "SIEM Architecture, Agent Deployment, Manager Configuration, Log Parsing, Custom Rules",
  },
  {
    id: "siem_monitoring",
    name: "SIEM & Log Centralization",
    category: "security",
    level: 90,
    iconName: "Activity",
    badge: "Surveillance",
    description: "Syslog, Active Directory Event Logs, pfSense firewall logs, Kibana/Wazuh Dashboards",
  },
  {
    id: "pfsense",
    name: "pfSense & Firewalling",
    category: "security",
    level: 88,
    iconName: "Lock",
    badge: "Network Defense",
    description: "Rule Management, NAT, IPsec/OpenVPN Tunnels, Snort IDS/IPS Integration",
  },
  {
    id: "incident_detection",
    name: "Incident Detection & Response",
    category: "security",
    level: 85,
    iconName: "Zap",
    badge: "Threat Hunting",
    description: "Behavioral analysis, alert triage, root-cause analysis, malware mitigation",
  },
  
  // Networking
  {
    id: "net_troubleshooting",
    name: "Network Troubleshooting",
    category: "networking",
    level: 92,
    iconName: "Network",
    badge: "Diagnostic",
    description: "Packet analysis with Wireshark, latency troubleshooting, TCP/IP stack analysis",
  },
  {
    id: "routing_switching",
    name: "Routing & Switching",
    category: "networking",
    level: 88,
    iconName: "Server",
    badge: "Cisco & Enterprise",
    description: "VLANs, Trunking, OSPF, BGP basics, STP, Switch/Router configuration",
  },
  {
    id: "dmz_architecture",
    name: "DMZ & Network Segmentation",
    category: "networking",
    level: 86,
    iconName: "Layers",
    badge: "Architecture",
    description: "Isolating web/mail servers in DMZ, zero-trust network boundaries, subnetting",
  },

  // Systems & Maintenance
  {
    id: "active_directory",
    name: "Active Directory & Windows Server",
    category: "systems",
    level: 88,
    iconName: "Cpu",
    badge: "Domain Admin",
    description: "Domain Controllers, GPOs, Kerberos, DNS, DHCP, Audit policies",
  },
  {
    id: "linux_admin",
    name: "Linux Administration (Ubuntu/Debian)",
    category: "systems",
    level: 86,
    iconName: "Terminal",
    badge: "Server OS",
    description: "Apache/Nginx hardening, SSH keys, cron jobs, Systemd, shell scripting",
  },
  {
    id: "it_maintenance",
    name: "System Monitoring & IT Maintenance",
    category: "systems",
    level: 90,
    iconName: "Wrench",
    badge: "Ops & Support",
    description: "Workstation maintenance, hardware diagnostics, backup management, SLA support",
  },
];

export const experiencesData: ExperienceItem[] = [
  {
    id: "maroc_telecom",
    company: "Maroc Telecom",
    roleKey: "exp_job1_role",
    period: "2022 - Present",
    location: "Morocco",
    descKey: "exp_job1_desc",
    skills: ["Telecom Networks", "Production Monitoring", "Incident Management", "Infrastructure Support"],
    isCurrent: true,
  },
  {
    id: "2easy",
    company: "2easy",
    roleKey: "exp_job2_role",
    period: "2021 - 2022",
    location: "Morocco",
    descKey: "exp_job2_desc",
    skills: ["Network Admin", "Workstation Hardening", "IT Maintenance", "User Support"],
  },
  {
    id: "chu_marrakech",
    company: "CHU Mohammed VI Marrakech",
    roleKey: "exp_job3_role",
    period: "2021",
    location: "Marrakech, Morocco",
    descKey: "exp_job3_desc",
    skills: ["Hospital IT Infrastructure", "Switching & Routing", "Hardware Setup", "Network Diagnostics"],
  },
];

export const educationData: EducationItem[] = [
  {
    id: "eng_degree",
    degreeKey: "about_degree1_title",
    subKey: "about_degree1_sub",
    institution: "Engineering School",
    period: "2026",
  },
  {
    id: "spec_tech",
    degreeKey: "about_degree2_title",
    subKey: "about_degree2_sub",
    institution: "OFPPT / Specialized Institute",
    period: "2021",
  },
];

export const projectSiemDetails = {
  title: "SIEM Wazuh Enterprise Architecture",
  tagline: "Centralized Security Event Management & Multi-Tier Threat Detection",
  components: [
    {
      name: "pfSense Firewall",
      role: "Perimeter Security & Gateway",
      desc: "Handles network access control, VPN tunnels, and exports firewall filter logs via Syslog directly to Wazuh.",
      icon: "ShieldCheck",
    },
    {
      name: "Active Directory (DC)",
      role: "Identity & Authentication",
      desc: "Windows Server Domain Controller exporting security event logs (ID 4624, 4625, 4720) for credential audit.",
      icon: "Key",
    },
    {
      name: "Linux Servers (DMZ)",
      role: "Public Facing Services",
      desc: "Segmented Web/API servers in DMZ running Wazuh agent with File Integrity Monitoring (FIM) & Rootcheck.",
      icon: "Server",
    },
    {
      name: "Wazuh SIEM Manager & Indexer",
      role: "Central Intelligence & Dashboard",
      desc: "Processes incoming telemetry, correlates events across nodes, triggers real-time alerts & visualizes metrics in OpenSearch/Kibana.",
      icon: "Eye",
    },
  ],
};
