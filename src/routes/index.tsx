import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Companies } from "@/components/site/Companies";
import { Games } from "@/components/site/Games";
import { Queue } from "@/components/site/Queue";
import { OtherProjects } from "@/components/site/OtherProjects";
import { About } from "@/components/site/About";
import { Tools } from "@/components/site/Tools";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ParallaxBackground } from "@/components/site/ParallaxBackground";
import { LanguageProvider } from "@/lib/i18n";

const title = "Carlos Peralta Sorolla | Games · Tech · Web3 · Agriculture";
const description =
  "Web personal de Carlos Peralta Sorolla (Perso_Dev): CV, empresas y apps (Jardiper, LayerSuite, XCarbon), proyectos Web3, game dev, impresión 3D bajo pedido y tools.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Carlos Peralta Sorolla",
          alternateName: "Perso_Dev",
          jobTitle: "Game & Product Developer",
          email: "carlosperaltasorolla@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Fraga",
            addressRegion: "Huesca",
            addressCountry: "ES",
          },
          sameAs: [
            "https://www.linkedin.com/in/carlos-peralta-sorolla",
            "https://x.com/perso_dev",
            "https://www.jardiper.es/",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-background text-foreground">
        <ParallaxBackground />
        <Header />
        <main>
          <Hero />
          <Companies />
          <Games />
          <Queue />
          <About />
          <OtherProjects />
          <Tools />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
