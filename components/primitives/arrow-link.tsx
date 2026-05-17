import { cn } from "@/lib/utils"

type ArrowLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: React.ReactNode
}

export function ArrowLink({ className, children, ...props }: ArrowLinkProps) {
  return (
    <a
      className={cn(
        "animated-underline inline-flex items-center gap-3 text-body-sm font-medium text-ink transition-colors duration-200 hover:text-accent",
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="arrow-glyph inline-block">
        →
      </span>
    </a>
  )
}
