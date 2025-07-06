import { useState, useEffect, useTransition, useCallback } from "react";
import type { ReactNode } from "react";
import ThemeControl from "../components/ThemeControl";
import VerticalScrollNav from "../components/VerticalScrollNav";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Section {
  id: string;
  component: ReactNode;
}

interface AppLayoutProps {
  sections: Section[];
}

const AppLayout = ({ sections }: AppLayoutProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [, startTransition] = useTransition();

  // Intersection observer to update current section
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        let maxRatio = 0;
        let maxIndex = 0;
        entries.forEach((entry) => {
          const index = sections.findIndex((s) => s.id === entry.target.id);
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxIndex = index;
          }
        });
        startTransition(() => setCurrentSection(maxIndex));
      },
      {
        root: null, // use window
        threshold: [0.5],
      }
    );
  
    const sectionElements = document.querySelectorAll("section");
    sectionElements.forEach((section) => observer.observe(section));
  
    return () => observer.disconnect();
  }, [sections, startTransition]);

  // Native smooth scroll to section
  const scrollToSection = useCallback((index: number) => {
      const sectionElement = document.getElementById(sections[index].id);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
        startTransition(() => setCurrentSection(index));
      } else if (index === 0) {
        window.scrollTo({ top: 0, behavior: "smooth" });
        startTransition(() => setCurrentSection(0));
      }
    },[sections]
  );

  return (
    <div className="md:min-h-screen text-text dark:text-darkText transition-colors duration-300">
      <ThemeControl />
      <VerticalScrollNav
        sections={sections}
        currentSection={currentSection}
        onDotClick={scrollToSection}
      />
      <Navbar />
      <div>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="md:min-h-screen w-full snap-start relative"
          >
            {section.component}
          </section>
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
