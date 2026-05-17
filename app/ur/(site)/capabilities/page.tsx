import { CapabilitiesPageContent } from "@/components/pages/capabilities-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("ur")

  return createMetadata({
    title: seo.capabilities.title,
    description: seo.capabilities.description,
    path: "/capabilities",
    locale: "ur",
  })
}

export default function UrduCapabilitiesPage() {
  return <CapabilitiesPageContent locale="ur" />
}
