import { icons, ArrowUpRight } from "lucide-react";
import { tools } from "@/data/site";
import { Section } from "./Section";

export function Tools() {
  return (
    <Section
      id="tools"
      eyebrow="Tools"
      title="Mis Tools"
      description="Herramientas que he desarrollado para facilitar procesos."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = icons[tool.icon as keyof typeof icons];
          return (
            <a
              key={tool.name}
              href={tool.href}
              className="surface-card group flex flex-col p-6"
            >
              <span className="grid size-11 place-items-center rounded-xl border border-border bg-accent/40 text-emerald-accent">
                {Icon ? <Icon className="size-5" /> : null}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{tool.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-accent">
                Abrir tool
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
