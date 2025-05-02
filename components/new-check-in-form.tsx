"use client"

import { useState } from "react"
import { CalendarIcon, Clock, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Checkbox } from "@/components/ui/checkbox"

export function NewCheckInForm() {
  const [date, setDate] = useState<Date>()

  return (
    <form>
      <Card>
        <CardHeader>
          <CardTitle>Check-in Details</CardTitle>
          <CardDescription>Create a new automatic check-in for your team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Input id="question" placeholder="What did you accomplish today?" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea id="description" placeholder="This helps your team understand the purpose of this check-in" />
          </div>

          <div className="space-y-2">
            <Label>Schedule</Label>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="frequency">Frequency</Label>
                <Select>
                  <SelectTrigger id="frequency">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <div className="flex items-center space-x-2">
                  <Select>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00">9:00 AM</SelectItem>
                      <SelectItem value="10:00">10:00 AM</SelectItem>
                      <SelectItem value="11:00">11:00 AM</SelectItem>
                      <SelectItem value="12:00">12:00 PM</SelectItem>
                      <SelectItem value="13:00">1:00 PM</SelectItem>
                      <SelectItem value="14:00">2:00 PM</SelectItem>
                      <SelectItem value="15:00">3:00 PM</SelectItem>
                      <SelectItem value="16:00">4:00 PM</SelectItem>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Label htmlFor="days">Days</Label>
              <div className="flex flex-wrap gap-4 pt-1">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                  <div key={day} className="flex items-center space-x-2">
                    <Checkbox id={day.toLowerCase()} />
                    <Label htmlFor={day.toLowerCase()}>{day}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Label>Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Participants</Label>
            <div className="flex items-center space-x-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select participants" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All team members</SelectItem>
                  <SelectItem value="developers">Developers</SelectItem>
                  <SelectItem value="designers">Designers</SelectItem>
                  <SelectItem value="managers">Managers</SelectItem>
                  <SelectItem value="custom">Custom group</SelectItem>
                </SelectContent>
              </Select>
              <Users className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="notify" />
              <Label htmlFor="notify">Send email notifications</Label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t p-6">
          <Button variant="outline">Cancel</Button>
          <Button>Create Check-in</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
