"use client"

import { Sheet, SheetClose, SheetContent } from "@/components/ui/sheet"
import { site } from "@/lib/content/site"
import { ui } from "@/lib/content/ui"

export function MobileMenuSheet({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <div className="flex items-center justify-between">
          <a href="/" className="font-display text-[18px] font-normal tracking-[0.2em] text-ink">
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
      </SheetContent>
    </Sheet>
  )
}
