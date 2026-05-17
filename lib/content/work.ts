import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export const work = {
  intro: {
    eyebrow: "WORK",
    title: "Work.",
    subtitle: "A working archive of recent programs.",
  },
  images: [
    { src: "/images/gallery/gallery-01.jpg", alt: "Apparel embroidery detail.", category: "apparel" },
    { src: "/images/gallery/gallery-02.jpg", alt: "Apparel embroidery detail.", category: "apparel" },
    { src: "/images/gallery/gallery-03.jpg", alt: "Apparel embroidery detail.", category: "apparel" },
    { src: "/images/gallery/gallery-04.jpg", alt: "Home textile embroidery detail.", category: "home textile" },
    { src: "/images/gallery/gallery-05.jpg", alt: "Home textile embroidery detail.", category: "home textile" },
    { src: "/images/gallery/gallery-06.jpg", alt: "Home textile embroidery detail.", category: "home textile" },
    { src: "/images/gallery/gallery-07.jpg", alt: "Sportswear embroidery detail.", category: "sportswear" },
    { src: "/images/gallery/gallery-08.jpg", alt: "Sportswear embroidery detail.", category: "sportswear" },
    { src: "/images/gallery/gallery-09.jpg", alt: "Sportswear embroidery detail.", category: "sportswear" },
    { src: "/images/gallery/gallery-10.jpg", alt: "Embroidery detail close-up.", category: "detail" },
    { src: "/images/gallery/gallery-11.jpg", alt: "Embroidery detail close-up.", category: "detail" },
    { src: "/images/gallery/gallery-12.jpg", alt: "Embroidery detail close-up.", category: "detail" },
  ],
  inquiry: {
    prefix: "Discussing a program?",
    label: "Make an inquiry",
    href: "/contact",
  },
} as const

export const workUr = {
  intro: {
    eyebrow: "کام",
    title: "کام۔",
    subtitle: "حالیہ پروگراموں کا جاری آرکائیو۔",
  },
  images: [
    { src: "/images/gallery/gallery-01.jpg", alt: "ملبوساتی کڑھائی کی تفصیل۔", category: "ملبوسات" },
    { src: "/images/gallery/gallery-02.jpg", alt: "ملبوساتی کڑھائی کی تفصیل۔", category: "ملبوسات" },
    { src: "/images/gallery/gallery-03.jpg", alt: "ملبوساتی کڑھائی کی تفصیل۔", category: "ملبوسات" },
    { src: "/images/gallery/gallery-04.jpg", alt: "ہوم ٹیکسٹائل کڑھائی کی تفصیل۔", category: "ہوم ٹیکسٹائل" },
    { src: "/images/gallery/gallery-05.jpg", alt: "ہوم ٹیکسٹائل کڑھائی کی تفصیل۔", category: "ہوم ٹیکسٹائل" },
    { src: "/images/gallery/gallery-06.jpg", alt: "ہوم ٹیکسٹائل کڑھائی کی تفصیل۔", category: "ہوم ٹیکسٹائل" },
    { src: "/images/gallery/gallery-07.jpg", alt: "اسپورٹس ویئر کڑھائی کی تفصیل۔", category: "اسپورٹس ویئر" },
    { src: "/images/gallery/gallery-08.jpg", alt: "اسپورٹس ویئر کڑھائی کی تفصیل۔", category: "اسپورٹس ویئر" },
    { src: "/images/gallery/gallery-09.jpg", alt: "اسپورٹس ویئر کڑھائی کی تفصیل۔", category: "اسپورٹس ویئر" },
    { src: "/images/gallery/gallery-10.jpg", alt: "کڑھائی کا قریب سے منظر۔", category: "تفصیل" },
    { src: "/images/gallery/gallery-11.jpg", alt: "کڑھائی کا قریب سے منظر۔", category: "تفصیل" },
    { src: "/images/gallery/gallery-12.jpg", alt: "کڑھائی کا قریب سے منظر۔", category: "تفصیل" },
  ],
  inquiry: {
    prefix: "کسی پروگرام پر بات کر رہے ہیں؟",
    label: "رابطہ کریں",
    href: withLocalePath("/contact", "ur"),
  },
} as const

export function getWork(locale: Locale) {
  return locale === "ur" ? workUr : work
}
