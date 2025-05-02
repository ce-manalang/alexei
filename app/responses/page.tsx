import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ResponsesList } from "@/components/responses-list"

export default function ResponsesPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Responses" text="View and manage all check-in responses from your team." />
      <ResponsesList />
    </DashboardShell>
  )
}
