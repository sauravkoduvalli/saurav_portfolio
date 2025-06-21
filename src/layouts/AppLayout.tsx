import { useEffect, useState, useRef, useCallback, useTransition } from 'react';
import type { ReactNode } from 'react';
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

  // Intersection observer to update current section
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
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
        root: container,
        threshold: [0.5],
      }
    );

    const sectionElements = container.querySelectorAll('section');
    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections, startTransition]);

  // Native smooth scroll to section
  const scrollToSection = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const sectionElement = container.querySelector(`#${sections[index].id}`);
    if (sectionElement) {
      (sectionElement as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
      startTransition(() => setCurrentSection(index));
    } else if (index === 0) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
      startTransition(() => setCurrentSection(0));
    }
  }, [sections]);

  // Touch event handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientY;
    const touchDiff = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (Math.abs(touchDiff) > minSwipeDistance) {
      if (touchDiff > 0 && currentSection < sections.length - 1) {
        scrollToSection(currentSection + 1);
      } else if (touchDiff < 0 && currentSection > 0) {
        scrollToSection(currentSection - 1);
      }
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background dark:bg-darkBackground text-text dark:text-darkText transition-colors duration-300">
      <ThemeControl />
      <VerticalScrollNav
        sections={sections}
        currentSection={currentSection}
        onDotClick={scrollToSection}
      />
      <div
        ref={containerRef}
        onTouchStart={(e) => {
          if (!(e.target as HTMLElement).closest('button')) {
            handleTouchStart(e);
          }
        }}
        onTouchEnd={(e) => {
          if (!(e.target as HTMLElement).closest('button')) {
            handleTouchEnd(e);
          }
        }}
        className="h-full w-full overflow-y-auto scroll-smooth overscroll-y-contain"
        style={{
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y pinch-zoom',
        }}
      >
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="min-h-screen w-screen snap-start relative"
          >
            {section.component}
          </section>
        ))}
      </div>
    </div>
  );
};

export default AppLayout;
