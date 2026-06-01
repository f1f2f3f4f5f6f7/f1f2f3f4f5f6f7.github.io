export type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  status: "production" | "development" | "academic";
  statusLabel: string;
  year: string;
  links: { label: string; href: string; external?: boolean }[];
  featured?: boolean;
  privateNote?: string;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    id: "sac",
    title: "Asset Management System (SAC)",
    subtitle: "School of Systems Engineering — UIS",
    description:
      "End-to-end institutional data platform: PostgreSQL data model, REST API layer, Angular UI, and role-based access control — covering the full data lifecycle from capture to visualisation. Complements the university corporate inventory with loans, transfers, QR verification, and traceability.",
    highlights: [
      "Production deployment at sac.uis.edu.co with real institutional users",
      "Query-optimised views and reporting dashboards aligned with BI practices",
      "Designed for scalability and auditability across the asset lifecycle",
      "SSO institutional auth + JWT and role-based access control",
    ],
    stack: [
      "Angular",
      "Django REST",
      "PostgreSQL",
      "Docker",
      "Python",
      "PrimeNG",
      "MinIO",
    ],
    status: "production",
    statusLabel: "In production",
    year: "Jul 2025 – Present",
    featured: true,
    privateNote:
      "UIS institutional login required. Demo available on request.",
    metrics: [
      { label: "Concurrent users", value: "30+" },
      { label: "Critical response", value: "< 3s" },
      { label: "Availability", value: "99%" },
    ],
    links: [
      {
        label: "Production (UIS login)",
        href: "https://sac.uis.edu.co",
        external: true,
      },
      { label: "Case study", href: "#proyecto-sac" },
    ],
  },
  {
    id: "veloop",
    title: "VeLoop Admin & Partners",
    subtitle: "Soluciones VeLoop S.A.S — Mobility",
    description:
      "Admin and partner web application for rental operations with flexible weekly/monthly logic, dynamic pricing, and multi-frontend API consumption.",
    highlights: [
      "Vue.js + Node.js end-to-end delivery",
      "REST APIs versioned for multiple clients",
      "Agile coordination with outsourced dev teams",
    ],
    stack: ["Vue.js", "Node.js", "REST APIs", "JavaScript"],
    status: "production",
    statusLabel: "Shipped",
    year: "2024 – 2025",
    links: [],
  },
  {
    id: "coink",
    title: "Coink Fintech Platform",
    subtitle: "Coink — Backend (Freelance)",
    description:
      "Backend work on a fintech platform for savings and transactions: high-performance REST APIs and SQL optimisation under production load.",
    highlights: [
      "C# REST APIs for financial modules",
      "SQL tuning for high-frequency operations",
      "External financial service integrations",
    ],
    stack: ["C#", "SQL", "REST APIs", ".NET"],
    status: "production",
    statusLabel: "Delivered",
    year: "2024",
    links: [],
  },
];

export const skillGroups = [
  {
    category: "Frontend",
    items: ["Vue.js", "React", "Angular", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "Python", "Django", "Java", "C#", "PHP", "Spring Boot"],
  },
  {
    category: "Data & Storage",
    items: ["PostgreSQL", "SQL", "NoSQL", "REST APIs", "Data modelling"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Kubernetes", "Docker", "AWS", "Git"],
  },
  {
    category: "Analytics & Interests",
    items: ["Power BI / Fabric", "Matplotlib", "Machine Learning", "Data Engineering"],
  },
] as const;

/** @deprecated use skillGroups */
export const skills = skillGroups.flatMap((g) => g.items);
