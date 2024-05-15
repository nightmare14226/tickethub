import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  HeaderButton,
  headerButtonVariants,
} from "@/components/ui/headerbutton"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { ClientHeader } from "./client-header"
import { Button } from "./ui/button"
import CurrencySelector from "./ui/currency"
import LanguageSelector from "./ui/language"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="flex items-center space-x-1 gap-4">
            <ClientHeader />
            {/* <CurrencySelector />
            <LanguageSelector /> */}
            <Button>LOG IN</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
