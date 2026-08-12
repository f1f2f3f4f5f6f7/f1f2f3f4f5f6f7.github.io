import { Reveal, MotionSection } from "./motion";
import {
  profile,
  education,
  certifications,
  competencies,
} from "../data/profile";

export function About() {
  return (
    <MotionSection id="sobre-mi" className="border-t border-[var(--color-border)]">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            About
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
            {profile.shortName}
          </h2>
          <p className="mt-3 text-[var(--color-muted)]">
            {profile.roleSecondary}
            <br />
            {profile.institution}
          </p>

          <dl className="mt-8 space-y-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6 text-sm">
            <div>
              <dt className="font-semibold text-[var(--color-ink)]">Education</dt>
              <dd className="mt-1 text-[var(--color-muted)]">
                {education.degree} · {education.school}
                <br />
                {education.graduation}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-[var(--color-ink)]">English</dt>
              <dd className="mt-1 text-[var(--color-muted)]">
                {profile.englishLevel}
              </dd>
            </div>
          </dl>
        </Reveal>

        <div className="space-y-10">
          <Reveal delay={1}>
            <p className="text-lg leading-relaxed text-[var(--color-muted)]">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={2}>
            <h3 className="font-display text-2xl">Certifications</h3>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm"
                >
                  <span>
                    <strong className="text-[var(--color-ink)]">{cert.title}</strong>
                    <span className="text-[var(--color-muted)]">
                      {" "}
                      — {cert.issuer}
                    </span>
                  </span>
                  <span className="text-[var(--color-accent)]">{cert.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={3}>
            <h3 className="font-display text-2xl">Core strengths</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {competencies.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-[var(--color-accent-soft)] p-4"
                >
                  <h4 className="font-semibold text-[var(--color-ink)]">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </MotionSection>
  );
}
