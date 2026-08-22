import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28",
        visible ? "animate-rise" : "opacity-0",
        className,
      )}
    >
      <header className="max-w-2xl">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-accent">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {description ? (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </header>
      <div className="mt-10">{children}</div>
    </section>
  );
}
