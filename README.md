# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Despliegue en Netlify

El repositorio incluye `netlify.toml` con todo lo necesario:

- Build: `npm run build`
- Publish: `dist`
- `NITRO_PRESET=netlify` hace que el servidor SSR de TanStack Start se compile
  como Netlify Function (`.netlify/functions-internal`), detectada automáticamente
  por Netlify. No hace falta `_redirects`.

Pasos:

1. En Netlify: **Add new site → Import an existing project** y conecta el repo de GitHub.
2. Deja los ajustes por defecto (los lee de `netlify.toml`).
3. Añade en **Site settings → Environment variables** las variables que uses (`VITE_*`, claves, etc.).
4. Deploy.

Despliegue manual con la CLI:

```sh
npm i -g netlify-cli
NITRO_PRESET=netlify npm run build
netlify deploy --prod
```

Nota: dentro del entorno de build de Lovable se ignora `NITRO_PRESET` y se compila
para Cloudflare; el preset de Netlify solo se aplica al construir en Netlify o en local.
