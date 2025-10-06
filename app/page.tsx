"use client"

import { useState } from "react"
import { Mascot } from "@/components/mascot"
import { FlashcardMode } from "@/components/flashcard-mode"
import { QuizMode } from "@/components/quiz-mode"
import { ProgressTracker } from "@/components/progress-tracker"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const [mode, setMode] = useState<"home" | "flashcards" | "quiz">("home")
  const [score, setScore] = useState(0)
  const [totalAttempts, setTotalAttempts] = useState(0)

  const handleQuizAnswer = (isCorrect: boolean) => {
    setTotalAttempts((prev) => prev + 1)
    if (isCorrect) {
      setScore((prev) => prev + 1)
    }
  }

  const resetProgress = () => {
    setScore(0)
    setTotalAttempts(0)
  }

  if (mode === "flashcards") {
    return <FlashcardMode onBack={() => setMode("home")} onStartQuiz={() => setMode("quiz")} />
  }

  if (mode === "quiz") {
    return (
      <QuizMode
        onBack={() => setMode("home")}
        onAnswer={handleQuizAnswer}
        score={score}
        totalAttempts={totalAttempts}
      />
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <ProgressTracker score={score} totalAttempts={totalAttempts} onReset={resetProgress} />

        <div className="mt-8 text-center">
          <h1 className="font-sans text-5xl font-black tracking-tight text-foreground md:text-7xl text-balance">
            Slay the Slang! 💅
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl text-pretty">
            Learn Gen Alpha slang and become fluent in the language of the future
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <Mascot mood="happy" />
        </div>

        <Card className="mt-12 border-4 border-primary/20 bg-card p-8 shadow-2xl">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="font-sans text-2xl font-bold text-card-foreground">Ready to get started?</h2>
              <p className="mt-2 text-muted-foreground">Choose your learning mode and let{"'"}s go!</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Button
                size="lg"
                className="h-auto flex-col gap-2 bg-primary py-6 text-lg font-bold hover:bg-primary/90"
                onClick={() => setMode("flashcards")}
              >
                <span className="text-3xl">📚</span>
                <span>Flashcards</span>
                <span className="text-sm font-normal opacity-90">Learn new slang terms</span>
              </Button>

              <Button
                size="lg"
                className="h-auto flex-col gap-2 bg-secondary py-6 text-lg font-bold text-secondary-foreground hover:bg-secondary/90"
                onClick={() => setMode("quiz")}
              >
                <span className="text-3xl">🎯</span>
                <span>Take Quiz</span>
                <span className="text-sm font-normal opacity-90">Test your knowledge</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
