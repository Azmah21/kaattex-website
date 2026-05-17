import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { OptimizedImage } from "@/components/primitives/optimized-image"
import { Reveal } from "@/components/primitives/reveal"
import { work } from "@/lib/content/work"
import { hasPublicAsset } from "@/lib/assets"
import { seo } from "@/lib/content/seo"
import { ui } from "@/lib/content/ui"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  return createMetadata({
    title: seo.work.title,
    description: seo.work.description,
    path: "/work",
  })
}

export default function WorkPage() {
  return (
    <main>
      <section aria-labelledby="work-title" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>{work.intro.eyebrow}</Eyebrow>
            <h1 id="work-title" className="mt-6 text-display-2xl">
              {work.intro.title}
            </h1>
            <p className="mt-8 text-body-lg text-graphite">{work.intro.subtitle}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-label={ui.accessibility.workArchive} className="pb-24 md:pb-32">
        <Container>
          <div className="columns-1 gap-6 space-y-6 md:columns-3">
            {work.images.map((image) => {
              const imageExists = hasPublicAsset(image.src)

              return (
                <Reveal key={image.src} className="break-inside-avoid">
                  <figure>
                    <div className="relative aspect-[4/5] overflow-hidden">
                      {imageExists ? (
                        <OptimizedImage
                          src={image.src}
                          alt={image.alt}
                          width={1600}
                          height={2000}
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      ) : (
                        <div className="image-fallback absolute inset-0" aria-hidden="true" />
                      )}
                    </div>
                    <figcaption className="sr-only">{image.category}</figcaption>
                  </figure>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="mt-16">
            <p className="text-body-lg text-graphite">
              {work.inquiry.prefix}{" "}
              <ArrowLink href={work.inquiry.href} className="ml-2 align-baseline">
                {work.inquiry.label}
              </ArrowLink>
            </p>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
