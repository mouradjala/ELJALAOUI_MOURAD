import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def build_pdf():
    pdf_path = os.path.join("public", "CV_ELJALAOUI_MOURAD.pdf")
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=36,
        leftMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()

    # Color Palette
    primary_color = colors.HexColor("#0B132B")   # Dark Navy
    accent_color = colors.HexColor("#00B4D8")    # Cyber Teal
    subtext_color = colors.HexColor("#475569")   # Slate
    body_color = colors.HexColor("#1E293B")      # Dark Text

    # Custom Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=22,
        leading=26,
        textColor=primary_color,
        alignment=TA_CENTER
    )

    subtitle_style = ParagraphStyle(
        'DocSubTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=accent_color,
        alignment=TA_CENTER
    )

    contact_style = ParagraphStyle(
        'ContactText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=subtext_color,
        alignment=TA_CENTER
    )

    section_heading = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=primary_color,
        spaceBefore=10,
        spaceAfter=4
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        textColor=body_color,
        alignment=TA_JUSTIFY
    )

    bullet_style = ParagraphStyle(
        'BulletCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=body_color,
        leftIndent=12
    )

    job_title_style = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=primary_color
    )

    job_meta_style = ParagraphStyle(
        'JobMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=13,
        textColor=accent_color,
        alignment=TA_RIGHT
    )

    story = []

    # 1. Header Section
    story.append(Paragraph("ELJALAOUI MOURAD", title_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph("INGÉNIEUR RÉSEAUX & CYBERSÉCURITÉ | ARCHITECTE SIEM WAZUH", subtitle_style))
    story.append(Spacer(1, 6))
    
    contact_text = "<b>Localisation:</b> Agadir, Maroc &nbsp;|&nbsp; <b>Tél:</b> +212 622-823460 &nbsp;|&nbsp; <b>Email:</b> mouradjala4@gmail.com &nbsp;|&nbsp; <b>LinkedIn:</b> linkedin.com/in/eljalaoui-mourad"
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1.5, color=accent_color, spaceBefore=2, spaceAfter=8))

    # 2. Profil Professionnel
    story.append(Paragraph("PROFIL PROFESSIONNEL", section_heading))
    summary_p = Paragraph(
        "Ingénieur spécialisé en réseaux informatiques, systèmes et cybersécurité. Concepteur et intégrateur d'une solution <b>SIEM d'entreprise basée sur Wazuh</b>, centralisant les journaux d'Active Directory, du pare-feu pfSense, de serveurs Linux (DMZ) et d'hôtes Windows pour la détection proactive des menaces, la réponse aux incidents et le durcissement d'infrastructures IT.",
        body_style
    )
    story.append(summary_p)
    story.append(Spacer(1, 6))

    # 3. Compétences Techniques
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#E2E8F0"), spaceBefore=4, spaceAfter=6))
    story.append(Paragraph("COMPÉTENCES TECHNIQUES", section_heading))
    
    skills_data = [
        [
            Paragraph("<b>Cybersécurité & SIEM:</b>", body_style),
            Paragraph("Wazuh SIEM, Centralisation de Logs (Syslog/WinEvent), IDS/IPS (Snort), Détection d'incidents, Audit Active Directory.", body_style)
        ],
        [
            Paragraph("<b>Réseaux & Sécurité:</b>", body_style),
            Paragraph("pfSense Firewall, Tunnels VPN (IPsec/OpenVPN), Routers & Switches Cisco, Segmentation VLAN, DMZ, Wireshark, Nmap.", body_style)
        ],
        [
            Paragraph("<b>Systèmes & Admin:</b>", body_style),
            Paragraph("Active Directory (GPO, DNS, Kerberos), Windows Server, Linux (Ubuntu/Debian), Maintenance Informatique, Supervision IT.", body_style)
        ]
    ]

    t_skills = Table(skills_data, colWidths=[130, 410])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 6))

    # 4. Expérience Professionnelle
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#E2E8F0"), spaceBefore=4, spaceAfter=6))
    story.append(Paragraph("EXPÉRIENCE PROFESSIONNELLE", section_heading))

    exps = [
        {
            "role": "Opérateur de Production",
            "company": "Maroc Telecom",
            "period": "2022 - Présent",
            "desc": [
                "Surveillance et maintien en condition opérationnelle (MCO) des équipements réseaux et services télécoms critiques.",
                "Analyse continue des incidents de production, diagnostic des anomalies et supervision de l'infrastructure de production.",
            ]
        },
        {
            "role": "Technicien Informatique",
            "company": "2easy",
            "period": "2021 - 2022",
            "desc": [
                "Administration des réseaux d'entreprise, maintenance matérielle/logicielle et durcissement de la sécurité des postes de travail.",
                "Assistance technique utilisateurs et résolution des incidents système et réseau de niveau 1 & 2.",
            ]
        },
        {
            "role": "Technicien Réseaux",
            "company": "CHU Mohammed VI Marrakech",
            "period": "2021",
            "desc": [
                "Gestion de l'infrastructure réseau hospitalière, déploiement et configuration des routeurs/switchs Cisco.",
                "Dépannage réseau sur le terrain, analyse de paquets et maintien de la continuité de service des réseaux de santé.",
            ]
        }
    ]

    for exp in exps:
        header_table = Table(
            [[Paragraph(f"<b>{exp['role']}</b> &nbsp;—&nbsp; <font color='#00B4D8'><b>{exp['company']}</b></font>", job_title_style),
              Paragraph(exp['period'], job_meta_style)]],
            colWidths=[400, 140]
        )
        header_table.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 2),
        ]))
        story.append(header_table)
        for bullet in exp['desc']:
            story.append(Paragraph(f"• {bullet}", bullet_style))
        story.append(Spacer(1, 4))

    # 5. Projet Phare (SIEM Wazuh & SOC)
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#E2E8F0"), spaceBefore=4, spaceAfter=6))
    story.append(Paragraph("PROJET PHARE : ARCHITECTURE SIEM WAZUH & SOC", section_heading))
    siem_desc = [
        "<b>Intégration Multi-Sources:</b> Collecte et centralisation des journaux Active Directory (Authentication, GPO), pfSense Firewall (Traffic, VPN, Snort IDS) et serveurs Linux DMZ.",
        "<b>Détection & Réponse Automatisée:</b> Création de règles XML de corrélation Wazuh pour la détection d'attaques SSH Brute Force, Kerberoasting et déclenchement de blocages d'IP automatisés sur pfSense."
    ]
    for b in siem_desc:
        story.append(Paragraph(f"• {b}", bullet_style))
    story.append(Spacer(1, 6))

    # 6. Formation & Éducation
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#E2E8F0"), spaceBefore=4, spaceAfter=6))
    story.append(Paragraph("FORMATION & DIPLÔMES", section_heading))

    edus = [
        [Paragraph("<b>Diplôme d'Ingénieur en Informatique</b> (Réseaux & Cybersécurité)", job_title_style), Paragraph("2026", job_meta_style)],
        [Paragraph("<b>Technicien Spécialisé en Réseaux Informatiques</b>", job_title_style), Paragraph("2021", job_meta_style)]
    ]
    t_edu = Table(edus, colWidths=[440, 100])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    story.append(t_edu)

    doc.build(story)
    print("PDF CV Generated successfully at public/CV_ELJALAOUI_MOURAD.pdf")

if __name__ == "__main__":
    build_pdf()
