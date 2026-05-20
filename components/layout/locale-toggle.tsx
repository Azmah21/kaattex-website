"use client"

import { usePathname } from "next/navigation"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LocaleToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const ui = getUi(locale)
  const basePath =
    locale === "ur"
      ? pathname === "/ur"
        ? "/"
        : pathname.replace(/^\/ur/, "") || "/"
      : pathname

  const enHref = withLocalePath(basePath, "en")
  const urHref = withLocalePath(basePath, "ur")

  function persistLocale(nextLocale: Locale) {
    document.cookie = `kaattex-locale=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`
  }

  return (
    <div role="group" aria-label={ui.language.toggleLabel} className="flex items-center gap-2 text-body-sm font-medium">
      <a
        href={enHref}
        hrefLang="en"
        onClick={() => persistLocale("en")}
        className={cn(
          "animated-underline transition-colors duration-200 hover:text-accent",
          locale === "en" ? "text-ink" : "text-ash",
        )}
        aria-current={locale === "en" ? "true" : undefined}
      >
        {ui.language.english}
      </a>
      <span className="text-rule" aria-hidden="true">
        ·
      </span>
      <a
        href={urHref}
        hrefLang="ur"
        lang="ur"
        dir="rtl"
        onClick={() => persistLocale("ur")}
        style={{ fontFamily: "var(--font-urdu), serif" }}
        className={cn(
          "animated-underline transition-colors duration-200 hover:text-accent",
          locale === "ur" ? "text-ink" : "text-ash",
        )}
        aria-current={locale === "ur" ? "true" : undefined}
      >
        {ui.language.urdu}
      </a>
    </div>
  )
}
