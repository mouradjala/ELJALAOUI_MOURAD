"use client";

import React, { useState, useRef, useEffect } from "react";
import { useI18n } from "@/context/I18nContext";
import { Terminal, Shield, Play, RotateCcw, AlertTriangle, CheckCircle, Info, Flame, ShieldAlert, Cpu } from "lucide-react";
import { motion } from "framer-motion";

interface LogEntry {
  id: string;
  type: "input" | "output" | "error" | "alert" | "attack";
  content: string;
  timestamp: string;
}

export const SocTerminal: React.FC = () => {
  const { t } = useI18n();
  const [inputVal, setInputVal] = useState("");
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      id: "1",
      type: "output",
      content: "SOC Sentinel OS v3.4.1 [Wazuh SIEM Engine 4.8.0]",
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
      content: "System Initialized. Type 'simulate-attack', 'mitre', or click shortcuts below.",
      timestamp: "12:00:02 AM",
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const runAttackSimulation = () => {
    setIsSimulating(true);
    const time = new Date().toLocaleTimeString();

    setLogs((prev) => [
      ...prev,
      { id: Math.random().toString(), type: "input", content: `root@soc-terminal:~# simulate-attack`, timestamp: time },
      { id: Math.random().toString(), type: "alert", content: `[⚡ SIMULATION STARTED] Live Multi-Stage Cyber Attack Simulation Executing...`, timestamp: time },
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: "attack", content: `[STAGE 1 - RECONNAISSANCE] External IP 198.51.100.42 initiating SYN port scan on DMZ (10.0.5.20)...`, timestamp: new Date().toLocaleTimeString() },
      ]);
    }, 800);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: "attack", content: `[STAGE 2 - EXPLOITATION] 1,450 SSH brute-force attempts detected against root@10.0.5.20:22`, timestamp: new Date().toLocaleTimeString() },
        { id: Math.random().toString(), type: "alert", content: `[🔥 CRITICAL ALERT - LEVEL 12] Wazuh Rule 5716: High-frequency authentication failure threshold exceeded!`, timestamp: new Date().toLocaleTimeString() },
      ]);
    }, 1800);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: "attack", content: `[STAGE 3 - LATERAL MOVEMENT] Active Directory Kerberoasting attempt targeting ServiceAccount 'svc_sql' [T1558.003]`, timestamp: new Date().toLocaleTimeString() },
      ]);
    }, 2800);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        { id: Math.random().toString(), type: "output", content: `[🛡️ ACTIVE RESPONSE TRIGGERED] Wazuh Active-Response executing pfSense API script...`, timestamp: new Date().toLocaleTimeString() },
        { id: Math.random().toString(), type: "output", content: `[+] pfSense Firewall: IP 198.51.100.42 added to WAN Blocked Aliases table (pfblockerng).`, timestamp: new Date().toLocaleTimeString() },
        { id: Math.random().toString(), type: "output", content: `[+] Active Directory: Kerberos ticket for 'svc_sql' revoked & account password force-reset.`, timestamp: new Date().toLocaleTimeString() },
        { id: Math.random().toString(), type: "alert", content: `[✅ INCIDENT CONTAINED] Attack mitigated in 3.4 seconds. Incident Log ID #INC-9402 archived in OpenSearch.`, timestamp: new Date().toLocaleTimeString() },
      ]);
      setIsSimulating(false);
    }, 3800);
  };

  const handleCommandSubmit = (cmdString?: string) => {
    const rawCmd = (cmdString || inputVal).trim().toLowerCase();
    if (!rawCmd) return;

    if (rawCmd === "simulate-attack" || rawCmd === "attack") {
      runAttackSimulation();
      setInputVal("");
      return;
    }

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
          content: `Available SOC Cyber Commands:
  • simulate-attack : Execute a Live Multi-Stage Cyber Attack & Automated SOC Mitigation
  • mitre           : Display MITRE ATT&CK Threat Mapping Matrix
  • playbook        : View Automated Incident Response Playbook Execution
  • status          : Check Wazuh Manager & Agent Connectivity
  • scan            : Perform Network Vulnerability & Port Scan
  • logs            : Retrieve Recent SIEM Security Event Logs
  • wazuh           : Inspect Active Directory & pfSense Rules
  • pfsense         : Check Firewall Active Sessions & Tunnels
  • clear           : Clear Terminal Display`,
          timestamp: time,
        });
        break;

      case "mitre":
        newLogs.push({
          id: Math.random().toString(),
          type: "output",
          content: `=== MITRE ATT&CK Matrix Threat Mapping ===
[Tactic: Initial Access]  -> T1190 Exploit Public-Facing Application (pfSense Filtered)
[Tactic: Credential Access] -> T1110.001 Brute Force (SSH Wazuh Active Response Block)
[Tactic: Credential Access] -> T1558.003 Kerberoasting (AD GPO Security Hardened)
[Tactic: Defense Evasion]   -> T1070 Indicator Removal (Syslog Immutable Remote Audit Log)`,
          timestamp: time,
        });
        break;

      case "playbook":
        newLogs.push({
          id: Math.random().toString(),
          type: "output",
          content: `=== SOC Incident Response Playbook (IR-PB-402) ===
Step 1: Triage Alert -> Classify severity via Wazuh rule engine
Step 2: Containment -> Isolate host & push IP drop rule to pfSense WAN
Step 3: Eradication -> Kill malicious process, revoke Kerberos tickets
Step 4: Recovery    -> Verify service integrity (FIM) & restore baseline
Step 5: Post-Mortem -> Export forensic artifact report to OpenSearch Indexer`,
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
          content: `Command not recognized: '${rawCmd}'. Type 'help' or 'simulate-attack' for available options.`,
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
          <div className="bg-[#0B132B] px-4 py-3 border-b border-white/10 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-300 ml-2">
                root@mourad-soc:~ (Wazuh Console v4.8)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={runAttackSimulation}
                disabled={isSimulating}
                className="px-3 py-1 rounded bg-gradient-to-r from-red-600 to-amber-600 text-white font-mono text-xs font-bold hover:opacity-90 flex items-center gap-1 shadow-[0_0_12px_rgba(239,68,68,0.5)] disabled:opacity-50"
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Simulate Attack</span>
              </button>

              <button
                onClick={() => handleCommandSubmit("clear")}
                className="text-xs font-mono text-slate-400 hover:text-[#00F5D4] flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear</span>
              </button>
            </div>
          </div>

          {/* Log Output Area */}
          <div className="p-6 font-mono text-xs sm:text-sm h-96 overflow-y-auto flex flex-col gap-2 leading-relaxed">
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
                {log.type === "attack" && (
                  <span className="text-red-400 font-semibold">{log.content}</span>
                )}
                {log.type === "error" && (
                  <span className="text-red-400">{log.content}</span>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Quick Command Buttons Bar */}
          <div className="px-6 py-2 bg-[#0B132B]/50 border-t border-white/5 flex flex-wrap gap-2 items-center">
            <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mr-2">
              <Info className="w-3 h-3 text-[#00F5D4]" /> Shortcuts:
            </span>
            {[
              { cmd: "simulate-attack", label: "⚡ Attack Sim" },
              { cmd: "mitre", label: "🎯 MITRE Matrix" },
              { cmd: "playbook", label: "📋 IR Playbook" },
              { cmd: "status", label: "Status" },
              { cmd: "scan", label: "Nmap Scan" },
              { cmd: "logs", label: "SIEM Logs" },
              { cmd: "wazuh", label: "Wazuh Rules" },
              { cmd: "pfsense", label: "pfSense GW" },
            ].map((btn) => (
              <button
                key={btn.cmd}
                onClick={() => handleCommandSubmit(btn.cmd)}
                className="px-2.5 py-1 rounded bg-[#0B132B] border border-[#00F5D4]/30 text-[11px] font-mono text-[#00F5D4] hover:bg-[#00F5D4] hover:text-[#050B14] transition-all"
              >
                {btn.label}
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
              disabled={isSimulating}
              className="px-4 py-1.5 rounded-lg bg-[#00F5D4] text-[#050B14] font-mono text-xs font-bold hover:bg-[#00F5D4]/90 transition-colors flex items-center gap-1 disabled:opacity-50"
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
