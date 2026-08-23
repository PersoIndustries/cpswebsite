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
import { CookieBanner } from "@/components/site/CookieBanner";
import { ParallaxBackground } from "@/components/site/ParallaxBackground";
import { LanguageProvider } from "@/lib/i18n";

const title = "Carlos Peralta Sorolla (PERSO) — Project Manager & Dev";
const description =
  "Carlos Peralta Sorolla (PERSO), project manager y desarrollador: CV, empresas y apps (Jardiper, LayerSuite, XCarbon), game dev, Web3, impresión 3D bajo pedido y tools.";
const siteUrl = "https://carlosperaltasorolla.com";
const ogImage = `${siteUrl}/carlos.jpg`;


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "800" },
      { property: "og:image:height", content: "800" },
      { property: "og:image:alt", content: "Carlos Peralta Sorolla (PERSO)" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: siteUrl + "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Carlos Peralta Sorolla",
          image: ogImage,
          url: siteUrl,
          alternateName: ["PERSO", "Perso_Dev"],

          jobTitle: "Project Manager & Product Developer",
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
            "https://www.instagram.com/pers0",
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
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}
