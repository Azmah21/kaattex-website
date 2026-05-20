import type { Locale } from "@/lib/i18n"

export const seo = {
  home: {
    title: "Industrial Embroidery Manufacturer in Faisalabad — Kaattex",
    description:
      "Faisalabad embroidery manufacturer operating 20 multi-head Barudan machines for B2B apparel and textile programs across Pakistan.",
  },
  about: {
    title: "About Kaattex — Faisalabad Embroidery Manufacturer",
    description:
      "Learn how Kaattex grew from two machines in 1999 into a Faisalabad embroidery manufacturer operating 20 Japanese Barudan machines today.",
  },
  capabilities: {
    title: "Industrial Embroidery Capabilities — Kaattex",
    description:
      "Logo, sequin, appliqué, puff, and pattern embroidery on multi-head Barudan machines for textile manufacturers in Faisalabad and Pakistan.",
  },
  clients: {
    title: "Clients — Kaattex Embroidery",
    description:
      "See apparel and textile houses that have worked with Kaattex across Pakistani and export-oriented embroidery production programs over time.",
  },
  faq: {
    title: "Commercial Embroidery FAQ — Kaattex",
    description:
      "Answers on embroidery order volumes, turnaround, fabrics, digitization, exports, and quality practices for commercial production inquiries.",
  },
  contact: {
    title: "Contact Kaattex — Embroidery Manufacturer in Faisalabad",
    description:
      "Contact Kaattex in Faisalabad for industrial embroidery programs, production requirements, reference artwork, and commercial B2B inquiries.",
  },
} as const

export const seoUr = {
  home: {
    title: "Kaattex — فیصل آباد سے صنعتی کڑھائی",
    description:
      "Kaattex فیصل آباد میں 20 باروڈان مشینوں کے ساتھ صنعتی کڑھائی تیار کرتا ہے، اور پاکستان و بیرونِ ملک ملبوسات اور ٹیکسٹائل اداروں کو خدمات دیتا ہے۔",
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
      "آرڈر مقدار، ٹرن اراؤنڈ، فیبرکس، ڈیجیٹائزیشن، ایکسپورٹس، اور کوالٹی پریکٹسز سے متعلق اہم سوالات کے جواب۔",
  },
  contact: {
    title: "رابطہ — Kaattex",
    description:
      "کڑھائی پروگرامز، پیداواری ضروریات، ریفرنس آرٹ ورک، اور تجارتی انکوائریز پر بات کرنے کے لیے Kaattex سے رابطہ کریں۔",
  },
} as const

export function getSeo(locale: Locale) {
  return locale === "ur" ? seoUr : seo
}
