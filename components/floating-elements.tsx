"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5 dark:opacity-10"
          suppressHydrationWarning={true}
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          <div
            suppressHydrationWarning={true}
            className={`w-${Math.random() > 0.5 ? "20" : "16"} h-${Math.random() > 0.5 ? "20" : "16"} 
            ${Math.random() > 0.5 ? "bg-primary" : "bg-accent"} 
            ${Math.random() > 0.5 ? "rounded-full" : "rounded-lg rotate-45"}`}
          />
        </motion.div>
      ))}
    </div>
  )
}
