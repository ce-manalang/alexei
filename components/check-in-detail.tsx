import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, Edit, Pause, Trash2, Users } from "lucide-react"

interface CheckInDetailProps {
  checkIn: {
    id: string
    question: string
    schedule: string
    participants: number
    description: string
    responses: {
      id: string
      user: string
      time: string
      response: string
    }[]
  }
}

export function CheckInDetail({ checkIn }: CheckInDetailProps) {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
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
            Last run: Today at 9:00 AM
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <Pause className="mr-2 h-4 w-4" />
            Pause
          </Button>
          <Button variant="outline" size="sm" className="text-destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{checkIn.description}</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="responses">
        <TabsList>
          <TabsTrigger value="responses">Responses</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="responses" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Responses</CardTitle>
              <CardDescription>
                {checkIn.responses.length > 0 ? `${checkIn.responses.length} responses received` : "No responses yet"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {checkIn.responses.length > 0 ? (
                  checkIn.responses.map((response) => (
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
                  ))
                ) : (
                  <div className="text-center py-6 text-muted-foreground">No responses have been submitted yet.</div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Check-in Settings</CardTitle>
              <CardDescription>Configure how this check-in works</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <h3 className="text-sm font-medium">Notification Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Email notifications are sent to participants when a new check-in is ready.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-sm font-medium">Response Visibility</h3>
                <p className="text-sm text-muted-foreground">Responses are visible to all team members.</p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-sm font-medium">Reminders</h3>
                <p className="text-sm text-muted-foreground">
                  Reminders are sent 2 hours before the check-in deadline.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
