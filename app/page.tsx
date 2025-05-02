import Link from "next/link"
import { CheckCircle, Clock, PlusCircle, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"

export default function DashboardPage() {
  return (
    <>
      <DashboardShell>
        <DashboardHeader heading="Dashboard" text="Manage your team's check-ins">
          <Button asChild>
            <Link href="/check-ins/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Check-in
            </Link>
          </Button>
        </DashboardHeader>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Check-ins</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 since last week</p>
            </CardContent>
            <CardFooter>
              <Link href="/check-ins" className="text-xs text-muted-foreground underline-offset-4 hover:underline">
                View all check-ins
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Team Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 since last month</p>
            </CardContent>
            <CardFooter>
              <Link href="/team" className="text-xs text-muted-foreground underline-offset-4 hover:underline">
                Manage team
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Check-ins</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Next: Monday at 9:00 AM</p>
            </CardContent>
            <CardFooter>
              <Link href="/schedule" className="text-xs text-muted-foreground underline-offset-4 hover:underline">
                View schedule
              </Link>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Responses</CardTitle>
              <CardDescription>Latest check-in responses from your team</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentResponses.map((response) => (
                  <div key={response.id} className="border-b pb-4 last:border-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="mr-2 h-8 w-8 rounded-full bg-gray-200" />
                        <div>
                          <p className="font-medium">{response.user}</p>
                          <p className="text-sm text-muted-foreground">{response.checkIn}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{response.time}</p>
                    </div>
                    <p className="mt-2 text-sm">{response.response}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/responses">View all responses</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </DashboardShell>
    </>
  )
}

const recentResponses = [
  {
    id: "1",
    user: "Sarah Johnson",
    checkIn: "What did you work on yesterday?",
    time: "Today at 9:15 AM",
    response: "I finished the design for the new landing page and started working on the component library updates.",
  },
  {
    id: "2",
    user: "Michael Chen",
    checkIn: "Any blockers for this week?",
    time: "Yesterday at 4:30 PM",
    response: "Waiting on API documentation from the backend team to continue with the integration work.",
  },
  {
    id: "3",
    user: "Alex Rodriguez",
    checkIn: "Goals for this week?",
    time: "Yesterday at 10:05 AM",
    response: "Complete the user authentication flow and help with code reviews for the new feature.",
  },
]
