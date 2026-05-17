import { Container } from "@/components/layout/container"
import { LocaleToggle } from "@/components/layout/locale-toggle"
import { MobileMenuTrigger } from "@/components/layout/mobile-menu-trigger"
import { getSite } from "@/lib/content/site"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export function Header({ locale }: { locale: Locale }) {
  const site = getSite(locale)
  const ui = getUi(locale)

  return (
    <header id="site-header" data-solid="false" className="site-header sticky top-0 z-40">
      <Container className="flex h-24 items-center justify-between">
        <a
          href={withLocalePath("/", locale)}
          className="font-display text-[18px] font-normal tracking-[0.2em] text-ink transition-colors duration-200 hover:text-accent"
        >
          {site.wordmark}
        </a>

        <nav aria-label={ui.accessibility.primaryNav} className="hidden items-center gap-x-10 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="animated-underline text-body-sm font-medium text-ink transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </a>
          ))}
          <a
            href={withLocalePath("/contact", locale)}
            className="animated-underline text-body-sm font-medium text-accent transition-colors duration-200 hover:text-ink"
          >
            {ui.header.inquire}
          </a>
          <LocaleToggle locale={locale} />
        </nav>

        <MobileMenuTrigger locale={locale} />
      </Container>
    </header>
  )
}
