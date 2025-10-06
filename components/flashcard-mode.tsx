"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mascot } from "@/components/mascot"
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCw } from "lucide-react"

const slangTerms = [
  {
    term: "Bussin",
    definition: "Really good, amazing, or delicious",
    example: "This pizza is bussin!",
  },
  {
    term: "No cap",
    definition: "No lie, for real, seriously",
    example: "That movie was fire, no cap",
  },
  {
    term: "Slay",
    definition: "To do something exceptionally well",
    example: "You slayed that presentation!",
  },
  {
    term: "Rizz",
    definition: "Charisma, especially in romantic contexts",
    example: "He has so much rizz",
  },
  {
    term: "Sigma",
    definition: "An independent, self-reliant person",
    example: "He's a sigma male",
  },
  {
    term: "Skibidi",
    definition: "Cool, awesome (from viral videos)",
    example: "That trick was skibidi!",
  },
  {
    term: "Gyat",
    definition: "Expression of excitement or surprise",
    example: "Gyat! Did you see that?",
  },
  {
    term: "Fanum tax",
    definition: "Taking a portion of someone's food",
    example: "He hit me with the fanum tax on my fries",
  },
  {
    term: "Ohio",
    definition: "Weird, strange, or unusual",
    example: "That situation was so Ohio",
  },
  {
    term: "Mewing",
    definition: "Tongue posture technique for jawline",
    example: "I've been mewing for months",
  },
]

interface FlashcardModeProps {
  onBack: () => void
  onStartQuiz: () => void
}

export function FlashcardMode({ onBack, onStartQuiz }: FlashcardModeProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentCard = slangTerms[currentIndex]

  const handleNext = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev + 1) % slangTerms.length)
  }

  const handlePrevious = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev - 1 + slangTerms.length) % slangTerms.length)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button onClick={onStartQuiz} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Take Quiz 🎯
          </Button>
        </div>

        <div className="mt-8 text-center">
          <h1 className="font-sans text-4xl font-black text-foreground md:text-5xl">Flashcards</h1>
          <p className="mt-2 text-muted-foreground">
            Card {currentIndex + 1} of {slangTerms.length}
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <Mascot mood="thinking" size="md" />
        </div>

        <div className="mt-8">
          <Card className="group relative h-80 border-4 border-primary/20 bg-card shadow-2xl">
            <div className="flex h-full flex-col items-center justify-center p-8">
              {!isFlipped ? (
                <div className="text-center">
                  <div className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                    Term
                  </div>
                  <h2 className="font-sans text-5xl font-black text-card-foreground md:text-6xl">{currentCard.term}</h2>
                  <p className="mt-8 text-sm text-muted-foreground">Click flip button to reveal definition</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-4 inline-block rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
                    Definition
                  </div>
                  <p className="text-xl font-semibold text-card-foreground md:text-2xl text-balance">
                    {currentCard.definition}
                  </p>
                  <div className="mt-6 rounded-xl bg-muted p-4">
                    <p className="text-sm font-medium text-muted-foreground">Example:</p>
                    <p className="mt-1 text-base italic text-foreground">"{currentCard.example}"</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        <div className="mt-6 flex justify-center">
          <Button size="lg" onClick={handleFlip} className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
            <RotateCw className="h-5 w-5" />
            Flip Card
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <Button size="lg" variant="outline" onClick={handlePrevious} className="gap-2 bg-transparent">
            <ChevronLeft className="h-5 w-5" />
            Previous
          </Button>
          <Button
            size="lg"
            onClick={handleNext}
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Next
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </main>
  )
}
