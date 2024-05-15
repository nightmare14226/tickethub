'use client'

// TicketInputForm.tsx
import React, { useContext } from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from '../common/date-picker';
import { Popover, PopoverTrigger, PopoverContent } from '../ui/popover';
import { Button } from '../ui/button';
import { Minus, Plus } from 'lucide-react';
import TicketContext from '@/contexts/ticket-context';
import { useTranslations } from 'next-intl';
const TicketInputForm: React.FC = () => {
  const t = useTranslations("home");
  const {ticket, setTicket} = useContext(TicketContext);
  const calcPassengers = () => {
    let sum = 0;
    if(ticket?.adults !== undefined) sum = sum + ticket.adults;
    if(ticket?.children !== undefined) sum = sum + ticket.children;
    if(ticket?.infants !== undefined) sum = sum + ticket.infants;
    return sum;
  };
  const changePassenger = <T extends HTMLElement>(evt : React.MouseEvent<T>) => {
    if(!ticket) return;
    console.log(evt.currentTarget.id)
    if(evt.currentTarget?.id == "madult") {
      setTicket((prev) => {return {...prev, adults: prev.adults - 1}})
    }
    else if(evt.currentTarget?.id == "padult") {
      setTicket((prev) => {return {...prev, adults: prev.adults + 1}})
    }
    else if(evt.currentTarget?.id == "mchildren") {
      setTicket((prev) => {return {...prev, children: prev.children - 1}})
    }
    else if(evt.currentTarget?.id == "pchildren") {
      setTicket((prev) => {return {...prev, children: prev.children + 1}})
    }
    else if(evt.currentTarget?.id == "minfant") {
      setTicket((prev) => {return {...prev, infants: prev.infants - 1}})
    }
    else if(evt.currentTarget?.id == "pinfant") {
      setTicket((prev) => {return {...prev, infants: prev.infants + 1}})
    }
  };

  const changeClass = (business: string) => {
    if(!ticket) return;
    if(business === 'business' && ticket)
      setTicket((prev) => {return {...prev, business: true}})
    else if(ticket)
      setTicket((prev) => {return {...prev, business: false}})
  }
  return (
      <div className="mx-auto max-w-6xl p-4 h-full">
        <div className="grid grid-cols-4 lg:grid-cols-5 gap-0.5 shadow-md">
          <div className="flex flex-col p-2 bg-white justify-start items-start gap-1.5 col-span-2 lg:col-span-1 ">
            <Label htmlFor="string" className='text-slate-400 text-xs/[9px]'>{t("from")}</Label>
            <Input type="string" id="departure" placeholder="Departure City" className='border-0 focus:!outline-0 focus:!ring-transparent focus: !ring-offset-0 bg-transparent text-black placeholder-slate-700'/>
          </div>
          <div className="flex flex-col p-2 bg-white justify-start items-start gap-1.5 col-span-2 lg:col-span-1">
            <Label htmlFor="string" className='text-slate-400 text-xs/[9px]'>{t("to")}</Label>
            <Input type="string" id="destination" placeholder="Destination City" className='border-0 focus:!outline-4 focus:!ring-0 bg-transparent focus: !ring-offset-0 text-black placeholder-slate-700' />
          </div>
          <div className="flex flex-col p-2 bg-white justify-start items-start gap-1.5">
            <Label htmlFor="email" className='text-slate-400 text-xs/[9px]'>{t("when")}</Label>
            <DatePicker />
          </div>
          <div className="flex flex-col p-2 bg-white justify-start items-start gap-1.5">
            <Label htmlFor="email" className='text-slate-400 text-xs/[9px]'>{t("return")}</Label>
            <DatePicker />
          </div>
          <div className="flex flex-col p-2 bg-white justify-start items-start gap-1.5 col-span-2 lg:col-span-1">
            <Label htmlFor="email" className='text-slate-400 text-xs/[9px]'>{t("passengers")}</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className='m-0 border-0 focus:!outline-0 focus:!ring-transparent focus: !ring-offset-0 bg-transparent text-slate-700 hover:bg-transparent hover:text-slate-700 p-3 shadow-none'>
                      {"" + calcPassengers() + " " + t("passengers")}</Button>
              </PopoverTrigger>
              <PopoverContent className="w-full h-full text-slate-400 text-xs/[9px] ">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <div className="grid grid-cols-2 items-center gap-2">
                      <div className='grid grid-cols-1 justify-start gap-1'>
                        <Label htmlFor="width">{t("adults")}</Label>
                        <Label htmlFor="width" className = "text-slate-400">{"12+ " + t("years")}</Label>
                      </div>
                      <div className="flex items-center justify-end space-x-2 grid-cols-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          id='madult'
                          onClick= {changePassenger}
                          disabled={ticket?.adults == 1}
                        >
                          <Minus className="h-4 w-4" />
                          <span className="sr-only">Decrease</span>
                        </Button>
                        <div className="flex-1 text-center">
                          <div className="text-sm tracking-tighter">
                            {ticket?.adults}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          id="padult"
                          onClick={changePassenger}
                          disabled={ticket?.adults == 6}
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase</span>
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 items-center gap-2 mt-3">
                      <div className='grid grid-cols-1 justify-start gap-1'>
                        <Label htmlFor="width">Children</Label>
                        <Label htmlFor="width" className = "text-slate-400">{"2-11 " + t("years")}</Label>
                      </div>
                      <div className="flex items-center justify-end space-x-2 grid-cols-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          id='mchildren'
                          onClick={changePassenger}
                          disabled={ticket?.children == 0}
                        >
                          <Minus className="h-4 w-4" />
                          <span className="sr-only">Decrease</span>
                        </Button>
                        <div className="flex-1 text-center">
                          <div className="text-sm tracking-tighter">
                            {ticket?.children}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          id='pchildren'
                          onClick={changePassenger}
                          disabled={ticket?.children == 3}
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase</span>
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-2 mt-3">
                      <div className='grid grid-cols-1 justify-start gap-1'>
                        <Label htmlFor="width">{t("infants")}</Label>
                        <Label htmlFor="width" className = "text-slate-400">{"up to 2 " + t("years")}</Label>
                      </div>
                      <div className="flex items-center justify-end space-x-2 grid-cols-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={changePassenger}
                          id='minfant'
                          disabled={ticket?.infants == 0}
                        >
                          <Minus className="h-4 w-4" />
                          <span className="sr-only">Decrease</span>
                        </Button>
                        <div className="flex-1 text-center">
                          <div className="text-sm tracking-tighter">
                            {ticket?.infants}
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 shrink-0 rounded-full"
                          onClick={changePassenger}
                          disabled={ticket?.infants == 2}
                          id='pinfant'
                        >
                          <Plus className="h-4 w-4" />
                          <span className="sr-only">Increase</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      CLASS
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <RadioGroup defaultValue='economy' onValueChange={changeClass} className='grid grid-cols-2 items-center gap-2'>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="economy" id="r1"/>
                        <Label htmlFor="r1">Economy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="r2"/>
                        <Label htmlFor="r2">business / First</Label>
                      </div>
                    </RadioGroup>
                  </div> */}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
  );
};

export default TicketInputForm;