import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import type { ServiceArea } from "@/lib/content/service-areas"
import { siteUrl } from "@/lib/seo"
import { createBreadcrumbSchema, createServiceSchema } from "@/lib/structured-data"

export function ServiceAreaPageContent({ area }: { area: ServiceArea }) {
  const pageUrl = `${siteUrl}/${area.slug}`
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: area.city, path: `/${area.slug}` },
  ])
  const serviceSchema = createServiceSchema({
    id: `${pageUrl}#service`,
    name: area.title,
    description: area.description,
    serviceType: "Industrial embroidery manufacturing",
    areaServed: {
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: area.region,
      },
    },
    offers: [
      "Logo embroidery",
      "Monogram embroidery",
      "Decorative pattern embroidery",
      "Sequin embroidery",
      "Applique embroidery",
      "Puff 3D embroidery",
      "Embroidery digitization",
    ],
  })

  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <section aria-labelledby="service-area-title" className="py-24 md:py-32">
        <Container>
          <Reveal className="max-w-5xl">
            <Eyebrow>{area.eyebrow}</Eyebrow>
            <h1 id="service-area-title" className="mt-6 text-display-2xl">
              {area.title}
            </h1>
            <p className="mt-8 max-w-3xl text-body-lg text-graphite">{area.description}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="service-area-overview" className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-20">
            <div>
              <Eyebrow>
                {area.city}, {area.region}
              </Eyebrow>
              <h2 id="service-area-overview" className="mt-6 text-display-xl">
                {area.fitTitle}
              </h2>
            </div>
            <div className="space-y-8 text-body-lg text-graphite">
              <p>{area.intro}</p>
              <p>{area.fit}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-label={`${area.city} embroidery proof points`} className="py-24 md:py-32">
        <Container>
          <Reveal>
            <ul className="grid gap-6 md:grid-cols-2">
              {area.proof.map((item) => (
                <li key={item} className="border-t border-rule pt-6 text-body-lg text-graphite">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <ArrowLink href="/contact">{area.cta}</ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
