# Tanzimul Karim - Portfolio

A simple portfolio with a computer science feel: dark surfaces, mint accents, connected-node artwork, selected software projects, research and readable case studies. Built with Next.js, React and TypeScript. Graduation dates and degree details are not displayed.

## Publish through GitHub - no terminal needed

1. Upload/publish this project to your GitHub repository using the GitHub website or GitHub Desktop. Keep the complete directory structure, including `.github/workflows/pages.yml`, `apps/`, `scripts/`, `package.json` and `package-lock.json`. Do not upload `node_modules`, `.next`, `out` or `.qa`.
2. In the repository, open **Settings > Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and run **Publish portfolio to GitHub Pages**, or commit a change on `main`/`master`. The workflow builds the website, checks TypeScript, and publishes the static output. The deployment job runs only on the repository's default branch. When it completes, GitHub displays the live address.

The workflow reads the actual Pages URL and repository path automatically. Both `username.github.io` repositories and project repositories work; no repository name is hardcoded. Set a custom domain through GitHub's Pages settings if needed, then rerun the workflow.

Setup follows the [GitHub Pages custom workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages). This workspace is not connected to a GitHub repository yet, so no upload or live deployment has been performed here.

## Edit content on GitHub

Use the file's pencil icon, make the change and commit it; GitHub Actions rebuilds the site.

- `apps/web/app/site.ts`: name, GitHub link, navigation and toolkit. No graduation field is present.
- `apps/web/app/projects.ts`: project descriptions, tags, source links and conceptual architecture. Add a record with a unique `slug` and an existing `visual` key, or add the new visual's architecture entry in the same file. Case-study routes are generated automatically. Use an empty `repo` when no source link is available. Preserve GRD's Contributor attribution and original owner.
- `apps/web/app/page.tsx`: homepage introduction and selected work.
- `apps/web/app/about/page.tsx`: biography. Add the real CV as `apps/web/public/cv.pdf` to show a download link automatically on the next build; the link respects repository subpaths. Unavailable CV actions stay hidden.
- `apps/web/app/contact/page.tsx`: real contact links. GitHub is currently the only supplied contact address. Email and LinkedIn placeholders are not shown.
- `apps/web/app/research-map.tsx`: research domains and connections.
- `apps/web/app/globals.css`: colors, spacing, typography and responsive styling.

Six supplied project cover artworks are stored as WebP files under `apps/web/public/projects/`. GRD retains its CSS/SVG fallback. Edit each project's optional `cover` record in `projects.ts` (src, dimensions, alt text and caption) to replace or add imagery; Home, Work and case pages use the shared `project-cover.tsx` component. The portrait is configured in `site.ts` and displayed on About. Cover artwork is presentation imagery, not claimed application screenshots or measured results. Road Deterioration Prediction is the ongoing undergraduate thesis; GNN-BERT is completed course research. Detailed thesis methods/results are still awaiting documentation. The owner's supplied covers and portrait have been integrated; additional screenshots can be added later.

## Hosting and interactions

The exported website is self-contained: no backend, database or Node server is required on GitHub Pages. Project filters, project search (Ctrl/Cmd+K), mobile navigation, research exploration, theme preference and reduced-motion behavior work in the browser. Extra global Architecture Mode and blueprint overlays have been removed; project-specific architecture disclosures remain useful technical context.

The existing NestJS app is preserved in `apps/api` for future use. The published frontend makes no `/api` requests. Live star counts and the development API proxy are no longer part of the portfolio.

Next.js exports to `apps/web/out` with directory-style routes, a custom `404.html`, favicon, generated social preview and sitemap. GitHub Actions supplies `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL`; manual builds default to the site root. Those build variables should match the final hosting URL. No runtime secrets are required. The postbuild helper in `scripts/prepare-static.mjs` also normalizes nested Windows segment-export filenames for static hosting; Linux exports are unchanged.

## Optional developer commands

These are for local development only; GitHub handles them automatically when publishing. Requires Node.js 22.12+ and npm. Install using `npm install`, run the frontend with `npm run dev -w apps/web`, and build with `npm run build -w apps/web`. After a build, `npm run typecheck` checks both apps. A static export is served as files rather than with `next start`.

There is no lint configuration. Prettier is used for formatting. Current validation and browser-test details are recorded in `handout.md`.
