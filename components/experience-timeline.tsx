"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Briefcase, Award, MapPin, Calendar, Database, Brain, Globe, Gamepad2 } from "lucide-react"

const timelineData = [
  {
    id: 1,
    type: "experience",
    title: "Project Intern",
    organization: "And Circles",
    location: "Remote",
    period: "Jan 2025 - Present",
    description:
      "Selected among 300 candidates to work on HealthConnect, optimizing healthcare databases and improving query performance by 40%. Managing patient records, professional networking data, and job opportunities.",
    technologies: ["PostgreSQL", "SQL", "Python", "ER Modeling"],
    icon: Briefcase,
    color: "bg-green-500",
    current: true,
  },
  {
    id: 2,
    type: "project",
    title: "HealthConnect DB Optimizer",
    organization: "And Circles Internship Project",
    location: "Healthcare Data Engineering",
    period: "Jan 2025",
    description:
      "Optimized healthcare databases for unified AI platform. Designed ER models, implemented indexing and normalization, built data pipelines.",
    technologies: ["PostgreSQL", "SQL", "Python", "ER Modeling"],
    icon: Database,
    color: "bg-blue-500",
  },
  {
    id: 3,
    type: "project",
    title: "RecoMed - Medication Recommendation System",
    organization: "Personal Project",
    location: "AI/ML Project",
    period: "Aug 2024",
    description:
      "Built an AI system that analyzes patient symptoms, predicts diagnoses, and provides personalized medication recommendations using ensemble ML models.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Logistic Regression", "Decision Tree"],
    icon: Brain,
    color: "bg-purple-500",
  },
  {
    id: 4,
    type: "project",
    title: "Food Delivery Website",
    organization: "Full-Stack Development",
    location: "MERN Stack Project",
    period: "May 2024",
    description:
      "Developed a complete food ordering platform with user authentication, shopping cart, secure payments, and real-time order tracking.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe API"],
    icon: Globe,
    color: "bg-orange-500",
  },
  {
    id: 5,
    type: "project",
    title: "ClasherMarket",
    organization: "Gaming E-commerce Platform",
    location: "Web Application",
    period: "Mar 2024",
    description:
      "Built a comprehensive gaming marketplace with product categories, user authentication, and responsive design for console and game purchases.",
    technologies: ["React.js", "JavaScript", "CSS", "Responsive Design"],
    icon: Gamepad2,
    color: "bg-red-500",
  },
  {
    id: 6,
    type: "education",
    title: "B.Tech Computer Science Engineering",
    organization: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    period: "Sept 2021 - Jul 2025",
    description:
      "CGPA: 9.29/10.0. Awarded COMPEX Scholarship (fully funded) by Government of India. Focus on AI/ML, Data Structures, and Software Engineering.",
    technologies: ["AI/ML", "Data Structures", "Algorithms", "Software Engineering"],
    icon: GraduationCap,
    color: "bg-indigo-500",
  },
  {
    id: 7,
    type: "achievement",
    title: "COMPEX Scholarship",
    organization: "Government of India",
    location: "Full Ride Scholarship",
    period: "2021-2025",
    description:
      "Awarded full ride scholarship with monthly stipend for 4-year Bachelor of Technology program. Represents academic excellence and potential.",
    technologies: ["Academic Excellence", "Leadership", "Merit-based"],
    icon: Award,
    color: "bg-yellow-500",
  },
  {
    id: 8,
    type: "education",
    title: "Higher Secondary (Computer Science)",
    organization: "Capital College And Research Centre",
    location: "Kathmandu, Nepal",
    period: "July 2018 - Sept 2020",
    description:
      "CGPA: 3.45/4.0. Awarded NEB Scholarship by Ministry of Education, Nepal. Specialized in Computer Science fundamentals.",
    technologies: ["Computer Science", "Mathematics", "Physics"],
    icon: GraduationCap,
    color: "bg-teal-500",
  },
]

const typeColors = {
  experience: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950",
  project: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950",
  education: "border-indigo-200 bg-indigo-50 dark:border-indigo-800 dark:bg-indigo-950",
  achievement: "border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950",
}

export function ExperienceTimeline() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            My Journey
          </h3>
          <p className="text-muted-foreground">
            From academic excellence to real-world impact in AI/ML and data engineering
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center shadow-lg ${
                      item.current ? "ring-4 ring-green-200 dark:ring-green-800" : ""
                    }`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  {item.current && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full"
                    />
                  )}
                </div>

                {/* Content Card */}
                <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }} className="flex-1">
                  <Card className={`${typeColors[item.type]} border-2 hover:shadow-lg transition-all duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{item.title}</h4>
                          <p className="font-semibold text-primary dark:text-gray-200 mb-2">{item.organization}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="text-xs text-gray-700 dark:text-gray-100 dark:border-gray-500 dark:bg-gray-700"
                        >
                          {item.type}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-muted-foreground dark:text-gray-400" />
                          <span className="text-gray-700 dark:text-gray-200">{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-muted-foreground dark:text-gray-400" />
                          <span className="text-gray-700 dark:text-gray-200">{item.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground dark:text-gray-300 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs dark:bg-gray-700 dark:text-gray-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
