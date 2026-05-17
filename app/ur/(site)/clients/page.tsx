import { ClientsPageContent } from "@/components/pages/clients-page"
import { getSeo } from "@/lib/content/seo"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  const seo = getSeo("ur")

  return createMetadata({
    title: seo.clients.title,
    description: seo.clients.description,
    path: "/clients",
    locale: "ur",
  })
}

export default function UrduClientsPage() {
  return <ClientsPageContent locale="ur" />
}
