import { Container } from "@/components/layout/container"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { InquiryForm } from "@/components/sections/inquiry-form"
import { Toaster } from "@/components/ui/sonner"
import { contactPage } from "@/lib/content/contact"
import { seo } from "@/lib/content/seo"
import { site } from "@/lib/content/site"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  return createMetadata({
    title: seo.contact.title,
    description: seo.contact.description,
    path: "/contact",
  })
}

export default async function ContactPage() {
  const hasMapEmbed = !site.contact.mapsEmbedUrl.includes("[TO BE PROVIDED]")
  const hasPhone = !site.contact.phone.includes("[TO BE PROVIDED]")
  const hasEmail = !site.contact.email.includes("[TO BE PROVIDED]")
  const hasWhatsapp = !site.contact.whatsapp.includes("[TO BE PROVIDED]")
  const whatsappNumber = site.contact.whatsapp.replace(/\D/g, "")
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactPage.direct.whatsappMessage)}`

  return (
    <main>
      <Toaster />
      <section aria-labelledby="contact-title" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{contactPage.intro.eyebrow}</Eyebrow>
            <h1 id="contact-title" className="mt-6 max-w-5xl text-display-2xl">
              {contactPage.intro.title}
            </h1>
            <p className="mt-8 text-body-lg text-graphite">{contactPage.intro.subtitle}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="inquiry-title" className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <h2 id="inquiry-title" className="sr-only">
              {contactPage.sections.inquiryTitle}
            </h2>
            <InquiryForm />
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="direct-contact-title" className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal>
            <h2 id="direct-contact-title" className="sr-only">
              {contactPage.sections.directTitle}
            </h2>
            <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr]">
              <div>
                <h3 className="text-display-lg">{contactPage.direct.visit}</h3>
                <p className="mt-6 max-w-xl text-body-lg text-graphite">{site.contact.address}</p>
                <div className="mt-8 aspect-video overflow-hidden border border-rule">
                  {hasMapEmbed ? (
                    <iframe
                      title={contactPage.direct.mapTitle}
                      src={site.contact.mapsEmbedUrl}
                      className="h-full w-full"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-bone p-6 text-center text-body-sm text-graphite">
                      {contactPage.direct.mapFallback}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-display-lg">{contactPage.direct.call}</h3>
                <p className="mt-6 text-body-lg text-graphite">
                  {hasPhone ? (
                    <a href={`tel:${site.contact.phone}`} className="underline decoration-1 underline-offset-[3px] transition-colors duration-200 hover:text-accent">
                      {site.contact.phone}
                    </a>
                  ) : (
                    site.contact.phone
                  )}
                </p>
              </div>

              <div>
                <h3 className="text-display-lg">{contactPage.direct.write}</h3>
                <p className="mt-6 text-body-lg text-graphite">
                  {hasEmail ? (
                    <a href={`mailto:${site.contact.email}`} className="underline decoration-1 underline-offset-[3px] transition-colors duration-200 hover:text-accent">
                      {site.contact.email}
                    </a>
                  ) : (
                    site.contact.email
                  )}
                </p>
              </div>

              <div>
                <h3 className="text-display-lg">{contactPage.direct.whatsapp}</h3>
                <p className="mt-6 text-body-lg text-graphite">
                  {hasWhatsapp ? (
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-1 underline-offset-[3px] transition-colors duration-200 hover:text-accent"
                    >
                      {contactPage.direct.whatsappLink}
                    </a>
                  ) : (
                    site.contact.whatsapp
                  )}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
