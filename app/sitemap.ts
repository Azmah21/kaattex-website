import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/seo"
import { withLocalePath } from "@/lib/i18n"

const routes = ["/", "/about", "/capabilities", "/work", "/clients", "/faq", "/contact"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => [
    {
      url: new URL(route, siteUrl).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL(withLocalePath(route, "ur"), siteUrl).toString(),
      lastModified: new Date(),
    },
  ])
}
