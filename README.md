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
- [ ] Add Cloudflare Pages environment variables for the live inquiry flow: `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, and `INQUIRY_FROM_EMAIL`.
- [ ] Add `brochure.pdf` to `public/` if a brochure is to be offered.
- [ ] Run Lighthouse and verify scores.
- [ ] Run `axe-core` and verify zero errors.

## Deployment

The project is configured for a static Cloudflare Pages deployment. Before building for production, set `NEXT_PUBLIC_SITE_URL` so canonical URLs, the sitemap, and robots metadata point at the live domain:

```powershell
$env:NEXT_PUBLIC_SITE_URL="https://kaattex.com"
pnpm build
```

The production-ready static export is written to `out/`.

### Cloudflare Pages

Two deployment paths work:

1. **Direct Upload** — build locally, then upload the contents of `out/` in Cloudflare Pages.
2. **Git integration** — connect a GitHub repository, use the **Next.js (Static HTML Export)** preset, set the build command to `pnpm build`, and set the output directory to `out`.

For the root domain `kaattex.com`, Cloudflare Pages requires the domain to use Cloudflare nameservers. Before changing nameservers, copy the existing Namecheap email DNS records into Cloudflare so `info@kaattex.com` keeps working.

When final photography is ready, add the prepared WebP files under `public/images/`, rebuild, and redeploy. No hosting architecture change is needed.

## Inquiry form integration

Production inquiries are handled by `functions/api/inquiry.ts`, a Cloudflare Pages Function that accepts `multipart/form-data`, validates the fields, and sends the inquiry through Resend. The form accepts:

- Customer name
- Company name
- Email
- Phone number
- Project details
- One JPG, JPEG, PNG, WEBP, or ZIP attachment up to 10MB

Set these Cloudflare Pages environment variables before launch:

- `RESEND_API_KEY`
- `INQUIRY_TO_EMAIL` — recommended: `info@kaattex.com`
- `INQUIRY_FROM_EMAIL` — a verified sender such as `Kaattex <inquiries@kaattex.com>`

For local `pnpm dev`, `app/api/inquiry/route.ts` remains a development-only stub so the form can be tested without sending real email.

## Internationalization

English is the default site language. A full Urdu version lives under `/ur`, with a site-wide language toggle in the header and mobile menu. Urdu copy is maintained alongside the English content in `lib/content/*.ts`, while `messages/en.json` and `messages/ur.json` preserve the original `next-intl` message catalogs for future expansion.

## Recommended checks

- Run Lighthouse on mobile and confirm the target scores before launch.
- Run `axe-core` automated accessibility checks and verify zero errors.
- Test `prefers-reduced-motion: reduce`.
- Resize from 320px through 2560px and verify there is no overflow or broken layout.
