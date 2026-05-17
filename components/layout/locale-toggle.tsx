"use client"

import { usePathname } from "next/navigation"
import { getAlternateLocale, type Locale, withLocalePath } from "@/lib/i18n"
import { getUi } from "@/lib/content/ui"

export function LocaleToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname()
  const targetLocale = getAlternateLocale(locale)
  const ui = getUi(locale)
  const basePath =
    locale === "ur"
      ? pathname === "/ur"
        ? "/"
        : pathname.replace(/^\/ur/, "") || "/"
      : pathname

  return (
    <a
      href={withLocalePath(basePath, targetLocale)}
      lang={targetLocale}
      dir={targetLocale === "ur" ? "rtl" : "ltr"}
      className="animated-underline text-body-sm font-medium text-ash transition-colors duration-200 hover:text-accent"
      aria-label={ui.language.toggleLabel}
    >
      {ui.language.toggleText}
    </a>
  )
}

