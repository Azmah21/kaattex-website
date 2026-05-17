import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/primitives/reveal"
import { home } from "@/lib/content/home"
import { ui } from "@/lib/content/ui"

export function StatBand() {
  return (
    <section aria-label={ui.accessibility.companyStatistics} className="bg-ivory py-16 md:py-20">
      <Container>
        <Reveal>
          <dl className="grid divide-y divide-rule md:grid-cols-3 md:divide-x md:divide-y-0">
            {home.stats.map((stat) => (
              <div key={stat.label} className="py-8 first:pt-0 last:pb-0 md:px-10 md:py-0 md:first:pl-0 md:last:pr-0">
                <dt className="font-display text-display-xl font-light">{stat.value}</dt>
                <dd className="mt-3 text-body-sm text-ash">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
