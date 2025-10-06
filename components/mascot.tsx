"use client"

interface MascotProps {
  mood?: "happy" | "excited" | "thinking" | "celebrating"
  size?: "sm" | "md" | "lg"
}

export function Mascot({ mood = "happy", size = "lg" }: MascotProps) {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-32 h-32",
    lg: "w-48 h-48",
  }

  const messages = {
    happy: "Let's learn some slang!",
    excited: "You got this! 🎉",
    thinking: "Hmm, interesting...",
    celebrating: "Yasss! Slay! 💅",
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`${sizeClasses[size]} relative animate-bounce-slow rounded-full bg-gradient-to-br from-primary to-accent p-4 shadow-2xl`}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Body */}
          <ellipse cx="100" cy="120" rx="60" ry="70" fill="white" />

          {/* Head */}
          <circle cx="100" cy="70" r="50" fill="white" />

          {/* Ears */}
          <ellipse cx="70" cy="40" rx="15" ry="35" fill="white" transform="rotate(-20 70 40)" />
          <ellipse cx="130" cy="40" rx="15" ry="35" fill="white" transform="rotate(20 130 40)" />

          {/* Inner ears */}
          <ellipse cx="70" cy="45" rx="8" ry="20" fill="#FFB6C1" transform="rotate(-20 70 45)" />
          <ellipse cx="130" cy="45" rx="8" ry="20" fill="#FFB6C1" transform="rotate(20 130 45)" />

          {/* Eyes */}
          <circle cx="85" cy="65" r="8" fill="#333" />
          <circle cx="115" cy="65" r="8" fill="#333" />
          <circle cx="87" cy="63" r="3" fill="white" />
          <circle cx="117" cy="63" r="3" fill="white" />

          {/* Nose */}
          <ellipse cx="100" cy="80" rx="6" ry="4" fill="#FFB6C1" />

          {/* Mouth */}
          {mood === "happy" && (
            <path d="M 90 85 Q 100 95 110 85" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />
          )}
          {mood === "excited" && (
            <>
              <circle cx="100" cy="90" r="8" fill="#333" />
              <circle cx="100" cy="90" r="5" fill="#FF69B4" />
            </>
          )}
          {mood === "thinking" && <ellipse cx="100" cy="88" rx="8" ry="5" fill="#333" />}
          {mood === "celebrating" && (
            <path d="M 85 85 Q 100 100 115 85" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" />
          )}

          {/* Cheeks */}
          <circle cx="70" cy="75" r="8" fill="#FFB6C1" opacity="0.5" />
          <circle cx="130" cy="75" r="8" fill="#FFB6C1" opacity="0.5" />

          {/* Arms */}
          <ellipse cx="50" cy="130" rx="12" ry="30" fill="white" transform="rotate(-30 50 130)" />
          <ellipse cx="150" cy="130" rx="12" ry="30" fill="white" transform="rotate(30 150 130)" />

          {/* Feet */}
          <ellipse cx="80" cy="180" rx="18" ry="12" fill="white" />
          <ellipse cx="120" cy="180" rx="18" ry="12" fill="white" />
        </svg>
      </div>

      <div className="rounded-2xl bg-card px-6 py-3 shadow-lg">
        <p className="font-sans text-sm font-semibold text-card-foreground">{messages[mood]}</p>
      </div>
    </div>
  )
}
