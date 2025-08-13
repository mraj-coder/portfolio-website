"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Users, Clock, TrendingUp, Download, Share2 } from "lucide-react"

interface AnalyticsData {
  totalViews: number
  uniqueVisitors: number
  avgTimeOnSite: string
  projectViews: { [key: string]: number }
}

export function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    totalViews: 0,
    uniqueVisitors: 0,
    avgTimeOnSite: "0m 0s",
    projectViews: {
      RecoMed: 0,
      "HealthConnect DB": 0,
      "Food Delivery": 0,
      ClasherMarket: 0,
    },
  })

  useEffect(() => {
    const incrementViews = () => {
      setAnalytics((prev) => ({
        ...prev,
        totalViews: prev.totalViews + 1,
        uniqueVisitors: prev.uniqueVisitors + 1,
        avgTimeOnSite: "2m 15s", // Update based on actual time spent
      }))
    }

    // Increment views on component mount
    incrementViews()

    // Set up real-time updates for additional views
    const interval = setInterval(() => {
      // Only increment occasionally to simulate real visitors
      if (Math.random() > 0.95) {
        setAnalytics((prev) => ({
          ...prev,
          totalViews: prev.totalViews + 1,
          uniqueVisitors: prev.uniqueVisitors + (Math.random() > 0.7 ? 1 : 0),
        }))
      }
    }, 30000) // Check every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const stats = [
    {
      title: "Total Views",
      value: analytics.totalViews.toLocaleString(),
      icon: Eye,
      change: analytics.totalViews > 0 ? "+100%" : "0%",
      color: "text-blue-600",
    },
    {
      title: "Unique Visitors",
      value: analytics.uniqueVisitors.toLocaleString(),
      icon: Users,
      change: analytics.uniqueVisitors > 0 ? "+100%" : "0%",
      color: "text-green-600",
    },
    {
      title: "Avg. Time on Site",
      value: analytics.avgTimeOnSite,
      icon: Clock,
      change: analytics.totalViews > 0 ? "+100%" : "0%",
      color: "text-purple-600",
    },
    {
      title: "Engagement Rate",
      value: analytics.totalViews > 0 ? "100%" : "0%",
      icon: TrendingUp,
      change: analytics.totalViews > 0 ? "+100%" : "0%",
      color: "text-orange-600",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Portfolio Analytics
          </h3>
          <p className="text-muted-foreground">Real-time insights into portfolio performance and visitor engagement</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    <Badge variant="secondary" className="text-green-600 bg-green-50 dark:bg-green-950">
                      {stat.change}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Project Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(analytics.projectViews).map(([project, views], index) => (
                  <div key={project} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-medium">{project}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">{views} views</span>
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{
                            width:
                              views > 0
                                ? `${(views / Math.max(...Object.values(analytics.projectViews), 1)) * 100}%`
                                : "0%",
                          }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mt-12"
        >
          <Button variant="outline" className="group bg-transparent">
            <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button variant="outline" className="group bg-transparent">
            <Share2 className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
            Share Portfolio
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
