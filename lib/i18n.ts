export const locales = ["en", "ur"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export function withLocalePath(path: string, locale: Locale) {
  if (locale === defaultLocale) return path
  if (path === "/") return "/ur"
  return `/ur${path}`
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "ur" : "en"
}

