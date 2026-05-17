"use client"

import { Toaster as SonnerToaster } from "sonner"

export function Toaster() {
  return (
    <SonnerToaster
      toastOptions={{
        classNames: {
          toast: "rounded-none border border-rule bg-bone text-ink shadow-none",
          description: "text-graphite",
        },
      }}
    />
  )
}
