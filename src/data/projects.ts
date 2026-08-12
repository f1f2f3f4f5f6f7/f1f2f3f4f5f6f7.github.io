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
      "Production asset-management platform built with Django REST, Angular, and PostgreSQL. It replaced manual tracking with centralised workflows, SSO/JWT authentication, role-based access control, and reliable reporting.",
    highlights: [
      "Supports 30+ concurrent users with 99% production availability",
      "Sub-three-second response times on critical, query-optimised views",
      "Centralised REST data flows improve reporting reliability and traceability",
      "Institutional SSO/JWT authentication and role-based access control",
    ],
    stack: [
      "Angular",
      "Django REST",
      "PostgreSQL",
      "Docker",
      "Python",
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
      "Vue.js and Node.js portals for mobility operations, supporting rental workflows, dynamic pricing, partner management, and versioned APIs consumed by multiple frontend clients.",
    highlights: [
      "Reusable frontend and backend components",
      "Consistent versioned APIs across releases",
      "Agile/Scrum coordination with outsourced developers",
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
      "Production backend work for savings and high-frequency financial transactions, focused on C# REST APIs, SQL optimisation, and secure external-service integrations.",
    highlights: [
      "Production-grade C# REST APIs",
      "SQL and database-operation tuning",
      "Transaction integrity and security compliance",
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
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
  },
  {
    category: "Frontend",
    items: ["Angular", "Vue.js", "React"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Django", "Spring Boot", "REST API design"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "SQL", "NoSQL", "Data modelling", "Query optimisation"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "Git", "CI/CD", "Power BI", "AWS (working knowledge)", "Kubernetes (working knowledge)"],
  },
  {
    category: "Methodologies",
    items: ["Agile/Scrum", "Cross-functional collaboration"],
  },
] as const;

/** @deprecated use skillGroups */
export const skills = skillGroups.flatMap((g) => g.items);
