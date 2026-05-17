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
    "پل عبداللہ برج، مین سمندری روڈ، ہیس کول پیٹرول پمپ کے قریب، P-246 محلہ فاروق آباد، فیصل آباد، پاکستان",
} as const

export const site = {
  name: "Kaattex",
  wordmark: "KAATTEX",
  tagline: "Industrial embroidery, made in Faisalabad since 1999.",
  description:
    "Kaattex is a Faisalabad-based embroidery manufacturer producing precision embroidery, sequin work, appliqué, and puff embroidery for apparel and home-textile brands across Pakistan and abroad.",
  nav: [
    { label: "Work", href: "/work" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "About", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  contact: contactUr,
  footer: {
    blurb:
      "A 27-year embroidery house operating 20 Barudan machines for Pakistan’s leading apparel and textile brands.",
    copyright: (year: number) => `© ${year} Kaattex. Faisalabad, Pakistan.`,
  },
} as const

export const siteUr = {
  name: "Kaattex",
  wordmark: "KAATTEX",
  tagline: "1999 سے فیصل آباد میں صنعتی کڑھائی۔",
  description:
    "Kaattex فیصل آباد کا ایک کڑھائی ساز ادارہ ہے جو پاکستان اور بیرونِ ملک ملبوسات اور ہوم ٹیکسٹائل برانڈز کے لیے نفیس کڑھائی، سیکوئن ورک، اپلیکے، اور پف کڑھائی تیار کرتا ہے۔",
  nav: [
    { label: "کام", href: withLocalePath("/work", "ur") },
    { label: "صلاحیتیں", href: withLocalePath("/capabilities", "ur") },
    { label: "تعارف", href: withLocalePath("/about", "ur") },
    { label: "کلائنٹس", href: withLocalePath("/clients", "ur") },
    { label: "سوالات", href: withLocalePath("/faq", "ur") },
    { label: "رابطہ", href: withLocalePath("/contact", "ur") },
  ],
  contact,
  footer: {
    blurb:
      "ستائیس برس پرانا کڑھائی گھر، جو پاکستان کے نمایاں ملبوسات اور ٹیکسٹائل اداروں کے لیے 20 باروڈان مشینوں کے ساتھ کام کرتا ہے۔",
    copyright: (year: number) => `© ${year} Kaattex۔ فیصل آباد، پاکستان۔`,
  },
} as const

export function getSite(locale: Locale) {
  return locale === "ur" ? siteUr : site
}

export type SiteNavItem = (typeof site.nav)[number]
