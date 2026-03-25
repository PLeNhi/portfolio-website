"use client";

import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollFadeIn } from "./scroll-fade-in";
import Link from "next/link";

interface ContactProps {
  description: string;
  email: string;
  github: string;
  linkedin: string;
}

export function Contact({ description, email, github, linkedin }: ContactProps) {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn>
          <div className="space-y-12 text-center">
            <div className="space-y-4">
              <ScrollFadeIn>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Let's Connect
                </p>
              </ScrollFadeIn>
              <ScrollFadeIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  I'm Open to Opportunities
                </h2>
              </ScrollFadeIn>
              <ScrollFadeIn delay={0.2} className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </ScrollFadeIn>
            </div>

            {/* Primary CTA */}
            <ScrollFadeIn delay={0.3}>
              <Button
                size="lg"
                asChild
                className="group"
              >
                <a href={`mailto:${email}`}>
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </ScrollFadeIn>

            {/* Social & Links */}
            <ScrollFadeIn delay={0.4}>
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {email}
                  </a>
                </div>

                {/* Social Links */}
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Find me on</p>
                  <div className="flex gap-3 justify-center">
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group"
                    >
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-5 h-5 mr-2" />
                        GitHub
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="group"
                    >
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="w-5 h-5 mr-2" />
                        LinkedIn
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Resume */}
                <div>
                  <Button
                    asChild
                    variant="default"
                    className="group"
                  >
                    <a href="/NhiLe_CV_FrontendEngineer.pdf" download>
                      Download Resume
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
