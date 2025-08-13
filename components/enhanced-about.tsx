"use client"

import { motion } from "framer-motion"
import { RevealSection, StaggerContainer, StaggerItem, MagneticElement } from "./scroll-animations"
import { ExperienceTimeline } from "./experience-timeline"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Database, BarChart3, GraduationCap } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI/ML Expertise",
    description: "Building intelligent systems with TensorFlow, PyTorch, and Scikit-learn",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Optimizing databases and building robust data pipelines",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Extracting insights from complex datasets using Python and PowerBI",
  },
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    description: "CGPA 9.29/10.0 with COMPEX Scholarship from Government of India",
  },
]

export function EnhancedAbout() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <motion.h2
              className="font-serif text-3xl md:text-4xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About Me
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <RevealSection delay={0.2}>
            <div className="space-y-6">
              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Highly motivated Computer Science Engineering graduate with a strong foundation in AI/ML and data
                analytics. Currently pursuing B.Tech at SRM Institute of Science and Technology with an outstanding CGPA
                of 9.29/10.0, supported by the prestigious COMPEX Scholarship from the Government of India.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                I specialize in building scalable AI solutions using TensorFlow, PyTorch, and Scikit-learn, with
                hands-on experience in production-ready applications. Currently working as a Project Intern at And
                Circles, where I'm optimizing healthcare databases and building data pipelines for a unified AI
                platform, achieving 40% improvement in query performance.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Passionate about leveraging data and intelligent automation to drive business impact, I'm seeking
                opportunities to contribute to cutting-edge global AI projects and make a meaningful difference through
                technology.
              </motion.p>

              <div className="flex flex-wrap gap-2 pt-4">
                {["AI/ML Engineer", "Data Scientist", "Python Expert", "Database Optimizer"].map((tag) => (
                  <MagneticElement key={tag} strength={0.2}>
                    <Badge
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  </MagneticElement>
                ))}
              </div>
            </div>
          </RevealSection>

          {/* Highlights Grid */}
          <StaggerContainer staggerDelay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <StaggerItem key={highlight.title}>
                  <MagneticElement strength={0.1}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                      <CardContent className="p-6 text-center space-y-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                        >
                          <highlight.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors duration-300">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                      </CardContent>
                    </Card>
                  </MagneticElement>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

        <ExperienceTimeline />
      </div>
    </section>
  )
}
