"use client";

import { ScrollFadeIn } from "./scroll-fade-in";

interface Stat {
  label: string;
  value: string;
}

interface AboutProps {
  description: string;
  stats: Stat[];
}

export function About({ description, stats }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="space-y-12">
            <div className="space-y-4">
              <ScrollFadeIn>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  About Me
                </p>
              </ScrollFadeIn>
              <ScrollFadeIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Building reliable & scalable frontend experiences
                </h2>
              </ScrollFadeIn>
            </div>

            <ScrollFadeIn delay={0.2} className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {description}
            </ScrollFadeIn>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8">
              {stats.map((stat, index) => (
                <ScrollFadeIn
                  key={index}
                  delay={0.3 + index * 0.1}
                  className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
