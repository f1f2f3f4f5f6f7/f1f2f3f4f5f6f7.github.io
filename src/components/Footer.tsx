import { profile } from "../data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[var(--color-muted)] md:flex-row">
        <p>
          © {year} {profile.name}. {profile.role}.
        </p>
        <p className="text-xs">{profile.institution}</p>
      </div>
    </footer>
  );
}
