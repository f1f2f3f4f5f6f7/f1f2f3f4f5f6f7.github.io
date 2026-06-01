import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import { fadeUp } from "./motion";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] flex-col justify-center px-5 pb-20 pt-28 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-4 py-1.5 text-sm text-[var(--color-muted)]"
        >
          <Sparkles size={14} className="text-[var(--color-accent)]" />
          {profile.available && (
            <span>
              <span className="font-medium text-[var(--color-ink)]">
                {profile.role}
              </span>
              {" · "}
              {profile.englishLevel} English
              {profile.openToRelocation && " · Open to relocation"}
            </span>
          )}
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="max-w-4xl font-display text-[clamp(2.75rem,8vw,5.5rem)] leading-[1.05] tracking-tight"
        >
          {profile.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span className="italic text-[var(--color-accent)]">
            {profile.name.split(" ").slice(2).join(" ")}
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#proyectos"
            className="rounded-full bg-[var(--color-ink)] px-7 py-3.5 text-sm font-semibold text-[var(--color-surface)] shadow-lg transition-transform hover:scale-[1.02]"
          >
            View projects
          </a>
          <a
            href="#experiencia"
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-7 py-3.5 text-sm font-semibold transition-colors hover:border-[var(--color-accent)]"
          >
            Work experience
          </a>
          <a
            href="#contacto"
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-elevated)] px-7 py-3.5 text-sm font-semibold transition-colors hover:border-[var(--color-accent)]"
          >
            Contact
          </a>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="mt-16 text-sm text-[var(--color-muted)]"
        >
          {profile.institution} · {profile.location}
        </motion.p>
      </div>

      <motion.a
        href="#experiencia"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-muted)]"
        aria-label="Scroll to experience"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
