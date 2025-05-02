"use server"

import { revalidatePath } from "next/cache"
import { scheduleCheckIn } from "@/lib/utils"

export async function createCheckIn(formData: FormData) {
  // In a real app, validate the data and save to a database
  const question = formData.get("question") as string
  const description = formData.get("description") as string
  const frequency = formData.get("frequency") as string
  const time = formData.get("time") as string

  // Process the data
  await scheduleCheckIn({
    question,
    description,
    frequency,
    time,
  })

  // Revalidate the check-ins page
  revalidatePath("/check-ins")

  return { success: true }
}

export async function toggleCheckInStatus(id: string, active: boolean) {
  // In a real app, update the database

  // Revalidate the check-ins page
  revalidatePath("/check-ins")

  return { success: true }
}

export async function deleteCheckIn(id: string) {
  // In a real app, delete from the database

  // Revalidate the check-ins page
  revalidatePath("/check-ins")

  return { success: true }
}
