import React, { createContext, Dispatch, SetStateAction } from "react"
import { TicketContextType } from "@/types"

const defaultState: TicketContextType = {
  ticket: {
    departureCity: "",
    destinationCity: "",
    departureDate: new Date(),
    returnDate: new Date(),
    adults: 1,
    children: 0,
    infants: 0,
    business: false,
  },
  setTicket: () => {},
}
const TicketContext = createContext<TicketContextType>(defaultState)
export default TicketContext
