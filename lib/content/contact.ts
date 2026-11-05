import type { Locale } from "@/lib/i18n"

export const contactPage = {
  intro: {
    eyebrow: "CONTACT",
    title: "Bulk embroidery for men's apparel.",
    subtitle:
      "KAATTEX specializes in large-scale embroidery for men's garments and apparel manufactured for export. We work with garment manufacturers and exporters requiring bulk production.",
  },
  productionNotice: {
    title: "Please note before contacting us",
    exclusions: [
      "We do not undertake embroidery for women's garments or womenswear.",
      "We do not accept individual-piece orders or small-batch work for local brands.",
    ],
    contactGuidance: "Please contact us for bulk men's apparel production inquiries only.",
  },
  sections: {
    inquiryTitle: "Inquiry",
    directTitle: "Direct contact",
  },
  direct: {
    visit: "Visit",
    call: "Call",
    write: "Write",
    whatsapp: "WhatsApp",
    whatsappLink: "Start chat",
    whatsappMessage: "Hello Kaattex, I would like to discuss an embroidery program.",
    mapFallback: "Map loading. If this persists, see contact details above.",
    mapTitle: "Kaattex location map",
  },
  form: {
    guidance:
      "For bulk men's apparel inquiries, please include your garment type, estimated production quantity, embroidery requirements, and target delivery date.",
    companyName: "Company name",
    customerName: "Customer name",
    email: "Email",
    phoneNumber: "Phone number",
    projectDetails: "Project details",
    attachment: "Reference file",
    attachmentHint: "Upload one JPG, JPEG, PNG, WEBP, or ZIP file. Maximum 10MB.",
    removeFile: "Remove file",
    sendInquiry: "Send inquiry",
    success: "Thank you. We've received your inquiry and will respond within one working day.",
    failure: "We couldn't send your inquiry. Please try again.",
    characters: (count: number) => `${count} / 1000 characters`,
    errors: {
      companyName: "Company name must be between 2 and 120 characters.",
      customerName: "Customer name must be between 2 and 80 characters.",
      email: "Please enter a valid email address.",
      phoneNumber: "Please enter a valid phone number.",
      projectDetails: "Project details must be between 30 and 1000 characters.",
      tooManyFiles: "Please upload only one file.",
      fileTooLarge: "The file must be 10MB or smaller.",
      unsupportedFileType: "Please upload a JPG, JPEG, PNG, WEBP, or ZIP file.",
    },
  },
} as const

export const contactPageUr = {
  intro: {
    eyebrow: "رابطہ",
    title: "مردانہ ملبوسات کی بلک کڑھائی۔",
    subtitle:
      "ہم صرف ایکسپورٹ کے لیے تیار ہونے والے مردانہ ملبوسات پر بڑے پیمانے پر کڑھائی کرتے ہیں۔ ہماری فیکٹری گارمنٹ مینوفیکچررز اور ایکسپورٹرز کے بلک آرڈرز کے لیے ہے۔",
  },
  productionNotice: {
    title: "واضح اطلاع: لیڈیز کڑھائی کا کام بالکل نہیں کیا جاتا۔",
    exclusions: [
      "خواتین کے کپڑوں، لیڈیز سوٹس، قمیضوں، دوپٹوں یا عروسی ملبوسات پر کسی بھی قسم کی کڑھائی نہیں کی جاتی۔ خواتین کے ملبوسات کا آرڈر، چاہے چھوٹا ہو یا بڑا، قبول نہیں کیا جاتا۔",
      "ایک دو پیس، ذاتی استعمال کے کپڑے یا مقامی برانڈز کے کم تعداد والے آرڈرز بھی قبول نہیں کیے جاتے۔",
    ],
    contactGuidance:
      "براہِ کرم لیڈیز کڑھائی یا چھوٹے آرڈرز کے لیے فون، واٹس ایپ یا یہ فارم استعمال نہ کریں۔ صرف ایکسپورٹ کے مردانہ ملبوسات کی بلک کڑھائی کے لیے رابطہ کریں۔",
  },
  sections: {
    inquiryTitle: "انکوائری",
    directTitle: "براہِ راست رابطہ",
  },
  direct: {
    visit: "تشریف لائیں",
    call: "کال",
    write: "ای میل",
    whatsapp: "واٹس ایپ",
    whatsappLink: "چیٹ شروع کریں",
    whatsappMessage: "السلام علیکم Kaattex، میں ایک کڑھائی پروگرام پر بات کرنا چاہتا ہوں۔",
    mapFallback: "نقشہ لوڈ ہو رہا ہے۔ اگر یہ برقرار رہے تو اوپر دی گئی رابطہ تفصیل دیکھیں۔",
    mapTitle: "Kaattex کا نقشہ",
  },
  form: {
    guidance:
      "یہ فارم صرف ایکسپورٹ کے مردانہ ملبوسات کی بلک کڑھائی کے لیے ہے۔ لیڈیز ملبوسات یا چھوٹے آرڈرز کی انکوائری نہ بھیجیں۔ مردانہ لباس کی قسم، اندازاً کل تعداد، کڑھائی کی تفصیل اور مطلوبہ ڈیلیوری تاریخ درج کریں۔",
    companyName: "کمپنی کا نام",
    customerName: "آپ کا نام",
    email: "ای میل",
    phoneNumber: "فون نمبر",
    projectDetails: "پروجیکٹ کی تفصیل",
    attachment: "ریفرنس فائل",
    attachmentHint: "ایک JPG، JPEG، PNG، WEBP، یا ZIP فائل اپ لوڈ کریں۔ زیادہ سے زیادہ 10MB۔",
    removeFile: "فائل ہٹائیں",
    sendInquiry: "انکوائری بھیجیں",
    success: "شکریہ۔ ہمیں آپ کی انکوائری مل گئی ہے اور ہم ایک ورکنگ ڈے کے اندر جواب دیں گے۔",
    failure: "آپ کی انکوائری بھیجی نہیں جا سکی۔ دوبارہ کوشش کریں۔",
    characters: (count: number) => `${count} / 1000 حروف`,
    errors: {
      companyName: "کمپنی کا نام 2 سے 120 حروف کے درمیان ہونا چاہیے۔",
      customerName: "آپ کا نام 2 سے 80 حروف کے درمیان ہونا چاہیے۔",
      email: "درست ای میل درج کریں۔",
      phoneNumber: "درست فون نمبر درج کریں۔",
      projectDetails: "پروجیکٹ کی تفصیل 30 سے 1000 حروف کے درمیان ہونی چاہیے۔",
      tooManyFiles: "براہِ کرم صرف ایک فائل اپ لوڈ کریں۔",
      fileTooLarge: "فائل 10MB یا اس سے کم ہونی چاہیے۔",
      unsupportedFileType: "براہِ کرم JPG، JPEG، PNG، WEBP، یا ZIP فائل اپ لوڈ کریں۔",
    },
  },
} as const

export function getContactPage(locale: Locale) {
  return locale === "ur" ? contactPageUr : contactPage
}
