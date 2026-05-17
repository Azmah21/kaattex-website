import { cn } from "@/lib/utils"

type RevealProps = React.HTMLAttributes<HTMLDivElement>

export function Reveal({ className, ...props }: RevealProps) {
  return <div className={cn("reveal", className)} {...props} />
}
