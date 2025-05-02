"use client"

import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href="/"
            className={cn("hover:text-foreground/80", pathname === "/" ? "text-foreground" : "text-foreground/60")}
          >
            Dashboard
          </Link>
          <Link
            href="/check-ins"
            className={cn(
              "hover:text-foreground/80",
              pathname?.startsWith("/check-ins") ? "text-foreground" : "text-foreground/60",
            )}
          >
            Check-ins
          </Link>
          <Link
            href="/responses"
            className={cn(
              "hover:text-foreground/80",
              pathname?.startsWith("/responses") ? "text-foreground" : "text-foreground/60",
            )}
          >
            Responses
          </Link>
          <Link
            href="/team"
            className={cn(
              "hover:text-foreground/80",
              pathname?.startsWith("/team") ? "text-foreground" : "text-foreground/60",
            )}
          >
            Team
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
