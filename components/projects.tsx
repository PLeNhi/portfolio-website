"use client";

import { ExternalLink, Github, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollFadeIn } from "./scroll-fade-in";
import Link from "next/link";

interface Project {
  id: number;
  name: string;
  summary: string;
  description: string;
  highlights: string[];
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
  featured: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="space-y-12">
            <div className="space-y-4">
              <ScrollFadeIn>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Featured Work
                </p>
              </ScrollFadeIn>
              <ScrollFadeIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Projects I'm Proud Of
                </h2>
              </ScrollFadeIn>
            </div>

            {/* Featured Project */}
            {featuredProject && (
              <ScrollFadeIn delay={0.2}>
                <div className="bg-card border border-border rounded-lg p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-3xl md:text-4xl font-bold">
                          {featuredProject.name}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {featuredProject.summary}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {featuredProject.description}
                      </p>

                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Key Highlights
                        </p>
                        <ul className="space-y-2">
                          {featuredProject.highlights.map((highlight, index) => (
                            <li
                              key={index}
                              className="flex gap-3 text-muted-foreground"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {featuredProject.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3 pt-4">
                        <Button asChild size="sm">
                          <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Project Placeholder */}
                    <div className="h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border border-border">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 bg-primary/20 rounded-lg mx-auto"></div>
                        <p className="text-sm text-muted-foreground">
                          Project Preview
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollFadeIn>
            )}

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <ScrollFadeIn
                    key={project.id}
                    delay={0.3 + index * 0.1}
                    className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors flex flex-col"
                  >
                    {/* Project Preview */}
                    <div className="h-48 bg-gradient-to-br from-secondary/30 to-muted rounded-lg mb-6 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <div className="w-16 h-16 bg-muted rounded mx-auto"></div>
                        <p className="text-xs text-muted-foreground">Preview</p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">{project.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {project.summary}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                          Highlights
                        </p>
                        <ul className="space-y-1">
                          {project.highlights.slice(0, 3).map((highlight, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-muted-foreground flex gap-2"
                            >
                              <span className="text-primary">•</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.techStack.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4 mt-4 border-t border-border">
                      <Button asChild variant="ghost" size="sm" className="flex-1">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                          Demo
                        </a>
                      </Button>
                      <Button asChild variant="ghost" size="sm" className="flex-1">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3.5 h-3.5 mr-1.5" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </ScrollFadeIn>
                ))}
              </div>
            )}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
