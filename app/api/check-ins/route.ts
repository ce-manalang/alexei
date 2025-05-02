import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, this would fetch from a database
  return NextResponse.json({
    checkIns: [
      {
        id: "1",
        question: "What did you work on yesterday?",
        description: "Daily stand-up question to track progress and identify blockers.",
        schedule: "Every weekday at 9:00 AM",
        participants: 12,
        lastRun: "Today at 9:00 AM",
        active: true,
      },
      {
        id: "2",
        question: "Any blockers for this week?",
        description: "Weekly check-in to identify and address potential blockers early in the week.",
        schedule: "Every Monday at 9:00 AM",
        participants: 12,
        lastRun: "2 days ago",
        active: true,
      },
    ],
  })
}

export async function POST(request: Request) {
  const data = await request.json()

  // In a real app, this would save to a database
  return NextResponse.json(
    {
      id: "new-id",
      ...data,
      created: new Date().toISOString(),
    },
    { status: 201 },
  )
}
