import { Container } from "@/components/layout/container"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { faq } from "@/lib/content/faq"
import { seo } from "@/lib/content/seo"
import { ui } from "@/lib/content/ui"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  return createMetadata({
    title: seo.faq.title,
    description: seo.faq.description,
    path: "/faq",
  })
}

export default function FaqPage() {
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
            <FaqAccordion />
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
