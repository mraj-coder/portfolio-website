"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { AdvancedSearch } from "./advanced-search"
import { Brain, Database, Globe, Gamepad2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: "web" | "mobile" | "3d" | "ai"
  githubUrl?: string
  featured: boolean
  date: string
  icon: React.ReactNode
  gradient: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "RecoMed - Medication Recommendation System",
    description:
      "AI-powered system that analyzes patient symptoms and provides personalized medication recommendations",
    longDescription:
      "An intelligent healthcare system that analyzes patient report symptoms, predicts potential diagnoses, and provides personalized medication recommendations along with dietary adjustments. Built using ensemble machine learning models including Logistic Regression, Decision Tree, Extra Tree, AdaBoost, and Gaussian Naive Bayes for accurate predictions and recommendations.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Logistic Regression",
      "Decision Tree",
      "AdaBoost",
      "Gaussian NB",
    ],
    category: "ai",
    githubUrl: "https://github.com/abhishekjha70809",
    featured: true,
    date: "Aug 2024",
    icon: <Brain className="w-12 h-12" />,
    gradient: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "HealthConnect DB Optimizer",
    description: "Healthcare database optimization project for unified AI platform during internship at And Circles",
    longDescription:
      "A comprehensive healthcare data engineering project developed during my internship at And Circles. Optimized healthcare databases for a unified AI platform, improving data query speed by 40%. Designed ER models, implemented indexing and normalization strategies, and built robust pipelines for consistent handling of patient records, job opportunities, and professional networking data.",
    technologies: ["PostgreSQL", "SQL", "Python", "ER Modeling", "Database Optimization", "Data Pipelines"],
    category: "ai",
    githubUrl: "https://github.com/abhishekjha70809",
    featured: true,
    date: "Jan 2025",
    icon: <Database className="w-12 h-12" />,
    gradient: "from-green-500 via-teal-500 to-blue-500",
  },
  {
    id: 3,
    title: "Food Delivery Website - MERN Stack",
    description: "Full-stack food ordering platform with authentication, payments, and real-time order tracking",
    longDescription:
      "A comprehensive full-stack food delivery website built with the MERN stack. Features include user authentication, shopping cart functionality, secure online payments through Stripe API integration, and real-time order status updates. The frontend is built with React.js for a responsive and dynamic user experience, while the backend uses Node.js with Express.js for a robust and scalable server architecture.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT Authentication"],
    category: "web",
    githubUrl: "https://github.com/abhishekjha70809",
    featured: true,
    date: "May 2024",
    icon: <Globe className="w-12 h-12" />,
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
  {
    id: 4,
    title: "ClasherMarket - Gaming E-commerce Platform",
    description: "Web application for gamers to buy consoles and games with comprehensive product showcase",
    longDescription:
      "A modern e-commerce web application specifically designed for the gaming community. Built using React.js for a dynamic and responsive user interface, featuring a comprehensive header with navigation to Home, Shop, Collections, Blog, Contact Us, and Account sections. Includes prominent banners with key messages, categorized collections of gaming products, highlights of new arrivals, and complete user authentication system with login and registration forms.",
    technologies: ["React.js", "JavaScript", "CSS", "HTML", "Responsive Design", "User Authentication"],
    category: "web",
    githubUrl: "https://github.com/abhishekjha70809",
    featured: false,
    date: "Mar 2024",
    icon: <Gamepad2 className="w-12 h-12" />,
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
  },
]

const categories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Apps" },
  { id: "ai", label: "AI/ML" },
]

interface SearchFilters {
  query: string
  technologies: string[]
  categories: string[]
  dateRange: string
}

export function ProjectShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    query: "",
    technologies: [],
    categories: [],
    dateRange: "all",
  })

  const filteredProjects = projects.filter((project) => {
    // Category filter
    if (selectedCategory !== "all" && project.category !== selectedCategory) {
      return false
    }

    // Search query filter
    if (searchFilters.query) {
      const query = searchFilters.query.toLowerCase()
      const matchesTitle = project.title.toLowerCase().includes(query)
      const matchesDescription = project.description.toLowerCase().includes(query)
      const matchesTech = project.technologies.some((tech) => tech.toLowerCase().includes(query))
      if (!matchesTitle && !matchesDescription && !matchesTech) {
        return false
      }
    }

    // Technology filter
    if (searchFilters.technologies.length > 0) {
      const hasMatchingTech = searchFilters.technologies.some((filterTech) =>
        project.technologies.some((projectTech) => projectTech.toLowerCase().includes(filterTech.toLowerCase())),
      )
      if (!hasMatchingTech) {
        return false
      }
    }

    // Date range filter
    if (searchFilters.dateRange !== "all") {
      if (!project.date.includes(searchFilters.dateRange)) {
        return false
      }
    }

    return true
  })

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">AI-Powered Solutions & Web Applications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative projects spanning AI/ML systems, full-stack web applications, and database
            optimization solutions
          </p>
        </motion.div>

        {/* Advanced Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <AdvancedSearch onFiltersChange={setSearchFilters} />
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-serif text-2xl font-semibold mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} onSelect={setSelectedProject} featured />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-300 hover:scale-105"
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Results Count */}
        {(searchFilters.query || searchFilters.technologies.length > 0 || searchFilters.categories.length > 0) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mb-8">
            <p className="text-muted-foreground">
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} matching your criteria
            </p>
          </motion.div>
        )}

        {/* All Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${JSON.stringify(searchFilters)}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} onSelect={setSelectedProject} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground text-lg mb-4">No projects found matching your criteria</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchFilters({ query: "", technologies: [], categories: [], dateRange: "all" })
                setSelectedCategory("all")
              }}
            >
              Clear All Filters
            </Button>
          </motion.div>
        )}

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && <ProjectModal project={selectedProject} />}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: Project
  onSelect: (project: Project) => void
  featured?: boolean
}

function ProjectCard({ project, onSelect, featured = false }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <Card
        className={`overflow-hidden bg-card hover:shadow-2xl transition-all duration-300 ${
          featured ? "border-primary/50" : ""
        }`}
      >
        <div className="relative overflow-hidden">
          <div
            className={`w-full bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-110 ${
              featured ? "h-64" : "h-48"
            } flex items-center justify-center`}
          >
            <div className="text-white/90 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transform">
              {project.icon}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {featured && <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured</Badge>}
          <Badge className="absolute bottom-4 left-4 bg-background/80 text-foreground">{project.date}</Badge>
        </div>
        <CardContent className="p-6">
          <h3
            className={`font-serif font-semibold mb-2 group-hover:text-primary transition-colors duration-300 ${
              featured ? "text-xl" : "text-lg"
            }`}
          >
            {project.title}
          </h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface ProjectModalProps {
  project: Project
}

function ProjectModal({ project }: ProjectModalProps) {
  return (
    <div className="space-y-6">
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl">{project.title}</DialogTitle>
        <p className="text-muted-foreground">{project.date}</p>
      </DialogHeader>

      <div className="relative">
        <div
          className={`w-full h-64 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center`}
        >
          <div className="text-white/90 scale-150">{project.icon}</div>
        </div>
        {project.featured && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">Featured Project</Badge>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>

        <div>
          <h4 className="font-semibold mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
