"use client"

import { useEffect } from "react"

export function useRevealObserver() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal"))
    if (elements.length === 0) return

    // Keep anything already on-screen visible during hydration.
    // Otherwise the page can paint normally, then fade out before the observer responds.
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isInitiallyVisible) {
        element.classList.add("reveal-in")
      }
    })

    document.documentElement.classList.add("reveal-ready")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
