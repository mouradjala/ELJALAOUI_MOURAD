import os
from PIL import Image, ImageDraw, ImageOps
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, Image as RLImage
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def prepare_profile_photo():
    src_path = os.path.join("public", "images", "profile.png")
    dst_path = os.path.join("public", "images", "profile_cv_circle.png")
    if os.path.exists(src_path):
        img = Image.open(src_path).convert('RGBA')
        size = (300, 300)
        img = ImageOps.fit(img, size, Image.Resampling.LANCZOS)
        
        mask = Image.new('L', size, 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0) + size, fill=255)
        
        output = Image.new('RGBA', size, (0, 0, 0, 0))
        output.paste(img, (0, 0), mask=mask)
        
        draw_out = ImageDraw.Draw(output)
        draw_out.ellipse((2, 2, size[0]-2, size[1]-2), outline='#00B4D8', width=6)
        output.save(dst_path)
    return dst_path

def build_advanced_pdf():
    photo_path = prepare_profile_photo()
    pdf_path = os.path.join("public", "CV_ELJALAOUI_MOURAD.pdf")
    
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        rightMargin=24,
        leftMargin=24,
        topMargin=24,
        bottomMargin=24
    )

    styles = getSampleStyleSheet()

    # Color Palette
    navy_dark = colors.HexColor("#0B132B")      # Main Headers & Primary Navy
    teal_accent = colors.HexColor("#00B4D8")    # Accent Teal
    teal_dark = colors.HexColor("#0077B6")      # Sub-headers
    text_dark = colors.HexColor("#1E293B")      # Text Body
    text_muted = colors.HexColor("#475569")     # Subtext
    bg_sidebar = colors.HexColor("#F8FAFC")     # Light Slate Background for Sidebar
    bg_card = colors.HexColor("#F1F5F9")        # Card background

    # Typography Styles
    title_name = ParagraphStyle(
        'NameTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        textColor=navy_dark
    )

    subtitle_role = ParagraphStyle(
        'RoleSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=15,
        textColor=teal_dark
    )

    sidebar_heading = ParagraphStyle(
        'SidebarHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10.5,
        leading=14,
        textColor=navy_dark,
        spaceBefore=8,
        spaceAfter=4
    )

    sidebar_text = ParagraphStyle(
        'SidebarText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_dark
    )

    sidebar_label = ParagraphStyle(
        'SidebarLabel',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=12,
        textColor=navy_dark
    )

    main_heading = ParagraphStyle(
        'MainHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11.5,
        leading=15,
        textColor=navy_dark,
        spaceBefore=6,
        spaceAfter=3
    )

    body_text = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.8,
        leading=13,
        textColor=text_dark,
        alignment=TA_JUSTIFY
    )

    bullet_text = ParagraphStyle(
        'BulletText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=12,
        textColor=text_dark,
        leftIndent=8
    )

    job_title = ParagraphStyle(
        'JobTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13,
        textColor=navy_dark
    )

    job_meta = ParagraphStyle(
        'JobMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=12,
        textColor=teal_dark,
        alignment=TA_RIGHT
    )

    # -------------------------------------------------------------
    # LEFT SIDEBAR CONTENT
    # -------------------------------------------------------------
    sidebar_flowables = []

    # 1. Profile Photo
    if os.path.exists(photo_path):
        rl_img = RLImage(photo_path, width=88, height=88)
        sidebar_flowables.append(rl_img)
        sidebar_flowables.append(Spacer(1, 8))

    # 2. Contact Info
    sidebar_flowables.append(Paragraph("<b>CONTACT</b>", sidebar_heading))
    sidebar_flowables.append(HRFlowable(width="100%", thickness=1, color=teal_accent, spaceBefore=1, spaceAfter=4))
    
    contacts = [
        ("• Localisation :", "Agadir, Maroc"),
        ("• Téléphone :", "+212 622-823460"),
        ("• Email :", "mouradjala4@gmail.com"),
        ("• LinkedIn :", "linkedin.com/in/mourad")
    ]
    for lbl, val in contacts:
        sidebar_flowables.append(Paragraph(f"<b>{lbl}</b> {val}", sidebar_text))
        sidebar_flowables.append(Spacer(1, 2))

    sidebar_flowables.append(Spacer(1, 6))

    # 3. Compétences Techniques (Pillars)
    sidebar_flowables.append(Paragraph("<b>COMPÉTENCES</b>", sidebar_heading))
    sidebar_flowables.append(HRFlowable(width="100%", thickness=1, color=teal_accent, spaceBefore=1, spaceAfter=4))

    skills_categories = [
        ("Cybersécurité & SIEM", [
            "• Wazuh SIEM (Rule Engine)",
            "• Centralisation Logs (Syslog)",
            "• IDS/IPS (Snort / Suricata)",
            "• Active Response & Alerting",
            "• Audit Active Directory"
        ]),
        ("Réseaux & Sécurité", [
            "• pfSense Firewall & DMZ",
            "• Tunnels VPN (IPsec/OpenVPN)",
            "• Cisco Routers & Switches",
            "• Segmentation VLANs & ACLs",
            "• Wireshark & Nmap"
        ]),
        ("Systèmes & Monitoring", [
            "• Active Directory (GPO, DNS)",
            "• Windows Server & Linux",
            "• OpenSearch / Kibana",
            "• Supervision & MCO"
        ])
    ]

    for cat, items in skills_categories:
        sidebar_flowables.append(Paragraph(f"<b>{cat}</b>", sidebar_label))
        for it in items:
            sidebar_flowables.append(Paragraph(it, sidebar_text))
        sidebar_flowables.append(Spacer(1, 4))

    # 4. Langues
    sidebar_flowables.append(Paragraph("<b>LANGUES</b>", sidebar_heading))
    sidebar_flowables.append(HRFlowable(width="100%", thickness=1, color=teal_accent, spaceBefore=1, spaceAfter=4))
    sidebar_flowables.append(Paragraph("• <b>Français :</b> Courant", sidebar_text))
    sidebar_flowables.append(Paragraph("• <b>Anglais :</b> Technique", sidebar_text))
    sidebar_flowables.append(Paragraph("• <b>Arabe :</b> Maternelle", sidebar_text))


    # -------------------------------------------------------------
    # RIGHT MAIN CONTENT
    # -------------------------------------------------------------
    main_flowables = []

    # 1. Header Name & Title
    main_flowables.append(Paragraph("ELJALAOUI MOURAD", title_name))
    main_flowables.append(Spacer(1, 2))
    main_flowables.append(Paragraph("INGÉNIEUR RÉSEAUX & CYBERSÉCURITÉ | ARCHITECTE SIEM WAZUH", subtitle_role))
    main_flowables.append(Spacer(1, 6))
    main_flowables.append(HRFlowable(width="100%", thickness=1.5, color=navy_dark, spaceBefore=0, spaceAfter=6))

    # 2. Profil Professionnel
    main_flowables.append(Paragraph("PROFIL PROFESSIONNEL", main_heading))
    summary_box = Paragraph(
        "Ingénieur spécialisé en réseaux informatiques, systèmes et cybersécurité. Concepteur et intégrateur d'une infrastructure <b>SIEM d'entreprise basée sur Wazuh</b>, centralisant les journaux d'Active Directory, du pare-feu pfSense, de serveurs Linux (DMZ) et d'hôtes Windows pour la détection proactive des menaces, la réponse aux incidents et le durcissement d'infrastructures IT.",
        body_text
    )
    main_flowables.append(summary_box)
    main_flowables.append(Spacer(1, 6))

    # 3. Expériences Professionnelles
    main_flowables.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#CBD5E1"), spaceBefore=2, spaceAfter=4))
    main_flowables.append(Paragraph("PARCOURS PROFESSIONNEL", main_heading))

    experiences = [
        {
            "role": "Opérateur de Production",
            "company": "Maroc Telecom",
            "period": "2022 - Présent",
            "bullets": [
                "Surveillance et maintien en condition opérationnelle (MCO) des équipements réseaux et services télécoms de production.",
                "Supervision continue des infrastructures critiques, diagnostic des anomalies et gestion des escalades d'incidents.",
            ]
        },
        {
            "role": "Technicien Informatique",
            "company": "2easy",
            "period": "2021 - 2022",
            "bullets": [
                "Administration des réseaux d'entreprise, maintenance matérielle/logicielle et durcissement des postes de travail.",
                "Assistance technique utilisateurs et résolution des incidents système et réseau de niveau 1 & 2.",
            ]
        },
        {
            "role": "Technicien Réseaux",
            "company": "CHU Mohammed VI Marrakech",
            "period": "2021",
            "bullets": [
                "Gestion de l'infrastructure réseau hospitalière, configuration des switchs/routeurs Cisco et découpage VLANs.",
                "Dépannage réseau sur le terrain et analyse de paquets pour garantir la haute disponibilité des services de santé.",
            ]
        }
    ]

    for exp in experiences:
        t_exp = Table(
            [[Paragraph(f"<b>{exp['role']}</b> &nbsp;|&nbsp; <font color='#0077B6'><b>{exp['company']}</b></font>", job_title),
              Paragraph(exp['period'], job_meta)]],
            colWidths=[260, 100]
        )
        t_exp.setStyle(TableStyle([
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('LEFTPADDING', (0,0), (-1,-1), 0),
            ('RIGHTPADDING', (0,0), (-1,-1), 0),
            ('BOTTOMPADDING', (0,0), (-1,-1), 1),
            ('TOPPADDING', (0,0), (-1,-1), 2),
        ]))
        main_flowables.append(t_exp)
        for b in exp['bullets']:
            main_flowables.append(Paragraph(f"• {b}", bullet_text))
        main_flowables.append(Spacer(1, 4))

    # 4. Projet Phare (SIEM Wazuh & SOC Architecture)
    main_flowables.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#CBD5E1"), spaceBefore=2, spaceAfter=4))
    main_flowables.append(Paragraph("PROJET PHARE : ARCHITECTURE SIEM WAZUH & SOC", main_heading))
    
    project_bullets = [
        "<b>Centralisation Multi-Sources:</b> Agrégation en temps réel des logs Active Directory (Kerberos, Auth), pare-feu pfSense (filtrage, VPN, Snort IDS) et serveurs Web Linux DMZ.",
        "<b>Corrélation & Active Response:</b> Écriture de règles XML sur mesure et script d'action automatisée bloquant instantanément les adresses IP attaquantes sur pfSense (Brute-force SSH, Kerberoasting).",
        "<b>Tableaux de Bord Kibana:</b> Modélisation d'indicateurs clés de performance (KPI SOC), analyse de tendances de menaces et audit de conformité."
    ]
    for pb in project_bullets:
        main_flowables.append(Paragraph(f"• {pb}", bullet_text))

    main_flowables.append(Spacer(1, 6))

    # 5. Formation & Diplômes
    main_flowables.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#CBD5E1"), spaceBefore=2, spaceAfter=4))
    main_flowables.append(Paragraph("FORMATION & DIPLÔMES", main_heading))

    edus = [
        [Paragraph("<b>Diplôme d'Ingénieur en Informatique</b> (Réseaux & Cybersécurité)", job_title), Paragraph("2026", job_meta)],
        [Paragraph("<b>Technicien Spécialisé en Réseaux Informatiques</b>", job_title), Paragraph("2021", job_meta)]
    ]
    t_edu = Table(edus, colWidths=[280, 80])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
    ]))
    main_flowables.append(t_edu)


    # -------------------------------------------------------------
    # ASSEMBLE 2-COLUMN TABLE LAYOUT
    # -------------------------------------------------------------
    master_table = Table(
        [[sidebar_flowables, main_flowables]],
        colWidths=[185, 375]
    )

    master_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BACKGROUND', (0,0), (0,0), bg_sidebar),
        ('LEFTPADDING', (0,0), (0,0), 12),
        ('RIGHTPADDING', (0,0), (0,0), 12),
        ('TOPPADDING', (0,0), (0,0), 10),
        ('BOTTOMPADDING', (0,0), (0,0), 10),
        ('LEFTPADDING', (1,0), (1,0), 14),
        ('RIGHTPADDING', (1,0), (1,0), 4),
        ('TOPPADDING', (1,0), (1,0), 4),
        ('BOTTOMPADDING', (1,0), (1,0), 4),
        ('LINERIGHT', (0,0), (0,0), 1, colors.HexColor("#E2E8F0")),
    ]))

    doc.build([master_table])
    print("Advanced Executive PDF CV with photo created at public/CV_ELJALAOUI_MOURAD.pdf")

if __name__ == "__main__":
    build_advanced_pdf()
