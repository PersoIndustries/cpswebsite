import { icons, ArrowUpRight } from "lucide-react";
import { companies } from "@/data/site";
import { Section } from "./Section";

export function Companies() {
  return (
    <Section
      id="empresas"
      eyebrow="Negocios & producto"
      title="Empresas & Apps"
      description="Del vivero familiar al SaaS: proyectos donde mezclo campo, tecnología y producto."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => {
          const Icon = icons[company.icon as keyof typeof icons];
          return (
            <a
              key={company.name}
              href={company.href}
              target={company.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="surface-card group flex flex-col p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-accent/40 text-blue-accent">
                  {Icon ? <Icon className="size-5" /> : null}
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {company.status}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{company.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {company.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-accent">
                Ver más
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
