"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getFaq } from "@/lib/content/faq"
import type { Locale } from "@/lib/i18n"

export function FaqAccordion({ locale }: { locale: Locale }) {
  const faq = getFaq(locale)

  return (
    <Accordion type="single" collapsible className="w-full border-t border-rule">
      {faq.items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>
            {"answer" in item ? (
              item.answer
            ) : (
              <>
                {item.answerPrefix}
                <a href={item.answerLink.href} className="underline decoration-1 underline-offset-[3px] transition-colors duration-200 hover:text-accent">
                  {item.answerLink.label}
                </a>
                {item.answerSuffix}
              </>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
