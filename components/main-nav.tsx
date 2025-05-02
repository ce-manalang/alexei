"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface MainNavProps {
  className?: string
}

export function MainNav({ className }: MainNavProps) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/check-ins"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname?.startsWith("/check-ins") ? "text-primary" : "text-muted-foreground",
        )}
      >
        Check-ins
      </Link>
      <Link
        href="/responses"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname?.startsWith("/responses") ? "text-primary" : "text-muted-foreground",
        )}
      >
        Responses
      </Link>
      <Link
        href="/team"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname?.startsWith("/team") ? "text-primary" : "text-muted-foreground",
        )}
      >
        Team
      </Link>
    </nav>
  )
}
