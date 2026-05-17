import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/primitives/reveal"
import { clients } from "@/lib/content/clients"
import { hasPublicAsset } from "@/lib/assets"
import { seo } from "@/lib/content/seo"
import { ui } from "@/lib/content/ui"
import { createMetadata } from "@/lib/seo"

export function generateMetadata() {
  return createMetadata({
    title: seo.clients.title,
    description: seo.clients.description,
    path: "/clients",
  })
}

export default function ClientsPage() {
  return (
    <main>
      <section aria-labelledby="clients-title" className="py-24 md:py-32">
        <Container>
          <Reveal>
            <h1 id="clients-title" className="text-display-2xl">
              {clients.intro.title}
            </h1>
            <p className="mt-8 max-w-2xl text-body-lg text-graphite">{clients.intro.subtitle}</p>
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
