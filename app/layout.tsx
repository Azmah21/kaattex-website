import type { Metadata } from "next"
import { Fraunces, Inter, Noto_Nastaliq_Urdu } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { site } from "@/lib/content/site"
import { siteUrl } from "@/lib/seo"
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
  title: "Industrial Embroidery Manufacturer in Faisalabad — Kaattex",
  description: site.description,
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  "@id": `${siteUrl}/#organization`,
  name: site.name,
  legalName: site.name,
  url: siteUrl,
  description: site.description,
  telephone: site.contact.phone,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Pul Abdullah Bridge, Main Samundri Road, near Hascol Petrol Pump, P-246 Muhalla Farooqabad",
    addressLocality: "Faisalabad",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.3699345,
    longitude: 73.0702414,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Faisalabad",
    },
    {
      "@type": "City",
      name: "Lahore",
    },
    {
      "@type": "AdministrativeArea",
      name: "Punjab",
    },
    {
      "@type": "Country",
      name: "Pakistan",
    },
  ],
  knowsAbout: [
    "industrial embroidery",
    "Barudan embroidery machines",
    "custom logo embroidery",
    "decorative pattern embroidery",
    "sequin embroidery",
    "appliqué embroidery",
    "puff embroidery",
  ],
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: site.wordmark,
  publisher: {
    "@id": `${siteUrl}/#organization`,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
