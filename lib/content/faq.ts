export const faq = {
  intro: {
    eyebrow: "FAQ",
    title: "Questions.",
  },
  items: [
    {
      question: "What is your minimum order quantity?",
      answer:
        "Each project is unique. Please contact us to discuss your specific volume and we will work with you to find an arrangement that meets your needs.",
    },
    {
      question: "What is your typical turnaround time?",
      answer:
        "Our in-house capacity of 20 Barudan machines allows us to offer significantly faster turnaround than typical for the region. Specific timelines depend on order size and complexity — please contact us with your requirements.",
    },
    {
      question: "What materials and fabrics do you work with?",
      answer:
        "Knit and woven cotton, polyester blends, performance fabrics, denim, fleece, and home textiles including cotton bedsheets, towels, and decorative linens. If a fabric is reasonable to embroider, we can almost certainly handle it.",
    },
    {
      question: "Do you provide design or digitization services?",
      answer:
        "Yes. Our team can digitize artwork supplied as vector files, raster artwork, or even printed samples, and will produce a sample stitch-out for approval before production.",
    },
    {
      question: "Can you match a specific thread color or brand?",
      answer:
        "Yes. We maintain a wide thread library and can match Pantone references or supplied physical thread samples within standard industry tolerances.",
    },
    {
      question: "Do you export internationally?",
      answer:
        "We supply embroidery to many Pakistani apparel and textile manufacturers whose finished products are exported globally, with our embroidery reaching the UK, the EU, and the US. We can discuss direct export programs on request.",
    },
    {
      question: "How do I request a quote?",
      answerPrefix: "Use the inquiry form on our ",
      answerLink: { label: "Contact page", href: "/contact" },
      answerSuffix:
        " or reach us directly by phone or email. Include garment type, estimated volume, embroidery type, and any reference artwork.",
    },
    {
      question: "Do you maintain quality certifications?",
      answer:
        "Our quality management practices follow established industry standards. Specific certification documentation is available on request for serious commercial inquiries.",
    },
  ],
} as const
