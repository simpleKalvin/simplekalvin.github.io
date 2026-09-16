# AGENTS.md

Personal Hexo blog ("Kalvin's Blog", zh-Hans) for Kalvin (Golang/PHP developer). Source lives on `main`; the generated site is deployed to the `gh-pages` branch of `simpleKalvin/simpleKalvin.github.io` (GitHub Pages).

## Commands

- `npm run server` — local preview at http://localhost:4000
- `npm run build` — generate static site into `public/` (`hexo generate`)
- `npm run clean` — clear `db.json`/`public/` caches; run this first if generated output looks stale after edits
- `npm run deploy` — push the generated site to `gh-pages` via `hexo-deployer-git` (requires SSH key for `git@github.com:simpleKalvin/simpleKalvin.github.io.git`)

There is no lint/typecheck/test setup.

## Layout

- `source/_posts/` — all posts (Markdown, written in Chinese)
- `source/_drafts/` — drafts (excluded from build; `render_drafts: false`)
- `source/_data/` — NexT theme customizations (`styles.styl`, `head.swig`, `body-end.swig`)
- `_config.yml` — main Hexo config (permalink, plugins, deploy target, hide_posts settings)
- `_config.next.yml` — NexT theme config (Hexo "alternate config file" convention; do not edit `themes/next/_config.yml`)
- `_config.coder.yml` — config for the alternate `coder` theme (currently unused; `theme: next` is active)
- `scaffolds/` — front-matter templates for new posts/pages
- `themes/next`, `themes/coder` — **git submodules**; never edit files inside them, they belong to upstream repos
- `public/`, `db.json`, `.deploy_git/` — generated/cached output (gitignored); never edit or commit

## Post conventions

- New post filename format is `:year:month:day.:title.md` (e.g. `20260208.ai-prompt.md`), set by `new_post_name` in `_config.yml`
- Front-matter: `title`, `date` (`YYYY-MM-DD HH:mm:ss`), `tags`; add `hidden: true` to publish a post invisibly (hexo-hide-posts — excluded from index/tags/archives, gets `noindex`)
- Permalink style: `:year/:month/:day/:title/` — renaming a published post changes its URL
- Posts may use ```mermaid and ```plantuml fenced blocks (rendered by `hexo-filter-mermaid-diagrams` / `hexo-filter-plantuml`); `mermaid` is excluded from highlight.js
- `post_asset_folder: true` — images for a post go in a sibling folder named after the post file; site-wide images go in `source/images/`

## Gotchas

- Theme changes belong in `source/_data/` files (uncomment the corresponding `custom_file_path`/inject entries in `_config.next.yml`), not in `themes/next`
- `updated_option: mtime` — post "updated" timestamps come from file mtime, so touching a file changes it
- `hexo deploy` only publishes the generated site; committing to `main` does not deploy, and deploying does not commit source changes
