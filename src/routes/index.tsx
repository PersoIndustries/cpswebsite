import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Tools } from "@/components/site/Tools";
import { Companies } from "@/components/site/Companies";
import { Games } from "@/components/site/Games";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Carlos Peralta Sorolla | Games · Tech · Agriculture · AI";
const description =
  "Web personal de Carlos Peralta Sorolla (Perso_Dev): CV, tools, empresas y apps (Jardiper, LayerSuite, XCarbon) y proyectos de game dev.";

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
          address: { "@type": "PostalAddress", addressLocality: "Fraga", addressRegion: "Huesca", addressCountry: "ES" },
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
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Tools />
        <Companies />
        <Games />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
