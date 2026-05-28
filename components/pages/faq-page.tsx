import { Container } from "@/components/layout/container"
import { FaqAccordion } from "@/components/sections/faq-accordion"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { JsonLd } from "@/components/seo/json-ld"
import { getFaq } from "@/lib/content/faq"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"
import { createBreadcrumbSchema, createFaqPageSchema } from "@/lib/structured-data"

function getFaqAnswerText(item: ReturnType<typeof getFaq>["items"][number]) {
  if ("answer" in item) return item.answer

  return `${item.answerPrefix}${item.answerLink.label}${item.answerSuffix}`
}

export function FaqPageContent({ locale }: { locale: Locale }) {
  const faq = getFaq(locale)
  const ui = getUi(locale)
  const breadcrumbSchema = createBreadcrumbSchema(
    [
      { name: "Home", path: "/" },
      { name: faq.intro.title, path: "/faq" },
    ],
    locale,
  )
  const faqSchema = createFaqPageSchema({
    path: "/faq",
    locale,
    items: faq.items.map((item) => ({
      question: item.question,
      answer: getFaqAnswerText(item),
    })),
  })

  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
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
