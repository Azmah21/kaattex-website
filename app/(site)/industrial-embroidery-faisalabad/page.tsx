import { ServiceAreaPageContent } from "@/components/pages/service-area-page"
import { serviceAreas } from "@/lib/content/service-areas"
import { createMetadata } from "@/lib/seo"

const area = serviceAreas.faisalabad

export const metadata = createMetadata({
  title: "Industrial & Textile Embroidery Faisalabad | KAATTEX",
  description: area.description,
  path: `/${area.slug}`,
  localizedAlternates: false,
})

export default function IndustrialEmbroideryFaisalabadPage() {
  return <ServiceAreaPageContent area={area} />
}
