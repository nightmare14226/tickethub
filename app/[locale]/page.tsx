import { useContext } from "react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"
import TicketProvider from "@/components/providers/ticket-provider"
import ContactCarousel from "@/components/public/contact-carousel"
import InputTabs from "@/components/public/input-tabs"
import SubscriptionCard from "@/components/public/subscription-card"

export const metadata: Metadata = {
  title: "TicketsHUB",
  description: "Tickets for everyone, everywhere and every direction.",
  openGraph: {
    title: "TicketsHUB",
    description: "Tickets for everyone, everywhere and every direction.",
  },
}

export default function IndexPage() {
  return (
    <div className="grid grid-flow-row mt-5 gap-4">
      <div className="lg:w-[1200px] mx-auto">
        <InputTabs />
        <div className="grid grid-cols-7 h-[360px] mx-3 gap-3 my-4">
          <ContactCarousel />
          <SubscriptionCard />
        </div>
      </div>
    </div>
  )
}
