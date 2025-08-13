"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from "lucide-react"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  category: string
  difficulty: "Easy" | "Medium" | "Hard"
  explanation: string
}

const assessmentQuestions: Question[] = [
  {
    id: 1,
    question: "Which Python library is primarily used for deep learning and neural networks?",
    options: ["Pandas", "TensorFlow", "Matplotlib", "Requests"],
    correctAnswer: 1,
    category: "AI/ML",
    difficulty: "Easy",
    explanation:
      "TensorFlow is Google's open-source library specifically designed for deep learning and neural network development.",
  },
  {
    id: 2,
    question: "What is the primary purpose of normalization in database design?",
    options: ["Increase storage space", "Reduce data redundancy", "Slow down queries", "Add more tables"],
    correctAnswer: 1,
    category: "Database",
    difficulty: "Medium",
    explanation:
      "Database normalization reduces data redundancy and improves data integrity by organizing data into related tables.",
  },
  {
    id: 3,
    question: "In machine learning, what does 'overfitting' mean?",
    options: [
      "Model performs well on training data but poorly on new data",
      "Model is too simple",
      "Model trains too fast",
      "Model uses too little data",
    ],
    correctAnswer: 0,
    category: "AI/ML",
    difficulty: "Medium",
    explanation:
      "Overfitting occurs when a model learns the training data too well, including noise, making it perform poorly on unseen data.",
  },
  {
    id: 4,
    question: "Which SQL command is used to retrieve data from a database?",
    options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
    correctAnswer: 2,
    category: "Database",
    difficulty: "Easy",
    explanation: "SELECT is the SQL command used to query and retrieve data from database tables.",
  },
  {
    id: 5,
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: 1,
    category: "Programming",
    difficulty: "Hard",
    explanation:
      "Binary search has O(log n) time complexity because it eliminates half of the search space in each iteration.",
  },
]

export function SkillsAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isStarted, setIsStarted] = useState(false)

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers]
    newAnswers[currentQuestion] = answerIndex
    setSelectedAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const resetAssessment = () => {
    setCurrentQuestion(0)
    setSelectedAnswers([])
    setShowResults(false)
    setIsStarted(false)
  }

  const calculateScore = () => {
    let correct = 0
    selectedAnswers.forEach((answer, index) => {
      if (answer === assessmentQuestions[index].correctAnswer) {
        correct++
      }
    })
    return correct
  }

  const getScoreMessage = (score: number, total: number) => {
    const percentage = (score / total) * 100
    if (percentage >= 80) return { message: "Excellent! You have strong technical knowledge.", color: "text-green-600" }
    if (percentage >= 60) return { message: "Good job! You have solid understanding.", color: "text-blue-600" }
    if (percentage >= 40) return { message: "Not bad! Keep learning and improving.", color: "text-yellow-600" }
    return { message: "Keep studying! There's room for improvement.", color: "text-orange-600" }
  }

  if (!isStarted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Brain className="w-8 h-8 text-primary" />
            Technical Skills Assessment
          </CardTitle>
          <p className="text-muted-foreground">Test your knowledge in AI/ML, Database, and Programming concepts</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">{assessmentQuestions.length}</div>
              <div className="text-sm text-muted-foreground">Questions</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">~5</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </div>
          </div>
          <div className="text-center">
            <Button onClick={() => setIsStarted(true)} size="lg" className="px-8">
              Start Assessment
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const scoreMessage = getScoreMessage(score, assessmentQuestions.length)

    return (
      <Card className="max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Trophy className="w-8 h-8 text-primary" />
            Assessment Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-primary">
              {score}/{assessmentQuestions.length}
            </div>
            <div className={`text-xl font-semibold ${scoreMessage.color}`}>{scoreMessage.message}</div>
            <Progress value={(score / assessmentQuestions.length) * 100} className="w-full max-w-md mx-auto" />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Review Your Answers:</h3>
            {assessmentQuestions.map((question, index) => {
              const userAnswer = selectedAnswers[index]
              const isCorrect = userAnswer === question.correctAnswer

              return (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border rounded-lg p-4 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    {isCorrect ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{question.category}</Badge>
                        <Badge
                          variant={
                            question.difficulty === "Easy"
                              ? "secondary"
                              : question.difficulty === "Medium"
                                ? "default"
                                : "destructive"
                          }
                        >
                          {question.difficulty}
                        </Badge>
                      </div>
                      <p className="font-medium mb-2">{question.question}</p>
                      <div className="space-y-1 text-sm">
                        <p className={isCorrect ? "text-green-600" : "text-red-600"}>
                          Your answer: {question.options[userAnswer]}
                        </p>
                        {!isCorrect && (
                          <p className="text-green-600">Correct answer: {question.options[question.correctAnswer]}</p>
                        )}
                        <p className="text-muted-foreground italic">{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="text-center">
            <Button onClick={resetAssessment} variant="outline" className="gap-2 bg-transparent">
              <RotateCcw className="w-4 h-4" />
              Take Assessment Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const question = assessmentQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline">{question.category}</Badge>
          <Badge
            variant={
              question.difficulty === "Easy"
                ? "secondary"
                : question.difficulty === "Medium"
                  ? "default"
                  : "destructive"
            }
          >
            {question.difficulty}
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>
              Question {currentQuestion + 1} of {assessmentQuestions.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="w-full" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-lg font-semibold leading-relaxed">{question.question}</h3>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200 ${
                selectedAnswers[currentQuestion] === index
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50 hover:bg-accent/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswers[currentQuestion] === index
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-muted-foreground"
                  }`}
                >
                  {selectedAnswers[currentQuestion] === index && <div className="w-2 h-2 rounded-full bg-current" />}
                </div>
                <span>{option}</span>
              </div>
            </motion.button>
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            Previous
          </Button>
          <Button onClick={handleNext} disabled={selectedAnswers[currentQuestion] === undefined}>
            {currentQuestion === assessmentQuestions.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
