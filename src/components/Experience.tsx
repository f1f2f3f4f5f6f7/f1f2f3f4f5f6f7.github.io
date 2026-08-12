import { Reveal, MotionSection } from "./motion";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <MotionSection id="experiencia" className="border-t border-[var(--color-border)]">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Career
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
          Work experience
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
          2+ years delivering production software across enterprise systems,
          mobility, and fintech.
        </p>
      </Reveal>

      <ol className="relative mt-14 space-y-0">
        {experience.map((job, i) => (
          <Reveal key={job.id} delay={i}>
            <li className="relative grid gap-4 border-l border-[var(--color-border)] pb-12 pl-8 last:pb-0 md:grid-cols-[220px_1fr] md:gap-8 md:pl-10">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />

              <div className="md:pt-0.5">
                <time className="text-sm font-medium text-[var(--color-accent)]">
                  {job.period}
                </time>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[var(--color-ink)]">
                  {job.role}
                </h3>
                <p className="mt-0.5 text-[var(--color-muted)]">{job.company}</p>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[var(--color-muted)]">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </MotionSection>
  );
}
