"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, Filter, ArrowLeft } from "lucide-react"
import Link from "next/link"

const allBlogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Models with TensorFlow and PyTorch",
    excerpt:
      "A comprehensive guide to building and deploying machine learning models that can handle production-scale data and traffic.",
    category: "AI/ML",
    tags: ["TensorFlow", "PyTorch", "Machine Learning", "Scalability"],
    date: "2024-12-15",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Database Optimization Techniques for Healthcare Applications",
    excerpt: "Lessons learned from optimizing PostgreSQL databases for healthcare data management at And Circles.",
    category: "Database",
    tags: ["PostgreSQL", "Database", "Healthcare", "Optimization"],
    date: "2024-12-10",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 3,
    title: "From MERN to AI: My Journey in Full-Stack Development",
    excerpt: "How I transitioned from web development to AI/ML and the skills that transferred between domains.",
    category: "Career",
    tags: ["MERN", "AI/ML", "Career", "Learning"],
    date: "2024-12-05",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding Neural Networks: A Beginner's Guide",
    excerpt: "Breaking down the fundamentals of neural networks and how they power modern AI applications.",
    category: "AI/ML",
    tags: ["Neural Networks", "Deep Learning", "Beginner", "AI"],
    date: "2024-11-28",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 5,
    title: "Data Preprocessing Techniques for Machine Learning",
    excerpt: "Essential data preprocessing steps that can make or break your machine learning models.",
    category: "Data Science",
    tags: ["Data Science", "Preprocessing", "Python", "Pandas"],
    date: "2024-11-20",
    readTime: "5 min read",
    featured: false,
  },
]

const categories = ["All", "AI/ML", "Database", "Career", "Data Science"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = allBlogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="py-16 px-4 bg-gradient-to-b from-accent/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Button variant="ghost" className="mb-6" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Link>
              </Button>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Technical Blog
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Insights, tutorials, and thoughts on AI/ML, data science, and software development
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 px-4 border-b">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <div className="flex gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        {post.featured && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            Featured
                          </Badge>
                        )}
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No posts found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}
