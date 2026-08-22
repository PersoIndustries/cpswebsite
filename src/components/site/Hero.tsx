import { useEffect, useState } from "react";
import { ArrowRight, Instagram, Linkedin, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useLang, ui } from "@/lib/i18n";

export function Hero() {
  const { t } = useLang();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          transform: `translate3d(-50%, ${offset * 0.25}px, 0)`,
          background:
            "radial-gradient(circle at 30% 30%, var(--emerald-accent), transparent 60%), radial-gradient(circle at 70% 60%, var(--blue-accent), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-[1.4fr_1fr]">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 animate-pulse text-emerald-accent" />
            a.k.a. <strong className="font-semibold text-emerald-accent">{profile.alias}</strong>
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {profile.name}{" "}
            <span className="text-gradient whitespace-nowrap">«{profile.alias}»</span>
          </h1>
          <p className="mt-4 text-base font-medium sm:text-lg">
            <span className="text-gradient">{t(profile.tagline)}</span>
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {t(profile.intro)}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="transition-transform hover:-translate-y-0.5">
              <a href="#sobre-mi">
                {t(ui.viewCv)} <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="transition-transform hover:-translate-y-0.5"
            >
              <a href="#juegos">{t(ui.projects)}</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contacto">{t(ui.contact)}</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-bold">X</span> @perso_dev
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <Instagram className="size-4" /> @pers0
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" /> Fraga, Huesca
            </span>
          </div>
        </div>

        <div
          className="animate-rise justify-self-center md:justify-self-end"
          style={{ transform: `translate3d(0, ${offset * -0.05}px, 0)` }}
        >
          <div className="glow-ring animate-float relative size-52 overflow-hidden rounded-full sm:size-64">
            <img
              src={profile.photo}
              alt="Retrato de Carlos Peralta Sorolla"
              className="size-full object-cover"
              width={512}
              height={512}
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-6xl px-5 sm:px-8">
        <div className="surface-card flex flex-col gap-2 p-5 sm:flex-row sm:items-center sm:gap-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-accent/12 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-emerald-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-accent" />
            {t(ui.currently)}
          </span>
          <p className="text-sm text-muted-foreground">{t(profile.now)}</p>
        </div>
      </div>
    </section>
  );
}
