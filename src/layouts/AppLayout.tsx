import { useEffect, useState, useRef, useCallback, useTransition } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeControl from '../components/ThemeControl';
import VerticalScrollNav from '../components/VerticalScrollNav';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const [touchStart, setTouchStart] = useState(0);

  // Improved intersection observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
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
        root: container,
        threshold: [0.5], // Only trigger when at least half is visible
        // rootMargin removed for more accurate detection
      }
    );

    const sectionElements = container.querySelectorAll('section');
    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections, startTransition]);

  // Smooth scroll implementation
  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const sectionElement = container.querySelector(`#${sections[index].id}`);
    if (sectionElement) {
      // Use offsetTop relative to the scroll container for accurate scrolling
      const targetPosition = (sectionElement as HTMLElement).offsetTop;
      container.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      startTransition(() => setCurrentSection(index));
    } else if (index === 0) {
      // Fallback: scroll to top if first section
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      startTransition(() => setCurrentSection(0));
    }
  }, [sections]);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY;
    const touchDiff = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0 && currentSection < sections.length - 1) {
        // Swipe up
        scrollToSection(currentSection + 1);
      } else if (touchDiff < 0 && currentSection > 0) {
        // Swipe down
        scrollToSection(currentSection - 1);
      }
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <ThemeControl />
      {/* Vertical navigation dots */}
      <VerticalScrollNav
        sections={sections}
        currentSection={currentSection}
        onDotClick={scrollToSection}
      />
      <div
        ref={containerRef}
        onTouchStart={(e) => {
          // Only handle touch events if not clicking on a button
          if (!(e.target as HTMLElement).closest('button')) {
            handleTouchStart(e);
          }
        }}
        onTouchEnd={(e) => {
          // Only handle touch events if not clicking on a button
          if (!(e.target as HTMLElement).closest('button')) {
            handleTouchEnd(e);
          }
        }}
        className="h-full w-full overflow-y-auto scroll-smooth overscroll-y-contain"
        style={{ 
          scrollbarWidth: 'none', 
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y pinch-zoom'
        }}
      >
        <AnimatePresence mode="wait">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              className="min-h-screen w-screen snap-start relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-20%" }}
            >
              {section.component}
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppLayout;
