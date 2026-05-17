"use client"

import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet"
import { LocaleToggle } from "@/components/layout/locale-toggle"
import { getSite } from "@/lib/content/site"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"
import { withLocalePath } from "@/lib/i18n"

export function MobileMenuSheet({
  open,
  onOpenChange,
  locale,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  locale: Locale
}) {
  const site = getSite(locale)
  const ui = getUi(locale)

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <div className="flex items-center justify-between">
          <a href={withLocalePath("/", locale)} className="font-display text-[18px] font-normal tracking-[0.2em] text-ink">
            {site.wordmark}
          </a>
          <SheetClose asChild>
            <button type="button" aria-label={ui.header.closeMenu} className="text-display-lg leading-none">
              ×
            </button>
          </SheetClose>
        </div>

        <nav aria-label={ui.accessibility.mobilePrimaryNav} className="mt-16 flex flex-col gap-8">
          {site.nav.map((item) => (
            <SheetClose asChild key={item.href}>
              <a href={item.href} className="font-display text-display-lg text-ink">
                {item.label}
              </a>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-12">
          <LocaleToggle locale={locale} />
        </div>
      </SheetContent>
    </Sheet>
  )
}
