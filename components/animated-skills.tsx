"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface Skill {
  name: string
  level: number
  category: string
  icon?: string
  description?: string
}

const skills: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "Programming", description: "Data science & machine learning applications" },
  { name: "C++", level: 88, category: "Programming", description: "Competitive programming & system development" },
  { name: "C", level: 85, category: "Programming", description: "System programming & embedded development" },
  { name: "JavaScript", level: 70, category: "Programming", description: "Web development basics & DOM manipulation" },
  { name: "HTML/CSS", level: 75, category: "Programming", description: "Frontend markup & styling fundamentals" },

  // AI/ML Libraries
  { name: "TensorFlow", level: 90, category: "AI/ML", description: "Deep learning & neural network development" },
  { name: "PyTorch", level: 88, category: "AI/ML", description: "Machine learning research & model training" },
  { name: "Scikit-learn", level: 92, category: "AI/ML", description: "Classical ML algorithms & data preprocessing" },
  { name: "Pandas", level: 90, category: "AI/ML", description: "Data manipulation & analysis workflows" },
  { name: "NumPy", level: 88, category: "AI/ML", description: "Numerical computing & array operations" },

  // Frameworks & Tools
  { name: "PostgreSQL", level: 85, category: "Tools", description: "Relational database design & optimization" },
  { name: "MySQL", level: 80, category: "Tools", description: "Database management & query optimization" },
  { name: "Git", level: 90, category: "Tools", description: "Version control & collaborative development" },
  { name: "PowerBI", level: 75, category: "Tools", description: "Business intelligence & data visualization" },
  { name: "WordPress", level: 70, category: "Tools", description: "Content management & website development" },

  // MERN Stack (Basics)
  { name: "React", level: 65, category: "Web", description: "Component-based frontend development" },
  { name: "Node.js", level: 60, category: "Web", description: "Server-side JavaScript development" },
  { name: "Express.js", level: 60, category: "Web", description: "Web application framework" },
  { name: "MongoDB", level: 65, category: "Web", description: "NoSQL database & document modeling" },
]

const categories = ["All", "Programming", "AI/ML", "Tools", "Web"]

export function AnimatedSkills() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredSkills = skills.filter((skill) => selectedCategory === "All" || skill.category === selectedCategory)

  useEffect(() => {
    if (isInView) {
      // Stagger the animation of skills
      filteredSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills((prev) => new Set([...prev, skill.name]))
        }, index * 100)
      })
    }
  }, [isInView, filteredSkills])

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized in AI/ML technologies and data science with a strong foundation in programming and database
            management
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-accent"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isAnimated={animatedSkills.has(skill.name)} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="font-serif text-2xl font-bold mb-6">Connect with Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="group bg-transparent hover:bg-accent"
              onClick={() => window.open("https://github.com/mraj-coder", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub Profile
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="group bg-transparent hover:bg-accent"
              onClick={() => window.open("https://leetcode.com/u/abhishekjha777/", "_blank")}
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z" />
              </svg>
              LeetCode Profile
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">0-1</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface SkillCardProps {
  skill: Skill
  index: number
  isAnimated: boolean
}

function SkillCard({ skill, index, isAnimated }: SkillCardProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isAnimated) {
      const timer = setTimeout(() => {
        setProgress(skill.level)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [isAnimated, skill.level])

  const getSkillColor = (level: number) => {
    if (level >= 90) return "text-green-500"
    if (level >= 80) return "text-blue-500"
    if (level >= 70) return "text-yellow-500"
    return "text-orange-500"
  }

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-green-500"
    if (level >= 80) return "bg-blue-500"
    if (level >= 70) return "bg-yellow-500"
    return "bg-orange-500"
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isAnimated ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group"
    >
      <Card className="h-full bg-card hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
        <CardContent className="p-6 space-y-4">
          {/* Skill Header */}
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
              {skill.name}
            </h3>
            <Badge variant="outline" className={getSkillColor(skill.level)}>
              {skill.level}%
            </Badge>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Proficiency</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${getProgressColor(skill.level)}`}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Description */}
          {skill.description && <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>}

          {/* Category Badge */}
          <div className="pt-2">
            <Badge variant="secondary" className="text-xs">
              {skill.category}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
