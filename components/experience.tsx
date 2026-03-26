"use client";

import { ScrollFadeIn } from "./scroll-fade-in";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

interface ExperienceProps {
  experiences: ExperienceItem[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-40 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="space-y-12">
            <div className="space-y-4">
              <ScrollFadeIn>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Professional Background
                </p>
              </ScrollFadeIn>
              <ScrollFadeIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Production Experience That Ships
                </h2>
              </ScrollFadeIn>
            </div>

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <ScrollFadeIn
                    delay={0.2 + index * 0.1}
                    className="bg-card border border-border rounded-lg p-8"
                  >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                        <h3 className="text-2xl font-semibold">{exp.title}</h3>
                        <span className="text-sm text-muted-foreground font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-lg text-primary font-medium">{exp.company}</p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 pt-2">
                      <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Key Contributions
                      </p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex gap-3 text-muted-foreground text-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollFadeIn>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
