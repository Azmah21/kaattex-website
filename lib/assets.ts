import fs from "node:fs"
import path from "node:path"

export function hasPublicAsset(assetPath: string) {
  return fs.existsSync(path.join(process.cwd(), "public", assetPath.replace(/^\//, "")))
}
