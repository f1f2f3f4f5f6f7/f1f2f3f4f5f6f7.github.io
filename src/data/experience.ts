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
    company: "School of Systems Engineering — UIS",
    period: "Jul 2025 – Present",
    bullets: [
      "Designed and implemented a relational PostgreSQL schema for institutional asset traceability, ensuring data integrity and auditability across the full asset lifecycle.",
      "Integrated REST APIs to centralise data flows across system modules, eliminating manual data reconciliation between departments.",
      "Developed Angular-based dashboards and views for real-time data presentation, enabling non-technical stakeholders to track assets independently.",
    ],
  },
  {
    id: "veloop",
    role: "Full Stack Developer",
    company: "Soluciones VeLoop S.A.S",
    period: "Jul 2024 – May 2025",
    bullets: [
      "Delivered end-to-end features for the admin and partners web app using Vue.js and Node.js, including flexible rental logic (weekly/monthly) and dynamic pricing rules.",
      "Improved client and partner UX flows by translating business requirements into concrete technical solutions, reducing user friction.",
      "Integrated and maintained REST APIs consumed by multiple frontends, keeping endpoints clean and versioned.",
      "Coordinated outsourced developers within agile cycles, ensuring on-time delivery of sprint goals.",
    ],
  },
  {
    id: "coink",
    role: "Backend Developer (Freelance)",
    company: "Coink (Fintech)",
    period: "Feb 2024 – May 2024",
    bullets: [
      "Built and optimised REST APIs in C# for a fintech platform handling savings and transaction flows.",
      "Tuned SQL queries to significantly reduce response times in high-frequency financial modules.",
      "Integrated external financial services into the platform, maintaining data accuracy and security standards.",
    ],
  },
];
