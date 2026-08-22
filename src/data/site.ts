import carlosImg from "@/assets/carlos.jpg.asset.json";
import cvPdf from "@/assets/cv.pdf.asset.json";

export const profile = {
  name: "Carlos Peralta Sorolla",
  alias: "Perso_Dev",
  tagline: "Creative & Hands-on | Games · Tech · Agriculture · AI",
  intro:
    "Hola, soy Carlos. Persona creativa y proactiva con fuertes skills de gente y actitud hands-on. Empecé joven en los negocios familiares (vivero, planta de compostaje y granjas). He sido Head of Studio en Blackmouth Games liderando proyectos Web3/multiplayer. Actualmente desarrollo mis propios proyectos (LayerSuite, XCarbon…) y ayudo en los negocios familiares mientras estudio IA.",
  now: "Actualmente trabajando en LayerSuite, XCarbon y ayudando en los negocios familiares mientras estudio IA.",
  photo: carlosImg.url,
  cv: cvPdf.url,
  email: "carlosperaltasorolla@gmail.com",
  phone: "(+34) 664 02 01 76",
  phoneRaw: "+34664020176",
  location: "Fraga, Huesca, Spain — abierto a oportunidades abroad",
  linkedin: "https://www.linkedin.com/in/carlos-peralta-sorolla",
  x: "https://x.com/perso_dev",
};

export const nav = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí / CV", href: "#sobre-mi" },
  { label: "Tools", href: "#tools" },
  { label: "Empresas & Apps", href: "#empresas" },
  { label: "Juegos", href: "#juegos" },
  { label: "Redes & Contacto", href: "#contacto" },
];

export const tools = [
  {
    name: "STL Cutter",
    icon: "Scissors",
    description:
      "Divide modelos STL en piezas imprimibles cuando no caben en la cama de impresión.",
    href: "#stl-cutter",
  },
  {
    name: "Helix Force",
    icon: "Cog",
    description:
      "Calculadora de fuerzas y parámetros para husillos y mecanismos helicoidales.",
    href: "#helix-force",
  },
  {
    name: "SQL to Markdown",
    icon: "Table",
    description:
      "Convierte esquemas y resultados SQL en tablas Markdown limpias en un clic.",
    href: "#sql-to-markdown",
  },
];

export const companies = [
  {
    name: "Jardiper",
    icon: "Sprout",
    description: "Centro de jardinería y vivero familiar en Fraga (Huesca).",
    href: "https://www.jardiper.es/",
    status: "Activo",
  },
  {
    name: "LIETT Iberica",
    icon: "Recycle",
    description: "Planta de compostaje y agricultura familiar.",
    href: "#liett",
    status: "Activo",
  },
  {
    name: "Libro de campo para tu huerto",
    icon: "NotebookPen",
    description: "App para la gestión y el cuaderno de campo de tu huerto.",
    href: "#libro-de-campo",
    status: "App",
  },
  {
    name: "Layer Suite",
    icon: "Layers",
    description:
      "Plataforma de gestión especializada para negocios de impresión 3D.",
    href: "#layersuite",
    status: "WIP",
  },
  {
    name: "XCarbon.io",
    icon: "Leaf",
    description:
      "SaaS de planta de compostaje + créditos de carbono Web3 y marketplace.",
    href: "#xcarbon",
    status: "WIP",
  },
];

export const games = [
  {
    name: "Domenation (Time Defenders)",
    role: "Head of Studio — Blackmouth Games",
    description:
      "Shooter multijugador de PC con ecosistema Web3, NFTs y dApp propia.",
    href: "#domenation",
  },
  {
    name: "Zodiak",
    role: "Head of Studio — Blackmouth Games",
    description: "Telegram Game con progresión social y mecánicas casual.",
    href: "#zodiak",
  },
  {
    name: "Hit n'Rush",
    role: "Game Producer",
    description: "Juego multijugador de PC, acción y competición rápida.",
    href: "#hitnrush",
  },
  {
    name: "Mitico",
    role: "Producer / Product",
    description: "Proyecto de entretenimiento, Web3 y streaming deportivo.",
    href: "#mitico",
  },
  {
    name: "Necrognomicon",
    role: "Producer — Playstation Talents (18 personas)",
    description: "Proyecto seleccionado en Playstation Talents.",
    href: "#necrognomicon",
  },
  {
    name: "Unthrone",
    role: "Njoy Games — proyecto universitario (35 personas)",
    description: "Proyecto de gran equipo desarrollado en la universidad.",
    href: "#unthrone",
  },
  {
    name: "Game jams & otros",
    role: "Varios roles",
    description: "MIO, LTT y otros prototipos de jams y proyectos académicos.",
    href: "#jams",
  },
];

export const experience = [
  {
    role: "Head of Studio",
    org: "Blackmouth Games",
    period: "2020 — 2025",
    description:
      "Liderazgo de estudio y producción de Domenation (Time Defenders), Zodiak y proyectos Web3/multiplayer.",
  },
  {
    role: "Solo Dev & Founder",
    org: "LayerSuite · XCarbon",
    period: "2025 — hoy",
    description:
      "Desarrollo end-to-end de producto: SaaS de gestión para impresión 3D y plataforma de créditos de carbono.",
  },
  {
    role: "Multitask / Operaciones",
    org: "Jardiper & LIETT Iberica",
    period: "Desde siempre",
    description:
      "Vivero, planta de compostaje y granjas familiares: operaciones, digitalización y atención al cliente.",
  },
];

export const education = [
  "Specialist in Artificial Intelligence — Racks Academy",
  "Máster en Mercados Financieros",
  "MBA + Project Management",
  "Playstation Talents",
  "Grado en Diseño y Desarrollo de Videojuegos",
];

export const skills = [
  "Unreal Engine",
  "Unity",
  "React",
  "TypeScript",
  "SQL",
  "AI tools (Cursor, Lovable, GPT)",
  "Jira",
  "Notion",
  "AWS",
  "Web3 / Blockchain",
  "Product & Team Leadership",
  "Impresión 3D",
];
