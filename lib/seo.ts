import type { Metadata } from "next"
import { site } from "@/lib/content/site"

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

type MetadataInput = {
  title: string
  description: string
  path: string
}

export function createMetadata({ title, description, path }: MetadataInput): Metadata {
  const url = new URL(path, siteUrl).toString()

  return {
    title,
    description,
    alternates: {
      canonical: url,
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
  }
}
