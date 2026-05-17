import { CapabilityList } from "@/components/sections/capability-list"
import { ClientMarquee } from "@/components/sections/client-marquee"
import { Hero } from "@/components/sections/hero"
import { StatBand } from "@/components/sections/stat-band"
import { WorkGrid } from "@/components/sections/work-grid"
import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { getClients } from "@/lib/content/clients"
import { getHome } from "@/lib/content/home"
import { getSite } from "@/lib/content/site"
import { getWork } from "@/lib/content/work"
import { hasPublicAsset } from "@/lib/assets"
import type { Locale } from "@/lib/i18n"

export function HomePageContent({ locale }: { locale: Locale }) {
  const home = getHome(locale)
  const clients = getClients(locale)
  const site = getSite(locale)
  const work = getWork(locale)
  const workPreviewSources = [
    "/images/gallery/gallery-01.jpg",
    "/images/gallery/gallery-05.jpg",
    "/images/gallery/gallery-09.jpg",
  ]
  const workPreview = workPreviewSources.map((src) => {
    const image = work.images.find((item) => item.src === src)

    return {
      src,
      alt: image?.alt ?? "",
      exists: hasPublicAsset(src),
    }
  })
  const clientItems = clients.items.map((client) => ({
    ...client,
    exists: hasPublicAsset(client.logo),
  }))
  const hasEmail = !site.contact.email.includes("[TO BE PROVIDED]")
  const hasPhone = !site.contact.phone.includes("[TO BE PROVIDED]")

  return (
    <main>
      <Hero hasHeroImage={hasPublicAsset("/images/hero/hero-primary.jpg")} locale={locale} />
      <StatBand locale={locale} />

      <section aria-labelledby="home-practice-title" className="py-24 md:py-32">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-20">
            <div>
              <Eyebrow>{home.practice.eyebrow}</Eyebrow>
              <h2 id="home-practice-title" className="mt-6 text-display-lg italic">
                {home.practice.title}
              </h2>
            </div>
            <div>
              <div className="space-y-8 text-body-lg text-graphite">
                {home.practice.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-10">
                <ArrowLink href={home.practice.link.href}>{home.practice.link.label}</ArrowLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CapabilityList locale={locale} />
      <WorkGrid images={workPreview} locale={locale} />
      <ClientMarquee clients={clientItems} locale={locale} />

      <section aria-labelledby="home-inquiry-title" className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.8fr)] md:gap-20">
            <div>
              <h2 id="home-inquiry-title" className="max-w-3xl text-display-xl">
                {home.inquiry.title}
              </h2>
              <p className="mt-8 max-w-2xl text-body-lg text-graphite">{home.inquiry.description}</p>
            </div>

            <div className="space-y-4 text-body-lg text-graphite">
              <p>{site.contact.address}</p>
              <p>
                {hasEmail ? (
                  <a
                    href={`mailto:${site.contact.email}`}
                    dir="ltr"
                    className="underline decoration-1 underline-offset-[3px] transition-colors duration-200 hover:text-accent"
                  >
                    {site.contact.email}
                  </a>
                ) : (
                  site.contact.email
                )}
              </p>
              <p>
                {hasPhone ? (
                  <a
                    href={`tel:${site.contact.phone}`}
                    dir="ltr"
                    className="underline decoration-1 underline-offset-[3px] transition-colors duration-200 hover:text-accent"
                  >
                    {site.contact.phone}
                  </a>
                ) : (
                  site.contact.phone
                )}
              </p>
              <div className="pt-4">
                <ArrowLink href={home.inquiry.link.href}>{home.inquiry.link.label}</ArrowLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
