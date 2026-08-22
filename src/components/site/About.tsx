import { GraduationCap, Briefcase, Languages } from "lucide-react";
import { education, experience, languages, mindset, skills } from "@/data/site";
import { useLang, ui } from "@/lib/i18n";
import { Section } from "./Section";

export function About() {
  const { t } = useLang();

  return (
    <Section
      id="sobre-mi"
      eyebrow={t(ui.aboutEyebrow)}
      title={t(ui.aboutTitle)}
      description={t(ui.aboutDesc)}
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            <Briefcase className="size-4 text-emerald-accent" /> {t(ui.keyExperience)}
          </h3>
          <ol className="mt-5 space-y-4 border-l border-border pl-5">
            {experience.map((item) => (
              <li key={item.org} className="relative">
                <span className="absolute -left-[27px] top-1.5 size-2.5 rounded-full bg-emerald-accent" />
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <p className="font-semibold">{t(item.role)}</p>
                  <p className="text-sm text-blue-accent">@ {item.org}</p>
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {t(item.period)}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(item.description)}
                </p>
              </li>
            ))}
          </ol>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {t(ui.skillsTitle)}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-emerald-accent hover:text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {t(ui.mindsetTitle)}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {mindset.map((item) => (
              <li
                key={item.es}
                className="rounded-full border border-dashed border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-blue-accent hover:text-foreground"
              >
                {t(item)}
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-5">
          <div className="surface-card p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <GraduationCap className="size-4 text-blue-accent" /> {t(ui.educationTitle)}
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((item) => (
                <li key={item.title.es} className="flex gap-2.5 text-sm leading-relaxed">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-accent" />
                  <div>
                    <p className="font-medium text-foreground">{t(item.title)}</p>
                    <p className="text-muted-foreground">{item.org}</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {t(item.period)}
                    </p>
                    {item.note ? (
                      <p className="mt-1 text-xs font-medium text-emerald-accent">{t(item.note)}</p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card p-6">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              <Languages className="size-4 text-emerald-accent" /> {t(ui.languagesTitle)}
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {languages.map((item) => (
                <li key={item.name.es} className="flex justify-between gap-3">
                  <span className="font-medium">{t(item.name)}</span>
                  <span className="text-muted-foreground">{t(item.level)}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}
