"use client"

import { ReactNode, useState } from "react"
import TicketContext from "@/contexts/ticket-context"
import { TicketFormData } from "@/types"

interface IProps {
  children: ReactNode
}
const TicketProvider: React.FC<IProps> = ({ children }) => {
  const [ticket, setTicket] = useState<TicketFormData>({
    departureCity: "",
    destinationCity: "",
    departureDate: new Date(),
    returnDate: new Date(),
    adults: 1,
    children: 0,
    infants: 0,
    business: false,
  })

  const contextValue = {
    ticket,
    setTicket,
  }

  return (
    <TicketContext.Provider value={contextValue}>
      {children}
    </TicketContext.Provider>
  )
}

export default TicketProvider
