"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mascot } from "@/components/mascot"
import { ArrowLeft } from "lucide-react"

const quizQuestions = [
  {
    question: 'What does "bussin" mean?',
    options: ["Really good or amazing", "Very busy", "Taking the bus", "Broken or damaged"],
    correctAnswer: 0,
  },
  {
    question: 'If someone says "no cap", they mean:',
    options: ["They lost their hat", "No lying, for real", "No capital letters", "No more capacity"],
    correctAnswer: 1,
  },
  {
    question: 'What does it mean to "slay"?',
    options: ["To defeat an enemy", "To sleep all day", "To do something exceptionally well", "To be very tired"],
    correctAnswer: 2,
  },
  {
    question: '"Rizz" refers to:',
    options: ["A type of rice", "Charisma", "Being risky", "A dance move"],
    correctAnswer: 1,
  },
  {
    question: 'What is "fanum tax"?',
    options: ["A government tax", "Taking some of someone's food", "A famous person", "A type of payment"],
    correctAnswer: 1,
  },
  {
    question: 'If something is "Ohio", it is:',
    options: ["From Ohio state", "Weird or strange", "Very normal", "Friendly"],
    correctAnswer: 1,
  },
  {
    question: 'A "sigma" person is:',
    options: ["Very social", "Independent and self-reliant", "Always following trends", "A math expert"],
    correctAnswer: 1,
  },
  {
    question: '"Gyat" is an expression of:',
    options: ["Sadness", "Boredom", "Excitement or surprise", "Confusion"],
    correctAnswer: 2,
  },
]

interface QuizModeProps {
  onBack: () => void
  onAnswer: (isCorrect: boolean) => void
  score: number
  totalAttempts: number
}

export function QuizMode({ onBack, onAnswer, score, totalAttempts }: QuizModeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [mascotMood, setMascotMood] = useState<"happy" | "excited" | "thinking" | "celebrating">("thinking")

  const question = quizQuestions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctAnswer

  useEffect(() => {
    if (showResult) {
      setMascotMood(isCorrect ? "celebrating" : "thinking")
    } else {
      setMascotMood("thinking")
    }
  }, [showResult, isCorrect])

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
  }

  const handleSubmit = () => {
    if (selectedAnswer === null) return
    setShowResult(true)
    onAnswer(isCorrect)
  }

  const handleNext = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setCurrentQuestion((prev) => (prev + 1) % quizQuestions.length)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Your Score</p>
            <p className="text-2xl font-bold text-foreground">
              {score}/{totalAttempts}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h1 className="font-sans text-4xl font-black text-foreground md:text-5xl">Quiz Time! 🎯</h1>
          <p className="mt-2 text-muted-foreground">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Mascot mood={mascotMood} size="md" />
        </div>

        <Card className="mt-8 border-4 border-primary/20 bg-card p-8 shadow-2xl">
          <h2 className="text-center font-sans text-2xl font-bold text-card-foreground md:text-3xl text-balance">
            {question.question}
          </h2>

          <div className="mt-8 grid gap-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrectAnswer = index === question.correctAnswer
              const showCorrect = showResult && isCorrectAnswer
              const showIncorrect = showResult && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`rounded-xl border-4 p-4 text-left font-semibold transition-all hover:scale-105 disabled:cursor-not-allowed ${
                    showCorrect
                      ? "border-accent bg-accent text-accent-foreground"
                      : showIncorrect
                        ? "border-destructive bg-destructive text-destructive-foreground"
                        : isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-muted text-foreground hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background/20 text-sm font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {showCorrect && <span className="ml-auto">✓</span>}
                    {showIncorrect && <span className="ml-auto">✗</span>}
                  </div>
                </button>
              )
            })}
          </div>

          {!showResult ? (
            <Button
              size="lg"
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className="mt-8 w-full bg-primary text-lg font-bold text-primary-foreground hover:bg-primary/90"
            >
              Submit Answer
            </Button>
          ) : (
            <div className="mt-8">
              <div
                className={`rounded-xl p-6 text-center ${
                  isCorrect ? "bg-accent text-accent-foreground" : "bg-destructive text-white"
                }`}
              >
                <p className={`text-2xl font-bold ${isCorrect ? "" : "text-white"}`}>
                  {isCorrect ? "🎉 Correct! You slayed!" : "❌ Not quite!"}
                </p>
                <p className={`mt-2 ${isCorrect ? "" : "text-white"}`}>
                  {isCorrect
                    ? "You really understood the assignment!"
                    : `The correct answer is: ${question.options[question.correctAnswer]}`}
                </p>
              </div>
              <Button
                size="lg"
                onClick={handleNext}
                className="mt-4 w-full bg-secondary text-lg font-bold text-secondary-foreground hover:bg-secondary/90"
              >
                Next Question
              </Button>
            </div>
          )}
        </Card>
      </div>
    </main>
  )
}
