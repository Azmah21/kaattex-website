import { cn } from "@/lib/utils"

type OptimizedImageProps = {
  src: string
  alt: string
  width: number
  height: number
  sizes: string
  className?: string
  fetchPriority?: "high" | "low" | "auto"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  fetchPriority,
}: OptimizedImageProps) {
  return (
    // Static hosting keeps image delivery simple: assets are prepared as WebP files ahead of time
    // and served directly from the CDN rather than resized at request time.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      sizes={sizes}
      width={width}
      height={height}
      alt={alt}
      loading={fetchPriority === "high" ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={fetchPriority}
      className={cn(className)}
    />
  )
}
