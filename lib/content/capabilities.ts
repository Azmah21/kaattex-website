import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export const capabilities = {
  intro: {
    eyebrow: "CAPABILITIES",
    title: "Capabilities.",
    description:
      "A working spec sheet for commercial embroidery programs: what we make, what each discipline is suited for, and how the production floor holds the standard across a run.",
  },
  items: [
    {
      name: "Custom logo & monogram embroidery",
      description:
        "We reproduce brand marks with disciplined spacing, edge quality, and thread coverage across garments and textiles. The aim is not simply recognition, but consistency: the first piece and the final piece should feel like members of the same family.",
      specs: [
        { label: "Fabrics", value: "Knit, woven, polyester blends, denim, fleece, performance fabrics, and home textiles" },
        { label: "Artwork", value: "Vector files, raster artwork, or physical samples digitized for stitch-out" },
        { label: "Machine setup", value: "Multi-head Barudan production, including machines with more than 20 heads" },
        { label: "Approval", value: "Sample stitch-out before bulk production" },
      ],
    },
    {
      name: "Decorative pattern embroidery",
      description:
        "Decorative embroidery relies on cadence, not clutter. We build repeat patterns, borders, and tonal fields that preserve their visual rhythm over long runs while staying aligned with the material underneath.",
      specs: [
        { label: "Programs", value: "Fashion panels, borders, repeat patterns, tonal fields, and home-textile applications" },
        { label: "Color", value: "Tonal or multi-color thread work, matched to supplied references where needed" },
        { label: "Scale", value: "Pattern adjustments across garment sizes and textile panels" },
        { label: "Control", value: "Stitch density and spacing set after fabric review and sample approval" },
      ],
    },
    {
      name: "Sequin embroidery",
      description:
        "Sequin work introduces light into the surface. We pair sequins with thread in controlled compositions that keep the design readable, the hand-feel considered, and the finish appropriate to the garment.",
      specs: [
        { label: "Composition", value: "Thread-and-sequin combinations for motifs, panels, and accents" },
        { label: "Placement", value: "Controlled density so reflection supports the design instead of overwhelming it" },
        { label: "Sampling", value: "Stitch-out approval for sequin spacing, thread balance, and hand-feel" },
        { label: "Use cases", value: "Fashion-forward garments, decorative programs, and selective highlight work" },
      ],
    },
    {
      name: "Appliqué embroidery",
      description:
        "Appliqué adds another plane to the work. We combine cut fabric and embroidery so each layer contributes shape, texture, and contrast without turning the piece into ornament for ornament's sake.",
      specs: [
        { label: "Materials", value: "Cut fabric layers, contrast materials, tonal builds, and garment placements" },
        { label: "Finish", value: "Cut-and-stitch construction with embroidered edge control" },
        { label: "Planning", value: "Material compatibility and placement reviewed before production" },
        { label: "Best fit", value: "Logos, motifs, layered fashion work, and selected home-textile details" },
      ],
    },
    {
      name: "Puff (3D) embroidery",
      description:
        "Puff embroidery is useful when a mark needs physical presence. We create raised foam-backed stitching for select garments and accessories, holding shape and edge definition while preserving an industrially repeatable result.",
      specs: [
        { label: "Build", value: "Raised foam-backed stitching for selected designs and materials" },
        { label: "Applications", value: "Caps, knits, statement pieces, and marks that benefit from physical depth" },
        { label: "Control", value: "Edge definition, density, and height reviewed through sampling" },
        { label: "Approval", value: "Scale and finish confirmed before bulk production" },
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
    description:
      "تجارتی کڑھائی پروگرامز کے لیے ایک عملی تفصیل: ہم کیا بناتے ہیں، ہر صلاحیت کس کام کے لیے موزوں ہے، اور پیداواری فلور پورے رن میں معیار کیسے برقرار رکھتا ہے۔",
  },
  items: [
    {
      name: "حسبِ ضرورت لوگو اور مونوگرام کڑھائی",
      description:
        "ہم لباس اور ٹیکسٹائل پر برانڈ مارکس کو منظم فاصلوں، صاف کناروں، اور درست دھاگہ کوریج کے ساتھ دوبارہ بناتے ہیں۔ مقصد صرف پہچان نہیں، مستقل مزاجی ہے: پہلا پیس اور آخری پیس ایک ہی خاندان کے محسوس ہونے چاہییں۔",
      specs: [
        { label: "کپڑے", value: "نِٹ، ووون، پولی ایسٹر بلینڈز، ڈینم، فلیس، پرفارمنس فیبرکس، اور ہوم ٹیکسٹائل" },
        { label: "آرٹ ورک", value: "ویکٹر فائلز، راسٹر آرٹ ورک، یا فزیکل سیمپلز سے اسٹچ آؤٹ کے لیے ڈیجیٹائزیشن" },
        { label: "مشین سیٹ اپ", value: "ملٹی ہیڈ باروڈان پیداوار، بشمول 20 سے زیادہ ہیڈز والی مشینیں" },
        { label: "منظوری", value: "بلک پیداوار سے پہلے سیمپل اسٹچ آؤٹ" },
      ],
    },
    {
      name: "آرائشی پیٹرن کڑھائی",
      description:
        "آرائشی کڑھائی شور نہیں، لے مانگتی ہے۔ ہم ریپیٹ پیٹرن، بارڈرز، اور ٹونل فیلڈز بناتے ہیں جو طویل رنز میں بھی اپنی بصری روانی برقرار رکھیں اور نیچے کے مادے کے ساتھ ہم آہنگ رہیں۔",
      specs: [
        { label: "پروگرامز", value: "فیشن پینلز، بارڈرز، ریپیٹ پیٹرنز، ٹونل فیلڈز، اور ہوم ٹیکسٹائل اطلاق" },
        { label: "رنگ", value: "ٹونل یا ملٹی کلر دھاگہ ورک، ضرورت کے مطابق فراہم کردہ حوالوں سے میچنگ" },
        { label: "اسکیل", value: "گارمنٹ سائزز اور ٹیکسٹائل پینلز کے مطابق پیٹرن ایڈجسٹمنٹ" },
        { label: "کنٹرول", value: "فیبرک ریویو اور سیمپل منظوری کے بعد اسٹچ ڈینسٹی اور فاصلہ طے کیا جاتا ہے" },
      ],
    },
    {
      name: "سیکوئن کڑھائی",
      description:
        "سیکوئن ورک سطح پر روشنی شامل کرتا ہے۔ ہم سیکوئن اور دھاگے کو ایسی قابو شدہ ترکیبوں میں ملاتے ہیں جہاں ڈیزائن واضح رہے، ہینڈ فیل سوچا سمجھا ہو، اور تکمیل لباس کے مطابق محسوس ہو۔",
      specs: [
        { label: "ترکیب", value: "موٹیف، پینلز، اور ایکسنٹس کے لیے دھاگے اور سیکوئن کا ملاپ" },
        { label: "جگہ بندی", value: "قابو شدہ کثافت تاکہ چمک ڈیزائن کو سہارا دے، اس پر غالب نہ آئے" },
        { label: "سیمپلنگ", value: "سیکوئن فاصلے، دھاگہ توازن، اور ہینڈ فیل کے لیے اسٹچ آؤٹ منظوری" },
        { label: "استعمال", value: "فیشن فارورڈ گارمنٹس، آرائشی پروگرامز، اور منتخب ہائی لائٹ ورک" },
      ],
    },
    {
      name: "اپلیکے کڑھائی",
      description:
        "اپلیکے کام میں ایک اور سطح شامل کرتا ہے۔ ہم کٹے ہوئے کپڑے اور کڑھائی کو یوں ملاتے ہیں کہ ہر تہہ شکل، ساخت، اور تضاد بڑھائے، مگر پیس محض سجاوٹ بن کر نہ رہ جائے۔",
      specs: [
        { label: "مٹیریلز", value: "کٹ فیبرک لیئرز، کنٹراسٹ مٹیریلز، ٹونل بلڈز، اور گارمنٹ پلیسمنٹ" },
        { label: "تکمیل", value: "کٹ اینڈ اسٹچ تعمیر، کڑھائی شدہ کناروں کے کنٹرول کے ساتھ" },
        { label: "منصوبہ بندی", value: "پیداوار سے پہلے مٹیریل مطابقت اور پلیسمنٹ کا جائزہ" },
        { label: "بہترین استعمال", value: "لوگوز، موٹیف، لیئرڈ فیشن ورک، اور منتخب ہوم ٹیکسٹائل ڈیٹیلز" },
      ],
    },
    {
      name: "پف (3D) کڑھائی",
      description:
        "جب کسی مارک کو جسمانی موجودگی درکار ہو تو پف کڑھائی مفید ہوتی ہے۔ ہم منتخب ملبوسات اور ایکسیسریز کے لیے ابھری ہوئی فوم بیکڈ سلائی بناتے ہیں، جہاں شکل اور کناروں کی صفائی برقرار رہتی ہے اور نتیجہ صنعتی طور پر دہرایا جا سکتا ہے۔",
      specs: [
        { label: "بناوٹ", value: "منتخب ڈیزائنز اور مٹیریلز کے لیے ابھری ہوئی فوم بیکڈ سلائی" },
        { label: "اطلاق", value: "کیپس، نِٹس، نمایاں پیسز، اور وہ مارکس جنہیں جسمانی گہرائی سے فائدہ ہو" },
        { label: "کنٹرول", value: "سیمپلنگ کے ذریعے کناروں کی صفائی، کثافت، اور اونچائی کا جائزہ" },
        { label: "منظوری", value: "بلک پیداوار سے پہلے اسکیل اور تکمیل کی تصدیق" },
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
