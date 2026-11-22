# Codasaurus docs

The documentation site for [Codasaurus](https://github.com/codasaurus-oss/codasaurus), built with Astro Starlight and published to GitHub Pages.

Content lives in `src/content/docs/`. Each page is Markdown with a `title` in frontmatter.

## Development

Requires Node 20+.

```bash
npm ci
npm run dev      # http://localhost:4321/
```

## Build

```bash
npm run build    # writes dist/
```

## Publishing

Every push to `main` builds and deploys through GitHub Pages. The site is served
from `https://codasaurus-oss.github.io/`.

## Contributing

See the organization defaults in
[codasaurus-oss/.github](https://github.com/codasaurus-oss/.github). Commits must
be signed off (`git commit -s`).

## License

AGPL-3.0-or-later. See [LICENSE](LICENSE).
