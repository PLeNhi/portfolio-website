import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { CaseStudies } from "@/components/case-studies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        name={portfolioData.name}
        title={portfolioData.title}
        subtitle={portfolioData.subtitle}
        intro={portfolioData.intro}
        email={portfolioData.email}
        github={portfolioData.github}
        linkedin={portfolioData.linkedin}
      />
      <About
        description={portfolioData.about.description}
        stats={portfolioData.about.stats}
      />
      <Skills groups={portfolioData.skills.groups} />
      <Projects projects={portfolioData.projects} />
      <Experience experiences={portfolioData.experience} />
      <CaseStudies caseStudies={portfolioData.caseStudies} />
      <Contact
        description={portfolioData.contact.description}
        email={portfolioData.email}
        github={portfolioData.github}
        linkedin={portfolioData.linkedin}
      />
      <Footer name={portfolioData.name} />
    </main>
  );
}
