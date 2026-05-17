import { SiteShell } from "@/components/layout/site-shell"

export default function UrduSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <SiteShell locale="ur">{children}</SiteShell>
}
