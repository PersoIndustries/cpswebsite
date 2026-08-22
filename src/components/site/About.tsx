import { Download, GraduationCap, Briefcase } from "lucide-react";
import { education, experience, profile, skills } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";

export function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title="Perfil profesional"
      description="Perfil híbrido entre producto tech, liderazgo de equipos y trabajo real de campo en negocios familiares."
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            <Briefcase className="size-4 text-emerald-accent" /> Experiencia clave
          </h3>
          <ol className="mt-5 space-y-4 border-l border-border pl-5">
            {experience.map((item) => (
              <li key={item.role} className="relative">
                <span className="absolute -left-[27px] top-1.5 size-2.5 rounded-full bg-emerald-accent" />
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <p className="font-semibold">{item.role}</p>
                  <p className="text-sm text-blue-accent">@ {item.org}</p>
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {item.period}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Skills
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-emerald-accent hover:text-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <aside className="surface-card h-fit p-6">
          <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            <GraduationCap className="size-4 text-blue-accent" /> Educación
          </h3>
          <ul className="mt-4 space-y-3">
            {education.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-accent" />
                {item}
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6 w-full">
            <a href={profile.cv} target="_blank" rel="noreferrer">
              <Download className="size-4" /> Descargar CV completo (PDF)
            </a>
          </Button>
        </aside>
      </div>
    </Section>
  );
}
