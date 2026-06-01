import { Mail, Github, Linkedin } from "lucide-react";
import { Reveal, MotionSection } from "./motion";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <MotionSection id="contacto">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-ink)] px-8 py-16 text-center text-[var(--color-surface)] md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.25),transparent_50%)]" />

          <p className="relative text-sm font-semibold uppercase tracking-widest text-cyan-300/90">
            Contact
          </p>
          <h2 className="relative mt-4 font-display text-4xl md:text-5xl">
            Let&apos;s build something together
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-zinc-400">
            Available for full stack, backend, or data-oriented roles. Request a
            SAC demo or discuss your opportunity.
          </p>

          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-transform hover:scale-[1.02]"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold transition-colors hover:border-cyan-400"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-600 px-6 py-3 text-sm font-semibold transition-colors hover:border-cyan-400"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </MotionSection>
  );
}
