

export type L = { es: string; en: string };

export const profile = {
  name: "Carlos Peralta Sorolla",
  alias: "PERSO",
  tagline: {
    es: "Project Manager · Creative & Hands-on | Games · Tech · Web3 · Agriculture",
    en: "Project Manager · Creative & Hands-on | Games · Tech · Web3 · Agriculture",
  } satisfies L,
  intro: {
    es: "Hola, soy Carlos. Persona creativa y proactiva, con buen trato con la gente y actitud hands-on. Empecé muy joven en los negocios familiares (vivero y planta de compostaje). He sido Head of Studio en Blackmouth Games, liderando Domenation y varios proyectos multijugador y Web3. Hoy desarrollo mis propios productos (LayerSuite, XCarbon), imprimo en 3D bajo pedido y sigo formándome con dos másteres.",
    en: "Hi, I'm Carlos. A creative, proactive person with strong people skills and a hands-on attitude. I started young in my family's businesses (nursery and composting plant). I was Head of Studio at Blackmouth Games, leading Domenation and several multiplayer and Web3 projects. Today I build my own products (LayerSuite, XCarbon), run a 3D printing service and I'm studying two master's degrees.",
  } satisfies L,
  now: {
    es: "Ahora mismo: LayerSuite y XCarbon, impresión 3D bajo pedido, apoyo en los negocios familiares y dos másteres en marcha (MBA + Project Management y Mercados Financieros & Gestión de Activos).",
    en: "Right now: LayerSuite and XCarbon, 3D printing on demand, helping in the family businesses and two master's degrees in progress (MBA + Project Management and Financial Markets & Asset Management).",
  } satisfies L,
  photo: "/carlos.jpg",
  email: "carlosperaltasorolla@gmail.com",
  location: {
    es: "Fraga, Huesca (España) — abierto a oportunidades en el extranjero",
    en: "Fraga, Huesca (Spain) — open to opportunities abroad",
  } satisfies L,
  linkedin: "https://www.linkedin.com/in/carlos-peralta-sorolla",
  x: "https://x.com/perso_dev",
  instagram: "https://www.instagram.com/pers0",
};

export const nav: { label: L; href: string }[] = [
  { label: { es: "Inicio", en: "Home" }, href: "#inicio" },
  { label: { es: "Empresas & Apps", en: "Companies & Apps" }, href: "#empresas" },
  { label: { es: "Juegos", en: "Games" }, href: "#juegos" },
  { label: { es: "En cola", en: "In the pipeline" }, href: "#en-cola" },
  { label: { es: "Sobre mí / CV", en: "About / CV" }, href: "#sobre-mi" },
  { label: { es: "Otros proyectos", en: "Other projects" }, href: "#otros" },
  { label: { es: "Tools", en: "Tools" }, href: "#tools" },
  { label: { es: "Contacto", en: "Contact" }, href: "#contacto" },
];

export const tools: { name: string; icon: string; description: L; href: string }[] = [
  {
    name: "STL Cutter",
    icon: "Scissors",
    description: {
      es: "Divide modelos STL en piezas imprimibles cuando no caben en la cama de impresión.",
      en: "Splits STL models into printable pieces when they don't fit the print bed.",
    },
    href: "https://stlcutter.carlosperaltasorolla.com",
  },
  {
    name: "Helix Forge",
    icon: "Cog",
    description: {
      es: "Calculadora de fuerzas y parámetros para husillos y mecanismos helicoidales.",
      en: "Force and parameter calculator for lead screws and helical mechanisms.",
    },
    href: "https://helixforge.carlosperaltasorolla.com",
  },
  {
    name: "SQL to Markdown",
    icon: "Table",
    description: {
      es: "Convierte esquemas y resultados SQL en tablas Markdown limpias en un clic.",
      en: "Turns SQL schemas and results into clean Markdown tables in one click.",
    },
    href: "https://sqlmd.carlosperaltasorolla.com",
  },
  {
    name: "Massive Images Renamer",
    icon: "FileType",
    description: {
      es: "Renombra lotes enormes de imágenes con reglas y patrones. 100% local, sin subir nada.",
      en: "Renames huge batches of images with rules and patterns. 100% local, nothing uploaded.",
    },
    href: "https://renamer.blackmouthgames.com/",
  },
  {
    name: "Image Multi Converter",
    icon: "Images",
    description: {
      es: "Conversor local de imágenes por lotes entre formatos (PNG, JPG, WebP…).",
      en: "Local batch image converter between formats (PNG, JPG, WebP…).",
    },
    href: "https://imgmulticonverter.carlosperaltasorolla.com",
  },
  {
    name: "PDF Editor (full local)",
    icon: "FileText",
    description: {
      es: "Une, divide, rota y reordena PDFs directamente en tu navegador, sin servidor.",
      en: "Merge, split, rotate and reorder PDFs right in your browser, no server involved.",
    },
    href: "#pdf-editor",
  },
  {
    name: "PDF Words Finder",
    icon: "FileSearch",
    description: {
      es: "Busca palabras clave dentro de PDFs largos de muchas páginas, 100% local.",
      en: "Find keywords inside long multi-page PDFs, 100% local.",
    },
    href: "https://pdfwordsfinder.carlosperaltasorolla.com",
  },
];


export const companies: {
  name: string;
  icon: string;
  description: L;
  href: string;
  status: L;
}[] = [
  {
    name: "Jardiper",
    icon: "Sprout",
    description: {
      es: "Centro de jardinería y vivero familiar en Fraga (Huesca).",
      en: "Family garden center and nursery in Fraga (Huesca, Spain).",
    },
    href: "https://www.jardiper.es/",
    status: { es: "Activo", en: "Active" },
  },
  {
    name: "LIETT IBERICA",
    icon: "Recycle",
    description: {
      es: "Planta de compostaje y agricultura familiar.",
      en: "Family composting plant and agriculture.",
    },
    href: "https://liettiberica.es/",
    status: { es: "Activo", en: "Active" },
  },
  {
    name: "Layer Suite",
    icon: "Layers",
    description: {
      es: "SaaS, plataforma de gestión especializada para negocios de impresión 3D.",
      en: "SaaS, management platform built for 3D printing businesses.",
    },
    href: "#layersuite",
    status: { es: "WIP", en: "WIP" },
  },
  {
    name: "XCarbon.io",
    icon: "Leaf",
    description: {
      es: "SaaS para plantas de compostaje + (to do) créditos de carbono Web3 y marketplace.",
      en: "SaaS for composting plants + (to do) Web3 carbon credits and marketplace.",
    },
    href: "#xcarbon",
    status: { es: "WIP", en: "WIP" },
  },
];

export const web3: { name: string; icon: string; description: L }[] = [
  {
    name: "Domenation — token, NFTs & dApp",
    icon: "Coins",
    description: {
      es: "Ecosistema Web3 alrededor de un shooter multijugador de PC: token, colecciones NFT y una dApp propia conectada al juego.",
      en: "Web3 ecosystem around a multiplayer PC shooter: token, NFT collections and an in-house dApp connected to the game.",
    },
  },
  {
    name: "XCarbon — créditos de carbono on-chain",
    icon: "Leaf",
    description: {
      es: "Tokenización de créditos de carbono generados en planta de compostaje, con trazabilidad y marketplace.",
      en: "Tokenization of carbon credits generated at a composting plant, with traceability and a marketplace.",
    },
  },
  {
    name: "Zodiak & Telegram Web3",
    icon: "Send",
    description: {
      es: "Mini-juegos en Telegram con wallets, recompensas on-chain y progresión social.",
      en: "Telegram mini-games with wallets, on-chain rewards and social progression.",
    },
  },
  {
    name: "Producto & operativa Web3",
    icon: "Blocks",
    description: {
      es: "Gestión de comunidades, tokenomics, integración de wallets y coordinación con partners y exchanges.",
      en: "Community management, tokenomics, wallet integrations and coordination with partners and exchanges.",
    },
  },
];

export const games: { name: string; role: L; description: L; href: string }[] = [
  {
    name: "Domenation",
    role: { es: "Head of Studio — Blackmouth Games", en: "Head of Studio — Blackmouth Games" },
    description: {
      es: "Shooter multijugador de PC a gran escala (2023 — 2025), con ecosistema Web3: web, dApp, token y NFTs.",
      en: "Large-scale multiplayer PC shooter (2023 — 2025) with a Web3 ecosystem: web, dApp, token and NFTs.",
    },
    href: "#domenation",
  },
  {
    name: "Domenation: Time Defenders",
    role: { es: "Head of Studio — Blackmouth Games", en: "Head of Studio — Blackmouth Games" },
    description: {
      es: "Tower defence en Telegram dentro del universo Domenation (2024 — 2025): dirección de producto, UX y economía.",
      en: "Telegram tower defence set in the Domenation universe (2024 — 2025): product direction, UX and economy design.",
    },
    href: "#time-defenders",
  },
  {
    name: "Zodiak",
    role: { es: "Head of Studio — Blackmouth Games", en: "Head of Studio — Blackmouth Games" },
    description: {
      es: "Telegram game con progresión social, mecánicas casual y capa Web3.",
      en: "Telegram game with social progression, casual mechanics and a Web3 layer.",
    },
    href: "#zodiak",
  },
  {
    name: "Hit n'Rush",
    role: { es: "Game Producer", en: "Game Producer" },
    description: {
      es: "Juego multijugador de PC, acción y competición rápida.",
      en: "Multiplayer PC game: fast action and competition.",
    },
    href: "#hitnrush",
  },
  {
    name: "Necrognomicon",
    role: { es: "Game Producer — Playstation Talents", en: "Game Producer — Playstation Talents" },
    description: {
      es: "Proyecto seleccionado en Playstation Talents, equipo de 18-26 personas.",
      en: "Project selected for Playstation Talents, team of 18-26 people.",
    },
    href: "#necrognomicon",
  },
  {
    name: "Unthrone",
    role: { es: "Producer — Njoy Games (universidad)", en: "Producer — Njoy Games (university)" },
    description: {
      es: "Proyecto universitario de gran equipo: 35 personas.",
      en: "Large university project with a 35-person team.",
    },
    href: "#unthrone",
  },
  {
    name: "LTT",
    role: { es: "Designer, Producer & Programmer (C/C++)", en: "Designer, Producer & Programmer (C/C++)" },
    description: {
      es: "Proyecto final de grado desarrollado en solitario.",
      en: "Final degree project developed solo.",
    },
    href: "#ltt",
  },
];

export const queue: { name: string; icon: string; description: L }[] = [
  {
    name: "Libro de campo para tu huerto",
    icon: "NotebookPen",
    description: {
      es: "App de cuaderno de campo para gestionar tratamientos, riegos y cosechas de tu huerto.",
      en: "Field-notebook app to manage treatments, watering and harvests in your vegetable garden.",
    },
  },
  {
    name: "Tower Defence (sin anunciar)",
    icon: "Castle",
    description: {
      es: "Desarrollo de un juego de tower defence todavía sin anunciar. Pronto más detalles.",
      en: "A tower defence game in development, not announced yet. More details soon.",
    },
  },
  {
    name: "My Ham Radio Museum",
    icon: "Radio",
    description: {
      es: "Museo digital para catalogar y compartir colecciones de radioafición.",
      en: "Digital museum to catalogue and share ham radio collections.",
    },
  },
];

export const otherProjects: { name: string; description: L; href?: string; period?: string }[] = [
  {
    name: "Web3 & Blockchain",
    description: {
      es: "Token, NFTs y dApp de Domenation, créditos de carbono on-chain en XCarbon, mini-juegos Web3 en Telegram, tokenomics y comunidad.",
      en: "Domenation token, NFTs and dApp, on-chain carbon credits at XCarbon, Telegram Web3 mini-games, tokenomics and community.",
    },
  },
  {
    name: "Impresión 3D bajo pedido",
    description: {
      es: "Servicio de impresión FDM técnica (ABS, ASA, fibra de vidrio y carbono), diseño y adaptación de piezas. Escríbeme para presupuesto.",
      en: "Technical FDM printing service (ABS, ASA, glass and carbon fibre), part design and adaptation. Message me for a quote.",
    },
    href: "#contacto",
  },
  {
    name: "Eurometales",
    description: {
      es: "Diseño y desarrollo de la web corporativa.",
      en: "Design and development of the corporate website.",
    },
    href: "https://eurometales.com/",
  },
  {
    name: "Jardiper.es",
    description: {
      es: "Web del centro de jardinería familiar: contenido, catálogo y mantenimiento.",
      en: "Website for the family garden center: content, catalogue and maintenance.",
    },
    href: "https://www.jardiper.es/",
  },
  {
    name: "LIETT IBERICA",
    description: {
      es: "Web corporativa de la planta de compostaje y agricultura, además del desarrollo de los anexos y la integración con XCarbon.io.",
      en: "Corporate website for the composting and agriculture business, plus development of the XCarbon.io annexes and integration.",
    },
  },
  {
    name: "Mitico",
    description: {
      es: "Proyecto de entretenimiento, Web3 y streaming deportivo (OTT) en fases iniciales: business plan, idea, plan financiero y primeros pasos de producto.",
      en: "Entertainment, Web3 and sports streaming (OTT) project at early stages: business plan, idea creation, financial plan and first product steps.",
    },
    period: "2023",
  },
  {
    name: "Predictive Sport Drive (PSD)",
    description: {
      es: "Research Designer, gestión y programación (C#) en Creative Lab — Carnet Research HUB, equipo de 4 personas.",
      en: "Research Designer, management and programming (C#) at Creative Lab — Carnet Research HUB, 4-person team.",
    },
    period: "2018 — 2019",
  },
  {
    name: "Asoc. Fraga LAN Party",
    description: {
      es: "Organizador del evento local de videojuegos y tecnología, con entre 300 y 350 participantes por edición.",
      en: "Organizer of the local gaming and technology event, with 300 to 350 participants per edition.",
    },
    period: "2012 — 2019",
  },
  {
    name: "Game jams",
    description: {
      es: "MIO (finalista, Idea Game Jam 2018) como programador, artista 2D y sonido, más 2 jams como pixel artist.",
      en: "MIO (finalist, Idea Game Jam 2018) as programmer, 2D artist and sound, plus 2 jams as pixel artist.",
    },
  },
  {
    name: "RESA — Francesc Giralt i Serra",
    description: {
      es: "Coordinador de actividades en la residencia universitaria de Terrassa.",
      en: "Activities coordinator at the university residence in Terrassa.",
    },
    period: "2017 — 2019",
  },
];

export const experience: { role: L; org: string; period: L; description: L }[] = [
  {
    role: { es: "Head of Studio", en: "Head of Studio" },
    org: "Blackmouth Games",
    period: { es: "2020 — 2025", en: "2020 — 2025" },
    description: {
      es: "Liderazgo del estudio y producción de Domenation, Domenation: Time Defenders, Zodiak y otros proyectos multijugador y Web3: equipos de 20-50 personas + outsourcing y roadmap de producto.",
      en: "Studio leadership and production of Domenation, Domenation: Time Defenders, Zodiak and other multiplayer/Web3 projects: 20-50 people teams + outsourcing and product roadmap.",
    },
  },
  {
    role: { es: "Solo Dev & Founder", en: "Solo Dev & Founder" },
    org: "LayerSuite · XCarbon",
    period: { es: "2023 — hoy", en: "2023 — now" },
    description: {
      es: "Producto end-to-end: SaaS de gestión para impresión 3D y plataforma de créditos de carbono Web3.",
      en: "End-to-end product: management SaaS for 3D printing and a Web3 carbon credits platform.",
    },
  },
  {
    role: { es: "Multitask / Operaciones", en: "Multitask / Operations" },
    org: "Jardiper & LIETT IBERICA",
    period: { es: "Desde siempre", en: "Always" },
    description: {
      es: "Vivero y planta de compostaje familiares: decisiones, operaciones, maquinaria, IT y atención al cliente.",
      en: "Family nursery and composting plant: decision making, operations, machinery, IT and customer service.",
    },
  },
];

export const education: { title: L; org: string; period: L; note?: L }[] = [
  {
    title: {
      es: "Máster en Mercados Financieros y Gestión de Activos",
      en: "Master's Degree in Financial Markets and Asset Management",
    },
    org: "ENEB",
    period: { es: "Jul. 2026 — actualidad · Remoto", en: "Jul. 2026 — present · Remote" },
  },
  {
    title: {
      es: "Máster en MBA + Project Management",
      en: "Master's Degree in MBA + Project Management",
    },
    org: "ENEB",
    period: { es: "Oct. 2025 — actualidad · Remoto", en: "Oct. 2025 — present · Remote" },
  },
  {
    title: {
      es: "Master Specialist in Artificial Intelligence",
      en: "Master Specialist in Artificial Intelligence",
    },
    org: "Racks Academy",
    period: { es: "Oct. 2024 — Dic. 2025 · Remoto", en: "Oct. 2024 — Dec. 2025 · Remote" },
  },
  {
    title: {
      es: "Máster en Marketing, Comunicación y Gestión de Proyectos de Videojuegos",
      en: "Master's Degree in Marketing, Communication and Videogame Project Management",
    },
    org: "Voxel School & UCM — PlayStation Talents",
    period: { es: "Oct. 2019 — Sep. 2020 · Madrid", en: "Oct. 2019 — Sep. 2020 · Madrid" },
    note: { es: "Matrícula de honor (10)", en: "Graduated with honors (10)" },
  },
  {
    title: {
      es: "Grado en Diseño y Desarrollo de Videojuegos",
      en: "Bachelor's Degree in Video Game Design and Development",
    },
    org: "Centre de la Imatge i la Tecnologia Multimèdia (UPC)",
    period: { es: "Sep. 2015 — Jun. 2019 · Terrassa", en: "Sep. 2015 — Jun. 2019 · Terrassa" },
    note: {
      es: "Participación en el grupo de investigación PSD — Creative Lab",
      en: "Member of the PSD research group — Creative Lab",
    },
  },
  {
    title: {
      es: "Técnico Superior en Telecomunicaciones y Sistemas Informáticos",
      en: "Higher Technician in Telecommunications and Computer Systems",
    },
    org: "INS Pere Martell",
    period: { es: "Sep. 2013 — Jun. 2015 · Tarragona", en: "Sep. 2013 — Jun. 2015 · Tarragona" },
    note: { es: "3er premio Trabajo de Investigación REPSOL YPF (2014)", en: "3rd prize, REPSOL YPF research award (2014)" },
  },
];

export const languages: { name: L; level: L }[] = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" } },
  { name: { es: "Catalán", en: "Catalan" }, level: { es: "Bilingüe", en: "Bilingual" } },
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "Intermedio alto", en: "Upper intermediate" },
  },
];

export const skills = [
  "Unreal Engine",
  "Unity",
  "React",
  "TypeScript",
  "SQL",
  "C# / C++",
  "AI tools (Cursor, Lovable, GPT)",
  "Jira · Trello · Notion",
  "AWS · Railway · Supabase",
  "Web3 / Blockchain",
  "Product & Team Leadership",
  "Impresión 3D",
];

export const mindset: L[] = [
  { es: "Sin miedo al éxito", en: "No fear of success" },
  { es: "Work, grow & repeat", en: "Work, grow & repeat" },
  { es: "Cuerpo sano, mente sana (CrossFit power)", en: "Healthy body, healthy mind (CrossFit power)" },
  { es: "Ecología sensata", en: "Sensible ecology" },
  { es: "Adopción sensata de Web3", en: "Sensible Web3 adoption" },
  { es: "Adopción sensata de la IA", en: "Sensible AI adoption" },
  { es: "The best part is no part", en: "The best part is no part" },
  { es: "Gaming for life", en: "Gaming for life" },
  { es: "Vivir para trabajar (y disfrutarlo)", en: "Live to work (and enjoy it)" },
  { es: "Sin horarios de entrada y salida", en: "No clock-in, clock-out" },
];
