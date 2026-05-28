import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

const contact = {
  address:
    "Pul Abdullah Bridge, Main Samundri Road, near Hascol Petrol Pump, P-246 Muhalla Farooqabad, Faisalabad, Pakistan",
  phone: "+92 333 6622222",
  email: "info@kaattex.com",
  whatsapp: "+92 333 6622222",
  mapsEmbedUrl: "https://www.google.com/maps?q=31.3699345%2C73.0702414&z=19&output=embed",
} as const

const contactUr = {
  ...contact,
  address:
    "پل عبداللہ برج، مین سمندری روڈ، ہیسکول پیٹرول پمپ کے قریب، P-246 محلہ فاروق آباد، فیصل آباد، پاکستان",
} as const

export const site = {
  name: "Kaattex",
  wordmark: "KAATTEX",
  tagline: "Industrial embroidery, made in Faisalabad since 1999.",
  description:
    "KAATTEX is a 27-year B2B industrial embroidery manufacturer in Faisalabad, Punjab, operating 20 multi-head Barudan machines for apparel and home-textile manufacturers in Pakistan and export supply chains abroad.",
  disambiguatingDescription:
    "KAATTEX is the official industrial embroidery manufacturer at Pul Abdullah Bridge on Main Samundri Road, Faisalabad. It is not an online retail fabric review business or an unrelated textile abbreviation.",
  nav: [
    { label: "Capabilities", href: "/capabilities" },
    { label: "About", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  serviceAreas: [
    { label: "Embroidery Faisalabad", href: "/industrial-embroidery-faisalabad" },
    { label: "Embroidery Lahore", href: "/industrial-embroidery-lahore" },
  ],
  contact,
  footer: {
    blurb:
      "A 27-year industrial embroidery house in Faisalabad serving textile manufacturers in Punjab, Pakistan, and export supply chains abroad.",
    copyright: (year: number) => `© ${year} Kaattex. Faisalabad, Pakistan.`,
  },
} as const

export const siteUr = {
  name: "Kaattex",
  wordmark: "KAATTEX",
  tagline: "1999 سے فیصل آباد میں صنعتی کڑھائی۔",
  description:
    "Kaattex فیصل آباد کا صنعتی کڑھائی ادارہ ہے جو 20 ملٹی ہیڈ باروڈان مشینوں کے ساتھ پاکستان اور بیرونِ ملک ملبوسات اور ہوم ٹیکسٹائل اداروں کے لیے کام کرتا ہے۔",
  disambiguatingDescription:
    "KAATTEX Pul Abdullah Bridge, Main Samundri Road, Faisalabad پر موجود صنعتی کڑھائی ادارہ ہے۔",
  nav: [
    { label: "صلاحیتیں", href: withLocalePath("/capabilities", "ur") },
    { label: "تعارف", href: withLocalePath("/about", "ur") },
    { label: "کلائنٹس", href: withLocalePath("/clients", "ur") },
    { label: "سوالات", href: withLocalePath("/faq", "ur") },
    { label: "رابطہ", href: withLocalePath("/contact", "ur") },
  ],
  serviceAreas: [],
  contact: contactUr,
  footer: {
    blurb:
      "ستائیس برس پرانا کڑھائی گھر، جو پاکستان کے نمایاں ملبوسات اور ٹیکسٹائل اداروں کے لیے 20 ملٹی ہیڈ باروڈان مشینوں کے ساتھ کام کرتا ہے۔",
    copyright: (year: number) => `© ${year} Kaattex۔ فیصل آباد، پاکستان۔`,
  },
} as const

export function getSite(locale: Locale) {
  return locale === "ur" ? siteUr : site
}

export type SiteNavItem = (typeof site.nav)[number]
