"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, GitBranch, Star, Users, Calendar, Code, ExternalLink } from "lucide-react"

interface GitHubStats {
  username: string
  publicRepos: number
  followers: number
  following: number
  totalStars: number
  totalCommits: number
  contributionsThisYear: number
  topLanguages: { name: string; percentage: number; color: string }[]
  recentRepos: { name: string; description: string; language: string; stars: number; url: string }[]
}

// Mock data - in real app, this would come from GitHub API
const mockGitHubStats: GitHubStats = {
  username: "abhishekjha70809",
  publicRepos: 15,
  followers: 42,
  following: 28,
  totalStars: 89,
  totalCommits: 347,
  contributionsThisYear: 234,
  topLanguages: [
    { name: "Python", percentage: 45, color: "#3776ab" },
    { name: "JavaScript", percentage: 25, color: "#f7df1e" },
    { name: "C++", percentage: 15, color: "#00599c" },
    { name: "HTML", percentage: 10, color: "#e34f26" },
    { name: "CSS", percentage: 5, color: "#1572b6" },
  ],
  recentRepos: [
    {
      name: "RecoMed-AI",
      description: "AI-powered medication recommendation system using ensemble ML models",
      language: "Python",
      stars: 12,
      url: "https://github.com/abhishekjha70809/recomed-ai",
    },
    {
      name: "HealthConnect-DB",
      description: "Healthcare database optimization project with PostgreSQL",
      language: "SQL",
      stars: 8,
      url: "https://github.com/abhishekjha70809/healthconnect-db",
    },
    {
      name: "Food-Delivery-MERN",
      description: "Full-stack food delivery platform with React and Node.js",
      language: "JavaScript",
      stars: 15,
      url: "https://github.com/abhishekjha70809/food-delivery-mern",
    },
  ],
}

export function GitHubStats() {
  const [stats, setStats] = useState<GitHubStats>(mockGitHubStats)
  const [isLoading, setIsLoading] = useState(false)

  // Simulate API call
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const statItems = [
    { label: "Public Repos", value: stats.publicRepos, icon: Code, color: "text-blue-600" },
    { label: "Followers", value: stats.followers, icon: Users, color: "text-green-600" },
    { label: "Total Stars", value: stats.totalStars, icon: Star, color: "text-yellow-600" },
    { label: "Contributions", value: stats.contributionsThisYear, icon: Calendar, color: "text-purple-600" },
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
          <Github className="w-8 h-8 text-primary" />
          <h3 className="font-serif text-2xl font-bold">GitHub Activity</h3>
        </div>
        <p className="text-muted-foreground">Open source contributions and coding activity</p>
      </motion.div>

      {/* GitHub Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {statItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                <div className="text-2xl font-bold mb-1">{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Top Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.topLanguages.map((lang, index) => (
                  <div key={lang.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                        <span className="font-medium">{lang.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className="h-2 rounded-full"
                        style={{ backgroundColor: lang.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Repositories */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch className="w-5 h-5" />
                Recent Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stats.recentRepos.map((repo, index) => (
                  <motion.div
                    key={repo.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-lg border hover:bg-accent/50 transition-colors group"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium group-hover:text-primary transition-colors">{repo.name}</h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="w-3 h-3" />
                        {repo.stars}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{repo.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {repo.language}
                      </Badge>
                      <Button variant="ghost" size="sm" className="h-6 px-2" asChild>
                        <a href={repo.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* GitHub Profile Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Button variant="outline" className="group bg-transparent" asChild>
          <a href={`https://github.com/${stats.username}`} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            View GitHub Profile
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </motion.div>
    </div>
  )
}
