import { Container } from "@/components/layout/container"
import { Reveal } from "@/components/primitives/reveal"
import { getHome } from "@/lib/content/home"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function StatBand({ locale }: { locale: Locale }) {
  const home = getHome(locale)
  const ui = getUi(locale)

  return (
    <section aria-label={ui.accessibility.companyStatistics} className="bg-ivory py-12 md:py-20">
      <Container>
        <Reveal>
          <dl
            className={cn(
              "grid divide-y divide-rule",
              locale === "ur" ? "md:grid-cols-1" : "md:grid-cols-3 md:divide-x md:divide-y-0",
            )}
          >
            {home.stats.map((stat) => (
              <div key={stat.label} className="py-8 first:pt-0 last:pb-0 md:px-10 md:py-0 md:first:pl-0 md:last:pr-0">
                <dt className="font-display text-display-2xl font-light">{stat.value}</dt>
                <dd className="mt-3 text-body-sm text-ash">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  )
}
