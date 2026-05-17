import type { ReactNode } from "react"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { HeaderObserver } from "@/components/layout/header-observer"
import { RevealObserver } from "@/components/primitives/reveal-observer"
import type { Locale } from "@/lib/i18n"

export function SiteShell({
  children,
  locale,
}: {
  children: ReactNode
  locale: Locale
}) {
  return (
    <div lang={locale} dir={locale === "ur" ? "rtl" : "ltr"} className={locale === "ur" ? "locale-ur" : undefined}>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)};document.documentElement.dir=${JSON.stringify(locale === "ur" ? "rtl" : "ltr")};`,
        }}
      />
      <Header locale={locale} />
      <HeaderObserver />
      <RevealObserver />
      {children}
      <Footer locale={locale} />
    </div>
  )
}
