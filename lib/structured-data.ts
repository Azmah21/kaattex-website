import type { Locale } from "@/lib/i18n"
import { defaultLocale, withLocalePath } from "@/lib/i18n"
import { site } from "@/lib/content/site"
import { siteUrl } from "@/lib/seo"

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress:
    "Pul Abdullah Bridge, Main Samundri Road, near Hascol Petrol Pump, P-246 Muhalla Farooqabad",
  addressLocality: "Faisalabad",
  addressRegion: "Punjab",
  addressCountry: "PK",
}

const servedAreas = [
  { "@type": "Country", name: "Pakistan" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "AdministrativeArea", name: "European Union" },
  { "@type": "Country", name: "United States" },
]

export function createSiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: site.wordmark,
        legalName: site.wordmark,
        alternateName: ["Kaattex", "KAATTEX Embroidery", "Kaattex Industrial Embroidery"],
        url: `${siteUrl}/`,
        logo: `${siteUrl}/icon.svg`,
        image: `${siteUrl}/images/og/og-default.jpg`,
        description:
          "A 27-year industrial embroidery house in Faisalabad operating 20 multi-head Barudan machines for Pakistan's leading apparel and textile brands.",
        disambiguatingDescription: site.disambiguatingDescription,
        foundingDate: "1999",
        email: site.contact.email,
        telephone: site.contact.phone,
        address: postalAddress,
        areaServed: servedAreas,
        knowsAbout: [
          "industrial embroidery",
          "commercial embroidery production",
          "custom logo embroidery",
          "monogram embroidery",
          "decorative pattern embroidery",
          "sequin embroidery",
          "applique embroidery",
          "puff embroidery",
          "Barudan embroidery machines",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.contact.phone,
          email: site.contact.email,
          contactType: "commercial embroidery inquiries",
          areaServed: servedAreas,
          availableLanguage: ["en", "ur"],
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${siteUrl}/#localbusiness`,
        name: site.wordmark,
        url: `${siteUrl}/`,
        image: `${siteUrl}/images/og/og-default.jpg`,
        logo: `${siteUrl}/icon.svg`,
        telephone: site.contact.phone,
        email: site.contact.email,
        address: postalAddress,
        parentOrganization: {
          "@id": `${siteUrl}/#organization`,
        },
        areaServed: [
          { "@type": "City", name: "Faisalabad" },
          { "@type": "AdministrativeArea", name: "Punjab" },
          { "@type": "Country", name: "Pakistan" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: site.wordmark,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  }
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  locale: Locale = defaultLocale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(withLocalePath(item.path, locale), siteUrl).toString(),
    })),
  }
}

export function createFaqPageSchema({
  path,
  locale,
  items,
}: {
  path: string
  locale: Locale
  items: Array<{ question: string; answer: string }>
}) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${new URL(withLocalePath(path, locale), siteUrl).toString()}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }
}

export function createServiceSchema({
  id,
  name,
  description,
  serviceType,
  areaServed,
  offers,
}: {
  id: string
  name: string
  description: string
  serviceType: string
  areaServed: unknown
  offers: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": id,
    name,
    description,
    serviceType,
    provider: {
      "@id": `${siteUrl}/#organization`,
      name: site.wordmark,
      url: `${siteUrl}/`,
    },
    areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${site.wordmark} embroidery services`,
      itemListElement: offers.map((offer) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offer,
        },
      })),
    },
  }
}
