import { Reveal, MotionSection } from "./motion";
import { projects } from "../data/projects";

const sac = projects.find((p) => p.id === "sac");

const architecture = [
  { layer: "Client", tech: "Angular · institutional workflows · reporting views" },
  { layer: "REST API", tech: "Django REST · SSO/JWT · role-based access control" },
  { layer: "Data", tech: "PostgreSQL · relational modelling · optimised views" },
  { layer: "Infrastructure", tech: "Docker · production deployment" },
];

const modules = [
  "Centralised asset records",
  "Cross-module REST data flows",
  "Operational reporting",
  "Asset lifecycle traceability",
  "Authentication and role-based access",
];

const caseStudy = [
  {
    title: "Problem",
    body: "Manual, distributed asset tracking made reconciliation, reporting, and traceability difficult for institutional teams.",
  },
  {
    title: "Solution",
    body: "A centralised full-stack platform connected Angular workflows to versioned Django REST services and a relational PostgreSQL model.",
  },
  {
    title: "Impact",
    body: "The production system supports 30+ concurrent users, maintains 99% availability, and returns critical queries in under three seconds.",
  },
];

export function ProjectDetail() {
  if (!sac) return null;

  return (
    <MotionSection
      id="proyecto-sac"
      className="border-t border-[var(--color-border)]"
    >
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Deep dive
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
          SAC case study
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
          A production platform delivered as part of my UIS role, replacing manual
          asset tracking while protecting restricted institutional information.
        </p>
      </Reveal>

      {sac.metrics && (
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {sac.metrics.map((m, i) => (
            <Reveal key={m.label} delay={i}>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 text-center">
                <p className="font-display text-3xl text-[var(--color-accent)]">
                  {m.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {m.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal delay={1} className="mt-14">
        <h3 className="font-display text-2xl">Architecture</h3>
        <div className="mt-6 space-y-3">
          {architecture.map((item, i) => (
            <div
              key={item.layer}
              className="flex flex-col gap-1 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-5 md:flex-row md:items-center md:justify-between"
              style={{ marginLeft: `${Math.min(i * 12, 36)}px` }}
            >
              <span className="font-semibold">{item.layer}</span>
              <span className="text-sm text-[var(--color-muted)]">{item.tech}</span>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={2} className="mt-14">
        <h3 className="font-display text-2xl">Main modules</h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {modules.map((mod) => (
            <li
              key={mod}
              className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
              {mod}
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={3} className="mt-14">
        <h3 className="font-display text-2xl">From problem to production</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {caseStudy.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-[var(--color-accent-soft)] p-6"
            >
              <h4 className="font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      {sac.highlights.length > 0 && (
        <Reveal delay={4} className="mt-14">
          <ul className="space-y-3 text-[var(--color-muted)]">
            {sac.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="text-[var(--color-accent)]">→</span>
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </MotionSection>
  );
}
