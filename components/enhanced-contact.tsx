"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { RevealSection, MagneticElement } from "./scroll-animations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code } from "lucide-react"

const contactInfo = [
  { icon: Mail, label: "Email", value: "ajha70809@gmail.com", href: "mailto:ajha70809@gmail.com" },
  { icon: Phone, label: "Phone", value: "+977 9865411151", href: "tel:+9779865411151" },
  { icon: Phone, label: "Phone (Alt)", value: "+91 7763897343", href: "tel:+917763897343" },
  { icon: MapPin, label: "Location", value: "Kathmandu, Nepal", href: "#" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/mraj-coder", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/abhishekjha923/", label: "LinkedIn" },
  { icon: Code, href: "https://leetcode.com/u/abhishekjha777/", label: "LeetCode" },
]

export function EnhancedContact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <motion.h2
              className="font-serif text-3xl md:text-4xl font-bold mb-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get In Touch
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in AI/ML projects or data science collaborations? Let's discuss how we can work together to
              build intelligent solutions.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <RevealSection delay={0.2}>
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="transition-all duration-300 focus:border-primary"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="transition-all duration-300 focus:border-primary"
                      required
                    />
                  </motion.div>

                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
                    <Textarea
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="min-h-32 transition-all duration-300 focus:border-primary resize-none"
                      required
                    />
                  </motion.div>

                  <MagneticElement strength={0.1}>
                    <Button type="submit" disabled={isSubmitting} className="w-full group relative overflow-hidden">
                      <motion.div
                        className="flex items-center justify-center"
                        animate={isSubmitting ? { x: -30 } : { x: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </motion.div>
                      {isSubmitting && (
                        <motion.div
                          initial={{ x: 30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        </motion.div>
                      )}
                    </Button>
                  </MagneticElement>
                </form>
              </CardContent>
            </Card>
          </RevealSection>

          {/* Contact Info */}
          <RevealSection delay={0.4}>
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ x: 10, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-card transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors duration-300">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <MagneticElement key={social.label} strength={0.2}>
                      <motion.a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-12 h-12 bg-card hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    </MagneticElement>
                  ))}
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </div>
    </section>
  )
}
