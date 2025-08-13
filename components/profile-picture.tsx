"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { User } from "lucide-react"

interface ProfilePictureProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
  showBorder?: boolean
}

export function ProfilePicture({ size = "lg", className = "", showBorder = true }: ProfilePictureProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-48 h-48",
  }

  const hasProfileImage = true
  const profileImageUrl = "/abhishek-profile.jpg"

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`${sizeClasses[size]} ${className} relative`}
    >
      <div
        className={`
          ${sizeClasses[size]} rounded-full overflow-hidden relative
          ${showBorder ? "ring-4 ring-primary/20 ring-offset-4 ring-offset-background" : ""}
          bg-gradient-to-br from-primary/10 to-accent/10
          flex items-center justify-center
        `}
      >
        {hasProfileImage ? (
          <Image
            src={profileImageUrl || "/placeholder.svg"}
            alt="Abhishek Jha"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <User className="w-1/2 h-1/2 text-primary/60" />
          </div>
        )}
      </div>

      {/* Animated border */}
      {showBorder && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      )}
    </motion.div>
  )
}
