import fs from "node:fs"
import path from "node:path"
import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { Divider } from "@/components/primitives/divider"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { OptimizedImage } from "@/components/primitives/optimized-image"
import { Reveal } from "@/components/primitives/reveal"
import { Button } from "@/components/ui/button"
import { capabilities } from "@/lib/content/capabilities"
import { hasPublicAsset } from "@/lib/assets"
import { seo } from "@/lib/content/seo"
import { ui } from "@/lib/content/ui"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  return createMetadata({
    title: seo.capabilities.title,
    description: seo.capabilities.description,
    path: "/capabilities",
  })
}

export default function CapabilitiesPage() {
  const brochureExists = fs.existsSync(path.join(process.cwd(), "public", "brochure.pdf"))

  return (
    <main>
      <section aria-labelledby="capabilities-title" className="py-24 md:py-32">
        <Container>
          <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>{capabilities.intro.eyebrow}</Eyebrow>
              <h1 id="capabilities-title" className="mt-6 text-display-2xl">
                {capabilities.intro.title}
              </h1>
            </div>
            {brochureExists ? (
              <Button asChild variant="ghost">
                <a href="/brochure.pdf">{capabilities.brochureLabel}</a>
              </Button>
            ) : null}
          </Reveal>
        </Container>
      </section>

      <section aria-label={ui.accessibility.capabilityDetails} className="pb-24 md:pb-32">
        <Container className="space-y-24 md:space-y-32">
          {capabilities.items.map((item, index) => {
            const reverse = index % 2 === 1
            const imageExists = hasPublicAsset(item.image)

            return (
              <Reveal
                key={item.name}
                className={`grid gap-10 md:grid-cols-2 md:items-center md:gap-16 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {imageExists ? (
                    <OptimizedImage
                      src={item.image}
                      alt={item.alt}
                      width={1600}
                      height={2000}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="image-fallback absolute inset-0" aria-hidden="true" />
                  )}
                </div>

                <div>
                  <h2 className="text-display-xl">{item.name}</h2>
                  <p className="mt-8 text-body-lg text-graphite">{item.description}</p>
                  <ul className="mt-10 border-t border-rule">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="border-b border-rule py-4 text-body-sm text-graphite">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </Container>
      </section>

      <section aria-labelledby="capabilities-inquiry-title" className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="max-w-4xl">
            <h2 id="capabilities-inquiry-title" className="text-display-xl">
              {capabilities.inquiry.title}
            </h2>
            <p className="mt-8 max-w-2xl text-body-lg text-graphite">{capabilities.inquiry.description}</p>
            <div className="mt-10">
              <ArrowLink href={capabilities.inquiry.link.href}>{capabilities.inquiry.link.label}</ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
