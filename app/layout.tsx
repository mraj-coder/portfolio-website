import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/scroll-progress"
import { CustomCursor } from "@/components/custom-cursor"
import { EnhancedLoading } from "@/components/enhanced-loading"
import { FloatingElements } from "@/components/floating-elements"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "700"],
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600"],
})

export const metadata: Metadata = {
  title: "Abhishek Jha | AI/ML Engineer Portfolio",
  description:
    "AI/ML Engineer specializing in TensorFlow, PyTorch, and Data Analytics - Building intelligent solutions for tomorrow",
  generator: "v0.app",
  keywords: "AI, Machine Learning, Data Science, TensorFlow, PyTorch, Python, Portfolio, Abhishek Jha",
  authors: [{ name: "Abhishek Jha" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekjha.dev",
    title: "Abhishek Jha | AI/ML Engineer Portfolio",
    description: "AI/ML Engineer specializing in intelligent solutions and data analytics",
    siteName: "Abhishek Jha Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Jha | AI/ML Engineer Portfolio",
    description: "AI/ML Engineer specializing in intelligent solutions and data analytics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans bg-background text-foreground overflow-x-hidden">
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <EnhancedLoading />
          <ScrollProgress />
          <CustomCursor />
          <FloatingElements />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
