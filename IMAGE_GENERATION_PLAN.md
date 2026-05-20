# KAATTEX Website — AI Image Generation Plan

This document is a self-contained brief for generating every visual asset the site needs. Read it end-to-end before generating, then work through the shot list in order. The site **cannot ship** without these images — they are the single biggest lever on whether the site feels premium or generic.

---

## 1. Tool recommendation

**Primary: Midjourney v6.1 (or v7 if available)** — best aesthetic control, best at rendering textiles, thread, and tactile materials. Subscription required (~$10/month basic plan covers this).

**Alternative: Flux Pro 1.1 (via Replicate or Freepik)** — competitive quality, slightly more photorealistic, lower cost per image.

**Avoid:** DALL·E 3, Stable Diffusion base models, Adobe Firefly. They tend toward a glossy, stock-photo look that will reproduce exactly the "generic / cheap" problem you saw with V0.

**Hard rule:** If any image looks AI-generated at a glance (waxy skin, melted thread textures, six-fingered hands, suspiciously perfect symmetry, "uncanny valley" embroidery), do not use it. Regenerate. The whole point of this exercise is to look like a real, premium house — not an AI gallery.

---

## 2. Aesthetic anchor

Look at these brands' photography before generating anything:

- **Loro Piana** — fabric close-ups, soft natural light, restrained palette
- **Hermès** — craftsmanship shots, hands at work, focused depth of field
- **The Row** — bone-white backgrounds, almost no styling, fabric as the hero
- **Brunello Cucinelli** — warm Italian light, artisan portraits, slow elegance

The KAATTEX site should feel like these brands shot embroidery instead of leather goods. Warm, quiet, confident. Not flashy. Not "tech." Not gradient-y.

**Color discipline.** Across the entire image set, the palette should stay within: bone / ivory / warm white backgrounds, deep ink / charcoal accents, natural thread tones (cream, gold, navy, burgundy), occasional teal or terracotta thread for warmth. Avoid neon, pastels, candy colors, rainbow stitching, anything that looks like a kids' craft kit.

---

## 3. Shot list

All images go into `public/images/` in the Next.js project, organized into subfolders.

### 3.1 Hero (homepage)
**1 image. `public/images/hero/hero-primary.jpg` — 2880×1620 (16:9), exported at 90% quality WebP.**

**Prompt:**
> Editorial fashion magazine photography, extreme macro close-up of intricate gold thread embroidery on rich charcoal wool fabric, hand-guided industrial embroidery needle mid-stitch, single warm tungsten light source from upper left, deep shadows, shallow depth of field, threads catching light like jewelry, museum-quality detail, shot on Phase One IQ4, natural film grain, color graded warm and quiet, no people, no faces, no logos, no text, photorealistic, --ar 16:9 --style raw --stylize 100

**Notes:** This is the single most important image on the site. Generate at least 20 variants. Pick the one that looks most like a magazine cover, not a stock photo. Avoid anything with visible AI artifacts in the thread.

---

### 3.2 Gallery / Work (the embroidery showcase)
**Removed from v1.** Do not generate or add `public/images/gallery/*` assets unless the public work gallery returns to scope.

The gallery is divided into four categories. Generate **3 images per category** for visual variety. All must read as part of the same shoot — same lighting language, same restrained palette, same level of polish.

#### Category A: Apparel embroidery (3 images)
> Editorial product photography, premium navy cotton polo shirt folded on bone-colored linen surface, intricate cream and gold thread monogram embroidery on chest, soft window light, shallow depth of field on the embroidery, fabric texture visible, no logos, no brand names, no text, no people, magazine quality, shot on medium format, --ar 4:5 --style raw

Variants: hoodie with tone-on-tone embroidery, oxford shirt with subtle monogram, lapel of a tailored jacket with delicate threading.

#### Category B: Home textile embroidery (3 images)
> Editorial interior photography, white Egyptian cotton bedsheet edge with cream silk thread embroidery in geometric border pattern, soft morning light, draped over a wooden surface, shallow depth of field, fabric texture and thread highlights visible, hotel-quality presentation, no people, no text, --ar 4:5 --style raw

Variants: hand towel with monogram, pillowcase with floral border, table linen corner with crest.

#### Category C: Sportswear / performance (3 images)
> Editorial sports apparel photography, black performance fabric jersey with white thread embroidered number, technical fabric weave visible, dramatic side lighting, deep shadows, premium athletic brand aesthetic, no faces, no brand logos, no text, magazine quality, --ar 4:5 --style raw

Variants: training cap with stitched detail, soccer jersey crest area, tracksuit zipper with embroidered tab.

#### Category D: Decorative / detail close-ups (3 images)
> Extreme macro photography, embroidery needle and gold metallic thread mid-stitch through cream silk fabric, single thread tension visible, museum textile photography, warm soft light, shallow depth of field, no people, no text, magazine quality, --ar 4:5 --style raw

Variants: thread spool close-up on wood, hands (only fingers, no faces) guiding fabric under needle, finished embroidered crest in shallow focus.

---

### 3.3 Facility / production (about + services pages)
**4 images. `public/images/facility/facility-01.jpg` through `facility-04.jpg` — 2400×1600 (3:2), 85% WebP.**

These prove scale and seriousness. Should look like a real, well-run factory floor — not glossy, not staged.

**Prompts (one per shot):**

1. Wide shot:
> Industrial photography, expansive textile factory floor in Pakistan, rows of large Japanese industrial Barudan embroidery machines in operation, multi-spool thread racks in muted earth tones, even fluorescent lighting, clean polished concrete floor, no people in foreground, deep one-point perspective, documentary style, photorealistic, no text, no logos, --ar 3:2 --style raw

2. Machine close-up:
> Industrial photography, close-up of a multi-head Barudan industrial embroidery machine mid-operation, twelve thread spools in cream gold and navy, mechanical precision, soft natural light from large factory window, fabric stretched on frame, no people, no text, no logos, photorealistic, --ar 3:2 --style raw

3. Thread library:
> Industrial photography, wall of textile thread spools organized by color gradient, hundreds of cones from cream to navy to burgundy, soft directional lighting, shallow depth of field on foreground spools, museum-quality archive aesthetic, no people, no text, --ar 3:2 --style raw

4. Quality inspection:
> Industrial photography, hands (fingers only, no faces) inspecting embroidered fabric under a magnifying lamp on a clean workbench, soft warm light, shallow depth of field, attention-to-detail aesthetic, no faces visible, photorealistic, no text, no logos, --ar 3:2 --style raw

---

### 3.4 Texture / pattern accents (used as section dividers)
**3 images. `public/images/textures/texture-01.jpg` through `texture-03.jpg` — 2400×800 (3:1 wide), 80% WebP.**

These are subtle band images used between sections — they should be near-abstract.

**Prompts:**
> Extreme macro fabric texture, woven cream linen with single line of cream embroidery thread crossing diagonally, near-abstract, soft directional light, museum quality, no text, no logos, no people, --ar 3:1 --style raw

Variants: navy wool with gold stitching, ivory silk with raised embroidered detail.

---

### 3.5 OpenGraph / social share image
**1 image. `public/images/og/og-default.jpg` — 1200×630 (1.91:1), 85% JPEG (not WebP, for Twitter/LinkedIn compatibility).**

> Editorial product photography, premium folded fabric with elegant embroidered monogram, bone-colored background, warm soft light, ample negative space on right side for text overlay (text will be added separately), magazine cover quality, no text, no logos, --ar 1.91:1 --style raw

(The KAATTEX wordmark and tagline will be overlaid in the CODEX-generated layout — leave room.)

---

## 4. What you (Hamza) need to source separately, NOT via AI

These cannot be AI-generated — they're real artifacts of the business.

1. **KAATTEX wordmark** — typographic only, no logo needed (per your decision). The CODEX brief specifies this is rendered in CSS using a webfont. No image needed.
2. **Brand client logos** (Interloop, Hafeez Knitwear, Sadaqat, Kay & Emms Global, Beacon Impex, etc.) — these are real companies' real logos. Re-collect them from each company's website press kit or ask your father. Place in `public/images/clients/` as SVG (preferred) or PNG with transparent background. Original brand colors.
3. **Optional: Real factory photos** — if your father has any decent phone photos of the actual factory floor or machines, those are gold. Real beats AI-generated every time for facility shots. AI is the fallback if no real photos exist.
4. **Team headshots (Contact page)** — if you want team profiles, you need real photos. Do NOT AI-generate human faces; they will read as fake and destroy trust instantly. Either use real headshots, omit faces entirely, or show only the team's first names + roles + contact details without photos.
5. **Brochure PDF** — if you want the "Download Brochure" button to work, you need an actual brochure PDF. Otherwise remove the button.

---

## 5. Generation workflow

1. Subscribe to Midjourney (Discord-based) or open Flux on Replicate.
2. Generate the hero image first. Iterate ~20 times until you have one that looks like a magazine cover. **Do not move on until the hero is right.**
3. Use the chosen hero's seed/style as a reference for the gallery (Midjourney: use `--sref <url-of-chosen-hero>` to lock the aesthetic).
4. Generate gallery category by category. Compare each set side-by-side — they should look like the same photographer shot them on the same day.
5. Generate facility shots last (different look — more documentary).
6. Open every final image in Photoshop / Affinity / GIMP / Photopea (free). Crop precisely to spec, export at the dimensions and format listed.
7. Run all images through [Squoosh.app](https://squoosh.app) to compress to target file sizes:
   - Hero: <300KB
   - Gallery: <180KB each
   - Facility: <250KB each
   - Textures: <120KB each
   - OG: <200KB
8. Place into the project's `public/images/` folders with the exact filenames listed above. CODEX's generated code references these paths.

---

## 6. Acceptance criteria for the image set

Before handing images to CODEX (or before launch), check:

- [ ] No visible AI artifacts (warped fingers, melting thread, illegible faux-text, repeating patterns)
- [ ] No human faces (or only intentional, real, professionally-shot faces)
- [ ] No fake brand names or logos hallucinated into the image
- [ ] All gallery images look like a single coherent shoot
- [ ] Color palette stays within the restrained range — no neon, no rainbow stitching
- [ ] All images are sharp at 2× display density (Retina)
- [ ] All images compressed to budget
- [ ] All filenames match the spec exactly (lowercase, hyphens, no spaces)

If any image fails — regenerate. Half-good imagery is the fastest way back to "generic and cheap."
# Current direction

The public work/gallery section has been removed. Do not generate or add gallery images for v1 unless the client reverses that decision. Optional future photography should prioritize the factory floor, Barudan machinery, production capacity, and environmental details rather than finished-work samples.
