import type { Locale } from "@/lib/i18n"

export const contactPage = {
  intro: {
    eyebrow: "CONTACT",
    title: "Let's talk about your program.",
    subtitle: "We respond to inquiries within one working day.",
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
    title: "اپنے پروگرام پر بات کرتے ہیں۔",
    subtitle: "ہم انکوائریز کا جواب ایک ورکنگ ڈے کے اندر دیتے ہیں۔",
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
