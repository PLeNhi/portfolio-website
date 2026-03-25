"use client";

import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollFadeIn } from "./scroll-fade-in";
import { HeroVisual } from "./hero-visual";
import Link from "next/link";

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
}

export function Hero({ name, title, subtitle, intro, email, github, linkedin }: HeroProps) {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <ScrollFadeIn className="space-y-8">
            <div className="space-y-4">
              <ScrollFadeIn delay={0.1}>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Welcome to my portfolio
                </p>
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.2}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  {name}
                </h1>
              </ScrollFadeIn>

              <ScrollFadeIn delay={0.3}>
                <div className="space-y-3">
                  <p className="text-xl md:text-2xl font-semibold text-muted-foreground">
                    {title}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium">
                    {subtitle}
                  </p>
                </div>
              </ScrollFadeIn>
            </div>

            <ScrollFadeIn delay={0.4} className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              {intro}
            </ScrollFadeIn>

            {/* CTAs */}
            <ScrollFadeIn delay={0.5} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                asChild
                className="group"
              >
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
            </ScrollFadeIn>

            {/* Social Links */}
            <ScrollFadeIn delay={0.6} className="flex gap-4 pt-2">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
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
