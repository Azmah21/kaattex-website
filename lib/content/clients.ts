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
  { name: "Jtex", logo: "/images/clients/jtex.png" },
  { name: "Kay & Emms Global", logo: "/images/clients/kay-emms-global.png" },
  { name: "Klash", logo: "/images/clients/klash.png" },
  { name: "Arshad Group", logo: "/images/clients/arshad-group.png" },
  { name: "MTM", logo: "/images/clients/mtm.png" },
  { name: "Nishat", logo: "/images/clients/nishat.png" },
  { name: "Sadaqat Corporation", logo: "/images/clients/sadaqat-corporation.png" },
  { name: "Sadaqat", logo: "/images/clients/sadaqat.png" },
  { name: "Interloop", logo: "/images/clients/interloop.png" },
] as const

export const clients = {
  intro: {
    title: "Clients.",
    subtitle: "A selection of the apparel and textile houses we have worked with.",
  },
  items,
  note: "This is a selection, not a complete list.",
} as const

export const clientsUr = {
  intro: {
    title: "کلائنٹس۔",
    subtitle: "ملبوسات اور ٹیکسٹائل کے اُن منتخب اداروں میں سے چند جن کے ساتھ ہم نے کام کیا ہے۔",
  },
  items,
  note: "یہ ایک انتخاب ہے، مکمل فہرست نہیں۔",
} as const

export function getClients(locale: Locale) {
  return locale === "ur" ? clientsUr : clients
}
