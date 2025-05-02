import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { NewCheckInForm } from "@/components/new-check-in-form"

export default function NewCheckInPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Create a New Check-in" text="Set up an automatic check-in question for your team." />
      <div className="grid gap-8">
        <NewCheckInForm />
      </div>
    </DashboardShell>
  )
}
