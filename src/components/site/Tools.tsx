import { icons, ArrowUpRight } from "lucide-react";
import { tools } from "@/data/site";
import { useLang, ui } from "@/lib/i18n";
import { Section } from "./Section";

export function Tools() {
  const { t } = useLang();

  return (
    <Section
      id="tools"
      eyebrow={t(ui.toolsEyebrow)}
      title={t(ui.toolsTitle)}
      description={t(ui.toolsDesc)}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => {
          const Icon = icons[tool.icon as keyof typeof icons];
          return (
            <a key={tool.name} href={tool.href} className="surface-card group flex flex-col p-6">
              <span className="grid size-11 place-items-center rounded-xl border border-border bg-accent/40 text-emerald-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
                {Icon ? <Icon className="size-5" /> : null}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{tool.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(tool.description)}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-emerald-accent">
                {t(ui.openTool)}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
