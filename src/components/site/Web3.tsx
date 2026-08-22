import { icons } from "lucide-react";
import { web3 } from "@/data/site";
import { useLang, ui } from "@/lib/i18n";
import { Section } from "./Section";

export function Web3() {
  const { t } = useLang();

  return (
    <Section
      id="web3"
      eyebrow={t(ui.web3Eyebrow)}
      title={t(ui.web3Title)}
      description={t(ui.web3Desc)}
    >
      <div className="grid gap-5 md:grid-cols-2">
        {web3.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <article
              key={item.name}
              className="surface-card group relative overflow-hidden p-6"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-blue-accent/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
              />
              <span className="relative grid size-11 place-items-center rounded-xl border border-border bg-accent/40 text-blue-accent transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                {Icon ? <Icon className="size-5" /> : null}
              </span>
              <h3 className="relative mt-5 text-lg font-semibold">{item.name}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(item.description)}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
