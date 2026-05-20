import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export const capabilities = {
  intro: {
    eyebrow: "CAPABILITIES",
    title: "Capabilities.",
  },
  items: [
    {
      name: "Custom logo & monogram embroidery",
      description:
        "We reproduce brand marks with disciplined spacing, edge quality, and thread coverage across garments and textiles. The aim is not simply recognition, but consistency: the first piece and the final piece should feel like members of the same family.",
      bullets: [
        "Logo and monogram digitization from supplied artwork",
        "Application across knit, woven, and technical fabrics",
        "Thread color matching from references or samples",
        "Sample stitch-outs before production",
      ],
    },
    {
      name: "Decorative pattern embroidery",
      description:
        "Decorative embroidery relies on cadence, not clutter. We build repeat patterns, borders, and tonal fields that preserve their visual rhythm over long runs while staying aligned with the material underneath.",
      bullets: [
        "Repeat patterns and border work",
        "Tonal and multi-color compositions",
        "Programs for fashion and home textiles",
        "Scale adjustments across product sizes",
      ],
    },
    {
      name: "Sequin embroidery",
      description:
        "Sequin work introduces light into the surface. We pair sequins with thread in controlled compositions that keep the design readable, the hand-feel considered, and the finish appropriate to the garment.",
      bullets: [
        "Thread-and-sequin combinations",
        "Decorative motifs and accent placements",
        "Controlled density for cleaner finishes",
        "Sampling for approval before bulk production",
      ],
    },
    {
      name: "Appliqué embroidery",
      description:
        "Appliqué adds another plane to the work. We combine cut fabric and embroidery so each layer contributes shape, texture, and contrast without turning the piece into ornament for ornament's sake.",
      bullets: [
        "Layered fabric applications",
        "Cut-and-stitch finishing",
        "Contrast materials and tonal builds",
        "Garment and textile placement work",
      ],
    },
    {
      name: "Puff (3D) embroidery",
      description:
        "Puff embroidery is useful when a mark needs physical presence. We create raised foam-backed stitching for select garments and accessories, holding shape and edge definition while preserving an industrially repeatable result.",
      bullets: [
        "Raised foam-backed logos",
        "Applications for caps, knits, and statement pieces",
        "Edge definition and depth control",
        "Sampling for scale and finish approval",
      ],
    },
  ],
  inquiry: {
    title: "Have a program in mind?",
    description:
      "Share the garment, reference artwork, estimated volume, and desired finish. We will help determine the right embroidery approach.",
    link: { label: "Make an inquiry", href: "/contact" },
  },
  brochureLabel: "Download brochure",
} as const

export const capabilitiesUr = {
  intro: {
    eyebrow: "صلاحیتیں",
    title: "صلاحیتیں۔",
  },
  items: [
    {
      name: "حسبِ ضرورت لوگو اور مونوگرام کڑھائی",
      description:
        "ہم لباس اور ٹیکسٹائل پر برانڈ مارکس کو منظم فاصلوں، صاف کناروں، اور درست دھاگہ کوریج کے ساتھ دوبارہ بناتے ہیں۔ مقصد صرف پہچان نہیں، مستقل مزاجی ہے: پہلا پیس اور آخری پیس ایک ہی خاندان کے محسوس ہونے چاہییں۔",
      bullets: [
        "فراہم کردہ آرٹ ورک سے لوگو اور مونوگرام ڈیجیٹائزیشن",
        "نِٹ، ووون، اور تکنیکی کپڑوں پر اطلاق",
        "حوالہ جات یا نمونوں سے دھاگے کے رنگ کی میچنگ",
        "پیداوار سے پہلے سیمپل اسٹچ آؤٹس",
      ],
    },
    {
      name: "آرائشی پیٹرن کڑھائی",
      description:
        "آرائشی کڑھائی شور نہیں، لے مانگتی ہے۔ ہم ریپیٹ پیٹرن، بارڈرز، اور ٹونل فیلڈز بناتے ہیں جو طویل رنز میں بھی اپنی بصری روانی برقرار رکھیں اور نیچے کے مادے کے ساتھ ہم آہنگ رہیں۔",
      bullets: [
        "ریپیٹ پیٹرن اور بارڈر ورک",
        "ٹونل اور کثیر رنگی ترکیبیں",
        "فیشن اور ہوم ٹیکسٹائل پروگرام",
        "مختلف پروڈکٹ سائزز کے لیے اسکیل ایڈجسٹمنٹ",
      ],
    },
    {
      name: "سیکوئن کڑھائی",
      description:
        "سیکوئن ورک سطح پر روشنی شامل کرتا ہے۔ ہم سیکوئن اور دھاگے کو ایسی قابو شدہ ترکیبوں میں ملاتے ہیں جہاں ڈیزائن واضح رہے، ہینڈ فیل سوچا سمجھا ہو، اور تکمیل لباس کے مطابق محسوس ہو۔",
      bullets: [
        "دھاگے اور سیکوئن کی مشترکہ ترکیبیں",
        "آرائشی موٹیف اور ایکسنٹ پلیسمنٹ",
        "زیادہ صاف تکمیل کے لیے قابو شدہ کثافت",
        "بلک پیداوار سے پہلے منظوری کے لیے سیمپلنگ",
      ],
    },
    {
      name: "اپلیکے کڑھائی",
      description:
        "اپلیکے کام میں ایک اور سطح شامل کرتا ہے۔ ہم کٹے ہوئے کپڑے اور کڑھائی کو یوں ملاتے ہیں کہ ہر تہہ شکل، ساخت، اور تضاد بڑھائے، مگر پیس محض سجاوٹ بن کر نہ رہ جائے۔",
      bullets: [
        "تہہ دار کپڑے کی ایپلی کیشنز",
        "کٹ اینڈ اسٹچ تکمیل",
        "متضاد مٹیریلز اور ٹونل بلڈز",
        "گارمنٹ اور ٹیکسٹائل پلیسمنٹ ورک",
      ],
    },
    {
      name: "پف (3D) کڑھائی",
      description:
        "جب کسی مارک کو جسمانی موجودگی درکار ہو تو پف کڑھائی مفید ہوتی ہے۔ ہم منتخب ملبوسات اور ایکسیسریز کے لیے ابھری ہوئی فوم بیکڈ سلائی بناتے ہیں، جہاں شکل اور کناروں کی صفائی برقرار رہتی ہے اور نتیجہ صنعتی طور پر دہرایا جا سکتا ہے۔",
      bullets: [
        "ابھرے ہوئے فوم بیکڈ لوگوز",
        "کیپس، نِٹس، اور نمایاں پیسز کے لیے اطلاق",
        "کناروں کی صفائی اور گہرائی پر قابو",
        "اسکیل اور تکمیل کی منظوری کے لیے سیمپلنگ",
      ],
    },
  ],
  inquiry: {
    title: "کوئی پروگرام ذہن میں ہے؟",
    description:
      "لباس، ریفرنس آرٹ ورک، اندازاً مقدار، اور مطلوبہ تکمیل شیئر کریں۔ ہم درست کڑھائی کے طریقۂ کار کا تعین کرنے میں مدد کریں گے۔",
    link: { label: "رابطہ کریں", href: withLocalePath("/contact", "ur") },
  },
  brochureLabel: "بروشَر ڈاؤن لوڈ کریں",
} as const

export function getCapabilities(locale: Locale) {
  return locale === "ur" ? capabilitiesUr : capabilities
}
