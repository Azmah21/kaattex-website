import { Container } from "@/components/layout/container"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { getHome } from "@/lib/content/home"
import type { Locale } from "@/lib/i18n"

type ClientItem = {
  name: string
  logo: string
  exists: boolean
}

export function ClientMarquee({ clients, locale }: { clients: ClientItem[]; locale: Locale }) {
  const items = [...clients, ...clients]
  const home = getHome(locale)

  return (
    <section aria-labelledby="home-clients-title" className="py-24 md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>{home.clients.eyebrow}</Eyebrow>
          <h2 id="home-clients-title" className="mt-6 max-w-4xl text-display-xl">
            {home.clients.title}
          </h2>
        </Reveal>
      </Container>

      <Reveal dir="ltr" className="mt-16 overflow-hidden">
        <div
          dir="ltr"
          className="motion-marquee flex min-w-max animate-marquee items-center hover:[animation-play-state:paused]"
        >
          {items.map((client, index) => (
            <figure
              key={`${client.name}-${index}`}
              className="flex h-32 w-72 shrink-0 flex-col items-center justify-center px-8 text-center"
            >
              <div className="flex h-20 items-center justify-center">
                {client.exists ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={client.logo}
                    alt={client.name}
                    width={220}
                    height={88}
                    className="max-h-16 w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="font-display text-display-lg">{client.name}</span>
                )}
              </div>
              <figcaption className="mt-3 text-body-sm text-ash">{client.name}</figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
