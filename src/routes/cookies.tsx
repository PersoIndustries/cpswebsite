import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ParallaxBackground } from "@/components/site/ParallaxBackground";
import { LanguageProvider, useLang, ui } from "@/lib/i18n";
import { profile } from "@/data/site";

const title = "Política de cookies — Carlos Peralta Sorolla (PERSO)";
const description =
  "Cómo esta web usa cookies y almacenamiento local: solo preferencias técnicas de idioma y tema, sin seguimiento ni publicidad.";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/cookies" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
});

const rows: { key: string; purpose: { es: string; en: string }; life: { es: string; en: string } }[] = [
  {
    key: "lang",
    purpose: {
      es: "Recuerda el idioma elegido (español / inglés).",
      en: "Remembers the selected language (Spanish / English).",
    },
    life: { es: "Permanente hasta que borres el navegador", en: "Persistent until you clear your browser" },
  },
  {
    key: "theme",
    purpose: {
      es: "Recuerda si prefieres el tema claro u oscuro.",
      en: "Remembers whether you prefer the light or dark theme.",
    },
    life: { es: "Permanente hasta que borres el navegador", en: "Persistent until you clear your browser" },
  },
  {
    key: "cookie-consent",
    purpose: {
      es: "Guarda que ya has visto el aviso de cookies.",
      en: "Stores that you have already seen the cookie notice.",
    },
    life: { es: "Permanente hasta que borres el navegador", en: "Persistent until you clear your browser" },
  },
];

function Content() {
  const { t, lang } = useLang();

  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-28 sm:px-8">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t(ui.cookiePolicyTitle)}</h1>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t(ui.cookiePolicyDesc)}</p>

      <div className="mt-10 space-y-5 text-sm leading-relaxed text-muted-foreground">
        <p>{t(ui.cookieText)}</p>
        <p>
          {lang === "es"
            ? "Esta web es un sitio personal estático: no hay cuentas de usuario, ni analítica, ni cookies de terceros con fines publicitarios o de perfilado. Los datos que se guardan permanecen en tu navegador y no se envían a ningún servidor."
            : "This is a static personal website: there are no user accounts, no analytics, and no third-party cookies for advertising or profiling. Everything stored stays in your browser and is never sent to any server."}
        </p>

        <div className="surface-card overflow-hidden p-0">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-border text-xs uppercase tracking-wider text-foreground">
              <tr>
                <th className="p-4">{lang === "es" ? "Nombre" : "Name"}</th>
                <th className="p-4">{lang === "es" ? "Finalidad" : "Purpose"}</th>
                <th className="p-4">{lang === "es" ? "Duración" : "Duration"}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} className="border-b border-border/60 last:border-0">
                  <td className="p-4 font-mono text-xs text-emerald-accent">{row.key}</td>
                  <td className="p-4">{t(row.purpose)}</td>
                  <td className="p-4">{t(row.life)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          {lang === "es"
            ? "Puedes borrar estos datos en cualquier momento desde los ajustes de tu navegador (borrar datos de sitios). La web seguirá funcionando con los valores por defecto."
            : "You can delete this data at any time from your browser settings (clear site data). The site will keep working with default values."}
        </p>
        <p>
          {lang === "es" ? "¿Dudas? Escríbeme a " : "Questions? Write to "}
          <a
            href={`mailto:${profile.email}`}
            className="text-foreground underline underline-offset-4 hover:text-emerald-accent"
          >
            {profile.email}
          </a>
          .
        </p>
      </div>

      <a
        href="/"
        className="mt-10 inline-flex rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-emerald-accent hover:text-emerald-accent"
      >
        {t(ui.backHome)}
      </a>
    </main>
  );
}

function CookiesPage() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <ParallaxBackground />
        <Header />
        <Content />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
