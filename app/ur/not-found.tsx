import { Container } from "@/components/layout/container"
import { ArrowLink } from "@/components/primitives/arrow-link"
import { getUi } from "@/lib/content/ui"

export default function UrduNotFound() {
  const ui = getUi("ur")

  return (
    <main lang="ur" dir="rtl" className="locale-ur py-32 md:py-48">
      <Container>
        <p className="text-eyebrow uppercase text-ash">{ui.notFound.eyebrow}</p>
        <h1 className="mt-6 max-w-3xl text-display-xl">{ui.notFound.title}</h1>
        <p className="mt-6 max-w-xl text-body-lg text-graphite">{ui.notFound.body}</p>
        <div className="mt-10">
          <ArrowLink href="/ur">{ui.notFound.link}</ArrowLink>
        </div>
      </Container>
    </main>
  )
}
