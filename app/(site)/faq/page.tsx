import { FaqPageContent } from "@/components/pages/faq-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("en")

  return createMetadata({
    title: seo.faq.title,
    description: seo.faq.description,
    path: "/faq",
    locale: "en",
  })
}

export default function FaqPage() {
  return <FaqPageContent locale="en" />
}
