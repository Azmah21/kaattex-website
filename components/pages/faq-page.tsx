import { Container } from "@/components/layout/container"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { getFaq } from "@/lib/content/faq"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"

export function FaqPageContent({ locale }: { locale: Locale }) {
  const faq = getFaq(locale)
  const ui = getUi(locale)

  return (
    <main>
      <section aria-labelledby="faq-title" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{faq.intro.eyebrow}</Eyebrow>
            <h1 id="faq-title" className="mt-6 text-display-2xl">
              {faq.intro.title}
            </h1>
          </Reveal>
        </Container>
      </section>

      <section aria-label={ui.accessibility.faqList} className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <FaqAccordion locale={locale} />
          </Reveal>
        </Container>
      </section>
    </main>
  )
}

