import type React from "react"
interface DashboardShellProps {
  children: React.ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="grid items-start gap-8">
      <main className="grid gap-6 p-6 md:gap-8 md:p-8">{children}</main>
    </div>
  )
}
