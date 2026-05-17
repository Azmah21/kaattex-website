import { cn } from "@/lib/utils"

type EyebrowProps = React.HTMLAttributes<HTMLParagraphElement>

export function Eyebrow({ className, ...props }: EyebrowProps) {
  return <p className={cn("text-eyebrow font-medium uppercase text-ash", className)} {...props} />
}
