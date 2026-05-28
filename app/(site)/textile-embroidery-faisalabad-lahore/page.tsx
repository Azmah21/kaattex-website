import { TextileEmbroideryPageContent } from "@/components/pages/textile-embroidery-page"
import { textileEmbroidery } from "@/lib/content/textile-embroidery"
import { createMetadata } from "@/lib/seo"

export const metadata = createMetadata({
  title: "Textile Embroidery Faisalabad & Lahore | KAATTEX",
  description: textileEmbroidery.description,
  path: `/${textileEmbroidery.slug}`,
  localizedAlternates: false,
})

export default function TextileEmbroideryFaisalabadLahorePage() {
  return <TextileEmbroideryPageContent />
}
