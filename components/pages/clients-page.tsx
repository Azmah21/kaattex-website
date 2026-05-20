import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/primitives/reveal"
import { getClients } from "@/lib/content/clients"
import { getUi } from "@/lib/content/ui"
import { hasPublicAsset } from "@/lib/assets"
import type { Locale } from "@/lib/i18n"

export function ClientsPageContent({ locale }: { locale: Locale }) {
  const clients = getClients(locale)
  const ui = getUi(locale)

  return (
    <main>
      <section aria-labelledby="clients-title" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <h1 id="clients-title" className="text-display-2xl">
              {clients.intro.title}
            </h1>
            <p className="mt-8 max-w-2xl text-body-lg text-graphite">{clients.intro.subtitle}</p>
            <p className="mt-6 max-w-3xl text-body text-ash">{clients.intro.highlight}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-label={ui.accessibility.clientRoster} className="pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
              {clients.items.map((client) => {
                const logoExists = hasPublicAsset(client.logo)

                return (
                  <figure key={client.name} className="flex flex-col items-center text-center">
                    <div className="flex h-24 items-center justify-center">
                      {logoExists ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={client.logo}
                          alt={client.name}
                          width={240}
                          height={96}
                          className="max-h-20 w-auto max-w-full object-contain"
                        />
                      ) : (
                        <span className="font-display text-display-lg">{client.name}</span>
                      )}
                    </div>
                    <figcaption className="mt-4 text-body-sm text-ash">{client.name}</figcaption>
                  </figure>
                )
              })}
            </div>
          </Reveal>

          <Reveal className="mt-20 max-w-2xl">
            <p className="text-body-lg text-graphite">{clients.note}</p>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
