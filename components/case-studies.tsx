"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollFadeIn } from "./scroll-fade-in";

interface CaseStudy {
  id: number;
  title: string;
  summary: string;
  description: string;
}

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          <div className="space-y-12">
            <div className="space-y-4">
              <ScrollFadeIn>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Deep Dives
                </p>
              </ScrollFadeIn>
              <ScrollFadeIn delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  How I Think as an Engineer
                </h2>
              </ScrollFadeIn>
              <ScrollFadeIn delay={0.2}>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  These case studies showcase my approach to solving real problems,
                  managing complexity, and building systems that scale.
                </p>
              </ScrollFadeIn>
            </div>

            {/* Case Study Cards */}
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              {caseStudies.map((study, index) => (
                <ScrollFadeIn
                  key={study.id}
                  delay={0.3 + index * 0.1}
                  className="bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-all hover:shadow-lg flex flex-col"
                >
                  <div className="space-y-4 flex-1">
                    <h3 className="text-xl font-semibold">{study.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-start mt-6 pl-0 group"
                  >
                    Read more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
