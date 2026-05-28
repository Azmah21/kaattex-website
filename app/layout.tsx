import type { Metadata } from "next"
import { Fraunces, Inter, Noto_Nastaliq_Urdu } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { JsonLd } from "@/components/seo/json-ld"
import { site } from "@/lib/content/site"
import { siteUrl } from "@/lib/seo"
import { createSiteGraph } from "@/lib/structured-data"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
})

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500"],
  variable: "--font-urdu",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Industrial Embroidery Manufacturer in Faisalabad | KAATTEX",
    template: "%s",
  },
  description: site.description,
  applicationName: site.wordmark,
  authors: [{ name: site.wordmark, url: siteUrl }],
  creator: site.wordmark,
  publisher: site.wordmark,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: `${siteUrl}/`,
    languages: {
      en: `${siteUrl}/`,
      ur: `${siteUrl}/ur`,
      "x-default": `${siteUrl}/`,
    },
  },
  openGraph: {
    type: "website",
    title: "Industrial Embroidery Manufacturer in Faisalabad | KAATTEX",
    description: site.description,
    url: `${siteUrl}/`,
    siteName: site.wordmark,
    images: [
      {
        url: "/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "KAATTEX industrial embroidery detail.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industrial Embroidery Manufacturer in Faisalabad | KAATTEX",
    description: site.description,
    images: ["/images/og/og-default.jpg"],
  },
}

const localePersistenceScript = `
try {
  var match = document.cookie.match(/(?:^|; )kaattex-locale=([^;]+)/);
  var saved = match ? decodeURIComponent(match[1]) : null;
  var path = window.location.pathname;
  var shouldRedirectToUr = saved === "ur" && !path.startsWith("/ur") && !path.startsWith("/api");
  if (shouldRedirectToUr) {
    var target = "/ur" + (path === "/" ? "" : path) + window.location.search + window.location.hash;
    window.location.replace(target);
  }
} catch (error) {}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${notoNastaliqUrdu.variable}`}>
      <body className="bg-bone text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: localePersistenceScript }} />
        {children}
        <JsonLd data={createSiteGraph()} />
        <Analytics />
      </body>
    </html>
  )
}
