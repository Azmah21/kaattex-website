import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export const home = {
  hero: {
    eyebrow: "EST. 1999 — FAISALABAD, PAKISTAN",
    title: "Embroidery, at the scale of industry. At the standard of craft.",
    description:
      "A floor of twenty Barudan machines, run around the clock — embroidery at the scale of industry, held to the standard of craft.",
    primaryLink: { label: "View capabilities", href: "/capabilities" },
    secondaryLink: { label: "Make an inquiry", href: "/contact" },
  },
  stats: [
    { value: "20", label: "Barudan multi-head machines, built in Japan" },
    { value: "400+", label: "nine-colour embroidery heads on the floor" },
    { value: "200K+", label: "monthly throughput capacity for commercial programs" },
  ],
  clients: {
    eyebrow: "CLIENTS",
    title: "Trusted by Pakistan's textile houses.",
    caption:
      "A selection of the apparel and textile houses we work with — including JTex, Sadaqat, Masood Textile Mills, Beacon Impex, Interloop, Nishat, and others across Pakistan.",
  },
  production: {
    eyebrow: "PRODUCTION FLOOR",
    title: "Twenty Barudan machines. Three shifts. One standard of finish.",
    paragraphs: [
      "More than four hundred heads stitch in parallel on the KAATTEX floor: the same design, to the same tolerance, across the entire run.",
      "Nine colours per head allow complex artwork to move in a single pass, while automatic trimming, servo-driven motion, and production monitoring keep each shift working to the same brief.",
    ],
    facts: [
      { label: "Machine base", value: "20 Barudan multi-head machines" },
      { label: "Headroom", value: "400+ nine-colour embroidery heads" },
      { label: "Monthly capacity", value: "200K+ pieces of throughput capacity" },
      { label: "Operating rhythm", value: "Three shifts, continuous production" },
      { label: "Speed ceiling", value: "Up to 1,200 stitches per minute" },
    ],
  },
  capabilities: {
    eyebrow: "CAPABILITIES",
    title: "Five disciplines, refined over twenty-seven years.",
    items: [
      {
        name: "Custom logo & monogram embroidery",
        summary: "Brand-grade reproduction across knit, woven, and technical fabrics.",
        proof: "Digitized, sampled, repeated",
        href: "/capabilities#custom-logo-monogram-embroidery",
      },
      {
        name: "Decorative pattern embroidery",
        summary: "Multi-color and tonal patterns for fashion and home textile programs.",
        proof: "Fashion + home textiles",
        href: "/capabilities#decorative-pattern-embroidery",
      },
      {
        name: "Sequin embroidery",
        summary: "Mixed sequin and thread compositions for fashion-forward orders.",
        proof: "Thread and sequin balance",
        href: "/capabilities#sequin-embroidery",
      },
      {
        name: "Appliqué embroidery",
        summary: "Cut-and-stitched fabric layering with embroidered finishing.",
        proof: "Layering with clean borders",
        href: "/capabilities#applique-embroidery",
      },
      {
        name: "Puff (3D) embroidery",
        summary: "Raised foam embroidery for caps, knits, and statement pieces.",
        proof: "Raised foam, controlled edges",
        href: "/capabilities#puff-3d-embroidery",
      },
    ],
    link: { label: "See all capabilities", href: "/capabilities" },
  },
  practice: {
    eyebrow: "OUR PRACTICE",
    title: "A craft house, operating at industrial capacity.",
    paragraphs: [
      "Kaattex began in 1999 in Faisalabad with two machines and a single principle: that embroidery is a craft before it is a service. Twenty-seven years on, the principle has not moved — only the scale has.",
      "Today, twenty Barudan machines imported directly from Japan handle work for many of Pakistan's most established apparel and textile manufacturers, alongside export programs reaching the UK, EU, and US. Same hands. Same eye for tension and finish. More of it.",
    ],
    link: { label: "More about Kaattex", href: "/about" },
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
      "بیس باروڈان مشینوں کا فلور، دن رات چلتا ہوا — صنعتی پیمانے کی کڑھائی، دستکاری کے معیار کے ساتھ۔",
    primaryLink: { label: "صلاحیتیں دیکھیں", href: withLocalePath("/capabilities", "ur") },
    secondaryLink: { label: "رابطہ کریں", href: withLocalePath("/contact", "ur") },
  },
  stats: [
    { value: "20", label: "جاپان میں بنی باروڈان ملٹی ہیڈ مشینیں" },
    { value: "400+", label: "فلور پر نو رنگوں والے کڑھائی ہیڈز" },
    { value: "24 / 7", label: "تین شفٹیں، مسلسل پیداوار" },
  ],
  clients: {
    eyebrow: "کلائنٹس",
    title: "پاکستان کے ٹیکسٹائل اداروں کا اعتماد۔",
    caption:
      "ملبوسات اور ٹیکسٹائل کے چند نمایاں ادارے جن کے ساتھ ہم کام کرتے ہیں — JTex، Sadaqat، Masood Textile Mills، Beacon Impex، Interloop، Nishat، اور پاکستان بھر کے دیگر ادارے۔",
  },
  production: {
    eyebrow: "پیداواری فلور",
    title: "بیس باروڈان مشینیں۔ تین شفٹیں۔ تکمیل کا ایک معیار۔",
    paragraphs: [
      "KAATTEX کے فلور پر چار سو سے زیادہ ہیڈز بیک وقت ایک ہی ڈیزائن کو ایک ہی برداشت کے ساتھ کڑھتے ہیں، پہلے پیس سے آخری پیس تک۔",
      "ہر ہیڈ میں نو رنگ پیچیدہ آرٹ ورک کو ایک ہی پاس میں چلنے دیتے ہیں، جبکہ خودکار ٹرمنگ، سروو موشن، اور پیداواری نگرانی ہر شفٹ کو ایک ہی بریف پر قائم رکھتے ہیں۔",
    ],
    facts: [
      { label: "مشین بیس", value: "20 باروڈان ملٹی ہیڈ مشینیں" },
      { label: "ہیڈز", value: "400+ نو رنگوں والے کڑھائی ہیڈز" },
      { label: "کام کا ردھم", value: "تین شفٹیں، مسلسل پیداوار" },
      { label: "رفتار کی حد", value: "1,200 ٹانکے فی منٹ تک" },
    ],
  },
  capabilities: {
    eyebrow: "صلاحیتیں",
    title: "پانچ میدان، ستائیس برس میں نکھرے ہوئے۔",
    items: [
      {
        name: "حسبِ ضرورت لوگو اور مونوگرام کڑھائی",
        summary: "نِٹ، ووون، اور تکنیکی کپڑوں پر برانڈ معیار کی درست نقل۔",
        proof: "ڈیجیٹائز، سیمپل، پھر پیداوار",
        href: `${withLocalePath("/capabilities", "ur")}#custom-logo-monogram-embroidery`,
      },
      {
        name: "آرائشی پیٹرن کڑھائی",
        summary: "فیشن اور ہوم ٹیکسٹائل پروگراموں کے لیے کثیر رنگی اور ٹونل پیٹرن۔",
        proof: "فیشن + ہوم ٹیکسٹائل",
        href: `${withLocalePath("/capabilities", "ur")}#decorative-pattern-embroidery`,
      },
      {
        name: "سیکوئن کڑھائی",
        summary: "جدید فیشن آرڈرز کے لیے سیکوئن اور دھاگے کی متوازن ترکیبیں۔",
        proof: "دھاگہ اور سیکوئن توازن",
        href: `${withLocalePath("/capabilities", "ur")}#sequin-embroidery`,
      },
      {
        name: "اپلیکے کڑھائی",
        summary: "کٹے ہوئے کپڑے کی تہیں، کڑھائی شدہ تکمیل کے ساتھ۔",
        proof: "صاف بارڈر والی تہیں",
        href: `${withLocalePath("/capabilities", "ur")}#applique-embroidery`,
      },
      {
        name: "پف (3D) کڑھائی",
        summary: "کیپس، نِٹس، اور نمایاں پیسز کے لیے ابھری ہوئی فوم کڑھائی۔",
        proof: "ابھری فوم، صاف کنارے",
        href: `${withLocalePath("/capabilities", "ur")}#puff-3d-embroidery`,
      },
    ],
    link: { label: "تمام صلاحیتیں دیکھیں", href: withLocalePath("/capabilities", "ur") },
  },
  practice: {
    eyebrow: "ہمارا طریقۂ کار",
    title: "ایک دستکاری گھر، صنعتی گنجائش کے ساتھ۔",
    paragraphs: [
      "Kaattex نے 1999 میں فیصل آباد میں دو مشینوں اور ایک اصول کے ساتھ آغاز کیا: کڑھائی، خدمت بننے سے پہلے ایک ہنر ہے۔ ستائیس برس بعد بھی اصول وہی ہے — بدلا ہے تو صرف پیمانہ۔",
      "آج جاپان سے براہِ راست درآمد شدہ بیس باروڈان مشینیں پاکستان کے کئی مضبوط ملبوسات اور ٹیکسٹائل اداروں کے لیے کام کرتی ہیں، ساتھ ہی ایسے برآمدی پروگرام بھی جن کی منزل برطانیہ، یورپی یونین، اور امریکا ہے۔ وہی ہاتھ۔ وہی نظر۔ بس زیادہ وسعت کے ساتھ۔",
    ],
    link: { label: "Kaattex کے بارے میں مزید", href: withLocalePath("/about", "ur") },
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
