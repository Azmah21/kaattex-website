import type { Locale } from "@/lib/i18n"

export const seo = {
  home: {
    title: "Industrial Embroidery Manufacturer in Faisalabad | KAATTEX",
    description:
      "KAATTEX in Faisalabad specializes in bulk industrial embroidery for men's garments and export-oriented apparel. No womenswear or small-batch local-brand orders.",
  },
  about: {
    title: "About KAATTEX | Faisalabad Embroidery Manufacturer Since 1999",
    description:
      "Learn how Kaattex grew from two machines in 1999 into a Faisalabad embroidery manufacturer operating 20 Japanese Barudan machines today.",
  },
  capabilities: {
    title: "Industrial Embroidery Capabilities | KAATTEX",
    description:
      "Explore KAATTEX capabilities for logo, monogram, decorative, sequin, applique, and puff embroidery for Faisalabad and Lahore textile programs.",
  },
  clients: {
    title: "Embroidery Clients & Textile Partners | KAATTEX",
    description:
      "See apparel and textile houses that have worked with Kaattex across Pakistani and export-oriented embroidery production programs over time.",
  },
  faq: {
    title: "Commercial Embroidery FAQ | KAATTEX",
    description:
      "KAATTEX specializes in bulk men's export apparel embroidery. Read our order requirements: no women's garments, individual pieces, or small-batch local-brand work.",
  },
  contact: {
    title: "Contact KAATTEX | Embroidery Manufacturer in Faisalabad",
    description:
      "Contact KAATTEX in Faisalabad for bulk embroidery for men's export apparel. We do not accept women's garments, individual pieces, or small-batch local-brand orders.",
  },
} as const

export const seoUr = {
  home: {
    title: "Kaattex — فیصل آباد سے صنعتی کڑھائی",
    description:
      "KAATTEX فیصل آباد میں صرف ایکسپورٹ کے مردانہ ملبوسات کی بلک کڑھائی کرتا ہے۔ لیڈیز کڑھائی، ایک دو پیس اور مقامی برانڈز کے چھوٹے آرڈرز قبول نہیں کیے جاتے۔",
  },
  about: {
    title: "تعارف — Kaattex",
    description:
      "جانیے کہ Kaattex نے 1999 میں دو مشینوں سے آغاز کر کے آج 20 جاپانی باروڈان مشینوں کے ساتھ فیصل آباد کا ایک مضبوط کڑھائی گھر کیسے بنایا۔",
  },
  capabilities: {
    title: "صلاحیتیں — Kaattex",
    description:
      "لوگو کڑھائی، آرائشی پیٹرنز، سیکوئن، اپلیکے، اور پف کڑھائی سمیت Kaattex کی پیداواری صلاحیتیں دیکھیے۔",
  },
  clients: {
    title: "کلائنٹس — Kaattex",
    description:
      "ملبوسات اور ٹیکسٹائل کے اُن منتخب اداروں کو دیکھیے جن کے ساتھ Kaattex نے پاکستانی اور ایکسپورٹ پروگراموں پر کام کیا ہے۔",
  },
  faq: {
    title: "سوالات — Kaattex",
    description:
      "واضح جواب: لیڈیز کپڑوں کی کڑھائی بالکل نہیں کی جاتی۔ ایک دو پیس یا مقامی برانڈز کے چھوٹے آرڈرز نہیں لیے جاتے۔ صرف مردانہ ایکسپورٹ ملبوسات کے بلک آرڈرز۔",
  },
  contact: {
    title: "رابطہ — Kaattex",
    description:
      "صرف ایکسپورٹ کے مردانہ ملبوسات کی بلک کڑھائی کے لیے رابطہ کریں۔ لیڈیز کڑھائی، ایک دو پیس یا مقامی برانڈز کے چھوٹے آرڈرز کے لیے رابطہ نہ کریں۔",
  },
} as const

export function getSeo(locale: Locale) {
  return locale === "ur" ? seoUr : seo
}
