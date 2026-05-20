import type { Locale } from "@/lib/i18n"

export const ui = {
  accessibility: {
    primaryNav: "Primary",
    mobilePrimaryNav: "Mobile primary",
    footerNav: "Footer",
    companyStatistics: "Company statistics",
    selectedWork: "Selected work",
    capabilityDetails: "Capability details",
    workArchive: "Work archive",
    clientRoster: "Client roster",
    faqList: "Frequently asked questions",
    facilityImage: "Facility image",
    ourStory: "Our story",
  },
  actions: {
    seeWorkArchive: "See the work archive",
  },
  header: {
    openMenu: "Open menu",
    closeMenu: "Close menu",
    inquire: "Inquire",
    whatsapp: "WhatsApp",
    whatsappMessage: "Hello Kaattex, I would like to discuss an embroidery program.",
  },
  language: {
    toggleLabel: "Choose language",
    english: "EN",
    urdu: "اردو",
  },
  images: {
    facilityFloor: "Kaattex production floor.",
  },
  notFound: {
    eyebrow: "404",
    title: "Page not found.",
    body: "The page you are looking for is not part of the current Kaattex site.",
    link: "Return home",
  },
} as const

export const uiUr = {
  accessibility: {
    primaryNav: "بنیادی نیویگیشن",
    mobilePrimaryNav: "موبائل بنیادی نیویگیشن",
    footerNav: "فُٹر",
    companyStatistics: "کمپنی کے اعداد و شمار",
    selectedWork: "منتخب کام",
    capabilityDetails: "صلاحیتوں کی تفصیل",
    workArchive: "کام کا آرکائیو",
    clientRoster: "کلائنٹس کی فہرست",
    faqList: "اکثر پوچھے جانے والے سوالات",
    facilityImage: "ورکشاپ کی تصویر",
    ourStory: "ہماری کہانی",
  },
  actions: {
    seeWorkArchive: "کام کا آرکائیو دیکھیں",
  },
  header: {
    openMenu: "مینو کھولیں",
    closeMenu: "مینو بند کریں",
    inquire: "رابطہ کریں",
    whatsapp: "واٹس ایپ",
    whatsappMessage: "السلام علیکم Kaattex، میں ایک کڑھائی پروگرام پر بات کرنا چاہتا ہوں۔",
  },
  language: {
    toggleLabel: "زبان منتخب کریں",
    english: "EN",
    urdu: "اردو",
  },
  images: {
    facilityFloor: "Kaattex کا پیداواری فلور۔",
  },
  notFound: {
    eyebrow: "404",
    title: "صفحہ نہیں ملا۔",
    body: "جس صفحے کی آپ تلاش کر رہے ہیں وہ موجودہ Kaattex ویب سائٹ کا حصہ نہیں ہے۔",
    link: "ہوم پر واپس جائیں",
  },
} as const

export function getUi(locale: Locale) {
  return locale === "ur" ? uiUr : ui
}
