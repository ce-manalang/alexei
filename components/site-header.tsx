import Link from "next/link"
import { ClipboardCheck } from "lucide-react"

import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { UserNav } from "@/components/user-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <ClipboardCheck className="h-6 w-6" />
          <span className="font-bold">CheckMate</span>
        </Link>
        <MainNav className="mx-6" />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <UserNav />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}
