import { AboutPageContent } from "@/components/pages/about-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("en")

  return createMetadata({
    title: seo.about.title,
    description: seo.about.description,
    path: "/about",
    locale: "en",
  })
}

export default function AboutPage() {
  return <AboutPageContent locale="en" />
}
