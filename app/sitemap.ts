import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/seo"

const routes = ["/", "/about", "/capabilities", "/work", "/clients", "/faq", "/contact"]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: new URL(route, siteUrl).toString(),
    lastModified: new Date(),
  }))
}
