"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedText({ children, className = "", delay = 0 }: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Set initial state
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"

    // Animate in after delay
    const timer = setTimeout(() => {
      element.style.opacity = "1"
      element.style.transform = "translateY(0px)"
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
