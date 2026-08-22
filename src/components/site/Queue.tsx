import { icons } from "lucide-react";
import { queue } from "@/data/site";
import { useLang, ui } from "@/lib/i18n";
import { Section } from "./Section";

export function Queue() {
  const { t } = useLang();

  return (
    <Section
      id="en-cola"
      eyebrow={t(ui.queueEyebrow)}
      title={t(ui.queueTitle)}
      description={t(ui.queueDesc)}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {queue.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <article
              key={item.name}
              className="surface-card group flex gap-4 border-dashed p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-dashed border-border bg-accent/40 text-emerald-accent transition-transform duration-300 group-hover:scale-110">
                {Icon ? <Icon className="size-5" /> : null}
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-[11px] uppercase tracking-wider text-muted-foreground">
                    {t(ui.queueBadge)}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {t(item.description)}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
