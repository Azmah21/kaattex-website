import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/seo"
import { withLocalePath } from "@/lib/i18n"

const routes = ["/", "/about", "/capabilities", "/clients", "/faq", "/contact"]
const englishOnlyRoutes = [
  "/industrial-embroidery-faisalabad",
  "/industrial-embroidery-lahore",
  "/textile-embroidery-faisalabad-lahore",
]
const lastModified = new Date("2026-05-28T00:00:00.000Z")

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = routes.flatMap((route) => [
    {
      url: new URL(route, siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.8,
    },
    {
      url: new URL(withLocalePath(route, "ur"), siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 0.9 : 0.7,
    },
  ])

  return [
    ...localizedRoutes,
    ...englishOnlyRoutes.map((route) => ({
      url: new URL(route, siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
  ]
}
