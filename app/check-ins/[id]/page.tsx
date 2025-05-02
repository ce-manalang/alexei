import { notFound } from "next/navigation"

import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { CheckInDetail } from "@/components/check-in-detail"

interface CheckInPageProps {
  params: {
    id: string
  }
}

export default function CheckInPage({ params }: CheckInPageProps) {
  const checkIn = checkIns.find((c) => c.id === params.id)

  if (!checkIn) {
    notFound()
  }

  return (
    <DashboardShell>
      <DashboardHeader heading={checkIn.question} text={`${checkIn.schedule} · ${checkIn.participants} participants`} />
      <CheckInDetail checkIn={checkIn} />
    </DashboardShell>
  )
}

const checkIns = [
  {
    id: "1",
    question: "What did you work on yesterday?",
    schedule: "Every weekday at 9:00 AM",
    participants: 12,
    description: "Daily stand-up question to track progress and identify blockers.",
    responses: [
      {
        id: "r1",
        user: "Sarah Johnson",
        time: "Today at 9:15 AM",
        response:
          "I finished the design for the new landing page and started working on the component library updates.",
      },
      {
        id: "r2",
        user: "Michael Chen",
        time: "Today at 9:05 AM",
        response: "Completed the API integration for user profiles and fixed the authentication bug.",
      },
    ],
  },
  {
    id: "2",
    question: "Any blockers for this week?",
    schedule: "Every Monday at 9:00 AM",
    participants: 12,
    description: "Weekly check-in to identify and address potential blockers early in the week.",
    responses: [],
  },
]
