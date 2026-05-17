import { WorkPageContent } from "@/components/pages/work-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("ur")

  return createMetadata({
    title: seo.work.title,
    description: seo.work.description,
    path: "/work",
    locale: "ur",
  })
}

export default function UrduWorkPage() {
  return <WorkPageContent locale="ur" />
}
