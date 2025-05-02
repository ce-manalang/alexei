import Link from "next/link"
import { Calendar, Clock, Edit, MoreHorizontal, Trash2, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

export function CheckInsList() {
  return (
    <div className="grid gap-4">
      {checkIns.map((checkIn) => (
        <Card key={checkIn.id}>
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle>
                <Link href={`/check-ins/${checkIn.id}`} className="hover:underline">
                  {checkIn.question}
                </Link>
              </CardTitle>
              <CardDescription className="mt-1">{checkIn.description}</CardDescription>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {checkIn.schedule}
              </div>
              <div className="flex items-center text-muted-foreground">
                <Users className="mr-1 h-4 w-4" />
                {checkIn.participants} participants
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                {checkIn.lastRun}
              </div>
              <div className="ml-auto">
                <Badge variant={checkIn.active ? "default" : "outline"}>{checkIn.active ? "Active" : "Paused"}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

const checkIns = [
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
  {
    id: "3",
    question: "What are your goals for this week?",
    description: "Weekly planning check-in to align on priorities and objectives.",
    schedule: "Every Monday at 10:00 AM",
    participants: 12,
    lastRun: "2 days ago",
    active: true,
  },
  {
    id: "4",
    question: "How are you feeling about the current sprint?",
    description: "Mid-sprint check-in to gauge team sentiment and address concerns.",
    schedule: "Every Wednesday at 2:00 PM",
    participants: 8,
    lastRun: "4 days ago",
    active: false,
  },
]
