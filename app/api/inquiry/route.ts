// Local development stub only.
// Production inquiries are handled by Cloudflare Pages Functions in /functions/api/inquiry.ts.

import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const payload = await request.formData()
  const attachment = payload.get("attachment")

  console.log("Inquiry submission:", {
    companyName: payload.get("companyName"),
    customerName: payload.get("customerName"),
    email: payload.get("email"),
    phoneNumber: payload.get("phoneNumber"),
    projectDetails: payload.get("projectDetails"),
    attachment:
      attachment instanceof File
        ? {
            name: attachment.name,
            size: attachment.size,
          }
        : null,
  })

  return NextResponse.json({ ok: true })
}
