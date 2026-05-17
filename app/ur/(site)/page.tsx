import { HomePageContent } from "@/components/pages/home-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("ur")

  return createMetadata({
    title: seo.home.title,
    description: seo.home.description,
    path: "/",
    locale: "ur",
  })
}

export default function UrduHomePage() {
  return <HomePageContent locale="ur" />
}
