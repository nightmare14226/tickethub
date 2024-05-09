'use client';

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slogan } from "@/components/common/slogan";
import { Breadcrumb } from "@/components/common/breadcrumb";
import FlightInputForm from "@/components/public/flight-input-form";
import HotelInputForm from "@/components/public/hotel-input-form";
import TicketInputForm from "@/components/public/ticket-input-form"
export default function IndexPage() {
  return (
    <div className="mx-auto text-center w-3/4">
      <Tabs defaultValue='flights' className='w-full mx-auto text-center'>
        <TabsContent
                    value='flights'
                  >
                  <Slogan>Your tickets. Your directions.</Slogan>
        </TabsContent>
        <TabsContent
                    value='hotels'
                  >
                  <Slogan>Your hotels everywhere in the world.</Slogan>
        </TabsContent>
        <TabsContent
                    value='train tickets'
                  >
                  <Slogan>Your tickets. Your directions.</Slogan>
        </TabsContent>
        <TabsList className='flex w-auto justify-center bg-background mx-auto text-center'>
          <TabsTrigger value='flights' className='w-auto rounded-none border-b-2 border-transparent bg-background data-[state=active]:border-primary data-[state=active]:shadow-none'>
            <h3>FLIGHTS</h3>
          </TabsTrigger>
          <TabsTrigger value='hotels' className='w-auto rounded-none border-b-2 border-transparent bg-background data-[state=active]:border-primary data-[state=active]:shadow-none'>
            <h3>HOTELS</h3>
          </TabsTrigger>
          <TabsTrigger value='train tickets' className='w-auto rounded-none border-b-2 border-transparent bg-background data-[state=active]:border-primary data-[state=active]:shadow-none'>
            <h3>TRAIN TICKETS</h3>
          </TabsTrigger>
        </TabsList>
        <TabsContent
                    value='flights'
                  >
                  <FlightInputForm></FlightInputForm>
        </TabsContent>
        <TabsContent
                    value='hotels'
                  >
                  <HotelInputForm></HotelInputForm>
        </TabsContent>
        <TabsContent
                    value='train tickets'
                  >
                  <TicketInputForm></TicketInputForm>
        </TabsContent>
      </Tabs>
    </div>
  )
}
