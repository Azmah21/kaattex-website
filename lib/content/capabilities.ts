import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export const capabilities = {
  intro: {
    eyebrow: "CAPABILITIES",
    title: "Capabilities.",
    description:
      "A working spec sheet for commercial embroidery programs: what we make, who each discipline is for, what files help, and how the production floor holds the standard across a run.",
  },
  capacity: {
    eyebrow: "PRODUCTION CAPACITY",
    title: "Capacity that holds its standard at scale.",
    paragraphs: [
      "Embroidery is easy to get right once. The discipline is getting it right ten thousand times — every piece identical, every colour true, every stitch where the sample said it would be. KAATTEX is built for exactly that.",
      "Twenty Barudan multi-head machines give us the headroom to take large programmes without stretching, and to absorb urgent timelines without cutting corners on finish. Nine-colour heads handle complex, multi-colour artwork in a single pass, with no rethreading between colours and no break in the run. Automatic trimming and servo-driven precision keep the output clean and uniform; networked production monitoring keeps every shift working to the same brief.",
      "For buyers, that means capacity with a clear approval path: artwork review, digitization, sample stitch-out, and bulk production planned around the fabric, placement, finish, and volume.",
    ],
    stats: [
      "Twenty Barudan machines",
      "400+ nine-colour heads",
      "200K+ monthly throughput capacity",
      "up to 1,200 SPM",
      "three shifts, 24 hours",
    ],
  },
  items: [
    {
      slug: "custom-logo-monogram-embroidery",
      name: "Custom logo & monogram embroidery",
      description:
        "We reproduce brand marks with disciplined spacing, edge quality, and thread coverage across garments and textiles. The aim is not simply recognition, but consistency: the first piece and the final piece should feel like members of the same family.",
      specs: [
        { label: "Fabrics", value: "Knit, woven, polyester blends, denim, fleece, performance fabrics, and home textiles" },
        { label: "Artwork", value: "Vector files, raster artwork, or physical samples digitized for stitch-out" },
        { label: "Machine setup", value: "Twenty Barudan multi-head machines with nine-colour heads" },
        { label: "Approval", value: "Sample stitch-out before bulk production" },
        { label: "Who it is for", value: "Apparel manufacturers, knitwear teams, uniform suppliers, brand programs, and textile buyers that need repeatable brand marks at commercial scale" },
        { label: "Production", value: "Small lettering, dense fills, stretch fabrics, and placement near seams are reviewed before bulk work so the logo remains legible" },
        { label: "Quality control", value: "Digitized files, approved samples, thread references, and production monitoring keep the mark consistent across the run" },
        { label: "Use cases", value: "Chest logos, sleeve marks, uniforms, knitwear branding, home-textile branding, and monogram programs" },
      ],
    },
    {
      slug: "decorative-pattern-embroidery",
      name: "Decorative pattern embroidery",
      description:
        "Decorative embroidery relies on cadence, not clutter. We build repeat patterns, borders, and tonal fields that preserve their visual rhythm over long runs while staying aligned with the material underneath.",
      specs: [
        { label: "Programs", value: "Fashion panels, borders, repeat patterns, tonal fields, and home-textile applications" },
        { label: "Suitable fabrics", value: "Woven and knit bases, fashion panels, garment pieces, selected home textiles, and fabrics that can hold the planned stitch density" },
        { label: "Color", value: "Tonal or multi-color thread work, matched to supplied references where needed" },
        { label: "Scale", value: "Pattern adjustments across garment sizes and textile panels" },
        { label: "Control", value: "Stitch density and spacing set after fabric review and sample approval" },
        { label: "Who it is for", value: "Fashion, apparel, and home-textile manufacturers planning panels, borders, repeats, and decorative placement work" },
        { label: "Artwork", value: "Repeat artwork, placement drawings, CAD references, vector files, raster artwork, or physical samples" },
        { label: "Production", value: "Panel size, garment grading, fabric movement, repeat alignment, and thread density affect the final result" },
        { label: "Quality control", value: "Approved samples, pattern spacing checks, thread matching, and production monitoring support consistency across panels" },
      ],
    },
    {
      slug: "sequin-embroidery",
      name: "Sequin embroidery",
      description:
        "Sequin work introduces light into the surface. We pair sequins with thread in controlled compositions that keep the design readable, the hand-feel considered, and the finish appropriate to the garment.",
      specs: [
        { label: "Composition", value: "Thread-and-sequin combinations for motifs, panels, and accents" },
        { label: "Placement", value: "Controlled density so reflection supports the design instead of overwhelming it" },
        { label: "Sampling", value: "Stitch-out approval for sequin spacing, thread balance, and hand-feel" },
        { label: "Use cases", value: "Fashion-forward garments, decorative programs, and selective highlight work" },
        { label: "Who it is for", value: "Fashion-forward garment programs, decorative collections, panels, motifs, and buyers using sequins as a controlled accent" },
        { label: "Materials", value: "Fabrics selected for sequin attachment, thread balance, hand-feel, and the intended garment or textile use" },
        { label: "Artwork", value: "Motif files, panel layouts, sequin placement references, colour references, or physical samples" },
        { label: "Quality control", value: "Sample approval, placement checks, density control, and production monitoring keep sequins aligned with the design intent" },
      ],
    },
    {
      slug: "applique-embroidery",
      name: "Appliqué embroidery",
      description:
        "Appliqué adds another plane to the work. We combine cut fabric and embroidery so each layer contributes shape, texture, and contrast without turning the piece into ornament for ornament's sake.",
      specs: [
        { label: "Materials", value: "Cut fabric layers, contrast materials, tonal builds, and garment placements" },
        { label: "Finish", value: "Cut-and-stitch construction with embroidered edge control" },
        { label: "Planning", value: "Material compatibility and placement reviewed before production" },
        { label: "Best fit", value: "Logos, motifs, layered fashion work, and selected home-textile details" },
        { label: "Who it is for", value: "Brands and manufacturers using layered fabric, contrast materials, motifs, logos, or textured garment and home-textile details" },
        { label: "Artwork", value: "Vector artwork, placement guides, material references, cut-shape references, or physical samples" },
        { label: "Production", value: "Material thickness, edge behaviour, placement accuracy, and cutting requirements influence the production plan" },
        { label: "Quality control", value: "Approved samples, material checks, edge-definition review, and production monitoring keep layered work repeatable" },
      ],
    },
    {
      slug: "puff-3d-embroidery",
      name: "Puff (3D) embroidery",
      description:
        "Puff embroidery is useful when a mark needs physical presence. We create raised foam-backed stitching for select garments and accessories, holding shape and edge definition while preserving an industrially repeatable result.",
      specs: [
        { label: "Build", value: "Raised foam-backed stitching for selected designs and materials" },
        { label: "Applications", value: "Caps, knits, statement pieces, and marks that benefit from physical depth" },
        { label: "Control", value: "Edge definition, density, and height reviewed through sampling" },
        { label: "Approval", value: "Scale and finish confirmed before bulk production" },
        { label: "Who it is for", value: "Commercial programs where logos, caps, knits, or statement pieces benefit from raised depth" },
        { label: "Artwork", value: "Bold artwork, vector files, placement references, or physical samples; very fine detail needs review before digitization" },
        { label: "Production", value: "Puff work performs best with shapes that can hold clean edges and enough stitch coverage to secure the raised form" },
        { label: "Quality control", value: "Sample approval, density checks, edge review, and production monitoring keep the raised effect consistent across the run" },
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
  capacity: {
    eyebrow: "پیداواری گنجائش",
    title: "وہ گنجائش جو پیمانے پر بھی اپنا معیار برقرار رکھتی ہے۔",
    paragraphs: [
      "کڑھائی کو ایک بار درست کرنا آسان ہے۔ اصل نظم اسے دس ہزار بار درست رکھنے میں ہے — ہر پیس یکساں، ہر رنگ درست، ہر ٹانکا وہیں جہاں منظور شدہ سیمپل نے کہا۔ KAATTEX اسی کام کے لیے بنا ہے۔",
      "بیس باروڈان ملٹی ہیڈ مشینیں ہمیں بڑے پروگرام سنبھالنے کی گنجائش دیتی ہیں، اور فوری ٹائم لائنز کو تکمیل پر سمجھوتہ کیے بغیر جذب کرنے دیتی ہیں۔ نو رنگوں والے ہیڈز پیچیدہ، کثیر رنگی آرٹ ورک کو ایک ہی پاس میں چلاتے ہیں، رنگوں کے بیچ دوبارہ دھاگہ ڈالے بغیر اور رن میں وقفے کے بغیر۔ خودکار ٹرمنگ اور سروو کی درست حرکت نتیجے کو صاف اور یکساں رکھتے ہیں؛ مرکزی پیداواری نگرانی ہر شفٹ کو ایک ہی بریف پر قائم رکھتی ہے۔",
      "تین شفٹیں روزانہ چلنے سے فلور کبھی ٹھنڈا نہیں پڑتا — یہی ہمیں ایسے ٹرن اراؤنڈ ٹائمز دینے دیتا ہے جو خطے میں بہت کم ملتے ہیں۔",
    ],
    stats: ["20 باروڈان مشینیں", "400+ نو رنگوں والے ہیڈز", "1,200 SPM تک", "تین شفٹیں، 24 گھنٹے"],
  },
  items: [
    {
      slug: "custom-logo-monogram-embroidery",
      name: "حسبِ ضرورت لوگو اور مونوگرام کڑھائی",
      description:
        "ہم لباس اور ٹیکسٹائل پر برانڈ مارکس کو منظم فاصلوں، صاف کناروں، اور درست دھاگہ کوریج کے ساتھ دوبارہ بناتے ہیں۔ مقصد صرف پہچان نہیں، مستقل مزاجی ہے: پہلا پیس اور آخری پیس ایک ہی خاندان کے محسوس ہونے چاہییں۔",
      specs: [
        { label: "کپڑے", value: "نِٹ، ووون، پولی ایسٹر بلینڈز، ڈینم، فلیس، پرفارمنس فیبرکس، اور ہوم ٹیکسٹائل" },
        { label: "آرٹ ورک", value: "ویکٹر فائلز، راسٹر آرٹ ورک، یا فزیکل سیمپلز سے اسٹچ آؤٹ کے لیے ڈیجیٹائزیشن" },
        { label: "مشین سیٹ اپ", value: "بیس باروڈان ملٹی ہیڈ مشینیں، نو رنگوں والے ہیڈز کے ساتھ" },
        { label: "منظوری", value: "بلک پیداوار سے پہلے سیمپل اسٹچ آؤٹ" },
      ],
    },
    {
      slug: "decorative-pattern-embroidery",
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
      slug: "sequin-embroidery",
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
      slug: "applique-embroidery",
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
      slug: "puff-3d-embroidery",
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
