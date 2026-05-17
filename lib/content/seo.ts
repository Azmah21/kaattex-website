import type { Locale } from "@/lib/i18n"

export const seo = {
  home: {
    title: "Kaattex — Industrial embroidery from Faisalabad",
    description:
      "Kaattex produces industrial embroidery in Faisalabad with 20 Barudan machines, serving apparel and textile brands across Pakistan and abroad.",
  },
  about: {
    title: "About — Kaattex",
    description:
      "Learn how Kaattex grew from two machines in 1999 into a Faisalabad embroidery house operating 20 Japanese Barudan machines today with one enduring standard.",
  },
  capabilities: {
    title: "Capabilities — Kaattex",
    description:
      "Explore Kaattex capabilities across logo embroidery, decorative patterns, sequins, appliqué, and puff embroidery for apparel and textile programs.",
  },
  work: {
    title: "Work — Kaattex",
    description:
      "View a working archive of recent Kaattex embroidery programs across apparel, home textiles, sportswear, and detailed stitch work from the factory floor.",
  },
  clients: {
    title: "Clients — Kaattex",
    description:
      "See a selection of apparel and textile houses that have worked with Kaattex across Pakistani and export-oriented production programs over time.",
  },
  faq: {
    title: "FAQ — Kaattex",
    description:
      "Answers on order volumes, turnaround, fabrics, digitization, exports, and quality practices for commercial embroidery inquiries and program planning.",
  },
  contact: {
    title: "Contact — Kaattex",
    description:
      "Contact Kaattex in Faisalabad to discuss embroidery programs, production requirements, reference artwork, commercial inquiries, and next steps.",
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
  work: {
    title: "کام — Kaattex",
    description:
      "ملبوسات، ہوم ٹیکسٹائل، اسپورٹس ویئر، اور باریک سلائی کے حالیہ Kaattex پروگراموں کا جاری آرکائیو دیکھیے۔",
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
