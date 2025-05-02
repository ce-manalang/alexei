import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// In a real app, this would be a database or API call
export async function sendCheckIn(checkInId: string) {
  // Send check-in to all participants
  return {
    success: true,
    sentAt: new Date().toISOString(),
    recipients: 12,
  }
}

export async function scheduleCheckIn(checkInData: any) {
  // Schedule a check-in
  return {
    success: true,
    id: "new-check-in-id",
    nextRun: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
  }
}
