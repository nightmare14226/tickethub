import { Dispatch, SetStateAction } from "react";

export interface TicketFormData {
    departureCity: string;
    destinationCity: string;
    departureDate: Date;
    returnDate: Date;
    adults: number;
    children: number;
    infants: number;
    business: boolean;
}
export interface TicketContextType {
    ticket: TicketFormData | null;
    setTicket: Dispatch<SetStateAction<TicketFormData>>;
}
export type HotelFormData = {
    hotelLocation: string;
    checkinDate: Date;
    returnDate: Date;
    rooms: number;
    guests: number;
}
