import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { Divider } from "@/components/primitives/divider"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { getHome } from "@/lib/content/home"
import type { Locale } from "@/lib/i18n"

export function CapabilityList({ locale }: { locale: Locale }) {
  const home = getHome(locale)

  return (
    <section aria-labelledby="home-capabilities-title" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>{home.capabilities.eyebrow}</Eyebrow>
          <h2 id="home-capabilities-title" className="mt-6 max-w-4xl text-display-xl">
            {home.capabilities.title}
          </h2>
        </Reveal>

        <div className="mt-16">
          {home.capabilities.items.map((item) => (
            <Reveal key={item.name}>
              <div className="grid gap-6 py-8 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)_minmax(10rem,0.35fr)] md:items-baseline">
                <h3 className="text-display-lg">{item.name}</h3>
                <p className="text-body-lg text-graphite">{item.summary}</p>
                <p className="hidden text-body-sm text-ash md:block">{item.proof}</p>
              </div>
              <Divider />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <ArrowLink href={home.capabilities.link.href}>{home.capabilities.link.label}</ArrowLink>
        </Reveal>
      </Container>
    </section>
  )
}
