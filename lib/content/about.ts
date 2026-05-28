import type { Locale } from "@/lib/i18n"

export const about = {
  intro: {
    eyebrow: "ABOUT KAATTEX",
    title: "Twenty-seven years of one thing.",
    subtitle: "Embroidery, made in Faisalabad.",
  },
  story: [
    {
      body:
        "Kaattex was founded in Faisalabad in 1999 with two machines, a workshop floor, and a handful of artisans. The bet was simple: that embroidery, even at industrial volume, is a craft. That the difference between adequate work and excellent work is the same on the thousandth shirt as it is on the first.",
      note: "1999 — founded in Faisalabad",
    },
    {
      body:
        "Twenty-seven years on, the workshop has grown into a production house operating twenty Barudan machines imported directly from Japan — but the floor still treats each program as if it were the only one. Most of our clients have worked with us for over a decade. Some have worked with us for our entire history.",
      note: "20 machines — directly imported from Japan",
    },
    {
      body:
        "We work primarily with Pakistan's established apparel and textile manufacturers, and through them, our embroidery travels to the UK, the European Union, and the United States. Our reputation is built less on what we say about the work and more on the work itself, returning to our floor program after program, season after season.",
      note: "Pakistan / UK / EU / US",
    },
  ],
  whatWeMake: {
    title: "What we make.",
    items: [
      {
        name: "Custom logo & monogram embroidery",
        description:
          "We translate brand marks into embroidery that holds its proportion, spacing, and edge quality across production. The work can be quiet or highly visible, but the standard is the same: clean reproduction, consistent registration, and a finish that feels native to the garment.",
      },
      {
        name: "Decorative pattern embroidery",
        description:
          "Pattern work asks for rhythm as much as accuracy. We handle tonal, multi-color, and repeat embroidery for fashion and home textile programs, keeping the pattern coherent across the whole run while respecting the drape and hand-feel of the base fabric.",
      },
      {
        name: "Sequin embroidery",
        description:
          "Sequin programs combine reflection with restraint. We produce thread-and-sequin compositions that remain legible at scale, balancing shine, stitch density, and placement so the result feels intentional rather than noisy.",
      },
      {
        name: "Appliqué embroidery",
        description:
          "Appliqué brings another material into the stitch field. We cut, place, and finish layered fabrics with embroidered borders, allowing shape, texture, and contrast to become part of the design without losing production discipline.",
      },
      {
        name: "Puff (3D) embroidery",
        description:
          "Puff embroidery gives selected marks physical lift. We use foam-backed stitching for caps, knits, and statement pieces where raised depth adds value, while maintaining clean edges and stable form across the run.",
      },
    ],
  },
  machines: {
    eyebrow: "THE PLANT",
    title: "Twenty Barudan machines. One standard of finish.",
    paragraphs: [
      "Every machine on the KAATTEX floor is built by Barudan. The Japanese manufacturer has set the benchmark for industrial embroidery since 1959 — it built the world's first multi-head computerised embroidery machine — and the trade still treats its name as shorthand for stitch quality. We run Barudan for the same reason our clients keep returning to us: it is the difference between embroidery that passes and embroidery that is exact.",
      "Our floor operates twenty Barudan multi-head machines — more than four hundred embroidery heads, every one of them a nine-colour head. That is several hundred heads stitching in parallel: the same design, to the same tolerance, across the entire run. It is what lets us take an order of tens of thousands of pieces and return every one of them matching the approved sample.",
      "The plant runs three shifts, around the clock, with servo-driven motion, automatic thread trimming, and centralised production monitoring keeping the work fast and consistent from the first piece to the last. Speed reaches up to 1,200 stitches per minute — but speed only counts if the finish holds. Across every shift, the finish holds.",
    ],
  },
  shipping: {
    eyebrow: "WHERE WE SHIP",
    title: "Programs that travel.",
    regions: ["Pakistan (domestic)", "United Kingdom", "European Union", "United States"],
  },
} as const

export const aboutUr = {
  intro: {
    eyebrow: "Kaattex کا تعارف",
    title: "ایک ہی کام کے ستائیس برس۔",
    subtitle: "فیصل آباد میں بنی کڑھائی۔",
  },
  story: [
    {
      body:
        "Kaattex کی بنیاد 1999 میں فیصل آباد میں دو مشینوں، ایک ورکشاپ فلور، اور چند کاریگروں کے ساتھ رکھی گئی۔ یقین سادہ تھا: صنعتی مقدار میں بھی کڑھائی ایک ہنر ہی رہتی ہے۔ اچھی اور بہترین کاریگری کا فرق ہزارویں شرٹ پر بھی اتنا ہی اہم ہے جتنا پہلی پر۔",
      note: "1999 — فیصل آباد میں بنیاد",
    },
    {
      body:
        "ستائیس برس بعد وہی ورکشاپ جاپان سے براہِ راست درآمد شدہ بیس باروڈان مشینوں کے ساتھ ایک باقاعدہ پیداواری گھر بن چکی ہے — مگر فلور آج بھی ہر پروگرام کو ایسے لیتا ہے جیسے وہی واحد کام ہو۔ ہمارے بیشتر کلائنٹس ایک دہائی سے زیادہ عرصے سے ہمارے ساتھ ہیں۔ کچھ ہماری پوری تاریخ کے شریک ہیں۔",
      note: "20 مشینیں — جاپان سے براہِ راست درآمد",
    },
    {
      body:
        "ہم بنیادی طور پر پاکستان کے قائم شدہ ملبوسات اور ٹیکسٹائل اداروں کے ساتھ کام کرتے ہیں، اور انہی کے ذریعے ہماری کڑھائی برطانیہ، یورپی یونین، اور امریکا تک پہنچتی ہے۔ ہماری ساکھ ہمارے دعووں سے کم، اور اس کام سے زیادہ بنی ہے جو پروگرام در پروگرام، موسم در موسم، دوبارہ ہمارے فلور پر واپس آتا ہے۔",
      note: "پاکستان / برطانیہ / یورپی یونین / امریکا",
    },
  ],
  whatWeMake: {
    title: "ہم کیا بناتے ہیں۔",
    items: [
      {
        name: "حسبِ ضرورت لوگو اور مونوگرام کڑھائی",
        description:
          "ہم برانڈ مارکس کو ایسی کڑھائی میں ڈھالتے ہیں جو پوری پیداوار میں تناسب، فاصلہ، اور کناروں کی صفائی برقرار رکھے۔ کام خاموش ہو یا نمایاں، معیار ایک ہی رہتا ہے: صاف نقل، مستقل رجسٹریشن، اور ایسی تکمیل جو لباس کا فطری حصہ محسوس ہو۔",
      },
      {
        name: "آرائشی پیٹرن کڑھائی",
        description:
          "پیٹرن ورک درستگی کے ساتھ تال بھی مانگتا ہے۔ ہم فیشن اور ہوم ٹیکسٹائل پروگراموں کے لیے ٹونل، کثیر رنگی، اور ریپیٹ کڑھائی سنبھالتے ہیں، تاکہ پورے رن میں پیٹرن مربوط رہے اور بنیادی کپڑے کی ڈریپ اور حس بھی محفوظ رہے۔",
      },
      {
        name: "سیکوئن کڑھائی",
        description:
          "سیکوئن پروگرام چمک کو ضبط کے ساتھ ملاتے ہیں۔ ہم دھاگے اور سیکوئن کی ایسی ترکیبیں بناتے ہیں جو بڑے پیمانے پر بھی پڑھنے میں واضح رہیں، جہاں چمک، سلائی کی کثافت، اور جگہ بندی ایک دوسرے کے ساتھ متوازن ہوں۔",
      },
      {
        name: "اپلیکے کڑھائی",
        description:
          "اپلیکے سلائی کے میدان میں ایک اور مادہ شامل کرتا ہے۔ ہم تہہ دار کپڑے کو کاٹ کر، رکھ کر، اور کڑھائی شدہ بارڈر کے ساتھ مکمل کرتے ہیں، تاکہ شکل، ساخت، اور تضاد ڈیزائن کا حصہ بنیں مگر پیداواری نظم باقی رہے۔",
      },
      {
        name: "پف (3D) کڑھائی",
        description:
          "پف کڑھائی منتخب مارکس کو جسمانی ابھار دیتی ہے۔ ہم کیپس، نِٹس، اور نمایاں پیسز کے لیے فوم بیکڈ سلائی استعمال کرتے ہیں جہاں اونچائی قدر بڑھاتی ہے، مگر کنارے صاف اور پوری پیداوار میں شکل مستحکم رہتی ہے۔",
      },
    ],
  },
  machines: {
    eyebrow: "پلانٹ",
    title: "بیس باروڈان مشینیں۔ تکمیل کا ایک معیار۔",
    paragraphs: [
      "KAATTEX کے فلور کی ہر مشین باروڈان کی بنائی ہوئی ہے۔ جاپانی صنعت کار 1959 سے صنعتی کڑھائی میں معیار قائم کر رہا ہے — اسی نے دنیا کی پہلی ملٹی ہیڈ کمپیوٹرائزڈ کڑھائی مشین بنائی — اور آج بھی تجارت میں اس کا نام اسٹچ کوالٹی کی علامت سمجھا جاتا ہے۔ ہم باروڈان اسی وجہ سے چلاتے ہیں جس وجہ سے ہمارے کلائنٹس واپس آتے ہیں: یہ قابل قبول کڑھائی اور بالکل درست کڑھائی کا فرق ہے۔",
      "ہمارا فلور بیس باروڈان ملٹی ہیڈ مشینیں چلاتا ہے — چار سو سے زیادہ کڑھائی ہیڈز، اور ہر ایک نو رنگوں والا ہیڈ۔ یعنی کئی سو ہیڈز بیک وقت ایک ہی ڈیزائن کو ایک ہی برداشت کے ساتھ کڑھتے ہیں۔ یہی ہمیں دسیوں ہزار پیسز کا آرڈر لے کر ہر پیس کو منظور شدہ سیمپل کے مطابق واپس کرنے دیتا ہے۔",
      "پلانٹ تین شفٹوں میں دن رات چلتا ہے، جہاں سروو موشن، خودکار تھریڈ ٹرمنگ، اور مرکزی پیداواری نگرانی کام کو پہلے پیس سے آخری پیس تک تیز اور مستقل رکھتی ہے۔ رفتار 1,200 ٹانکے فی منٹ تک پہنچتی ہے — مگر رفتار صرف تب معنی رکھتی ہے جب تکمیل برقرار رہے۔ ہر شفٹ میں تکمیل برقرار رہتی ہے۔",
    ],
  },
  shipping: {
    eyebrow: "جہاں تک ہمارا کام پہنچتا ہے",
    title: "سفر کرنے والے پروگرام۔",
    regions: ["پاکستان (مقامی)", "برطانیہ", "یورپی یونین", "امریکا"],
  },
} as const

export function getAbout(locale: Locale) {
  return locale === "ur" ? aboutUr : about
}
