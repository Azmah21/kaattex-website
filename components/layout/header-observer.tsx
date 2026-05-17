"use client"

import { useEffect } from "react"

export function HeaderObserver() {
  useEffect(() => {
    const header = document.getElementById("site-header")
    if (!header) return

    const sentinel = document.querySelector("[data-header-sentinel]")
    if (!sentinel) {
      header.dataset.solid = "true"
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        header.dataset.solid = entry.isIntersecting ? "false" : "true"
      },
      { threshold: 0.01 },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return null
}
