import { WorkPageContent } from "@/components/pages/work-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("en")

  return createMetadata({
    title: seo.work.title,
    description: seo.work.description,
    path: "/work",
    locale: "en",
  })
}

export default function WorkPage() {
  return <WorkPageContent locale="en" />
}
