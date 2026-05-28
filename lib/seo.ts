import type { Metadata } from "next"
import { getSite } from "@/lib/content/site"
import type { Locale } from "@/lib/i18n"
import { defaultLocale, withLocalePath } from "@/lib/i18n"

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaattex.com").replace(/\/$/, "")

type MetadataInput = {
  title: string
  description: string
  path: string
  locale?: Locale
  localizedAlternates?: boolean
}

export function createMetadata({
  title,
  description,
  path,
  locale = defaultLocale,
  localizedAlternates = true,
}: MetadataInput): Metadata {
  const localizedPath = withLocalePath(path, locale)
  const url = new URL(localizedPath, siteUrl).toString()
  const site = getSite(locale)
  const languages = localizedAlternates
    ? {
        en: new URL(path, siteUrl).toString(),
        ur: new URL(withLocalePath(path, "ur"), siteUrl).toString(),
        "x-default": new URL(path, siteUrl).toString(),
      }
    : undefined

  return {
    title,
    description,
    category: "Industrial embroidery manufacturing",
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: site.wordmark,
      images: [
        {
          url: "/images/og/og-default.jpg",
          width: 1200,
          height: 630,
          alt: "Kaattex embroidered textile detail.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og/og-default.jpg"],
    },
    other: {
      "content-language": locale,
    },
  }
}
