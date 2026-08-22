import { Boxes, ArrowRight } from "lucide-react";
import { printing } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useLang, ui } from "@/lib/i18n";
import { Section } from "./Section";

export function Printing() {
  const { t } = useLang();

  return (
    <Section
      id="impresion-3d"
      eyebrow={t(ui.printEyebrow)}
      title={t(ui.printTitle)}
      description={t(ui.printDesc)}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {printing.map((item) => (
          <article key={item.title.es} className="surface-card group p-6">
            <span className="grid size-11 place-items-center rounded-xl border border-border bg-accent/40 text-emerald-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-110">
              <Boxes className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{t(item.title)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t(item.description)}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-6">
        <Button asChild size="lg" className="transition-transform hover:-translate-y-0.5">
          <a href="#contacto">
            {t(ui.printCta)} <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </Section>
  );
}
