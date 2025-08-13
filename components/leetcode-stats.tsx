"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, Target, Zap, Calendar, ExternalLink, Code2 } from "lucide-react"

interface LeetCodeStats {
  username: string
  ranking: number
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  acceptanceRate: number
  streak: number
  contestRating: number
  badges: { name: string; icon: string }[]
  recentSubmissions: { problem: string; difficulty: string; status: string; date: string }[]
}

// Mock data - in real app, this would come from LeetCode API
const mockLeetCodeStats: LeetCodeStats = {
  username: "abhishekjha70809",
  ranking: 145678,
  totalSolved: 127,
  easySolved: 65,
  mediumSolved: 48,
  hardSolved: 14,
  acceptanceRate: 68.4,
  streak: 12,
  contestRating: 1456,
  badges: [
    { name: "50 Days Badge", icon: "🔥" },
    { name: "100 Problems", icon: "💯" },
    { name: "Contest Participant", icon: "🏆" },
  ],
  recentSubmissions: [
    { problem: "Two Sum", difficulty: "Easy", status: "Accepted", date: "2 days ago" },
    { problem: "Binary Tree Inorder", difficulty: "Medium", status: "Accepted", date: "3 days ago" },
    { problem: "Merge Intervals", difficulty: "Medium", status: "Accepted", date: "5 days ago" },
    { problem: "Valid Parentheses", difficulty: "Easy", status: "Accepted", date: "1 week ago" },
  ],
}

export function LeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeStats>(mockLeetCodeStats)
  const [isLoading, setIsLoading] = useState(false)

  // Simulate API call
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const difficultyStats = [
    { label: "Easy", value: stats.easySolved, color: "bg-green-500", textColor: "text-green-600" },
    { label: "Medium", value: stats.mediumSolved, color: "bg-yellow-500", textColor: "text-yellow-600" },
    { label: "Hard", value: stats.hardSolved, color: "bg-red-500", textColor: "text-red-600" },
  ]

  const mainStats = [
    { label: "Problems Solved", value: stats.totalSolved, icon: Target, color: "text-blue-600" },
    { label: "Contest Rating", value: stats.contestRating, icon: Trophy, color: "text-yellow-600" },
    { label: "Current Streak", value: `${stats.streak} days`, icon: Zap, color: "text-orange-600" },
    { label: "Acceptance Rate", value: `${stats.acceptanceRate}%`, icon: Calendar, color: "text-green-600" },
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <Code2 className="w-8 h-8 text-primary" />
          <h3 className="font-serif text-2xl font-bold">LeetCode Progress</h3>
        </div>
        <p className="text-muted-foreground">Problem-solving skills and competitive programming achievements</p>
      </motion.div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mainStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Problem Difficulty Breakdown */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Problem Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Circular Progress */}
                <div className="flex justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-muted"
                      />
                      <motion.circle
                        cx="60"
                        cy="60"
                        r="50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        strokeLinecap="round"
                        className="text-primary"
                        initial={{ strokeDasharray: "0 314" }}
                        whileInView={{ strokeDasharray: `${(stats.totalSolved / 200) * 314} 314` }}
                        transition={{ duration: 2, delay: 0.5 }}
                        viewport={{ once: true }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{stats.totalSolved}</div>
                        <div className="text-xs text-muted-foreground">Solved</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Difficulty Breakdown */}
                <div className="space-y-3">
                  {difficultyStats.map((difficulty, index) => (
                    <div key={difficulty.label} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${difficulty.textColor}`}>{difficulty.label}</span>
                        <span className="text-sm text-muted-foreground">{difficulty.value} problems</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${difficulty.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(difficulty.value / stats.totalSolved) * 100}%` }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Activity & Badges */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {stats.badges.map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Badge variant="secondary" className="flex items-center gap-2 p-2">
                      <span className="text-lg">{badge.icon}</span>
                      <span className="text-xs">{badge.name}</span>
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Submissions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {stats.recentSubmissions.map((submission, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-sm">{submission.problem}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant="outline"
                          className={`text-xs ${
                            submission.difficulty === "Easy"
                              ? "text-green-600"
                              : submission.difficulty === "Medium"
                                ? "text-yellow-600"
                                : "text-red-600"
                          }`}
                        >
                          {submission.difficulty}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{submission.date}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-green-600 bg-green-50 dark:bg-green-950">
                      ✓ {submission.status}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* LeetCode Profile Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button variant="outline" className="group bg-transparent" asChild>
          <a href={`https://leetcode.com/${stats.username}`} target="_blank" rel="noopener noreferrer">
            <Code2 className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            View LeetCode Profile
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </motion.div>
    </div>
  )
}
