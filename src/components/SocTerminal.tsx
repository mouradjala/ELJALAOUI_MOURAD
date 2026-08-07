"use client";

import React, { useState, useRef, useEffect } from "react";
import { useI18n } from "@/context/I18nContext";
import { Terminal, Shield, Play, RotateCcw, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { motion } from "framer-motion";

interface LogEntry {
  id: string;
  type: "input" | "output" | "error" | "alert";
  content: string;
  timestamp: string;
}

export const SocTerminal: React.FC = () => {
  const { t } = useI18n();
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: "1",
      type: "output",
      content: "SOC Sentinel OS v3.4.1 [Wazuh Engine 4.8.0]",
      timestamp: "12:00:00 AM",
    },
    {
      id: "2",
      type: "output",
      content: "Connected to Manager: wazuh-manager.local [IP: 192.168.10.254]",
      timestamp: "12:00:01 AM",
    },
    {
      id: "3",
      type: "alert",
      content: "System Initialized. Type 'help' or click shortcut buttons below.",
      timestamp: "12:00:02 AM",
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleCommandSubmit = (cmdString?: string) => {
    const rawCmd = (cmdString || inputVal).trim().toLowerCase();
    if (!rawCmd) return;

    const time = new Date().toLocaleTimeString();
    const newLogs: LogEntry[] = [
      ...logs,
      { id: Math.random().toString(), type: "input", content: `root@soc-terminal:~# ${rawCmd}`, timestamp: time },
    ];

    switch (rawCmd) {
      case "help":
        newLogs.push({
          id: Math.random().toString(),
          type: "output",
          content: `Available SOC Commands:
  • status   : Check Wazuh Manager & Agent Connectivity
  • scan     : Perform Network Vulnerability & Port Scan
  • logs     : Retrieve Recent SIEM Security Event Logs
  • wazuh    : Inspect Active Directory & pfSense Rules
  • pfsense  : Check Firewall Active Sessions & Tunnels
  • clear    : Clear Terminal Display`,
          timestamp: time,
        });
        break;

      case "status":
        newLogs.push({
          id: Math.random().toString(),
          type: "output",
          content: `[+] Wazuh Manager Status : RUNNING (PID 4102)
[+] Agent 001 (pfSense-GW) : ACTIVE [192.168.1.1]
[+] Agent 002 (AD-DC-01)  : ACTIVE [192.168.10.10]
[+] Agent 003 (DMZ-Web-01): ACTIVE [10.0.5.20]
[+] OpenSearch Indexer    : GREEN (12,450,210 events indexed)`,
          timestamp: time,
        });
        break;

      case "scan":
        newLogs.push({
          id: Math.random().toString(),
          type: "output",
          content: `[*] Initiating Nmap Discovery on DMZ Subnet (10.0.5.0/24)...
[+] 10.0.5.20 - Port 80/tcp (HTTP) OPEN [Apache/2.4.52]
[+] 10.0.5.20 - Port 443/tcp (HTTPS) OPEN [TLSv1.3]
[+] 10.0.5.20 - Port 22/tcp (SSH) OPEN [OpenSSH 8.9p1 - Key Auth Only]
[!] Scan Complete: 0 Critical Vulnerabilities Found. Network Hardened.`,
          timestamp: time,
        });
        break;

      case "logs":
        newLogs.push(
          {
            id: Math.random().toString(),
            type: "alert",
            content: `[ALERT Level 10] Failed SSH authentication from IP 198.51.100.42 (Rule 5716 - Brute Force Attempt)`,
            timestamp: time,
          },
          {
            id: Math.random().toString(),
            type: "output",
            content: `[INFO Level 3] Active Directory: User 'mourad.jala' successfully authenticated via Kerberos ticket.`,
            timestamp: time,
          },
          {
            id: Math.random().toString(),
            type: "output",
            content: `[INFO Level 5] pfSense Firewall: Passed outbound HTTPS session for 192.168.10.105 -> 1.1.1.1:443`,
            timestamp: time,
          }
        );
        break;

      case "wazuh":
        newLogs.push({
          id: Math.random().toString(),
          type: "output",
          content: `=== Wazuh Rule Engine Configuration ===
Rule Group: windows_security, pfsense_filter, ssh_bruteforce
File Integrity Monitoring (FIM): ACTIVE on /etc/ /var/www/
Syslog Port: 514 (UDP/TCP) -> Decoded via Custom XML Parser`,
          timestamp: time,
        });
        break;

      case "pfsense":
        newLogs.push({
          id: Math.random().toString(),
          type: "output",
          content: `=== pfSense Gateway Telemetry ===
Interface WAN: 1000Mbps Full Duplex [Static IP]
Interface LAN: 192.168.10.1/24 (VLAN 10 Corporate)
Interface DMZ: 10.0.5.1/24 (VLAN 50 DMZ Web)
Active IPSec/OpenVPN Tunnels: 2 Active Tunnels (AES-256-GCM)`,
          timestamp: time,
        });
        break;

      case "clear":
        setLogs([]);
        setInputVal("");
        return;

      default:
        newLogs.push({
          id: Math.random().toString(),
          type: "error",
          content: `Command not recognized: '${rawCmd}'. Type 'help' for available commands.`,
          timestamp: time,
        });
        break;
    }

    setLogs(newLogs);
    setInputVal("");
  };

  return (
    <section id="terminal" className="py-24 relative bg-[#050B14]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B132B] border border-[#00F5D4]/30 text-xs font-mono text-[#00F5D4] mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>{t("terminal_title")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t("terminal_subtitle")}
          </h2>
          <div className="w-20 h-1 bg-[#00F5D4] mt-4 rounded-full shadow-[0_0_10px_#00F5D4]" />
        </div>

        {/* Terminal Window Box */}
        <div className="glass-panel rounded-2xl overflow-hidden border border-[#00F5D4]/40 shadow-2xl bg-[#050B14]/95">
          
          {/* Top Bar Controls */}
          <div className="bg-[#0B132B] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-300 ml-2">
                root@mourad-soc:~ (Wazuh Console v4.8)
              </span>
            </div>

            <button
              onClick={() => handleCommandSubmit("clear")}
              className="text-xs font-mono text-slate-400 hover:text-[#00F5D4] flex items-center gap-1 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>

          {/* Log Output Area */}
          <div className="p-6 font-mono text-xs sm:text-sm h-80 overflow-y-auto flex flex-col gap-2 leading-relaxed">
            {logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2">
                <span className="text-slate-500 select-none">[{log.timestamp}]</span>
                {log.type === "input" && (
                  <span className="text-[#00F5D4] font-bold">{log.content}</span>
                )}
                {log.type === "output" && (
                  <span className="text-slate-200 whitespace-pre-wrap">{log.content}</span>
                )}
                {log.type === "alert" && (
                  <span className="text-yellow-400 font-semibold">{log.content}</span>
                )}
                {log.type === "error" && (
                  <span className="text-red-400">{log.content}</span>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Buttons Bar */}
          <div className="px-6 py-2 bg-[#0B132B]/50 border-t border-white/5 flex flex-wrap gap-2">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mr-2">
              <Info className="w-3 h-3 text-[#00F5D4]" /> Shortcuts:
            </span>
            {["status", "scan", "logs", "wazuh", "pfsense", "help"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommandSubmit(cmd)}
                className="px-2.5 py-1 rounded bg-[#0B132B] border border-[#00F5D4]/30 text-[11px] font-mono text-[#00F5D4] hover:bg-[#00F5D4] hover:text-[#050B14] transition-all"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Interactive Command Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommandSubmit();
            }}
            className="p-4 bg-[#0B132B] border-t border-white/10 flex items-center gap-3"
          >
            <span className="font-mono text-[#00F5D4] font-bold text-sm">
              root@soc-terminal:~#
            </span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={t("terminal_prompt")}
              className="flex-1 bg-transparent text-white font-mono text-sm focus:outline-none focus:ring-0 placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-[#00F5D4] text-[#050B14] font-mono text-xs font-bold hover:bg-[#00F5D4]/90 transition-colors flex items-center gap-1"
            >
              <Play className="w-3 h-3" />
              <span>EXEC</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
