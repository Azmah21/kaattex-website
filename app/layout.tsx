import type { Metadata } from "next"
import { Fraunces, Inter, Noto_Nastaliq_Urdu } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { site } from "@/lib/content/site"
import { siteUrl } from "@/lib/seo"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
})

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "500"],
  variable: "--font-urdu",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kaattex — Industrial embroidery from Faisalabad",
  description: site.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${notoNastaliqUrdu.variable}`}>
      <body className="bg-bone text-ink antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
