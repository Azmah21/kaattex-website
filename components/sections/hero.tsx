import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { OptimizedImage } from "@/components/primitives/optimized-image"
import { Reveal } from "@/components/primitives/reveal"
import { Button } from "@/components/ui/button"
import { getHome } from "@/lib/content/home"
import type { Locale } from "@/lib/i18n"

type HeroProps = {
  hasHeroImage: boolean
  locale: Locale
}

export function Hero({ hasHeroImage, locale }: HeroProps) {
  const home = getHome(locale)

  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative flex min-h-[64svh] items-end overflow-hidden sm:min-h-[60vh] lg:min-h-[64vh]"
    >
      <div data-header-sentinel className="absolute left-0 top-0 h-px w-px" />
      {hasHeroImage ? (
        <OptimizedImage
          src="/images/hero/hero-primary.jpg"
          alt=""
          width={2880}
          height={1620}
          sizes="100vw"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="image-fallback absolute inset-0" aria-hidden="true" />
      )}
      <div className="absolute inset-0 bg-bone/30" aria-hidden="true" />

      <Container className="relative z-10 py-10 sm:py-12 md:py-14">
        <Reveal className="max-w-5xl">
          <Eyebrow>{home.hero.eyebrow}</Eyebrow>
          <h1
            id="home-hero-title"
            className="mt-6 max-w-[18ch] text-[clamp(2.25rem,9vw,3rem)] leading-[1.04] tracking-[-0.02em] text-ink sm:text-[clamp(3rem,5vw+0.5rem,5.5rem)]"
          >
            {home.hero.title}
          </h1>
          <p className="mt-5 max-w-[52ch] text-body-sm text-graphite sm:mt-8 sm:text-body-lg">
            {home.hero.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 sm:mt-8">
            <ArrowLink href={home.hero.primaryLink.href}>{home.hero.primaryLink.label}</ArrowLink>
            <span className="hidden h-6 w-px bg-rule sm:block" aria-hidden="true" />
            <Button asChild variant="ghost">
              <a href={home.hero.secondaryLink.href}>{home.hero.secondaryLink.label}</a>
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
