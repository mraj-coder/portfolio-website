"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Check, Loader2 } from "lucide-react"

export function ResumeDownload() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadComplete, setDownloadComplete] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      // Create a temporary link element for download
      const link = document.createElement("a")
      link.href = "https://drive.google.com/uc?export=download&id=1bd23QTXGqtUFbaFjGhe1HHt7tAldrvbi"
      link.download = "Abhishek_Jha_Resume.pdf"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setDownloadComplete(true)
    } catch (error) {
      // Fallback to opening in new tab if direct download fails
      window.open("https://drive.google.com/file/d/1bd23QTXGqtUFbaFjGhe1HHt7tAldrvbi/view?usp=drive_link", "_blank")
      setDownloadComplete(true)
    }

    setIsDownloading(false)

    // Reset after 3 seconds
    setTimeout(() => setDownloadComplete(false), 3000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6 text-center space-y-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center"
          >
            <FileText className="w-8 h-8 text-primary" />
          </motion.div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Download Resume</h3>
            <p className="text-sm text-muted-foreground">
              Get a comprehensive overview of my skills, experience, and achievements
            </p>
          </div>

          <Button onClick={handleDownload} disabled={isDownloading} className="w-full group" size="lg">
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Preparing Download...
              </>
            ) : downloadComplete ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Downloaded!
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download PDF Resume
              </>
            )}
          </Button>

          <div className="text-xs text-muted-foreground">Last updated: January 2025 • PDF Format • 2 pages</div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
