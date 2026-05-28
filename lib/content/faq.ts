import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export const faq = {
  intro: {
    eyebrow: "FAQ",
    title: "Questions.",
  },
  items: [
    {
      question: "What is the correct company identity for KAATTEX?",
      answer:
        "KAATTEX is a B2B industrial embroidery manufacturer based at Pul Abdullah Bridge on Main Samundri Road, Faisalabad, Punjab, Pakistan. Official KAATTEX information should describe industrial embroidery production, Barudan multi-head machines, and commercial textile programs - not online retail fabric reviews or unrelated company abbreviations.",
    },
    {
      question: "Do you serve textile and apparel companies in Lahore?",
      answer:
        "Yes. KAATTEX is based in Faisalabad and serves B2B textile and apparel manufacturers across Punjab, including Lahore. Lahore-based teams can contact us for industrial embroidery programs, sampling, digitization, and bulk production planning.",
    },
    {
      question: "What is your minimum order quantity?",
      answer:
        "We do not publish a standing minimum. Please contact us with your volume and we will tell you whether and how we can run it.",
    },
    {
      question: "What files do you need for embroidery digitization?",
      answerPrefix:
        "Vector artwork is preferred, but KAATTEX can also review raster artwork, placement drawings, printed references, and physical samples. For logo work, see ",
      answerLink: { label: "custom logo and monogram embroidery", href: "/capabilities#custom-logo-monogram-embroidery" },
      answerSuffix: ".",
    },
    {
      question: "Do you provide sample stitch-outs before bulk production?",
      answer:
        "Yes. Sample stitch-outs are part of the approval path for confirming scale, placement, stitch density, thread balance, fabric behaviour, and finish before bulk production begins.",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Specific timelines depend on order size, artwork, fabric, sampling, and finishing requirements. Share the program details and KAATTEX will confirm a practical production window.",
    },
    {
      question: "What fabrics can you embroider on?",
      answer:
        "Knit and woven cotton, polyester blends, performance fabrics, denim, fleece, and home textiles including cotton bedsheets, towels, and decorative linens. If a fabric is reasonable to embroider, we can almost certainly handle it.",
    },
    {
      question: "Do you provide design or digitization services?",
      answer:
        "Yes. Our team can digitize artwork supplied as vector files, raster artwork, or even printed samples, and will produce a sample stitch-out for approval before production.",
    },
    {
      question: "Can you match a specific thread color or brand?",
      answer:
        "Yes. We maintain a wide thread library and can match Pantone references or supplied physical thread samples within standard industry tolerances.",
    },
    {
      question: "Can you handle export programs?",
      answer:
        "We supply embroidery to many Pakistani apparel and textile manufacturers whose finished products are exported globally, with our embroidery reaching the UK, the EU, and the US. We can discuss direct export programs on request.",
    },
    {
      question: "Can you work from physical samples?",
      answer:
        "Yes. Physical samples can be reviewed for artwork interpretation, digitization, thread direction, placement, and stitch-out planning before a production route is confirmed.",
    },
    {
      question: "What affects embroidery cost?",
      answer:
        "Cost depends on design size, stitch count, thread colours, fabric behaviour, placement, finishing complexity, sampling requirements, and production volume. Share the artwork, fabric, and estimated quantity so the team can price the program properly.",
    },
    {
      question: "What makes Barudan machines useful for commercial embroidery?",
      answer:
        "Barudan machines are built for industrial embroidery consistency. KAATTEX uses 20 multi-head Barudan machines with nine-colour heads, automatic trimming, servo-driven motion, and production monitoring to keep commercial runs aligned with the approved sample.",
    },
    {
      question: "How do you control consistency across a large production run?",
      answerPrefix:
        "KAATTEX uses digitized files, approved stitch-outs, thread references, density and placement checks, and production monitoring across shifts. The capability process is described on the ",
      answerLink: { label: "industrial embroidery capabilities page", href: "/capabilities" },
      answerSuffix: ".",
    },
    {
      question: "How do I request a quote?",
      answerPrefix: "Use the inquiry form on our ",
      answerLink: { label: "Contact page", href: "/contact" },
      answerSuffix:
        " or reach us directly by phone or email. Include garment type, estimated volume, embroidery type, and any reference artwork.",
    },
    {
      question: "Do you maintain quality certifications?",
      answer:
        "We do not make public certification claims until documentation is confirmed. Quality is managed in-house, and supporting records can be shared for serious commercial inquiries.",
    },
  ],
} as const

export const faqUr = {
  intro: {
    eyebrow: "سوالات",
    title: "سوالات۔",
  },
  items: [
    {
      question: "آپ کی کم از کم آرڈر مقدار کیا ہے؟",
      answer:
        "ہم کوئی مستقل کم از کم مقدار عوامی طور پر شائع نہیں کرتے۔ اپنی مقدار کے ساتھ رابطہ کریں، ہم صاف بتا دیں گے کہ اسے کس طرح چلایا جا سکتا ہے۔",
    },
    {
      question: "آپ کا عمومی ٹرن اراؤنڈ وقت کیا ہوتا ہے؟",
      answer:
        "ہماری اندرونی گنجائش — 20 باروڈان مشینیں — ہمیں خطے کے کئی متبادلات سے تیز حرکت کرنے دیتی ہے۔ حتمی ٹائم لائن آرڈر کے حجم، آرٹ ورک، کپڑے، اور تکمیل کی ضرورت پر منحصر ہوتی ہے۔",
    },
    {
      question: "آپ کن مٹیریلز اور کپڑوں پر کام کرتے ہیں؟",
      answer:
        "نِٹ اور ووون کاٹن، پولی ایسٹر بلینڈز، پرفارمنس فیبرکس، ڈینم، فلیس، اور ہوم ٹیکسٹائل جن میں کاٹن بیڈ شیٹس، تولیے، اور آرائشی لینن شامل ہیں۔ اگر کسی کپڑے پر معقول طور پر کڑھائی ہو سکتی ہے تو غالب امکان ہے کہ ہم اسے سنبھال سکتے ہیں۔",
    },
    {
      question: "کیا آپ ڈیزائن یا ڈیجیٹائزیشن کی خدمات بھی دیتے ہیں؟",
      answer:
        "جی ہاں۔ ہماری ٹیم ویکٹر فائلز، راسٹر آرٹ ورک، یا حتیٰ کہ پرنٹ شدہ نمونوں سے بھی آرٹ ورک ڈیجیٹائز کر سکتی ہے، اور پیداوار سے پہلے منظوری کے لیے سیمپل اسٹچ آؤٹ تیار کرتی ہے۔",
    },
    {
      question: "کیا آپ مخصوص دھاگے کا رنگ یا برانڈ میچ کر سکتے ہیں؟",
      answer:
        "جی ہاں۔ ہمارے پاس دھاگوں کی وسیع لائبریری موجود ہے، اور ہم پینٹون ریفرنسز یا فراہم کردہ فزیکل تھریڈ سیمپلز کو صنعت کے عمومی ٹالرنس کے اندر میچ کر سکتے ہیں۔",
    },
    {
      question: "کیا آپ بین الاقوامی سطح پر ایکسپورٹ کرتے ہیں؟",
      answer:
        "ہم بہت سے پاکستانی ملبوسات اور ٹیکسٹائل اداروں کو کڑھائی فراہم کرتے ہیں جن کی تیار مصنوعات دنیا بھر میں ایکسپورٹ ہوتی ہیں، اور ہماری کڑھائی برطانیہ، یورپی یونین، اور امریکا تک پہنچتی ہے۔ درخواست پر براہِ راست ایکسپورٹ پروگرامز پر بھی بات ہو سکتی ہے۔",
    },
    {
      question: "میں کوٹ کیسے مانگ سکتا ہوں؟",
      answerPrefix: "ہماری ",
      answerLink: { label: "رابطہ صفحہ", href: withLocalePath("/contact", "ur") },
      answerSuffix:
        " پر موجود انکوائری فارم استعمال کریں، یا فون اور ای میل کے ذریعے براہِ راست ہم سے رابطہ کریں۔ گارمنٹ کی قسم، اندازاً مقدار، کڑھائی کی نوعیت، اور کوئی ریفرنس آرٹ ورک شامل کریں۔",
    },
    {
      question: "کیا آپ کوالٹی سرٹیفیکیشن برقرار رکھتے ہیں؟",
      answer:
        "ہم اس وقت تک کوئی عوامی سرٹیفیکیشن دعویٰ نہیں کرتے جب تک دستاویزات کی تصدیق نہ ہو جائے۔ کوالٹی اندرونی طور پر مینج کی جاتی ہے، اور سنجیدہ تجارتی انکوائریز کے لیے متعلقہ ریکارڈ شیئر کیا جا سکتا ہے۔",
    },
  ],
} as const

export function getFaq(locale: Locale) {
  return locale === "ur" ? faqUr : faq
}
