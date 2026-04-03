"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollFadeIn } from "./scroll-fade-in";
import { HeroVisual } from "./hero-visual";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
}

export function Hero({
  name,
  title,
  subtitle,
  intro,
  email,
  github,
  linkedin,
}: HeroProps) {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1.5 }}
          className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)] flex items-center">
          {/* Left Content */}
          <ScrollFadeIn className="space-y-8">
            <div className="space-y-4">
              <ScrollFadeIn delay={0.1}>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-sm font-medium text-primary uppercase tracking-wider"
                >
                  Welcome to my portfolio
                </motion.p>
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.2}>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                >
                  {name}
                </motion.h1>
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.3}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3"
                >
                  <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {title}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {subtitle}
                  </p>
                </motion.div>
              </ScrollFadeIn>
            </div>

            <ScrollFadeIn
              delay={0.4}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {intro}
              </motion.p>
            </ScrollFadeIn>

            {/* CTAs */}
            <ScrollFadeIn
              delay={0.5}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Button size="lg" asChild className="group">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button size="lg" variant="outline" asChild>
                  <a href="/Frontend_Developer_Le_Thi_Y_Nhi.docx.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </ScrollFadeIn>

            {/* Social Links */}
            <ScrollFadeIn delay={0.6} className="flex gap-4 pt-2">
              {[
                { icon: Github, href: github, label: "GitHub" },
                { icon: Linkedin, href: linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${email}`, label: "Email" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={
                    social.label !== "Email" ? "noopener noreferrer" : undefined
                  }
                  className="p-2 rounded-lg hover:bg-muted transition-all text-muted-foreground hover:text-primary hover:scale-110"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + idx * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </ScrollFadeIn>
          </ScrollFadeIn>

          {/* Right Visual */}
          <ScrollFadeIn delay={0.3} direction="right">
            <HeroVisual />
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
