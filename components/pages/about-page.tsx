import { Container } from "@/components/layout/container"
import { Divider } from "@/components/primitives/divider"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { OptimizedImage } from "@/components/primitives/optimized-image"
import { Reveal } from "@/components/primitives/reveal"
import { getAbout } from "@/lib/content/about"
import { getUi } from "@/lib/content/ui"
import { hasPublicAsset } from "@/lib/assets"
import type { Locale } from "@/lib/i18n"

export function AboutPageContent({ locale }: { locale: Locale }) {
  const about = getAbout(locale)
  const ui = getUi(locale)
  const hasFacilityImage = hasPublicAsset("/images/facility/facility-01.jpg")

  return (
    <main>
      <section aria-labelledby="about-title" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{about.intro.eyebrow}</Eyebrow>
            <h1 id="about-title" className="mt-6 max-w-5xl text-display-2xl">
              {about.intro.title}
            </h1>
            <p className="mt-8 text-body-lg text-graphite">{about.intro.subtitle}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-label={ui.accessibility.ourStory} className="pb-24 md:pb-32">
        <Container>
          <div className="max-w-5xl space-y-14">
            {about.story.map((paragraph) => (
              <Reveal key={paragraph.note} className="grid gap-6 md:grid-cols-[minmax(0,1fr)_220px] md:gap-16">
                <p className="max-w-3xl text-body-lg text-graphite">{paragraph.body}</p>
                <aside className="text-body-sm text-ash md:pt-2">{paragraph.note}</aside>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-label={ui.accessibility.facilityImage} className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="relative aspect-[3/2] overflow-hidden">
              {hasFacilityImage ? (
                <OptimizedImage
                  src="/images/facility/facility-01.jpg"
                  alt={ui.images.facilityFloor}
                  width={2400}
                  height={1600}
                  sizes="(min-width: 1280px) 1152px, 100vw"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="image-fallback absolute inset-0" aria-hidden="true" />
              )}
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="what-we-make-title" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <h2 id="what-we-make-title" className="text-display-xl">
              {about.whatWeMake.title}
            </h2>
          </Reveal>

          <dl className="mt-16">
            {about.whatWeMake.items.map((item) => (
              <Reveal key={item.name}>
                <div className="grid gap-6 py-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-16">
                  <dt className="text-display-lg">{item.name}</dt>
                  <dd className="text-body-lg text-graphite">{item.description}</dd>
                </div>
                <Divider />
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="machines-title" className="py-24 md:py-32">
        <Container>
          <Reveal className="max-w-4xl">
            <Eyebrow>{about.machines.eyebrow}</Eyebrow>
            <h2 id="machines-title" className="mt-6 text-display-xl">
              {about.machines.title}
            </h2>
            <p className="mt-8 text-body-lg text-graphite">{about.machines.body}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="shipping-title" className="py-24 md:py-32">
        <Container>
          <Reveal className="max-w-4xl">
            <Eyebrow>{about.shipping.eyebrow}</Eyebrow>
            <h2 id="shipping-title" className="mt-6 text-display-xl">
              {about.shipping.title}
            </h2>
            <ul className="mt-10 divide-y divide-rule border-t border-rule">
              {about.shipping.regions.map((region) => (
                <li key={region} className="py-5 text-display-lg">
                  {region}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}

