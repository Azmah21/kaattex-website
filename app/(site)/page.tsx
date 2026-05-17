import { HomePageContent } from "@/components/pages/home-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("en")

  return createMetadata({
    title: seo.home.title,
    description: seo.home.description,
    path: "/",
    locale: "en",
  })
}

export default function HomePage() {
  return <HomePageContent locale="en" />
}
