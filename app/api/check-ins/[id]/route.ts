import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  // In a real app, this would fetch from a database
  return NextResponse.json({
    id,
    question: "What did you work on yesterday?",
    description: "Daily stand-up question to track progress and identify blockers.",
    schedule: "Every weekday at 9:00 AM",
    participants: 12,
    lastRun: "Today at 9:00 AM",
    active: true,
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
  })
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = params.id
  const data = await request.json()

  // In a real app, this would update in a database
  return NextResponse.json({
    id,
    ...data,
    updated: new Date().toISOString(),
  })
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id

  // In a real app, this would delete from a database
  return new NextResponse(null, { status: 204 })
}
