<p align="center">
<img src="image.png">
</p>

# dirk-heckmann.info 👋💳

Digital contact card for Dirk Heckmann. Powered by Astro and Contentful. Deployed by a SFTP Github action.

## Installation Instructions

### Clone this repository

```bash
git clone https://github.com/michaelheckmann/dirk-heckmann-info.git
```

### Install dependencies

```bash
cd dirk-heckmann-info
npm install
```

### Setup the environment

```bash
cp .env.example .env
```

### Run the dev server

```bash
npm run dev

```

## Astro

### 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
