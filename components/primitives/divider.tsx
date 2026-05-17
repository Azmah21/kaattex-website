import { cn } from "@/lib/utils"

type DividerProps = React.HTMLAttributes<HTMLHRElement>

export function Divider({ className, ...props }: DividerProps) {
  return <hr className={cn("border-0 border-t border-rule", className)} {...props} />
}
