import { icons, ArrowUpRight } from "lucide-react";
import { companies } from "@/data/site";
import { useLang, ui } from "@/lib/i18n";
import { Section } from "./Section";

export function Companies() {
  const { t } = useLang();

  return (
    <Section
      id="empresas"
      eyebrow={t(ui.companiesEyebrow)}
      title={t(ui.companiesTitle)}
      description={t(ui.companiesDesc)}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((company, i) => {
          const Icon = icons[company.icon as keyof typeof icons];
          return (
            <a
              key={company.name}
              href={company.href}
              target={company.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="surface-card group flex flex-col p-6"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-accent/40 text-blue-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
                  {Icon ? <Icon className="size-5" /> : null}
                </span>
                <span className="rounded-full border border-border px-2.5 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {t(company.status)}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{company.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(company.description)}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue-accent">
                {t(ui.seeMore)}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          );
        })}
      </div>
    </Section>
  );
}
