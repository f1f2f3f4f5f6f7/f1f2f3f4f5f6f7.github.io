import { Reveal, MotionSection } from "./motion";
import { projects } from "../data/projects";

const sac = projects.find((p) => p.id === "sac");

const architecture = [
  { layer: "Client", tech: "Angular · PrimeNG · Tailwind · RxJS · QR scanning" },
  { layer: "REST API", tech: "Django 5 · DRF · JWT (institutional IAM)" },
  { layer: "Data", tech: "PostgreSQL 15 · Liquibase · MinIO (objects)" },
  { layer: "Infra", tech: "Docker · Gunicorn · Ubuntu" },
];

const modules = [
  "Inventory & bulk import",
  "Loans & transfers",
  "QR verification & reporting",
  "Full lifecycle traceability",
  "Notifications & role-based access",
];

const showcaseTips = [
  {
    title: "Public case study",
    body: "Document problem, architecture, and impact — no sensitive institutional data.",
  },
  {
    title: "Sanitised screenshots",
    body: "Add anonymised UI captures under public/screenshots/.",
  },
  {
    title: "Video walkthrough",
    body: "5–10 min demo with test data for recruiters who cannot access UIS login.",
  },
  {
    title: "Technical README repo",
    body: "Public demo repository with diagrams; production code can stay private.",
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
          Matches my UIS role and degree project — production system with
          restricted access. Professional visibility without exposing private data.
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
        <h3 className="font-display text-2xl">Showing private work to employers</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {showcaseTips.map((tip) => (
            <div
              key={tip.title}
              className="rounded-2xl bg-[var(--color-accent-soft)] p-6"
            >
              <h4 className="font-semibold">{tip.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {tip.body}
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
