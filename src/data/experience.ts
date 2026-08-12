export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "uis",
    role: "Full Stack Developer / Data Analyst",
    company: "School of Systems Engineering — UIS, Bucaramanga, Colombia",
    period: "Jul 2025 – Present",
    bullets: [
      "Engineered a full-stack institutional asset-management platform with Django REST, Angular, and PostgreSQL, including SSO/JWT authentication and role-based access control for 30+ concurrent users.",
      "Deployed the platform with Docker and designed query-optimised PostgreSQL views, delivering sub-three-second response times on critical queries and 99% production availability.",
      "Integrated REST-based data flows across modules, eliminating manual reconciliation and improving reporting reliability and traceability for non-technical stakeholders.",
    ],
  },
  {
    id: "veloop",
    role: "Full Stack Developer (Freelance)",
    company: "Soluciones VeLoop S.A.S. — Mobility, Colombia",
    period: "Jul 2024 – May 2025",
    bullets: [
      "Delivered Vue.js and Node.js solutions for admin and partner-facing portals supporting rental workflows, dynamic pricing, and partner management.",
      "Designed and maintained versioned REST APIs consumed by multiple frontend clients, improving consistency across releases.",
      "Translated stakeholder requirements into reusable frontend and backend components for recurring platform features.",
      "Coordinated outsourced developers within Agile/Scrum sprints and contributed to on-time delivery of planned features.",
    ],
  },
  {
    id: "coink",
    role: "Backend Developer (Freelance)",
    company: "Coink (Fintech)",
    period: "Feb 2024 – May 2024",
    bullets: [
      "Developed and optimised production-grade REST APIs in C# supporting savings and high-frequency financial transaction workflows.",
      "Tuned SQL queries and database operations and resolved backend bottlenecks in critical financial modules.",
      "Integrated external financial services while maintaining data consistency, transaction integrity, and security compliance.",
    ],
  },
];
