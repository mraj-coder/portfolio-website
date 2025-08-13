"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable AI Models with TensorFlow and PyTorch",
    excerpt:
      "A comprehensive guide to building and deploying machine learning models that can handle production-scale data and traffic.",
    content:
      "In this article, I'll walk you through the process of building scalable AI models using TensorFlow and PyTorch...",
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
    content: "During my internship at And Circles, I worked on optimizing healthcare databases...",
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
    content: "My journey started with web development using the MERN stack, but I discovered my passion for AI...",
    category: "Career",
    tags: ["MERN", "AI/ML", "Career", "Learning"],
    date: "2024-12-05",
    readTime: "5 min read",
    featured: false,
  },
]

export function BlogSection() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured).slice(0, 2)

  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing knowledge about AI/ML, data science, and software development
          </p>
        </motion.div>

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Featured
                  </Badge>
                  <Badge variant="outline">{featuredPost.category}</Badge>
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3 hover:text-primary transition-colors">
                  <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{featuredPost.excerpt}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="group" asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {featuredPost.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Recent Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
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

        {/* View All Posts Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="group bg-transparent" asChild>
            <Link href="/blog">
              <BookOpen className="w-5 h-5 mr-2" />
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
