# adambakerlaw.org

Astro rebuild of the Adam Baker, Attorney & Counselor at Law website.

## Develop

Requires Node >= 22.23.4 (see `.nvmrc`).

```sh
nvm use
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Editing content

Most content (contact info, hours, practice areas, downloadable resources) lives in
`src/data/site.ts`. PDFs are in `public/docs/`, images in `public/images/`.

Old URLs (`/about-me/`, `/practice-areas/`, `/resources/`, `/contact-me/`) are preserved;
`/location/` redirects to the map on the contact page.
