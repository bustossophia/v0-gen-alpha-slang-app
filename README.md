# Slay the Slang! 🚀

A fun, interactive learning app designed for adults to master Gen Alpha slang. Learn the language of the future through flashcards and quizzes, guided by an adorable mascot!

## Features

- **Flashcard Mode**: Learn 10 popular Gen Alpha terms with definitions and example usage
- **Quiz Mode**: Test your knowledge with multiple-choice questions
- **Progress Tracking**: Track your learning progress as you answer questions correctly
- **Adorable Mascot**: A friendly bunny companion that reacts to your progress
- **Cartoony Design**: Vibrant, playful interface with smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. **Download the project**
   - Click the three dots menu in the top right of v0
   - Select "Download ZIP" and extract the files

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Start learning Gen Alpha slang!

### Alternative Installation (Using shadcn CLI)

\`\`\`bash
npx shadcn@latest init
\`\`\`

Follow the prompts to set up the project with all necessary dependencies.

## How to Use

1. **Choose Your Mode**: Select between Flashcard or Quiz mode from the home screen
2. **Flashcard Mode**: 
   - Click the "Flip Card" button to reveal definitions
   - Navigate through cards using Previous/Next buttons
3. **Quiz Mode**: 
   - Read the question and select your answer
   - Get instant feedback with explanations
   - Track your progress as you answer correctly
4. **Switch Modes**: Use the "Back to Home" button to change learning modes anytime

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - High-quality UI components
- **Lucide React** - Icon library

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Home page with mode selection
│   ├── layout.tsx        # Root layout with fonts
│   └── globals.css       # Global styles and design tokens
├── components/
│   ├── mascot.tsx        # Animated mascot character
│   ├── flashcard-mode.tsx # Flashcard learning interface
│   ├── quiz-mode.tsx     # Quiz testing interface
│   └── progress-tracker.tsx # Progress visualization
└── README.md
\`\`\`

## Slang Terms Included

- **Bussin** - Really good or amazing
- **No cap** - No lie, for real
- **Slay** - To do something exceptionally well
- **Rizz** - Charisma or charm
- **Mid** - Mediocre or average
- **Bet** - Agreement or confirmation
- **Fanum tax** - Taking someone's food
- **Gyat** - Expression of surprise
- **Skibidi** - Nonsense word from viral content
- **Ohio** - Weird or strange

## Deployment

### Deploy to Vercel

1. Click the "Publish" button in the top right of v0
2. Follow the prompts to deploy to Vercel
3. Your app will be live in minutes!

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## Contributing

Feel free to add more slang terms, improve the quiz questions, or enhance the mascot animations!

## License

This project is open source and available for educational purposes.

---

Built with ❤️ using v0 by Vercel
