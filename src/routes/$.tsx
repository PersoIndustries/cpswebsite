import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Compass } from "lucide-react";

export const Route = createFileRoute("/$")({
  component: NotFoundPage,
  head: () => ({
    meta: [
      { title: "Página no encontrada | Carlos Peralta Sorolla" },
      {
        name: "description",
        content:
          "Este enlace no existe o todavía no está disponible. Vuelve al inicio de la web de Carlos Peralta Sorolla.",
      },
      { name: "robots", content: "noindex, follow" },
      { property: "og:title", content: "Página no encontrada | Carlos Peralta Sorolla" },
      { property: "og:type", content: "website" },
    ],
  }),
});

function NotFoundPage() {
  return (
    <div className="relative grid min-h-screen place-items-center bg-background px-5 text-foreground">
      <div className="surface-card max-w-lg p-8 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-xl border border-border bg-accent/40 text-emerald-accent">
          <Compass className="size-5" />
        </span>
        <p className="mt-6 text-5xl font-semibold tracking-tight">404</p>
        <h1 className="mt-3 text-xl font-semibold">
          No se ha encontrado el enlace · Link not found
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Es posible que haya un error en la dirección o que esta sección aún no se haya agregado.
          Vuelve al inicio y sigue explorando.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          This link may be broken or the section is not published yet. Head back home and keep
          exploring.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ArrowLeft className="size-4" /> Volver al inicio
          </Link>
          <a
            href="/#contacto"
            className="inline-flex items-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
}
