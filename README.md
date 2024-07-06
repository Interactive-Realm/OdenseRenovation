# OdenseRenovation

## Structure

### Assets

Public assets like images, fonts and so on can be found in `public`.

Note: Don't use relative paths. If you want an asset type this: `/images/icon/paper-icon.jpg` as an example.

### Flashcards

To edit the flashcards goto `src/data/food-waste-cards.data.ts`.

### Index Page

To edit the index page go to `src/pages/index.astro`. This will build to `index.html`.

## Workflow

### Setup

Install dependencies to start developing.

```bash
npm install
```

### Development

Run the following command to start the dev server and see changes while editing.

```bash
npm run dev
```

### Production

Run the following command to build the website. The build can then be found in the `dist` folder.

```bash
npm run build
```
