import type { Locale } from "@/lib/i18n"

const items = [
  { name: "Aziz Textile", logo: "/images/clients/aziz-textile.png" },
  { name: "Dynasty", logo: "/images/clients/dynasty.svg" },
  { name: "Shercotex", logo: "/images/clients/shercotex.png" },
  { name: "Style Textile", logo: "/images/clients/style-textile.png" },
  { name: "Alpha Knitting", logo: "/images/clients/alpha-knitting.png" },
  { name: "Beacon Impex", logo: "/images/clients/beacon-impex.png" },
  { name: "Grace Fabrics", logo: "/images/clients/grace-fabrics.png" },
  { name: "Hafeez Knitwear", logo: "/images/clients/hafeez-knitwear.png" },
  { name: "JTex", logo: "/images/clients/jtex.png" },
  { name: "Kay & Emms Global", logo: "/images/clients/kay-emms-global.png" },
  { name: "Klash", logo: "/images/clients/klash.png" },
  { name: "Arshad Group", logo: "/images/clients/arshad-group.png" },
  { name: "Masood Textile Mills", logo: "/images/clients/mtm.png" },
  { name: "Nishat", logo: "/images/clients/nishat.png" },
  { name: "Sadaqat", logo: "/images/clients/sadaqat.png" },
  { name: "Interloop", logo: "/images/clients/interloop.png" },
] as const

export const clients = {
  intro: {
    title: "Clients.",
    subtitle: "A selection of the apparel and textile houses we have worked with.",
    highlight:
      "Selected relationships include JTex, Sadaqat, Masood Textile Mills, Beacon Impex, Interloop, Nishat, and other manufacturers shown below.",
  },
  items,
  note: "A selection, not a complete list. Further references are available on request.",
} as const

export const clientsUr = {
  intro: {
    title: "کلائنٹس۔",
    subtitle: "ملبوسات اور ٹیکسٹائل کے اُن منتخب اداروں میں سے چند جن کے ساتھ ہم نے کام کیا ہے۔",
    highlight:
      "منتخب تعلقات میں JTex، Sadaqat، Masood Textile Mills، Beacon Impex، Interloop، Nishat، اور نیچے دکھائے گئے دیگر مینوفیکچررز شامل ہیں۔",
  },
  items,
  note: "یہ ایک انتخاب ہے، مکمل فہرست نہیں۔ مزید حوالہ جات درخواست پر دستیاب ہیں۔",
} as const

export function getClients(locale: Locale) {
  return locale === "ur" ? clientsUr : clients
}
