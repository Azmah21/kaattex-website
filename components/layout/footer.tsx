import { Container } from "@/components/layout/container"
import { Divider } from "@/components/primitives/divider"
import { site } from "@/lib/content/site"
import { ui } from "@/lib/content/ui"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bone py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <p className="font-display text-[18px] font-normal tracking-[0.2em]">{site.wordmark}</p>
            <p className="mt-6 max-w-sm text-body text-graphite">{site.footer.blurb}</p>
          </div>

          <nav aria-label={ui.accessibility.footerNav} className="flex flex-col gap-3">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="animated-underline w-fit text-body-sm text-ink transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="space-y-3 text-body-sm text-graphite">
            <p>{site.contact.address}</p>
            <p>{site.contact.phone}</p>
            <p>{site.contact.email}</p>
          </div>
        </div>

        <Divider className="mt-16" />
        <p className="mt-6 text-[12px] leading-5 text-ash">© {year} {site.name}. Faisalabad, Pakistan.</p>
      </Container>
    </footer>
  )
}
