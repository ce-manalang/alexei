import Link from "next/link"
import { PlusCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CheckInsList } from "@/components/check-ins-list"

export default function CheckInsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Check-ins" text="Create and manage automatic check-ins for your team.">
        <Button asChild>
          <Link href="/check-ins/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Check-in
          </Link>
        </Button>
      </DashboardHeader>
      <CheckInsList />
    </DashboardShell>
  )
}
