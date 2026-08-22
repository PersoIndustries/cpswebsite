import { Instagram, Linkedin, Mail } from "lucide-react";
import { nav, profile } from "@/data/site";
import { useLang, ui } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <p className="text-base font-semibold">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t(profile.tagline)}</p>
        </div>
        <nav className="grid grid-cols-2 gap-y-2 text-sm md:justify-self-center">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
        <div className="flex items-start gap-3 md:justify-self-end">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-lg border border-border transition-colors hover:border-emerald-accent hover:text-emerald-accent"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href={profile.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X"
            className="grid size-9 place-items-center rounded-lg border border-border text-sm font-bold transition-colors hover:border-emerald-accent hover:text-emerald-accent"
          >
            X
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="grid size-9 place-items-center rounded-lg border border-border transition-colors hover:border-emerald-accent hover:text-emerald-accent"
          >
            <Instagram className="size-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid size-9 place-items-center rounded-lg border border-border transition-colors hover:border-emerald-accent hover:text-emerald-accent"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · PERSO ·{" "}
        <a href="/cookies" className="underline-offset-4 hover:text-foreground hover:underline">
          {t(ui.cookieMore)}
        </a>
      </div>
    </footer>
  );
}
