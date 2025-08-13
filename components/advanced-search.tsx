"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, X, Calendar, Code, Tag } from "lucide-react"

interface SearchFilters {
  query: string
  technologies: string[]
  categories: string[]
  dateRange: string
}

const availableTechnologies = [
  "Python",
  "React.js",
  "TensorFlow",
  "PyTorch",
  "PostgreSQL",
  "Node.js",
  "MongoDB",
  "Scikit-learn",
  "JavaScript",
  "Express.js",
  "Stripe API",
]

const availableCategories = ["AI/ML", "Web Development", "Database", "Full-Stack", "E-commerce"]

export function AdvancedSearch({ onFiltersChange }: { onFiltersChange: (filters: SearchFilters) => void }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    query: "",
    technologies: [],
    categories: [],
    dateRange: "all",
  })

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    const updated = { ...filters, ...newFilters }
    setFilters(updated)
    onFiltersChange(updated)
  }

  const toggleTechnology = (tech: string) => {
    const newTechs = filters.technologies.includes(tech)
      ? filters.technologies.filter((t) => t !== tech)
      : [...filters.technologies, tech]
    updateFilters({ technologies: newTechs })
  }

  const toggleCategory = (category: string) => {
    const newCategories = filters.categories.includes(category)
      ? filters.categories.filter((c) => c !== category)
      : [...filters.categories, category]
    updateFilters({ categories: newCategories })
  }

  const clearFilters = () => {
    const clearedFilters = {
      query: "",
      technologies: [],
      categories: [],
      dateRange: "all",
    }
    setFilters(clearedFilters)
    onFiltersChange(clearedFilters)
  }

  const activeFiltersCount =
    filters.technologies.length +
    filters.categories.length +
    (filters.dateRange !== "all" ? 1 : 0) +
    (filters.query ? 1 : 0)

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search projects, technologies, or descriptions..."
          value={filters.query}
          onChange={(e) => updateFilters({ query: e.target.value })}
          className="pl-10 pr-12"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute right-1 top-1/2 transform -translate-y-1/2"
        >
          <Filter className="w-4 h-4" />
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 w-5 p-0 text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Advanced Filters */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <CardContent className="p-6 space-y-6">
                {/* Technologies Filter */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Code className="w-4 h-4" />
                    <h4 className="font-medium">Technologies</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableTechnologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant={filters.technologies.includes(tech) ? "default" : "outline"}
                        className="cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => toggleTechnology(tech)}
                      >
                        {tech}
                        {filters.technologies.includes(tech) && <X className="w-3 h-3 ml-1" />}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Categories Filter */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-4 h-4" />
                    <h4 className="font-medium">Categories</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableCategories.map((category) => (
                      <Badge
                        key={category}
                        variant={filters.categories.includes(category) ? "default" : "outline"}
                        className="cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => toggleCategory(category)}
                      >
                        {category}
                        {filters.categories.includes(category) && <X className="w-3 h-3 ml-1" />}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Date Range Filter */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4" />
                    <h4 className="font-medium">Date Range</h4>
                  </div>
                  <div className="flex gap-2">
                    {["all", "2025", "2024", "2023"].map((range) => (
                      <Button
                        key={range}
                        variant={filters.dateRange === range ? "default" : "outline"}
                        size="sm"
                        onClick={() => updateFilters({ dateRange: range })}
                      >
                        {range === "all" ? "All Time" : range}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {activeFiltersCount > 0 && (
                  <div className="flex justify-end">
                    <Button variant="ghost" size="sm" onClick={clearFilters}>
                      <X className="w-4 h-4 mr-2" />
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filters Display */}
      {activeFiltersCount > 0 && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-2">
          {filters.query && (
            <Badge variant="secondary" className="gap-1">
              Search: "{filters.query}"
              <X className="w-3 h-3 cursor-pointer" onClick={() => updateFilters({ query: "" })} />
            </Badge>
          )}
          {filters.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="gap-1">
              {tech}
              <X className="w-3 h-3 cursor-pointer" onClick={() => toggleTechnology(tech)} />
            </Badge>
          ))}
          {filters.categories.map((category) => (
            <Badge key={category} variant="secondary" className="gap-1">
              {category}
              <X className="w-3 h-3 cursor-pointer" onClick={() => toggleCategory(category)} />
            </Badge>
          ))}
          {filters.dateRange !== "all" && (
            <Badge variant="secondary" className="gap-1">
              {filters.dateRange}
              <X className="w-3 h-3 cursor-pointer" onClick={() => updateFilters({ dateRange: "all" })} />
            </Badge>
          )}
        </motion.div>
      )}
    </div>
  )
}
