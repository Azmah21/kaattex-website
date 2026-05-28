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
  const home = getHome(locale)

  return (
    <section aria-labelledby="home-clients-title" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <Eyebrow>{home.clients.eyebrow}</Eyebrow>
          <h2 id="home-clients-title" className="sr-only">
            {home.clients.title}
          </h2>
          <p className="mt-6 max-w-4xl text-body-lg text-graphite">{home.clients.caption}</p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <ClientLogo key={client.name} client={client} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

function ClientLogo({ client }: { client: ClientItem }) {
  return (
    <figure className="flex min-h-32 flex-col items-center justify-center text-center">
      <div className="flex h-20 items-center justify-center">
        {client.exists ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={client.logo}
            alt={`${client.name} client logo`}
            width={240}
            height={96}
            loading="lazy"
            className="max-h-14 w-auto max-w-full object-contain md:max-h-16"
          />
        ) : (
          <span className="font-display text-display-lg">{client.name}</span>
        )}
      </div>
      <figcaption className="mt-4 text-body-sm text-ash">{client.name}</figcaption>
    </figure>
  )
}
