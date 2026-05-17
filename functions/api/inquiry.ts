type InquiryEnv = {
  RESEND_API_KEY: string
  INQUIRY_TO_EMAIL: string
  INQUIRY_FROM_EMAIL: string
}

type InquiryContext = {
  request: Request
  env: InquiryEnv
}

const MAX_FILE_SIZE = 10 * 1024 * 1024
const ACCEPTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".zip"]

export async function onRequestPost(context: InquiryContext): Promise<Response> {
  try {
    const formData = await context.request.formData()
    const companyName = readText(formData, "companyName", 2, 120)
    const customerName = readText(formData, "customerName", 2, 80)
    const email = readEmail(formData)
    const phoneNumber = readPhone(formData)
    const projectDetails = readText(formData, "projectDetails", 30, 1000)
    const attachment = readAttachment(formData)

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: context.env.INQUIRY_FROM_EMAIL,
        to: [context.env.INQUIRY_TO_EMAIL],
        reply_to: email,
        subject: `New inquiry from ${companyName}`,
        text: [
          "New Kaattex inquiry",
          "",
          `Customer name: ${customerName}`,
          `Company name: ${companyName}`,
          `Email: ${email}`,
          `Phone number: ${phoneNumber}`,
          "",
          "Project details:",
          projectDetails,
        ].join("\n"),
        attachments: attachment
          ? [
              {
                filename: attachment.name,
                content: await fileToBase64(attachment),
              },
            ]
          : [],
      }),
    })

    if (!resendResponse.ok) {
      console.error("Resend inquiry delivery failed:", await resendResponse.text())
      return json({ ok: false }, 502)
    }

    return json({ ok: true }, 200)
  } catch (error) {
    console.error("Inquiry submission failed:", error)
    return json({ ok: false }, 400)
  }
}

function readText(formData: FormData, key: string, min: number, max: number) {
  const value = formData.get(key)
  if (typeof value !== "string") throw new Error(`Missing ${key}`)

  const trimmed = value.trim()
  if (trimmed.length < min || trimmed.length > max) throw new Error(`Invalid ${key}`)

  return trimmed
}

function readEmail(formData: FormData) {
  const email = readText(formData, "email", 3, 320)
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error("Invalid email")
  return email
}

function readPhone(formData: FormData) {
  const phoneNumber = readText(formData, "phoneNumber", 3, 40)
  if (!/^[+\d\s\-()]+$/.test(phoneNumber)) throw new Error("Invalid phone number")
  return phoneNumber
}

function readAttachment(formData: FormData) {
  const attachment = formData.get("attachment")
  if (!(attachment instanceof File) || attachment.size === 0) return null

  if (attachment.size > MAX_FILE_SIZE) throw new Error("Attachment too large")
  if (!ACCEPTED_EXTENSIONS.some((extension) => attachment.name.toLowerCase().endsWith(extension))) {
    throw new Error("Unsupported attachment type")
  }

  return attachment
}

async function fileToBase64(file: File) {
  const bytes = new Uint8Array(await file.arrayBuffer())
  let binary = ""

  for (let index = 0; index < bytes.length; index += 0x8000) {
    binary += String.fromCharCode(...Array.from(bytes.subarray(index, index + 0x8000)))
  }

  return btoa(binary)
}

function json(body: Record<string, boolean>, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
