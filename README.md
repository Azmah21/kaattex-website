# KAATTEX Website

Kaattex is a public marketing website for a 27-year industrial embroidery manufacturer in Faisalabad, Pakistan. The site is built as a restrained editorial experience: warm neutrals, serif-led typography, generous spacing, and content-first layouts rather than SaaS-style cards or decorative UI.

## Setup

1. Install Node.js 20.x LTS.
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start development:
   ```bash
   pnpm dev
   ```
4. Build for production:
   ```bash
   pnpm build
   ```
5. Run linting:
   ```bash
   pnpm lint
   ```

## Before launch

- [ ] Generate and add all images per `IMAGE_GENERATION_PLAN.md`.
- [ ] Add an email notification for Netlify form submissions so inquiries are delivered to `info@kaattex.com`.
- [ ] Add `brochure.pdf` to `public/` if a brochure is to be offered.
- [ ] Run Lighthouse and verify scores.
- [ ] Run `axe-core` and verify zero errors.

## Deployment

The project is configured for a static Netlify deployment, with Cloudflare used only for DNS. Before building for production, set `NEXT_PUBLIC_SITE_URL` so canonical URLs, the sitemap, and robots metadata point at the live domain:

```powershell
$env:NEXT_PUBLIC_SITE_URL="https://kaattex.com"
pnpm build
```

The production-ready static export is written to `out/`.

### Netlify

Recommended deployment path:

1. Connect the GitHub repository in Netlify.
2. Use the included `netlify.toml` file. It sets the build command to `pnpm build`, the publish directory to `out`, and Node 20.
3. Add `kaattex.com` and `www.kaattex.com` as custom domains.
4. Keep Cloudflare as DNS only and point the domain records at Netlify after the Netlify deployment is healthy.

When final photography is ready, add the prepared WebP files under `public/images/`, rebuild, and redeploy. No hosting architecture change is needed.

Cloudflare Pages remains a temporary fallback only while the Netlify cutover is being verified.

## Inquiry form integration

Production inquiries are handled by Netlify Forms. The form is detected at build time and accepts:

- Customer name
- Company name
- Email
- Phone number
- Project details
- One JPG, JPEG, PNG, WEBP, or ZIP attachment up to 10MB

After the first successful deploy, add a Netlify form email notification for the `inquiry` form so submissions are delivered to `info@kaattex.com`.

`functions/api/inquiry.ts` remains in the repository only as a Cloudflare rollback path during migration.

## Internationalization

English is the default site language. A full Urdu version lives under `/ur`, with a site-wide language toggle in the header and mobile menu. Urdu copy is maintained alongside the English content in `lib/content/*.ts`, while `messages/en.json` and `messages/ur.json` preserve the original `next-intl` message catalogs for future expansion.

## Recommended checks

- Run Lighthouse on mobile and confirm the target scores before launch.
- Run `axe-core` automated accessibility checks and verify zero errors.
- Test `prefers-reduced-motion: reduce`.
- Resize from 320px through 2560px and verify there is no overflow or broken layout.
