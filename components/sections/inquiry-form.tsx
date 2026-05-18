"use client"

import { useRef, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { getContactPage } from "@/lib/content/contact"
import type { Locale } from "@/lib/i18n"

const MAX_FILE_SIZE = 10 * 1024 * 1024
const ACCEPTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".zip"]

export function InquiryForm({ locale }: { locale: Locale }) {
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [file, setFile] = useState<File | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const contactPage = getContactPage(locale)
  const inquirySchema = z.object({
    companyName: z
      .string()
      .min(2, contactPage.form.errors.companyName)
      .max(120, contactPage.form.errors.companyName),
    customerName: z
      .string()
      .min(2, contactPage.form.errors.customerName)
      .max(80, contactPage.form.errors.customerName),
    email: z.string().email(contactPage.form.errors.email),
    phoneNumber: z
      .string()
      .min(3, contactPage.form.errors.phoneNumber)
      .regex(/^[+\d\s\-()]+$/, contactPage.form.errors.phoneNumber),
    projectDetails: z
      .string()
      .min(30, contactPage.form.errors.projectDetails)
      .max(1000, contactPage.form.errors.projectDetails),
  })

  type InquiryValues = z.infer<typeof inquirySchema>

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      companyName: "",
      customerName: "",
      email: "",
      phoneNumber: "",
      projectDetails: "",
    },
  })

  const projectDetails = watch("projectDetails")
  const characterCount = projectDetails.length

  const fileError = (() => {
    if (!file) return null
    if (file.size > MAX_FILE_SIZE) return contactPage.form.errors.fileTooLarge
    if (!ACCEPTED_EXTENSIONS.some((extension) => file.name.toLowerCase().endsWith(extension))) {
      return contactPage.form.errors.unsupportedFileType
    }
    return null
  })()

  async function onSubmit(values: InquiryValues) {
    if (fileError) {
      toast.error(fileError)
      return
    }

    try {
      const payload = new FormData()
      payload.set("form-name", "inquiry")
      payload.set("companyName", values.companyName)
      payload.set("customerName", values.customerName)
      payload.set("email", values.email)
      payload.set("phoneNumber", values.phoneNumber)
      payload.set("projectDetails", values.projectDetails)

      if (file) {
        payload.set("attachment", file)
      }

      const response = await fetch("/", {
        method: "POST",
        body: payload,
      })

      if (!response.ok) throw new Error("Request failed")
      setSubmitted(true)
    } catch {
      toast.error(contactPage.form.failure)
    }
  }

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? [])

    if (selectedFiles.length > 1) {
      toast.error(contactPage.form.errors.tooManyFiles)
    }

    setFile(selectedFiles[0] ?? null)
  }

  function removeFile() {
    setFile(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  if (submitted) {
    return (
      <p role="status" className="max-w-3xl font-display text-display-lg">
        {contactPage.form.success}
      </p>
    )
  }

  return (
    <form
      name="inquiry"
      method="POST"
      data-netlify="true"
      encType="multipart/form-data"
      className="space-y-10"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <input type="hidden" name="form-name" value="inquiry" />
      <div className="grid gap-10 md:grid-cols-2">
        <Field
          id="customerName"
          label={contactPage.form.customerName}
          error={errors.customerName?.message}
          input={<Input id="customerName" {...register("customerName")} />}
        />
        <Field
          id="companyName"
          label={contactPage.form.companyName}
          error={errors.companyName?.message}
          input={<Input id="companyName" {...register("companyName")} />}
        />
        <Field
          id="email"
          label={contactPage.form.email}
          error={errors.email?.message}
          input={<Input id="email" type="email" {...register("email")} />}
        />
        <Field
          id="phoneNumber"
          label={contactPage.form.phoneNumber}
          error={errors.phoneNumber?.message}
          input={<Input id="phoneNumber" {...register("phoneNumber")} />}
        />
      </div>

      <div>
        <Label htmlFor="projectDetails">{contactPage.form.projectDetails}</Label>
        <Textarea id="projectDetails" className="mt-3" {...register("projectDetails")} />
        <div className="mt-3 flex items-center justify-between gap-4 text-body-sm text-ash">
          <span>{errors.projectDetails?.message}</span>
          <span>{contactPage.form.characters(characterCount)}</span>
        </div>
      </div>

      <div>
        <Label htmlFor="attachment">{contactPage.form.attachment}</Label>
        <Input
          id="attachment"
          ref={fileInputRef}
          type="file"
          accept={ACCEPTED_EXTENSIONS.join(",")}
          onChange={handleFile}
          className="mt-3 h-auto py-3 file:mr-6 file:border-0 file:bg-transparent file:px-0 file:text-body-sm file:font-medium file:text-ink"
        />
        <p className="mt-3 text-body-sm text-ash">{contactPage.form.attachmentHint}</p>

        {file ? (
          <ul className="mt-6 divide-y divide-rule border-t border-rule">
            <li className="flex items-center justify-between gap-4 py-4 text-body-sm">
              <span className="truncate">{file.name}</span>
              <button
                type="button"
                onClick={removeFile}
                className="animated-underline shrink-0 text-graphite transition-colors duration-200 hover:text-accent"
              >
                {contactPage.form.removeFile}
              </button>
            </li>
          </ul>
        ) : null}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {contactPage.form.sendInquiry}
      </Button>
    </form>
  )
}

function Field({
  id,
  label,
  error,
  input,
}: {
  id: string
  label: string
  error?: string
  input: React.ReactNode
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-3">{input}</div>
      <p className="mt-3 min-h-6 text-body-sm text-ash">{error}</p>
    </div>
  )
}
