import { Mail, Phone } from "lucide-react"
import { Container } from "@/components/layout/container"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { InquiryForm } from "@/components/sections/inquiry-form"
import { NetlifyFormDetector } from "@/components/sections/netlify-form-detector"
import { Toaster } from "@/components/ui/sonner"
import { getContactPage } from "@/lib/content/contact"
import { getSite } from "@/lib/content/site"
import type { Locale } from "@/lib/i18n"

function WhatsappIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[0.95em] w-[0.95em] shrink-0"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.208-.242-.579-.487-.5-.669-.51-.173-.009-.372-.011-.571-.011-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347ZM12.05 21.8h-.004a9.79 9.79 0 0 1-4.993-1.366l-.358-.213-3.709.973.99-3.616-.233-.371a9.775 9.775 0 1 1 8.307 4.593Zm0-19.8a9.998 9.998 0 0 0-8.58 15.14L2 22l4.984-1.307A9.999 9.999 0 1 0 12.05 2Z" />
    </svg>
  )
}

export function ContactPageContent({ locale }: { locale: Locale }) {
  const contactPage = getContactPage(locale)
  const site = getSite(locale)
  const hasMapEmbed = !site.contact.mapsEmbedUrl.includes("[TO BE PROVIDED]")
  const hasPhone = !site.contact.phone.includes("[TO BE PROVIDED]")
  const hasEmail = !site.contact.email.includes("[TO BE PROVIDED]")
  const hasWhatsapp = !site.contact.whatsapp.includes("[TO BE PROVIDED]")
  const whatsappNumber = site.contact.whatsapp.replace(/\D/g, "")
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(contactPage.direct.whatsappMessage)}`

  return (
    <main>
      <Toaster />
      <NetlifyFormDetector />
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

      <div className="flex flex-col">
        <section aria-labelledby="direct-contact-title" className="order-1 bg-ivory py-20 md:order-2 md:py-32">
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
                  <h3 className="flex items-center gap-3 text-display-lg">
                    <Phone
                      aria-hidden="true"
                      className="h-[0.95em] w-[0.95em] shrink-0 text-ash"
                      strokeWidth={1.75}
                    />
                    {contactPage.direct.call}
                  </h3>
                  <p className="mt-6 text-body-lg text-graphite">
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
                </div>

                <div>
                  <h3 className="flex items-center gap-3 text-display-lg">
                    <Mail
                      aria-hidden="true"
                      className="h-[0.95em] w-[0.95em] shrink-0 text-ash"
                      strokeWidth={1.75}
                    />
                    {contactPage.direct.write}
                  </h3>
                  <p className="mt-6 text-body-lg text-graphite">
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
                </div>

                <div>
                  <h3 className="flex items-center gap-3 text-display-lg">
                    <span className="text-ash">
                      <WhatsappIcon />
                    </span>
                    {contactPage.direct.whatsapp}
                  </h3>
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

        <section aria-labelledby="inquiry-title" className="order-2 py-24 md:order-1 md:pb-32 md:pt-0">
          <Container>
            <Reveal>
              <h2 id="inquiry-title" className="sr-only">
                {contactPage.sections.inquiryTitle}
              </h2>
              <InquiryForm locale={locale} />
            </Reveal>
          </Container>
        </section>
      </div>
    </main>
  )
}
