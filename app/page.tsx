import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { AnimatedSkills } from "@/components/animated-skills"
import { EnhancedAbout } from "@/components/enhanced-about"
import { EnhancedContact } from "@/components/enhanced-contact"
import { LoadingAnimation } from "@/components/loading-animation"
import { PerformanceMonitor } from "@/components/performance-monitor"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"

export default function HomePage() {
  return (
    <>
      {/* Added performance monitoring for Core Web Vitals */}
      <PerformanceMonitor />
      <LoadingAnimation />
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <HeroSection />

        {/* Enhanced About Section */}
        <EnhancedAbout />

        <section className="py-12 px-4 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <AnalyticsDashboard />
          </div>
        </section>

        {/* Interactive Project Showcase */}
        <ProjectShowcase />

        {/* Animated Skills Section */}
        <AnimatedSkills />

        {/* Enhanced Contact Section */}
        <EnhancedContact />
      </main>
    </>
  )
}
