import { CapabilitiesPageContent } from "@/components/pages/capabilities-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("en")

  return createMetadata({
    title: seo.capabilities.title,
    description: seo.capabilities.description,
    path: "/capabilities",
    locale: "en",
  })
}

export default function CapabilitiesPage() {
  return <CapabilitiesPageContent locale="en" />
}
