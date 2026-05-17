import { ContactPageContent } from "@/components/pages/contact-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("ur")

  return createMetadata({
    title: seo.contact.title,
    description: seo.contact.description,
    path: "/contact",
    locale: "ur",
  })
}

export default function UrduContactPage() {
  return <ContactPageContent locale="ur" />
}
