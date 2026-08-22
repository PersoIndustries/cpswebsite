import { Gamepad2, ArrowUpRight } from "lucide-react";
import { games } from "@/data/site";
import { Section } from "./Section";

export function Games() {
  return (
    <Section
      id="juegos"
      eyebrow="Game dev"
      title="Juegos & Proyectos de Game Dev"
      description="Producción, liderazgo de estudio y desarrollo en títulos multijugador, Web3 y proyectos académicos."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {games.map((game) => (
          <a key={game.name} href={game.href} className="surface-card group flex gap-4 p-5">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-accent/40 text-emerald-accent">
              <Gamepad2 className="size-5" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-base font-semibold">{game.name}</h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-blue-accent">
                {game.role}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {game.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
