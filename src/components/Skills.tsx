import { Reveal, MotionSection } from "./motion";
import { skillGroups } from "../data/projects";

export function Skills() {
  return (
    <MotionSection id="habilidades">
      <Reveal>
        <h2 className="font-display text-3xl md:text-4xl">Technical skills</h2>
        <p className="mt-3 max-w-xl text-[var(--color-muted)]">
          Technologies used across full-stack delivery, backend development, data,
          and production operations.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.category} delay={gi}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)]">
                {group.category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg bg-[var(--color-accent-soft)] px-3 py-1.5 text-sm font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </MotionSection>
  );
}
