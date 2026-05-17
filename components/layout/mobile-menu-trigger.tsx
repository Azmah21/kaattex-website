"use client"

import { useState } from "react"
import { getUi } from "@/lib/content/ui"
import type { Locale } from "@/lib/i18n"

type MobileMenuSheetComponent = typeof import("./mobile-menu-sheet")["MobileMenuSheet"]

export function MobileMenuTrigger({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const [SheetComponent, setSheetComponent] = useState<MobileMenuSheetComponent | null>(null)
  const ui = getUi(locale)

  async function openMenu() {
    const menuSheet = await import("./mobile-menu-sheet")
    setSheetComponent(() => menuSheet.MobileMenuSheet)
    setOpen(true)
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={ui.header.openMenu}
        onClick={openMenu}
        className="inline-flex h-10 w-10 items-center justify-center"
      >
        <span className="sr-only">{ui.header.openMenu}</span>
        <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
          <span className="block h-px w-full bg-ink" />
          <span className="block h-px w-full bg-ink" />
        </span>
      </button>
      {SheetComponent ? <SheetComponent open={open} onOpenChange={setOpen} locale={locale} /> : null}
    </div>
  )
}
