import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Award, Code2, Database, Brain, BarChart3, Truck, Briefcase } from 'lucide-react';

import socialMediaImg from './assets/images/social_media_1779880703181.png';
import aiChatbotImg from './assets/images/ai_chatbot_1779880723142.png';
import mlImg from './assets/images/ml_classification_1779880742633.png';
import travelImg from './assets/images/travel_dashboard_1779880762079.png';
import posImg from './assets/images/pos_system_1779880778193.png';
import trainingImg from './assets/images/training_portal_1779880799421.png';
import salesDashboardDaImg from './assets/images/sales_dashboard_da_1779891857802.png';
import supplyChainDaImg from './assets/images/supply_chain_da_1779891876572.png';
import customGptImg from './assets/images/custom_gpt_1783587078376.jpg';

export const PERSONAL_INFO = {
  name: "CHO LAY MON @ PINKY",
  chineseName: "刘英",
  title: "Analyst & AI Automation Specialist | Enterprise Solutions",
  email: "monlaycho1997@gmail.com",
  phone: "+65 97904514",
  location: "838 Hougang Central, #04-511, 530838, Singapore",
  linkedin: "https://www.linkedin.com/in/cholaymon/",
  github: "https://github.com/ChoLayMonPinky",
  summary: "National University of Singapore (NUS) Graduate Diploma in Systems Analysis graduate specializing in high-performance automation workflows, dynamic KPI dashboards, and enterprise-grade system architecture. Expert in transforming complex, unstructured datasets into actionable business insights and high-efficiency automated solutions. Proven track record in System/Business Analysis—gathering requirements from over 150 international users—and Data Analysis, optimizing enterprise KPI reporting and workflow automation to boost operational efficiency by 20-30%. Proficient in Python, SQL, Power BI, and robust AI automation frameworks (n8n, Make.com) to bridge business needs with state-of-the-art technological solutions.",
};

export const SKILLS = [
  {
    category: "Data Analytics & Visualisation",
    icon: BarChart3,
    items: ["Pandas", "NumPy", "Power BI", "Advanced MS Excel", "Data Cleaning", "Statistical Analysis"]
  },
  {
    category: "System & Business Analysis",
    icon: Code2,
    items: ["Requirements Gathering", "UML Modeling", "Agile Development (SDLC)", "Software Architecture Design", "UAT"]
  },
  {
    category: "Programming & Databases",
    icon: Database,
    items: ["Python", "SQL", "Java", "JavaScript", "Kotlin", "Spring Boot", "MySQL", "AWS (EC2, S3)"]
  },
  {
    category: "AI & Automation",
    icon: Brain,
    items: ["n8n", "Make.com", "OpenAI API", "REST APIs", "Webhooks", "Generative AI Specialisations"]
  },
  {
    category: "Logistics Analysis",
    icon: Truck,
    items: ["FMS", "WMS", "ACC concepts", "Inventory Management", "Supply Chain Workflow Optimisation"]
  },
  {
    category: "Project Management",
    icon: Briefcase,
    items: ["Project Administration & Coordination", "Project Lifecycle Management", "Time & Cost Scheduling", "Task Tracking & Trello/Jira", "Stakeholder & Team Communication"]
  }
];

export const PROJECTS = [
  /*
  {
    title: "Enterprise Sales & Profitability Analyzer",
    category: "Data Analyst Projects",
    stack: ["Power BI", "SQL", "DAX", "Data Modeling", "Excel"],
    description: "Interactive business intelligence reporting platform designed to audit and consolidate sales performance metrics across regional channels. Built clean target tracking, customer cohort retention matrices, and product category contribution charts to identify $15,000+ in potential shipping cost savings.",
    image: salesDashboardDaImg,
    links: [{ label: "Email Inquiry", url: "mailto:monlaycho1997@gmail.com?subject=Inquiry%20regarding%20Sales%20KPI%20Dashboard%20Project" }]
  },
  {
    title: "Fleet Logistics & Route Optimization Engine",
    category: "Data Analyst Projects",
    stack: ["Python", "Pandas", "SQL", "Logistics KPIs", "Folium Workflows"],
    description: "An automated data cleaning and mining pipeline that processes fleet GPS coordinates and daily fuel logs. Identifies high-risk route delay hotspots, maps fuel mileage inefficiencies, and builds interactive route dashboards for predictive fleet management.",
    image: supplyChainDaImg,
    links: [{ label: "Source Code", url: "https://github.com/ChoLayMonPinky" }]
  },
  */
  {
    title: "ML Image Classification System",
    category: "Uni Projects",
    stack: ["Python", "Jupyter Notebook"],
    description: "Advanced technical pipeline for high-performance image classification. Features a complete workflow from raw image dataset cleaning and normalization to hierarchical feature extraction and neural network model training, achieving high accuracy across multiple object classes.",
    image: mlImg,
    links: [{ label: "Source Code", url: "https://github.com/ChoLayMonPinky/NUS_ISS_GDipSA59_ML_Image_Classification" }]
  },
  {
    title: "Travel Platform (Full-Stack)",
    category: "Uni Projects",
    stack: ["Kotlin", "Java", "JavaScript", "Tailwind CSS", "HTML", "Dockerfile", "SQL"],
    description: "A full-featured travel exploration and booking ecosystem featuring a mobile app and web portal for customers alongside a robust Admin Dashboard. Supports seamless vacation package discovery, real-time booking management, global revenue monitoring, and automated itinerary scheduling.",
    image: travelImg,
    links: [
      { label: "Android App", url: "https://github.com/ChoLayMonPinky/NUS_ISS_GDipSA59_ADProject_Travel_Platform_Andriod" },
      { label: "Customer Backend", url: "https://github.com/ChoLayMonPinky/NUS_ISS_GDipSA59_ADProject_Travel_Platform_Backend_Web_Customer" },
      { label: "Customer Frontend", url: "https://github.com/ChoLayMonPinky/NUS_ISS_GDipSA59_ADProject_Travel_Platform_Frontend_Web_Customer" },
      { label: "Admin Frontend", url: "https://github.com/ChoLayMonPinky/NUS_ISS_GDipSA59_ADProject_Travel_Platform_Frontend_Web_Admin" },
      { label: "Admin Backend", url: "https://github.com/ChoLayMonPinky/NUS_ISS_GDipSA59_ADProject_Travel_Platform_Backend_Web_Admin" }
    ]
  },
  {
    title: "AI & Automation Pipeline (Social Media)",
    category: "Internship Projects",
    stack: ["n8n", "HeyGen", "Airtable"],
    description: "End-to-end automated content engine that transforms single prompts into viral multi-format content. Includes automated intelligent analysis of input sources (Instagram, Twitter, TikTok) through an AI engine to generate high-quality images, videos, and captions.",
    image: socialMediaImg,
    links: [{ label: "Source Code", url: "https://github.com/ChoLayMonPinky/Internship_Projects" }]
  },
  {
    title: "AI Customer Support Chatbot",
    category: "Internship Projects",
    stack: ["Voiceflow", "Conversational AI", "CRM", "Salesforce"],
    description: "Enterprise-grade AI Support Assistant with integrated knowledge bases and conversational bubbles. Features seamless connectivity with CRM (Salesforce), E-commerce, and Billing platforms to provide real-time, accurate customer resolutions 24/7.",
    image: aiChatbotImg,
    links: [{ label: "Source Code", url: "https://github.com/ChoLayMonPinky/Internship_Projects" }]
  },
  {
    title: "Custom GPT Platform",
    category: "Internship Projects",
    stack: ["ChatGPT", "Prompt Engineering"],
    description: "Designed and configured specialized Custom GPT assistants with curated knowledge bases, customized file retrievals, precise instruction sets, and structured API schema actions to automate report analysis and document workflows.",
    image: customGptImg,
    links: [{ label: "Source Code", url: "https://github.com/ChoLayMonPinky/Internship_Projects" }]
  }
];

export const EXPERIENCE = [
  {
    role: "Remote Logistics & Data Analyst",
    company: "Private Family Transport Enterprise",
    period: "Sep 2025 - Present",
    bullets: [
      "Designed and deployed dynamic KPI dashboards using Advanced Excel to monitor real-time route adherence and fleet delivery speed for 8 container trucks.",
      "Automated the ingestion of manual paper trip sheets and driver logs into digital formats, streamlining weekly operational reports and saving 8 hours of manual logging weekly.",
      "Developed an automated auditing workflow using Python/macros to cross-reference fleet GPS coordinates against fuel cash receipts, successfully identifying cost leakages and saving over $1,200 monthly.",
      "Logged and analyzed daily operational outflows (weigh-bridge fees, toll charges, port gate-in) to build predictive cash flow models."
    ],
    tags: ["Logistics Analysis", "KPI Dashboards", "Expense Auditing", "Process Automation"]
  },
  {
    role: "Junior AI Engineer (Internship)",
    company: "3echo Pte Ltd",
    period: "Mar 2025 – Aug 2025",
    bullets: [
      "Designed and deployed high-performance AI automation pipelines using Make.com and n8n, integrating with enterprise-grade CRM/ERP systems to reduce manual workload by 30%.",
      "Built secure, scalable API/webhook connectors to facilitate automated cross-platform data exchange and database synchronization.",
      "Performed detailed data gathering, cleaning, and model performance tuning, boosting system prediction output reliability by 15%.",
      "Collaborated with senior engineers to document system integration workflows, conduct robust API testing, and troubleshoot pipeline exceptions."
    ],
    tags: ["n8n", "Make.com", "AI Pipelines", "REST APIs", "Automation"]
  },
  {
    role: "Data Analyst",
    company: "Dauntless Discovery International",
    period: "May 2023 – Jul 2024",
    bullets: [
      "Processed and modeled complex datasets using Python, performing extensive data collection, cleaning, and feature engineering to prepare high-quality inputs for regional analytics.",
      "Designed and maintained dynamic KPI dashboards to track operations performance metrics, boosting operational visibility and alignment for senior leadership.",
      "Automated repetitive data extraction and validation pipelines with Python, reducing reporting errors and speeding up analytical turnaround time.",
      "Partnered with cross-functional managers to design advanced Excel workflows, audit validation processes, and data-driven insights."
    ],
    tags: ["Python", "KPI Dashboards", "Data Mining", "Advanced Excel", "Data Validation"]
  },
  {
    role: "Information Systems Executive",
    company: "Phee Group",
    period: "Sep 2021 – Dec 2022",
    bullets: [
      "Gathered, analyzed, and structured complex system requirements from 150+ international users across 4 countries to design enterprise-grade system architecture and workflows.",
      "Compiled comprehensive system documentation, detailed functional specifications, and data-flow diagrams to align business needs with technical deliverables.",
      "Developed high-performance reporting metrics and automated operational tracking, increasing reporting workflow efficiency by 20-30%.",
      "Coordinated full-cycle system testing, user acceptance testing (UAT), and vendor alignment for core software modules."
    ],
    tags: ["System Architecture", "UAT", "Systems Analysis", "Requirements Gathering", "Operational Reports"]
  }
];

export const EDUCATION = [
  {
    degree: "Graduate Diploma in System Analysis",
    school: "National University of Singapore (NUS)",
    period: "Aug 2024 – Sep 2025"
  },
  {
    degree: "Graduate Diploma in Management",
    school: "University of London (UOL)",
    period: "Sep 2018 – Jul 2020"
  },
  {
    degree: "Bachelor of Arts (Korean)",
    school: "Yangon University of Foreign Languages (YUFL)",
    period: "Dec 2013 – Jan 2018"
  }
];

export const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "Mandarin", level: "Conversational" },
  { name: "Korean", level: "Conversational" }
];

export const CERTIFICATIONS = [
  {
    title: "Professional Diploma in Business Management with Project Management",
    institution: "Institute of Commercial Management (ICM)",
    period: "Mar 2025 – Present"
  },
  {
    title: "Single Subject Diploma in Logistics and Supply Chain Management",
    institution: "Institute of Commercial Management (ICM)",
    period: "May 2022 – Mar 2023"
  },
  {
    title: "Diploma in Information Technology",
    institution: "Yangon University of Distance Education",
    period: "Jul 2013 – Feb 2014"
  }
];
