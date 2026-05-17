export const site = {
  name: "Kaattex",
  wordmark: "KAATTEX",
  tagline: "Industrial embroidery, made in Faisalabad since 1999.",
  description:
    "Kaattex is a Faisalabad-based embroidery manufacturer producing precision embroidery, sequin work, appliqué, and puff embroidery for apparel and home-textile brands across Pakistan and abroad.",
  nav: [
    { label: "Work", href: "/work" },
    { label: "Capabilities", href: "/capabilities" },
    { label: "About", href: "/about" },
    { label: "Clients", href: "/clients" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    address:
      "Pul Abdullah Bridge, Main Samundri Road, near Hascol Petrol Pump, P-246 Muhalla Farooqabad, Faisalabad, Pakistan",
    phone: "+92 333 6622222",
    email: "info@kaattex.com",
    whatsapp: "+92 333 6622222",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=31.3699345%2C73.0702414&z=19&output=embed",
  },
  footer: {
    blurb:
      "A 27-year embroidery house operating 20 Barudan machines for Pakistan’s leading apparel and textile brands.",
  },
} as const

export type SiteNavItem = (typeof site.nav)[number]
