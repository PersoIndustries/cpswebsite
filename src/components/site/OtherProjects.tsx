import { ArrowUpRight, Dot } from "lucide-react";
import { otherProjects } from "@/data/site";
import { useLang, ui } from "@/lib/i18n";
import { Section } from "./Section";

export function OtherProjects() {
  const { t } = useLang();

  return (
    <Section
      id="otros"
      eyebrow={t(ui.otherEyebrow)}
      title={t(ui.otherTitle)}
      description={t(ui.otherDesc)}
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {otherProjects.map((item) => {
          const Wrapper = item.href ? "a" : "div";
          return (
            <li key={item.name}>
              <Wrapper
                {...(item.href
                  ? item.href.startsWith("http")
                    ? { href: item.href, target: "_blank", rel: "noreferrer" }
                    : { href: item.href }
                  : {})}
                className="surface-card group flex h-full flex-col p-5"
              >
                <div className="flex items-center gap-2">
                  <Dot className="size-5 shrink-0 text-emerald-accent" />
                  <h3 className="text-base font-semibold">{item.name}</h3>
                  {item.href ? (
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  ) : null}
                </div>
                {item.period ? (
                  <p className="mt-1 pl-7 text-xs uppercase tracking-wider text-blue-accent">
                    {item.period}
                  </p>
                ) : null}
                <p className="mt-2 pl-7 text-sm leading-relaxed text-muted-foreground">
                  {t(item.description)}
                </p>
              </Wrapper>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
