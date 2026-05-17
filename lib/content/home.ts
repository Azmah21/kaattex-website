export const home = {
  hero: {
    eyebrow: "EST. 1999 — FAISALABAD, PAKISTAN",
    title: "Embroidery, at the scale of industry. At the standard of craft.",
    description:
      "Twenty Barudan machines, one quiet obsession with thread, tension, and tone. Trusted by Pakistan's leading apparel and textile houses for twenty-seven years.",
    primaryLink: { label: "See our work", href: "/work" },
    secondaryLink: { label: "Make an inquiry", href: "/contact" },
  },
  stats: [
    { value: "20", label: "Barudan machines, imported from Japan" },
    { value: "27", label: "years of practice, since 1999" },
    { value: "200K+", label: "units in monthly throughput capacity" },
  ],
  practice: {
    eyebrow: "OUR PRACTICE",
    title: "A craft house, operating at industrial capacity.",
    paragraphs: [
      "Kaattex began in 1999 in Faisalabad with two machines and a single principle: that embroidery is a craft before it is a service. Twenty-seven years on, the principle has not moved — only the scale has.",
      "Today, twenty Barudan machines imported directly from Japan handle work for many of Pakistan's most established apparel and textile manufacturers, alongside export programs reaching the UK, EU, and US. Same hands. Same eye for tension and finish. More of it.",
    ],
    link: { label: "More about Kaattex", href: "/about" },
  },
  capabilities: {
    eyebrow: "CAPABILITIES",
    title: "Five disciplines, refined over twenty-seven years.",
    items: [
      {
        name: "Custom logo & monogram embroidery",
        summary: "Brand-grade reproduction across knit, woven, and technical fabrics.",
      },
      {
        name: "Decorative pattern embroidery",
        summary: "Multi-color and tonal patterns for fashion and home textile programs.",
      },
      {
        name: "Sequin embroidery",
        summary: "Mixed sequin and thread compositions for fashion-forward orders.",
      },
      {
        name: "Appliqué embroidery",
        summary: "Cut-and-stitched fabric layering with embroidered finishing.",
      },
      {
        name: "Puff (3D) embroidery",
        summary: "Raised foam embroidery for caps, knits, and statement pieces.",
      },
    ],
    link: { label: "See all capabilities", href: "/capabilities" },
  },
  work: {
    link: { label: "See the full archive", href: "/work" },
  },
  clients: {
    eyebrow: "CLIENTS",
    title: "Trusted by Pakistan's textile houses.",
  },
  inquiry: {
    title: "Let's discuss your next program.",
    description:
      "Share the garment, fabric, volume, and embroidery direction. We will help shape the right production path from there.",
    link: { label: "Make an inquiry", href: "/contact" },
  },
} as const
