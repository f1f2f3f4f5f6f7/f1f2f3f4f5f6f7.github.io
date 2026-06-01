import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";
import { projects } from "../data/projects";
import { MotionSection, Reveal } from "./motion";

const statusStyles = {
  production: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  development: "bg-amber-500/15 text-amber-700 dark:text-amber-400",
  academic: "bg-violet-500/15 text-violet-700 dark:text-violet-400",
};

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <MotionSection id="proyectos">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Selected work
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-tight md:text-5xl">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
          Production systems in institutional, mobility, and fintech environments.
        </p>
      </Reveal>

      {featured && (
        <Reveal delay={1} className="mt-14">
          <motion.article
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-8 md:p-12"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[var(--color-accent-soft)] blur-3xl transition-opacity group-hover:opacity-80" />

            <div className="relative flex flex-wrap items-start justify-between gap-4">
              <div>
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[featured.status]}`}
                >
                  {featured.statusLabel}
                </span>
                <h3 className="mt-4 font-display text-3xl md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-1 text-[var(--color-muted)]">
                  {featured.subtitle}
                </p>
              </div>
              <span className="text-sm text-[var(--color-muted)]">
                {featured.year}
              </span>
            </div>

            <p className="relative mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]">
              {featured.description}
            </p>

            {featured.privateNote && (
              <p className="relative mt-4 flex items-center gap-2 text-sm text-[var(--color-muted)]">
                <Lock size={14} />
                {featured.privateNote}
              </p>
            )}

            <div className="relative mt-8 flex flex-wrap gap-2">
              {featured.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {featured.links.length > 0 && (
              <div className="relative mt-8 flex flex-wrap gap-4">
                {featured.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-accent)] hover:underline"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                    {link.external && <ExternalLink size={14} />}
                  </a>
                ))}
              </div>
            )}
          </motion.article>
        </Reveal>
      )}

      {others.length > 0 && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {others.map((project, i) => (
            <Reveal key={project.id} delay={i + 2}>
              <article className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-elevated)] p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-2xl">{project.title}</h3>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusStyles[project.status]}`}
                  >
                    {project.statusLabel}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-accent)]">
                  {project.subtitle}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[var(--color-accent-soft)] px-2 py-0.5 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-[var(--color-muted)]">
                  {project.year}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      )}
    </MotionSection>
  );
}
