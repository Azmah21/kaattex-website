import { ContactPageContent } from "@/components/pages/contact-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("en")

  return createMetadata({
    title: seo.contact.title,
    description: seo.contact.description,
    path: "/contact",
    locale: "en",
  })
}

export default function ContactPage() {
  return <ContactPageContent locale="en" />
}
