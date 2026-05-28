export const serviceAreas = {
  faisalabad: {
    slug: "industrial-embroidery-faisalabad",
    city: "Faisalabad",
    region: "Punjab",
    eyebrow: "INDUSTRIAL EMBROIDERY FAISALABAD",
    title: "Industrial and textile embroidery in Faisalabad.",
    description:
      "KAATTEX is a Faisalabad-based industrial and textile embroidery manufacturer serving B2B apparel, knitwear, uniform, and home-textile programs from Pul Abdullah Bridge on Main Samundri Road.",
    intro:
      "For textile teams searching for embroidery in Faisalabad, KAATTEX offers a production floor built for commercial scale: twenty Barudan multi-head machines, more than four hundred nine-colour heads, and a workflow shaped around repeatability from sample approval to bulk production.",
    proof: [
      "Based in Faisalabad, Pakistan's textile manufacturing hub",
      "Twenty Barudan multi-head embroidery machines",
      "Textile embroidery for apparel, knitwear, uniform, and home-textile programs",
      "Logo, monogram, decorative pattern, sequin, applique, and puff embroidery",
      "Sampling and digitization before bulk production",
    ],
    fitTitle: "Built for Faisalabad textile programs.",
    fit:
      "The factory is set up for exporters, apparel manufacturers, knitwear teams, home-textile producers, and commercial brands that need embroidery output to stay consistent across large runs.",
    cta: "Discuss a Faisalabad embroidery program",
  },
  lahore: {
    slug: "industrial-embroidery-lahore",
    city: "Lahore",
    region: "Punjab",
    eyebrow: "INDUSTRIAL EMBROIDERY LAHORE",
    title: "Industrial and textile embroidery for Lahore manufacturers.",
    description:
      "KAATTEX serves Lahore-based textile and apparel manufacturers from its Faisalabad embroidery production floor, supporting B2B sampling, digitization, and bulk textile embroidery programs.",
    intro:
      "Lahore textile and apparel teams often need embroidery partners with more production headroom than a small workshop can provide. KAATTEX is based in Faisalabad and serves Lahore programs with industrial Barudan capacity, commercial sampling, and repeatable bulk output.",
    proof: [
      "Serving Lahore textile, apparel, fashion, and uniform production teams",
      "Faisalabad-based production floor with twenty Barudan machines",
      "Textile embroidery support for Punjab manufacturers without a Lahore storefront claim",
      "Bulk embroidery for brand marks, panels, repeats, sequins, applique, and puff work",
      "Commercial inquiry support by phone, email, WhatsApp, and the contact form",
    ],
    fitTitle: "A Faisalabad factory serving Lahore demand.",
    fit:
      "KAATTEX does not claim a Lahore storefront. The value for Lahore clients is production depth: a dedicated industrial embroidery floor in Punjab that can handle B2B programs beyond small-batch local shop capacity.",
    cta: "Discuss a Lahore embroidery program",
  },
} as const

export type ServiceArea = (typeof serviceAreas)[keyof typeof serviceAreas]
