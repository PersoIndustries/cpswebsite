import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { L } from "@/data/site";

export type Lang = "es" | "en";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "es",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "es" || stored === "en") setLangState(stored);
    else if (typeof navigator !== "undefined" && !navigator.language.startsWith("es"))
      setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = (value: L) => value[lang];
  return { lang, setLang, t };
}

/** UI copy that isn't part of the content data. */
export const ui = {
  viewCv: { es: "Ver CV", en: "View CV" },
  projects: { es: "Proyectos", en: "Projects" },
  contact: { es: "Contactar", en: "Contact" },
  currently: { es: "Ahora mismo", en: "Currently" },
  openMenu: { es: "Abrir menú", en: "Open menu" },
  toggleTheme: { es: "Cambiar tema", en: "Toggle theme" },
  seeMore: { es: "Ver más", en: "See more" },
  openTool: { es: "Abrir tool", en: "Open tool" },

  companiesEyebrow: { es: "Negocios & producto", en: "Business & product" },
  companiesTitle: { es: "Empresas & Apps", en: "Companies & Apps" },
  companiesDesc: {
    es: "Del vivero familiar al SaaS: proyectos donde mezclo campo, tecnología y producto.",
    en: "From the family nursery to SaaS: projects mixing land, technology and product.",
  },


  gamesEyebrow: { es: "Game dev", en: "Game dev" },
  gamesTitle: { es: "Juegos & Game Dev", en: "Games & Game Dev" },
  gamesDesc: {
    es: "Producción, liderazgo de estudio y desarrollo en títulos multijugador, Web3 y proyectos académicos.",
    en: "Production, studio leadership and development on multiplayer, Web3 and academic titles.",
  },


  queueEyebrow: { es: "Roadmap", en: "Roadmap" },
  queueTitle: { es: "Proyectos en cola", en: "Projects in the pipeline" },
  queueDesc: {
    es: "Ideas ya definidas que empezaré a construir próximamente.",
    en: "Ideas already defined that I'll start building soon.",
  },
  queueBadge: { es: "En cola", en: "Queued" },

  otherEyebrow: { es: "Trayectoria", en: "Track record" },
  otherTitle: { es: "Otras experiencias y proyectos", en: "Other experience & projects" },
  otherDesc: {
    es: "Webs, investigación, eventos y game jams en los que he participado.",
    en: "Websites, research, events and game jams I've been part of.",
  },

  aboutEyebrow: { es: "Sobre mí", en: "About me" },
  aboutTitle: { es: "Perfil profesional", en: "Professional profile" },
  aboutDesc: {
    es: "Perfil híbrido entre producto tech, liderazgo de equipos y trabajo real de campo en negocios familiares.",
    en: "A hybrid profile between tech product, team leadership and real fieldwork in family businesses.",
  },
  keyExperience: { es: "Experiencia clave", en: "Key experience" },
  educationTitle: { es: "Educación", en: "Education" },
  skillsTitle: { es: "Skills", en: "Skills" },
  mindsetTitle: { es: "Mindset", en: "Mindset" },
  languagesTitle: { es: "Idiomas", en: "Languages" },

  toolsEyebrow: { es: "Tools", en: "Tools" },
  toolsTitle: { es: "Mis Tools", en: "My Tools" },
  toolsDesc: {
    es: "Pequeñas herramientas que he desarrollado para facilitar procesos del día a día.",
    en: "Small tools I've built to make day-to-day processes easier.",
  },

  contactEyebrow: { es: "Contacto", en: "Contact" },
  contactTitle: { es: "Redes sociales & Contacto", en: "Social & Contact" },
  contactDesc: {
    es: "Hablemos de producto, juegos, Web3, agricultura o impresión 3D. Respondo rápido.",
    en: "Let's talk product, games, Web3, agriculture or 3D printing. I reply fast.",
  },
  formName: { es: "Nombre", en: "Name" },
  formEmail: { es: "Email", en: "Email" },
  formMessage: { es: "Mensaje", en: "Message" },
  formNamePh: { es: "Tu nombre", en: "Your name" },
  formMessagePh: { es: "Cuéntame en qué puedo ayudarte…", en: "Tell me how I can help…" },
  formSend: { es: "Enviar mensaje", en: "Send message" },
  webSubject: { es: "Contacto web", en: "Website contact" },

  cookieTitle: { es: "Cookies", en: "Cookies" },
  cookieText: {
    es: "Esta web solo usa almacenamiento local técnico para recordar tu idioma y tu tema (claro/oscuro). No hay cookies de publicidad ni de seguimiento.",
    en: "This site only uses technical local storage to remember your language and theme (light/dark). No advertising or tracking cookies.",
  },
  cookieAccept: { es: "Entendido", en: "Got it" },
  cookieMore: { es: "Política de cookies", en: "Cookie policy" },
  cookiePolicyTitle: { es: "Política de cookies", en: "Cookie policy" },
  cookiePolicyDesc: {
    es: "Cómo se usan las cookies y el almacenamiento local en esta web.",
    en: "How cookies and local storage are used on this website.",
  },
  backHome: { es: "Volver al inicio", en: "Back to home" },
} satisfies Record<string, L>;
