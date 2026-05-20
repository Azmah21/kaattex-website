import fs from "node:fs"
import path from "node:path"
import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { Eyebrow } from "@/components/primitives/eyebrow"
import { Reveal } from "@/components/primitives/reveal"
import { Button } from "@/components/ui/button"
import { getCapabilities } from "@/lib/content/capabilities"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"

export function CapabilitiesPageContent({ locale }: { locale: Locale }) {
  const capabilities = getCapabilities(locale)
  const ui = getUi(locale)
  const brochureExists = fs.existsSync(path.join(process.cwd(), "public", "brochure.pdf"))

  return (
    <main>
      <section aria-labelledby="capabilities-title" className="py-24 md:py-32">
        <Container>
          <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>{capabilities.intro.eyebrow}</Eyebrow>
              <h1 id="capabilities-title" className="mt-6 text-display-2xl">
                {capabilities.intro.title}
              </h1>
              <p className="mt-8 max-w-3xl text-body-lg text-graphite">{capabilities.intro.description}</p>
            </div>
            {brochureExists ? (
              <Button asChild variant="ghost">
                <a href="/brochure.pdf">{capabilities.brochureLabel}</a>
              </Button>
            ) : null}
          </Reveal>
        </Container>
      </section>

      <section aria-label={ui.accessibility.capabilityDetails} className="pb-24 md:pb-32">
        <Container>
          {capabilities.items.map((item, index) => {
            return (
              <Reveal
                key={item.name}
                className={`border-t border-rule py-16 last:border-b md:grid md:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] md:gap-20 ${
                  index === 0 ? "pt-0" : ""
                }`}
              >
                <div>
                  <p className="font-display text-display-lg text-ash">{String(index + 1).padStart(2, "0")}</p>
                  <h2 className="mt-6 text-display-xl md:mt-10">{item.name}</h2>
                </div>
                <div className="mt-8 md:mt-0">
                  <p className="text-body-lg text-graphite">{item.description}</p>
                  <dl className="mt-10 border-t border-rule">
                    {item.specs.map((spec) => (
                      <div key={spec.label} className="grid gap-2 border-b border-rule py-4 md:grid-cols-[10rem_1fr]">
                        <dt className="text-[11px] font-medium uppercase tracking-[0.16em] text-ash">{spec.label}</dt>
                        <dd className="text-body-sm text-graphite">{spec.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            )
          })}
        </Container>
      </section>

      <section aria-labelledby="capabilities-inquiry-title" className="bg-ivory py-24 md:py-32">
        <Container>
          <Reveal className="max-w-4xl">
            <h2 id="capabilities-inquiry-title" className="text-display-xl">
              {capabilities.inquiry.title}
            </h2>
            <p className="mt-8 max-w-2xl text-body-lg text-graphite">{capabilities.inquiry.description}</p>
            <div className="mt-10">
              <ArrowLink href={capabilities.inquiry.link.href}>{capabilities.inquiry.link.label}</ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  )
}
