import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { OptimizedImage } from "@/components/primitives/optimized-image"
import { Reveal } from "@/components/primitives/reveal"
import { home } from "@/lib/content/home"
import { ui } from "@/lib/content/ui"

type WorkGridProps = {
  images: Array<{
    src: string
    alt: string
    exists: boolean
  }>
}

export function WorkGrid({ images }: WorkGridProps) {
  return (
    <section aria-label={ui.accessibility.selectedWork} className="py-24 md:py-32">
      <Container>
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <WorkImage image={images[0]} className="aspect-[4/5]" />
          </Reveal>
          <Reveal className="md:col-span-4 md:translate-y-16">
            <WorkImage image={images[1]} className="aspect-[4/5]" />
          </Reveal>
          <Reveal className="md:col-span-3">
            <WorkImage image={images[2]} className="aspect-[4/5]" />
          </Reveal>
        </div>

        <Reveal className="mt-24 md:mt-32">
          <ArrowLink href={home.work.link.href}>{home.work.link.label}</ArrowLink>
        </Reveal>
      </Container>
    </section>
  )
}

function WorkImage({
  image,
  className,
}: {
  image: WorkGridProps["images"][number]
  className?: string
}) {
  return (
    <a href="/work" aria-label={ui.actions.seeWorkArchive} className="block">
      <div className={`relative overflow-hidden ${className ?? ""}`}>
        {image.exists ? (
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
    </a>
  )
}
