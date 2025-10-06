"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

interface ProgressTrackerProps {
  score: number
  totalAttempts: number
  onReset: () => void
}

export function ProgressTracker({ score, totalAttempts, onReset }: ProgressTrackerProps) {
  const percentage = totalAttempts > 0 ? Math.round((score / totalAttempts) * 100) : 0

  if (totalAttempts === 0) return null

  return (
    <Card className="border-2 border-primary/20 bg-card p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">Your Progress</p>
          <div className="mt-1 flex items-baseline gap-2">
            <p className="text-3xl font-black text-card-foreground">{percentage}%</p>
            <p className="text-sm text-muted-foreground">
              ({score}/{totalAttempts} correct)
            </p>
          </div>
        </div>
        <Button variant="outline" size="sm" onClick={onReset} className="gap-2 bg-transparent">
          <RotateCcw className="h-4 w-4" />
          Reset
        </Button>
      </div>
      <div className="mt-3 h-3 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </Card>
  )
}
