'use client';

import React, { useState } from 'react';

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slogan } from "@/components/common/slogan";
import { Breadcrumb } from "@/components/common/breadcrumb";
import TicketInputForm from './ticket-input-form';
import TicketProvider from '../providers/ticket-provider';
import { Button } from '@/components/ui/button';
import CurrencySelector from '../ui/currency';

const InputTabs: React.FC = () => {


  return (
    <div className="mx-auto text-center">
      <Tabs defaultValue='buses' className='w-full mx-auto text-center'>
        <TabsContent
          value='buses'
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
        <TabsList className='flex w-auto justify-center mx-auto text-center bg-transparent'>
          <TabsTrigger value='buses' className='bg-transparent w-auto rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent'>
            <h3>BUSES</h3>
          </TabsTrigger>
          <TabsTrigger value='hotels' className='bg-transparent w-auto rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none  data-[state=active]:bg-transparent'>
            <h3>MINIBUSES</h3>
          </TabsTrigger>
          <TabsTrigger value='train tickets' className='bg-transparent w-auto rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:shadow-none  data-[state=active]:bg-transparent'>
            <h3>TRAINS</h3>
          </TabsTrigger>
        </TabsList>
        <TicketInputForm></TicketInputForm>
      </Tabs>
      <Button className="mx-auto hover:bg-[#c53f65c4]">Search</Button>
    </div>
  );
};

export default InputTabs;