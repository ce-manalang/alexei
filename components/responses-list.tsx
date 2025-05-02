import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ResponsesList() {
  return (
    <Tabs defaultValue="all">
      <div className="flex items-center justify-between">
        <TabsList>
          <TabsTrigger value="all">All Responses</TabsTrigger>
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
          <TabsTrigger value="thisWeek">This Week</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="all" className="mt-4 space-y-4">
        {allResponses.map((group) => (
          <Card key={group.date}>
            <CardHeader>
              <CardTitle>{group.date}</CardTitle>
              <CardDescription>
                {group.checkIn} · {group.responses.length} responses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {group.responses.map((response) => (
                  <div key={response.id} className="border-b pb-6 last:border-0 last:pb-0">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" alt={response.user} />
                        <AvatarFallback>{response.user.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{response.user}</div>
                        <div className="text-sm text-muted-foreground">{response.time}</div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm">{response.response}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
      <TabsContent value="today" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Today</CardTitle>
            <CardDescription>What did you work on yesterday? · 8 responses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {allResponses[0].responses.map((response) => (
                <div key={response.id} className="border-b pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt={response.user} />
                      <AvatarFallback>{response.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{response.user}</div>
                      <div className="text-sm text-muted-foreground">{response.time}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm">{response.response}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="yesterday" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Yesterday</CardTitle>
            <CardDescription>Any blockers for this week? · 10 responses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {allResponses[1].responses.map((response) => (
                <div key={response.id} className="border-b pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt={response.user} />
                      <AvatarFallback>{response.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{response.user}</div>
                      <div className="text-sm text-muted-foreground">{response.time}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm">{response.response}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="thisWeek" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>This Week</CardTitle>
            <CardDescription>All responses from this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[...allResponses[0].responses, ...allResponses[1].responses].map((response) => (
                <div key={response.id} className="border-b pb-6 last:border-0 last:pb-0">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" alt={response.user} />
                      <AvatarFallback>{response.user.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{response.user}</div>
                      <div className="text-sm text-muted-foreground">{response.time}</div>
                    </div>
                  </div>
                  <div className="mt-4 text-sm">{response.response}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

const allResponses = [
  {
    date: "Today",
    checkIn: "What did you work on yesterday?",
    responses: [
      {
        id: "1",
        user: "Sarah Johnson",
        time: "9:15 AM",
        response:
          "I finished the design for the new landing page and started working on the component library updates.",
      },
      {
        id: "2",
        user: "Michael Chen",
        time: "9:05 AM",
        response: "Completed the API integration for user profiles and fixed the authentication bug.",
      },
      {
        id: "3",
        user: "Alex Rodriguez",
        time: "9:30 AM",
        response: "Worked on the documentation for the new feature and reviewed PRs from the team.",
      },
    ],
  },
  {
    date: "Yesterday",
    checkIn: "Any blockers for this week?",
    responses: [
      {
        id: "4",
        user: "Sarah Johnson",
        time: "4:30 PM",
        response: "No blockers at the moment. Everything is on track for the release.",
      },
      {
        id: "5",
        user: "Michael Chen",
        time: "4:15 PM",
        response: "Waiting on API documentation from the backend team to continue with the integration work.",
      },
      {
        id: "6",
        user: "Alex Rodriguez",
        time: "4:45 PM",
        response: "Need to coordinate with the design team on the final mockups for the dashboard.",
      },
    ],
  },
]
