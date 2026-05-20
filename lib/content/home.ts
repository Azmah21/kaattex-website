import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export const home = {
  hero: {
    eyebrow: "EST. 1999 — FAISALABAD, PAKISTAN",
    title: "Embroidery, at the scale of industry. At the standard of craft.",
    description:
      "Twenty Barudan machines, one quiet obsession with thread, quality, and customer service. Trusted by Pakistan's leading apparel and textile houses for twenty-seven years.",
    primaryLink: { label: "View capabilities", href: "/capabilities" },
    secondaryLink: { label: "Make an inquiry", href: "/contact" },
  },
  stats: [
    { value: "20", label: "Barudan machines, imported from Japan" },
    { value: "27", label: "years of practice, since 1999" },
    { value: "200K+", label: "units in monthly throughput capacity" },
  ],
  practice: {
    eyebrow: "OUR PRACTICE",
    title: "A craft house, operating at industrial capacity.",
    paragraphs: [
      "Kaattex began in 1999 in Faisalabad with two machines and a single principle: that embroidery is a craft before it is a service. Twenty-seven years on, the principle has not moved — only the scale has.",
      "Today, twenty Barudan machines imported directly from Japan handle work for many of Pakistan's most established apparel and textile manufacturers, alongside export programs reaching the UK, EU, and US. Same hands. Same eye for tension and finish. More of it.",
    ],
    link: { label: "More about Kaattex", href: "/about" },
  },
  manufacturers: {
    eyebrow: "FOR MANUFACTURERS",
    title: "Commercial embroidery for apparel and textile manufacturers in Punjab and across Pakistan.",
    paragraphs: [
      "Kaattex is built for production teams that need repeatable embroidery at industrial scale: logo programs, decorative work, sequins, appliqué, and puff embroidery across commercial runs.",
      "Based in Faisalabad, Punjab, we welcome inquiries from apparel and textile manufacturers in Faisalabad, Lahore, and across Pakistan, with in-house capacity shaped for B2B timelines and brand consistency.",
    ],
  },
  capabilities: {
    eyebrow: "CAPABILITIES",
    title: "Five disciplines, refined over twenty-seven years.",
    items: [
      {
        name: "Custom logo & monogram embroidery",
        summary: "Brand-grade reproduction across knit, woven, and technical fabrics.",
      },
      {
        name: "Decorative pattern embroidery",
        summary: "Multi-color and tonal patterns for fashion and home textile programs.",
      },
      {
        name: "Sequin embroidery",
        summary: "Mixed sequin and thread compositions for fashion-forward orders.",
      },
      {
        name: "Appliqué embroidery",
        summary: "Cut-and-stitched fabric layering with embroidered finishing.",
      },
      {
        name: "Puff (3D) embroidery",
        summary: "Raised foam embroidery for caps, knits, and statement pieces.",
      },
    ],
    link: { label: "See all capabilities", href: "/capabilities" },
  },
  clients: {
    eyebrow: "CLIENTS",
    title: "Trusted by Pakistan's textile houses.",
  },
  inquiry: {
    title: "Let's discuss your next program.",
    description:
      "Share the garment, fabric, volume, and embroidery direction. We will help shape the right production path from there.",
    link: { label: "Make an inquiry", href: "/contact" },
  },
} as const

export const homeUr = {
  hero: {
    eyebrow: "قیام 1999 — فیصل آباد، پاکستان",
    title: "صنعتی پیمانے پر کڑھائی۔ دستکاری کے معیار کے ساتھ۔",
    description:
      "بیس باروڈان مشینیں، اور دھاگے، معیار، اور خدمتِ مشتری کے لیے ایک خاموش لگن۔ ستائیس برس سے پاکستان کے نمایاں ملبوسات اور ٹیکسٹائل اداروں کا اعتماد۔",
    primaryLink: { label: "صلاحیتیں دیکھیں", href: withLocalePath("/capabilities", "ur") },
    secondaryLink: { label: "رابطہ کریں", href: withLocalePath("/contact", "ur") },
  },
  stats: [
    { value: "20", label: "جاپان سے درآمد شدہ باروڈان مشینیں" },
    { value: "27", label: "1999 سے مسلسل تجربہ" },
    { value: "200K+", label: "ماہانہ پیداواری گنجائش" },
  ],
  practice: {
    eyebrow: "ہمارا طریقۂ کار",
    title: "ایک دستکاری گھر، صنعتی گنجائش کے ساتھ۔",
    paragraphs: [
      "Kaattex نے 1999 میں فیصل آباد میں دو مشینوں اور ایک اصول کے ساتھ آغاز کیا: کڑھائی، خدمت بننے سے پہلے ایک ہنر ہے۔ ستائیس برس بعد بھی اصول وہی ہے — بدلا ہے تو صرف پیمانہ۔",
      "آج جاپان سے براہِ راست درآمد شدہ بیس باروڈان مشینیں پاکستان کے کئی مضبوط ملبوسات اور ٹیکسٹائل اداروں کے لیے کام کرتی ہیں، ساتھ ہی ایسے برآمدی پروگرام بھی جن کی منزل برطانیہ، یورپی یونین، اور امریکا ہے۔ وہی ہاتھ۔ وہی نظر۔ بس زیادہ وسعت کے ساتھ۔",
    ],
    link: { label: "Kaattex کے بارے میں مزید", href: withLocalePath("/about", "ur") },
  },
  manufacturers: {
    eyebrow: "صنعتی خریداروں کے لیے",
    title: "پنجاب اور پورے پاکستان کے ملبوسات اور ٹیکسٹائل اداروں کے لیے تجارتی کڑھائی۔",
    paragraphs: [
      "Kaattex اُن پیداواری ٹیموں کے لیے بنایا گیا ہے جنہیں صنعتی پیمانے پر مستقل معیار کی کڑھائی درکار ہوتی ہے: لوگو پروگرام، آرائشی کام، سیکوئن، اپلیکے، اور پف کڑھائی بڑے تجارتی رنز میں۔",
      "فیصل آباد، پنجاب میں قائم Kaattex فیصل آباد، لاہور، اور پورے پاکستان کے ملبوسات اور ٹیکسٹائل اداروں سے استفسارات خوش آمدید کہتا ہے، جہاں ہماری اندرونی گنجائش B2B ٹائم لائنز اور برانڈ یکسانیت کے لیے موزوں ہے۔",
    ],
  },
  capabilities: {
    eyebrow: "صلاحیتیں",
    title: "پانچ میدان، ستائیس برس میں نکھرے ہوئے۔",
    items: [
      {
        name: "حسبِ ضرورت لوگو اور مونوگرام کڑھائی",
        summary: "نِٹ، ووون، اور تکنیکی کپڑوں پر برانڈ معیار کی درست نقل۔",
      },
      {
        name: "آرائشی پیٹرن کڑھائی",
        summary: "فیشن اور ہوم ٹیکسٹائل پروگراموں کے لیے کثیر رنگی اور ٹونل پیٹرن۔",
      },
      {
        name: "سیکوئن کڑھائی",
        summary: "جدید فیشن آرڈرز کے لیے سیکوئن اور دھاگے کی متوازن ترکیبیں۔",
      },
      {
        name: "اپلیکے کڑھائی",
        summary: "کٹے ہوئے کپڑے کی تہیں، کڑھائی شدہ تکمیل کے ساتھ۔",
      },
      {
        name: "پف (3D) کڑھائی",
        summary: "کیپس، نِٹس، اور نمایاں پیسز کے لیے ابھری ہوئی فوم کڑھائی۔",
      },
    ],
    link: { label: "تمام صلاحیتیں دیکھیں", href: withLocalePath("/capabilities", "ur") },
  },
  clients: {
    eyebrow: "کلائنٹس",
    title: "پاکستان کے ٹیکسٹائل اداروں کا اعتماد۔",
  },
  inquiry: {
    title: "اپنے اگلے پروگرام پر بات کرتے ہیں۔",
    description:
      "لباس، کپڑا، مقدار، اور مطلوبہ کڑھائی کی سمت بتائیں۔ ہم وہاں سے درست پیداواری راستہ ترتیب دینے میں مدد کریں گے۔",
    link: { label: "رابطہ کریں", href: withLocalePath("/contact", "ur") },
  },
} as const

export function getHome(locale: Locale) {
  return locale === "ur" ? homeUr : home
}
