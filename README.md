# CPS_Website

Crea una web personal moderna, limpia y profesional para Carlos Peralta Sorolla (también conocido como Perso_Dev). Es un hub de links + CV personal. Debe servir como reemplazo de su antigua web http://carlosperaltasorolla.jardiper.es/.

### Estilo y diseño general
- Diseño minimalista, moderno y elegante con toques tecnológicos y naturales (mezcla de tech + agricultura/juegos).
- Tema oscuro por defecto con opción de claro (dark/light mode).
- Paleta de colores: negros, grises oscuros, acentos en verde esmeralda (#10B981) y azul eléctrico (#3B82F6). Tipografía limpia (Inter o similar).
- Totalmente responsive (móvil first).
- Animaciones sutiles y suaves (hover, fade-in, micro-interacciones).
- Header fijo con logo/nombre "Carlos Peralta Sorolla" + navegación.
- Footer con copyright, links rápidos y redes.

### Estructura de la web (single-page con anclas o multi-página ligera)

1. **Hero / Inicio**
   - Nombre grande: Carlos Peralta Sorolla
   - Tagline: "Creative & Hands-on | Games · Tech · Agriculture · AI"
   - Texto corto de presentación (adaptado de su CV):
     "Hola, soy Carlos. Persona creativa y proactiva con fuertes skills de gente y actitud hands-on. Empecé joven en los negocios familiares (vivero, planta de compostaje y granjas). He sido Head of Studio en Blackmouth Games liderando proyectos Web3/multiplayer. Actualmente desarrollo mis propios proyectos (LayerSuite, XCarbon…) y ayudo en los negocios familiares mientras estudio IA."
   - Botones CTA: "Ver CV" | "Proyectos" | "Contactar"
   - Foto de perfil (placeholder circular elegante) + links rápidos a LinkedIn y X.

2. **Menú de navegación principal**
   - Inicio
   - Sobre mí / CV
   - Tools
   - Empresas & Apps
   - Juegos
   - Redes & Contacto

3. **Sección Tools**
   Título: "Mis Tools"
   Descripción: "Herramientas que he desarrollado para facilitar procesos."
   Cards o grid con:
   - STL Cutter → descripción corta + botón "Abrir tool" (usa URL placeholder por ahora: #stl-cutter)
   - Helix Force → descripción corta + botón
   - SQL to Markdown → descripción corta + botón
   (Deja fácil añadir más tools en el futuro. Cada card con icono, nombre, breve descripción y link externo).

4. **Sección Empresas & Apps**
   Título: "Empresas & Apps"
   Grid de cards con logo/placeholder + nombre + breve descripción + link:
   - Jardiper → Centro de jardinería y vivero familiar en Fraga (Huesca). Link: https://www.jardiper.es/
   - LIETT Iberica → Planta de compostaje y agricultura familiar.
   - Libro de campo para tu huerto → (app/herramienta para gestión de huertos).
   - Layer Suite → Plataforma de gestión especializada para negocios de impresión 3D (WIP).
   - XCarbon.io → SaaS de planta de compostaje + créditos de carbono Web3 + marketplace (WIP).

5. **Sección Juegos**
   Título: "Juegos & Proyectos de Game Dev"
   Cards o lista con:
   - Domenation (Time Defenders) – Multiplayer PC shooter con ecosistema Web3, NFTs y dApp (Blackmouth Games – Head of Studio).
   - Zodiak – Telegram Game (Blackmouth Games).
   - Hit n'Rush – Multiplayer PC Game (Game Producer).
   - Mitico – Entertainment / Web3 / Sports Streaming project.
   - Necrognomicon – Playstation Talents project (Producer, 18 personas).
   - Unthrone – University project Njoy Games (35 personas).
   - Otros game jams y proyectos universitarios (MIO, LTT, etc.).
   Cada uno con breve descripción del rol y links si existen (YouTube, Steam, etc. – placeholders).

6. **Sección Sobre mí / CV resumido**
   - Resumen profesional (texto del CV actualizado).
   - Experiencia clave:
     - Head of Studio @ Blackmouth Games (2020-2025) – Domenation y otros.
     - Solo Dev: LayerSuite & XCarbon.
     - Multitask en negocios familiares (Jardiper & LIETT Iberica).
   - Educación: Specialist in Artificial Intelligence (Racks Academy), Master en Financial Markets, MBA+ Project Management, Playstation Talents, Grado en Diseño y Desarrollo de Videojuegos, etc.
   - Skills: Unreal Engine, React, Unity, SQL, TypeScript, AI tools (Cursor, Lovable, GPT…), Jira, Notion, AWS, etc.
   - Botón “Descargar CV completo (PDF)”.

7. **Sección Redes Sociales & Contacto**
   - LinkedIn: https://www.linkedin.com/in/carlos-peralta-sorolla
   - X/Twitter: https://x.com/perso_dev
   - Email: carlosperaltasorolla@gmail.com
   - Teléfono: (+34) 664 02 01 76
   - Ubicación: Fraga, Huesca, Spain (abierto a oportunidades abroad).
   - Formulario de contacto simple (nombre, email, mensaje) + botón de WhatsApp o email directo.

### Extra
- SEO básico: title "Carlos Peralta Sorolla | Games · Tech · Agriculture · AI", meta description, Open Graph.
- Favicon sencillo.
- Que sea fácil de editar después (componentes claros, datos en arrays o constantes).
- Usa React + Tailwind + Framer Motion (o equivalente moderno de Lovable).
- Incluye un pequeño “Now” o “Currently” section: “Actualmente trabajando en LayerSuite, XCarbon y ayudando en los negocios familiares mientras estudio IA”.

Haz que se sienta personal, profesional y con personalidad (tech + roots en el campo + pasión por los juegos). Prioriza velocidad de carga y buena UX móvil.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/46d4e489-763f-4444-acff-d9924defb6f3).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
