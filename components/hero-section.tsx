"use client"

import { ThreeHero } from "./three-hero"
import { AnimatedText } from "./animated-text"
import { ProfilePicture } from "./profile-picture"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5"
    >
      {/* 3D Background */}
      <ThreeHero />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl mx-auto text-center">
        <AnimatedText delay={200}>
          <ProfilePicture size="lg" className="mx-auto mb-8" />
        </AnimatedText>

        <AnimatedText delay={400}>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Hi, I'm Abhishek Jha
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-glow">
              AI/ML Enthusiast 
            </span>
          </h1>
        </AnimatedText>

        <AnimatedText delay={600} className="space-y-4 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Computer Science Engineering Graduate having interest in AI/ML and Data Analytics
          </p>
          <p className="text-lg text-muted-foreground/80">
            Python • TensorFlow • PyTorch • Scikit-learn • C++ • MERN Stack • PostgreSQL
          </p>
          <p className="text-base text-muted-foreground/70">
            📍 Kathmandu, Nepal • SRM Institute of Science and Technology • CGPA: 9.29/10.0
          </p>
        </AnimatedText>

        <AnimatedText delay={1000} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button
            size="lg"
            className="px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 animate-glow group"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span className="mr-2">Explore My Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:scale-110 transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://github.com/mraj-coder", "_blank")}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:scale-110 transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://www.linkedin.com/in/abhishekjha923/", "_blank")}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-accent hover:scale-110 transition-all duration-300 bg-transparent"
              onClick={() => window.open("mailto:ajha70809@gmail.com", "_blank")}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </AnimatedText>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none"></div>
    </section>
  )
}
