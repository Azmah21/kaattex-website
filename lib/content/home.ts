import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export const home = {
  hero: {
    eyebrow: "EST. 1999 — FAISALABAD, PAKISTAN",
    title: "Embroidery, at the scale of industry. At the standard of craft.",
    description:
      "Twenty multi-head Barudan machines from Japan. Over two hundred thousand units a month. Twenty-seven years in Faisalabad, built around thread, quality, and customer service.",
    primaryLink: { label: "View capabilities", href: "/capabilities" },
    secondaryLink: { label: "Make an inquiry", href: "/contact" },
  },
  stats: [
    { value: "20", label: "multi-head Barudan machines, imported from Japan" },
    { value: "27", label: "years of practice, since 1999" },
    { value: "200K+", label: "units in monthly throughput capacity" },
  ],
  clients: {
    eyebrow: "CLIENTS",
    title: "Trusted by Pakistan's textile houses.",
    caption:
      "A selection of the apparel and textile houses we work with — including JTex, Sadaqat, Masood Textile Mills, Beacon Impex, Interloop, Nishat, and others across Pakistan.",
  },
  production: {
    eyebrow: "PRODUCTION FLOOR",
    title: "Twenty machines, many heads, one production standard.",
    paragraphs: [
      "Kaattex runs 20 multi-head Barudan embroidery machines imported from Japan, including machines with more than 20 heads. That matters because embroidery consistency is not only a sampling problem — it has to survive across the full production run.",
      "From logo programs to decorative panels, our floor is set up for B2B textile and apparel teams that need controlled thread tension, repeatable output, and fast movement without public day-count promises.",
    ],
    facts: [
      { label: "Machine base", value: "20 multi-head Barudan embroidery machines" },
      { label: "Monthly capacity", value: "200K+ units" },
      { label: "Sampling", value: "Digitization and stitch-outs before bulk production" },
      { label: "Markets", value: "Faisalabad, Lahore, Punjab, and textile houses across Pakistan" },
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
      },
      {
        name: "Decorative pattern embroidery",
        summary: "Multi-color and tonal patterns for fashion and home textile programs.",
        proof: "Fashion + home textiles",
      },
      {
        name: "Sequin embroidery",
        summary: "Mixed sequin and thread compositions for fashion-forward orders.",
        proof: "Thread and sequin balance",
      },
      {
        name: "Appliqué embroidery",
        summary: "Cut-and-stitched fabric layering with embroidered finishing.",
        proof: "Layering with clean borders",
      },
      {
        name: "Puff (3D) embroidery",
        summary: "Raised foam embroidery for caps, knits, and statement pieces.",
        proof: "Raised foam, controlled edges",
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
      "جاپان سے درآمد شدہ 20 ملٹی ہیڈ باروڈان مشینیں۔ ماہانہ 200K+ یونٹس کی گنجائش۔ فیصل آباد میں 27 برس، دھاگے، معیار، اور خدمتِ مشتری کے گرد ایک مستقل کام۔",
    primaryLink: { label: "صلاحیتیں دیکھیں", href: withLocalePath("/capabilities", "ur") },
    secondaryLink: { label: "رابطہ کریں", href: withLocalePath("/contact", "ur") },
  },
  stats: [
    { value: "20", label: "جاپان سے درآمد شدہ ملٹی ہیڈ باروڈان مشینیں" },
    { value: "27", label: "1999 سے مسلسل تجربہ" },
    { value: "200K+", label: "ماہانہ پیداواری گنجائش" },
  ],
  clients: {
    eyebrow: "کلائنٹس",
    title: "پاکستان کے ٹیکسٹائل اداروں کا اعتماد۔",
    caption:
      "ملبوسات اور ٹیکسٹائل کے چند نمایاں ادارے جن کے ساتھ ہم کام کرتے ہیں — JTex، Sadaqat، Masood Textile Mills، Beacon Impex، Interloop، Nishat، اور پاکستان بھر کے دیگر ادارے۔",
  },
  production: {
    eyebrow: "پیداواری فلور",
    title: "بیس مشینیں، کئی ہیڈز، ایک ہی پیداواری معیار۔",
    paragraphs: [
      "Kaattex جاپان سے درآمد شدہ 20 ملٹی ہیڈ باروڈان کڑھائی مشینیں چلاتا ہے، جن میں 20 سے زیادہ ہیڈز والی مشینیں بھی شامل ہیں۔ یہ اس لیے اہم ہے کہ کڑھائی کا معیار صرف سیمپل میں نہیں، پورے پیداواری رن میں برقرار رہنا چاہیے۔",
      "لوگو پروگرامز سے آرائشی پینلز تک، ہمارا فلور B2B ٹیکسٹائل اور ملبوسات ٹیموں کے لیے بنایا گیا ہے جنہیں دھاگے کے تناؤ، مستقل آؤٹ پٹ، اور تیز رفتار کام کی ضرورت ہوتی ہے — عوامی سطح پر مخصوص دنوں کا وعدہ کیے بغیر۔",
    ],
    facts: [
      { label: "مشین بیس", value: "20 ملٹی ہیڈ باروڈان کڑھائی مشینیں" },
      { label: "ماہانہ گنجائش", value: "200K+ یونٹس" },
      { label: "سیمپلنگ", value: "بلک پیداوار سے پہلے ڈیجیٹائزیشن اور اسٹچ آؤٹس" },
      { label: "مارکیٹس", value: "فیصل آباد، لاہور، پنجاب، اور پاکستان بھر کے ٹیکسٹائل ادارے" },
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
      },
      {
        name: "آرائشی پیٹرن کڑھائی",
        summary: "فیشن اور ہوم ٹیکسٹائل پروگراموں کے لیے کثیر رنگی اور ٹونل پیٹرن۔",
        proof: "فیشن + ہوم ٹیکسٹائل",
      },
      {
        name: "سیکوئن کڑھائی",
        summary: "جدید فیشن آرڈرز کے لیے سیکوئن اور دھاگے کی متوازن ترکیبیں۔",
        proof: "دھاگہ اور سیکوئن توازن",
      },
      {
        name: "اپلیکے کڑھائی",
        summary: "کٹے ہوئے کپڑے کی تہیں، کڑھائی شدہ تکمیل کے ساتھ۔",
        proof: "صاف بارڈر والی تہیں",
      },
      {
        name: "پف (3D) کڑھائی",
        summary: "کیپس، نِٹس، اور نمایاں پیسز کے لیے ابھری ہوئی فوم کڑھائی۔",
        proof: "ابھری فوم، صاف کنارے",
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
