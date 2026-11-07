# Sahoism Blog

Source for [blog.sahoism.com](https://blog.sahoism.com), built with [Astro](https://astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `master`.

## Writing

Posts are Markdown files in `src/content/posts/`, named `YYYY-MM-DD-Title.md`:

```markdown
---
title:      Le Intro
date:       2015-02-10 21:52:19
summary:    Why I'm doing this
categories: intro rant
draft:      true   # remove to publish
---
```

A post's URL is `/<categories>/<yyyy>/<mm>/<dd>/<Title>/`, which matches the old Jekyll URLs.
Drafts show (with a badge) in `npm run dev`, or in a build run with `DRAFTS=1`, and are left out of the normal production build.

## Commands

- `npm install` – install dependencies
- `npm run dev` – local preview at http://localhost:4321
- `npm run build` – build the site into `dist/`
