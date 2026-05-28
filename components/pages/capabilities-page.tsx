import fs from "node:fs"
import path from "node:path"
import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { Button } from "@/components/ui/button"
import { getCapabilities } from "@/lib/content/capabilities"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"
import { siteUrl } from "@/lib/seo"
import { createBreadcrumbSchema, createServiceSchema } from "@/lib/structured-data"

export function CapabilitiesPageContent({ locale }: { locale: Locale }) {
  const capabilities = getCapabilities(locale)
  const ui = getUi(locale)
  const brochureExists = fs.existsSync(path.join(process.cwd(), "public", "brochure.pdf"))
  const pagePath = "/capabilities"
  const pageUrl = new URL(withLocalePath(pagePath, locale), siteUrl).toString()
  const breadcrumbSchema = createBreadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: capabilities.intro.title, path: pagePath },
    ],
    locale,
  )
  const serviceSchema = createServiceSchema({
    id: `${pageUrl}#industrial-embroidery-services`,
    name: capabilities.intro.title,
    description: capabilities.intro.description,
    serviceType: "Industrial embroidery manufacturing",
    areaServed: [
      { "@type": "Country", name: "Pakistan" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "AdministrativeArea", name: "European Union" },
      { "@type": "Country", name: "United States" },
    ],
    offers: capabilities.items.map((item) => item.name),
  })

  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <section aria-labelledby="capabilities-title" className="py-24 md:py-32">
        <Container>
          <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>{capabilities.intro.eyebrow}</Eyebrow>
              <h1 id="capabilities-title" className="mt-6 text-display-2xl">
                {capabilities.intro.title}
              </h1>
              <p className="mt-8 max-w-3xl text-body-lg text-graphite">{capabilities.intro.description}</p>
            </div>
            {brochureExists ? (
              <Button asChild variant="ghost">
                <a href="/brochure.pdf">{capabilities.brochureLabel}</a>
              </Button>
            ) : null}
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="production-capacity-title" className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] md:gap-20">
            <div>
              <Eyebrow>{capabilities.capacity.eyebrow}</Eyebrow>
              <h2 id="production-capacity-title" className="mt-6 text-display-xl">
                {capabilities.capacity.title}
              </h2>
            </div>
            <div>
              <div className="space-y-8 text-body-lg text-graphite">
                {capabilities.capacity.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-12 grid gap-x-8 gap-y-4 border-y border-rule py-6 text-body-sm text-ash sm:grid-cols-2">
                {capabilities.capacity.stats.map((stat) => (
                  <li key={stat}>{stat}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-label={ui.accessibility.capabilityDetails} className="py-24 md:py-32">
        <Container>
          {capabilities.items.map((item, index) => {
            return (
              <Reveal
                key={item.name}
                id={item.slug}
                className={`border-t border-rule py-16 last:border-b md:grid md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] md:gap-20 ${
                  index === 0 ? "pt-0" : ""
                }`}
              >
                <div>
                  <p className="font-display text-display-lg text-ash">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-6 text-display-xl md:mt-10">{item.name}</h2>
                </div>
                <div className="mt-8 md:mt-0">
                  <p className="text-body-lg text-graphite">{item.description}</p>
                  <dl className="mt-10 border-t border-rule">
                    {item.specs.map((spec) => (
                      <div key={spec.label} className="grid gap-2 border-b border-rule py-4 md:grid-cols-[10rem_1fr]">
                        <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ash">{spec.label}</dt>
                        <dd className="text-body-sm text-graphite">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8">
                    <ArrowLink href={capabilities.inquiry.link.href}>{capabilities.inquiry.link.label}</ArrowLink>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </Container>
      </section>

      <section aria-labelledby="capabilities-inquiry-title" className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="max-w-4xl">
            <h2 id="capabilities-inquiry-title" className="text-display-xl">
              {capabilities.inquiry.title}
            </h2>
            <p className="mt-8 max-w-2xl text-body-lg text-graphite">{capabilities.inquiry.description}</p>
            <div className="mt-10">
              <ArrowLink href={capabilities.inquiry.link.href}>{capabilities.inquiry.link.label}</ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
