"use client";

import { motion } from "framer-motion";

export function HeroVisual() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative h-96 md:h-full min-h-96">
      {/* Dashboard Card */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-64 bg-card border border-border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="space-y-3">
          <div className="h-2 bg-primary rounded-full w-3/4"></div>
          <div className="h-2 bg-muted rounded-full w-full"></div>
          <div className="h-2 bg-muted rounded-full w-5/6"></div>
          <div className="pt-2 space-y-2">
            <div className="h-8 bg-primary/10 rounded"></div>
            <div className="h-8 bg-accent/10 rounded"></div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Card */}
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: true }}
        className="absolute top-32 right-0 w-40 bg-card border border-border rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="space-y-2">
          <div className="h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl"></div>
          <div className="h-1.5 bg-muted rounded-full w-3/4"></div>
          <div className="h-1.5 bg-muted rounded-full w-1/2"></div>
        </div>
      </motion.div>

      {/* Code Card */}
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        viewport={{ once: true }}
        className="absolute bottom-0 left-1/4 w-56 bg-card border border-border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow font-mono text-sm"
      >
        <div className="space-y-2">
          <div className="text-primary">
            <span className="text-muted-foreground">&lt;</span>
            <span>Component</span>
            <span className="text-muted-foreground">&gt;</span>
          </div>
          <div className="text-muted-foreground pl-4">&nbsp;prop=&#34;value&#34;</div>
          <div className="text-primary">
            <span className="text-muted-foreground">&lt;/</span>
            <span>Component</span>
            <span className="text-muted-foreground">&gt;</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
