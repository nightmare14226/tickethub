import "@/styles/globals.css"

import { ReactNode } from "react"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { locales } from "@/navigation"
import clsx from "clsx"
import { NextIntlClientProvider } from "next-intl"
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import TicketProvider from "@/components/providers/ticket-provider"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  locale: "en"
}

export default async function RootLayout({
  children,
  locale,
}: RootLayoutProps) {
  unstable_setRequestLocale(locale)

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()
  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased bg-[#272a33]",
            fontSans.variable
          )}
        >
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <TicketProvider>
                <div className="relative flex min-h-screen flex-col">
                  <SiteHeader />
                  <div className="flex-1">{children}</div>
                </div>
                <TailwindIndicator />
              </TicketProvider>
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  )
}

const inter = Inter({ subsets: ["latin"] })
