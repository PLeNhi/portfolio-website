"use client";

import { ScrollFadeIn } from "./scroll-fade-in";

interface SkillGroup {
  name: string;
  skills: string[];
}

interface SkillsProps {
  groups: SkillGroup[];
}

export function Skills({ groups }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="space-y-12">
            <div className="space-y-4">
              <ScrollFadeIn>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Skills & Expertise
                </p>
              </ScrollFadeIn>
              <ScrollFadeIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Technologies & Tools I Master
                </h2>
              </ScrollFadeIn>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group, index) => (
                <ScrollFadeIn
                  key={index}
                  delay={0.2 + index * 0.1}
                  className="bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold mb-4 text-primary">
                    {group.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
