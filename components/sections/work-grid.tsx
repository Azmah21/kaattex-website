import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { OptimizedImage } from "@/components/primitives/optimized-image"
import { Reveal } from "@/components/primitives/reveal"
import { getHome } from "@/lib/content/home"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"

type WorkGridProps = {
  images: Array<{
    src: string
    alt: string
    exists: boolean
  }>
  locale: Locale
}

export function WorkGrid({ images, locale }: WorkGridProps) {
  const home = getHome(locale)
  const ui = getUi(locale)

  return (
    <section aria-label={ui.accessibility.selectedWork} className="py-24 md:py-32">
      <Container>
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <Reveal className="md:col-span-5">
            <WorkImage image={images[0]} className="aspect-[4/5]" ui={ui} workHref={home.work.link.href} />
          </Reveal>
          <Reveal className="md:col-span-4 md:translate-y-16">
            <WorkImage image={images[1]} className="aspect-[4/5]" ui={ui} workHref={home.work.link.href} />
          </Reveal>
          <Reveal className="md:col-span-3">
            <WorkImage image={images[2]} className="aspect-[4/5]" ui={ui} workHref={home.work.link.href} />
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
  ui,
  workHref,
}: {
  image: WorkGridProps["images"][number]
  className?: string
  ui: ReturnType<typeof getUi>
  workHref: string
}) {
  return (
    <a href={workHref} aria-label={ui.actions.seeWorkArchive} className="block">
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
