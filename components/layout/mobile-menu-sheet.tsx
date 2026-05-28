"use client"

import { Sheet, SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet"
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
  const whatsappNumber = site.contact.whatsapp.replace(/\D/g, "")
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(ui.header.whatsappMessage)}`

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent id="mobile-menu">
        <SheetTitle className="sr-only">{ui.accessibility.mobilePrimaryNav}</SheetTitle>
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

        <div className="mt-12 flex flex-col gap-5 border-t border-rule pt-8">
          <SheetClose asChild>
            <a href={withLocalePath("/contact", locale)} className="text-body-lg font-medium text-accent">
              {ui.header.inquire}
            </a>
          </SheetClose>
          <SheetClose asChild>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-body-lg font-medium text-ink">
              {ui.header.whatsapp}
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}
