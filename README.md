# Aero Atlas

Aero Atlas is a personal archive of Frutiger Aero: the glossy, glassy, nature-filled look of consumer technology from about 2004 to 2013. The nickname itself was coined in 2017. The site looks like an enthusiast encyclopedia from the late 2000s and says so.

**Live site:** https://soyturkardaburak.github.io/frutiger-aero-archive/

## Pages

- Home, with a meadow hero, featured articles, a gallery strip, the journal, and a design of the day
- The Aesthetic, an illustrated guide
- Wiki, twelve articles with contents, infoboxes, and sources
- Gallery, with category filters, a lightbox, and downloads of the drawings
- Blog, six dated essays
- Timeline, from Aqua in 2000 to the later nickname
- Resources, with off-site reading
- Image licenses
- About, whose personal lines come from `src/data/profile.ts`
- Search, and an RSS feed at `rss.xml`

## Add a wiki article

1. Create `src/content/wiki/your-slug.md`.
2. Copy the front matter from an existing article. Required fields: `title`, `summary`, `order`, `category` (`Foundations`, `Interfaces`, `Graphics`, or `Culture`), `tags`, `image`, `imageAlt`, `imageCredit`, `related`, `featured`, `infobox` (`period`, `alsoCalled`, `field`), `references` (each with `title` and `url`), and `updated`.
3. Write the article in Markdown. Second-level headings become the contents list.
4. Put `related` slugs that match other filenames, without `.md`.
5. Quote any tag that is only a number, or YAML will store it as a number and the build will refuse it.
6. Run `npm run dev` and open the encyclopedia. No layout code has to change.

## Add a blog post

1. Create `src/content/blog/your-slug.md`.
2. Front matter: `title`, `summary`, `date` (`YYYY-MM-DD`), `author`, `category`, `tags`, `image`, `imageAlt`, `imageCredit`.
3. Use the real date you wrote the post. Do not backdate it to 2008.
4. The journal index, the RSS feed, the calendar, and the search index pick the file up on the next build.

## Pictures

Drawings in `public/art/` were made for this archive. They are studies of skies, glass, water, icons, and posters. They are not screenshots of Windows, macOS, or historical advertisements, and the captions say so.

Three photographs are stored in `public/images/` and credited on the licensing page:

- `field-clouds.jpg` — Sjgdzn, [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Green_Field_Blue_Sky_Clouds.jpg)
- `grass-mara.jpg` — Kandukuru Nagarjun, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Green_grass_and_blue_sky_(42359539310).jpg)
- `bubbles-grass.jpg` — ThePixelman, [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/), [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Frutiger_Aero_Bubbles_And_Grass.jpg)

This copy does not redistribute proprietary interface screenshots. To add another picture, save a file whose license allows it under `public/images/`, add an entry to `src/data/gallery.ts` with the photographer, license, and source URL, and the licensing page will list it.

## Personal note

Edit `src/data/profile.ts`. Empty fields are left off the About page. Do not put secrets in it.

## Scripts

```bash
npm install
npm run dev
npm run check
npm run build
npm run links
npm run preview
```

The site is configured with `base: /frutiger-aero-archive`. Local preview is at `http://127.0.0.1:4321/frutiger-aero-archive/`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`. GitHub Actions builds the site and deploys the `dist` folder to GitHub Pages. The repository’s Pages source has to be GitHub Actions.
