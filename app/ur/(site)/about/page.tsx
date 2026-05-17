import { AboutPageContent } from "@/components/pages/about-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("ur")

  return createMetadata({
    title: seo.about.title,
    description: seo.about.description,
    path: "/about",
    locale: "ur",
  })
}

export default function UrduAboutPage() {
  return <AboutPageContent locale="ur" />
}
