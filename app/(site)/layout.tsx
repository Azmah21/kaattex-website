import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { HeaderObserver } from "@/components/layout/header-observer"
import { RevealObserver } from "@/components/primitives/reveal-observer"

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <HeaderObserver />
      <RevealObserver />
      {children}
      <Footer />
    </>
  )
}
