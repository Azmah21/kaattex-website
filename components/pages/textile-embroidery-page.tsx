import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { textileEmbroidery } from "@/lib/content/textile-embroidery"
import { siteUrl } from "@/lib/seo"
import { createBreadcrumbSchema, createFaqPageSchema, createServiceSchema } from "@/lib/structured-data"

export function TextileEmbroideryPageContent() {
  const pageUrl = `${siteUrl}/${textileEmbroidery.slug}`
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Textile embroidery", path: `/${textileEmbroidery.slug}` },
  ])
  const serviceSchema = createServiceSchema({
    id: `${pageUrl}#service`,
    name: textileEmbroidery.title,
    description: textileEmbroidery.description,
    serviceType: "Textile embroidery manufacturing",
    areaServed: [
      { "@type": "City", name: "Faisalabad", containedInPlace: { "@type": "AdministrativeArea", name: "Punjab" } },
      { "@type": "City", name: "Lahore", containedInPlace: { "@type": "AdministrativeArea", name: "Punjab" } },
      { "@type": "AdministrativeArea", name: "Punjab" },
    ],
    offers: [
      "Textile embroidery",
      "Industrial embroidery",
      "Logo embroidery",
      "Decorative pattern embroidery",
      "Sequin embroidery",
      "Applique embroidery",
      "Puff 3D embroidery",
    ],
  })
  const faqSchema = createFaqPageSchema({
    path: `/${textileEmbroidery.slug}`,
    locale: "en",
    items: textileEmbroidery.faqs,
  })

  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section aria-labelledby="textile-embroidery-title" className="py-24 md:py-32">
        <Container>
          <Reveal className="max-w-5xl">
            <Eyebrow>{textileEmbroidery.eyebrow}</Eyebrow>
            <h1 id="textile-embroidery-title" className="mt-6 text-display-2xl">
              {textileEmbroidery.title}
            </h1>
            <p className="mt-8 max-w-3xl text-body-lg text-graphite">{textileEmbroidery.description}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="textile-embroidery-overview" className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] md:gap-20">
            <div>
              <Eyebrow>Faisalabad and Lahore</Eyebrow>
              <h2 id="textile-embroidery-overview" className="mt-6 text-display-xl">
                A dedicated embroidery floor for textile programs.
              </h2>
            </div>
            <div className="space-y-8 text-body-lg text-graphite">
              {textileEmbroidery.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="textile-embroidery-cities" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Production Area</Eyebrow>
            <h2 id="textile-embroidery-cities" className="mt-6 text-display-xl">
              One Faisalabad factory, serving Punjab textile demand.
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              {textileEmbroidery.citySections.map((section) => (
                <article key={section.title} className="border-t border-rule pt-8">
                  <h3 className="text-display-md">{section.title}</h3>
                  <p className="mt-5 text-body text-graphite">{section.body}</p>
                  <div className="mt-6">
                    <ArrowLink href={section.href}>{section.linkLabel}</ArrowLink>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="textile-embroidery-services" className="bg-bone py-24 md:py-32">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] md:gap-20">
            <div>
              <Eyebrow>Embroidery Services</Eyebrow>
              <h2 id="textile-embroidery-services" className="mt-6 text-display-xl">
                Commercial embroidery for textile and apparel use cases.
              </h2>
            </div>
            <ul className="space-y-5">
              {textileEmbroidery.services.map((service) => (
                <li key={service} className="border-t border-rule pt-5 text-body-lg text-graphite">
                  {service}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="textile-embroidery-process" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>Process</Eyebrow>
            <h2 id="textile-embroidery-process" className="mt-6 max-w-3xl text-display-xl">
              From reference artwork to approved embroidery.
            </h2>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {textileEmbroidery.process.map((step) => (
                <article key={step.title} className="border-t border-rule pt-6">
                  <h3 className="text-display-sm">{step.title}</h3>
                  <p className="mt-4 text-body text-graphite">{step.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="textile-embroidery-faq" className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="grid gap-10 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1fr)] md:gap-20">
            <div>
              <Eyebrow>Buyer Questions</Eyebrow>
              <h2 id="textile-embroidery-faq" className="mt-6 text-display-xl">
                Clear answers for textile embroidery searches.
              </h2>
            </div>
            <dl className="space-y-8">
              {textileEmbroidery.faqs.map((faq) => (
                <div key={faq.question} className="border-t border-rule pt-6">
                  <dt className="text-display-sm">{faq.question}</dt>
                  <dd className="mt-4 text-body text-graphite">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="textile-embroidery-cta" className="py-24 md:py-32">
        <Container>
          <Reveal className="max-w-4xl">
            <Eyebrow>Inquiry</Eyebrow>
            <h2 id="textile-embroidery-cta" className="mt-6 text-display-xl">
              {textileEmbroidery.cta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-body-lg text-graphite">{textileEmbroidery.cta.body}</p>
            <div className="mt-10">
              <ArrowLink href={textileEmbroidery.cta.href}>{textileEmbroidery.cta.label}</ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
