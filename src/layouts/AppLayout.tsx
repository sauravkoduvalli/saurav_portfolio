import { useEffect, useState, useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DotNavigation from '../components/DotNavigation';

interface Section {
  id: string;
  component: ReactNode;
}

interface AppLayoutProps {
  sections: Section[];
}

const AppLayout = ({ sections }: AppLayoutProps) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Track scroll position for scroll-up button
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      setShowScrollUp(scrollTop > container.clientHeight * 0.5);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s.id === entry.target.id);
            if (!isScrolling) {
              setCurrentSection(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.3, // Reduced threshold for better detection
        rootMargin: '-10% 0px' // Add margin to trigger earlier
      }
    );

    const sectionElements = container.querySelectorAll('section');
    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections, isScrolling]);

  const scrollToSection = (index: number) => {
    setIsScrolling(true);
    const container = containerRef.current;
    if (!container) return;

    const sectionElement = container.querySelector(`#${sections[index].id}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setCurrentSection(index);
      
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  const ScrollButton = ({ direction, onClick, show = true }: { direction: 'up' | 'down', onClick: () => void, show?: boolean }) => (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: direction === 'up' ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: direction === 'up' ? 20 : -20 }}
          onClick={onClick}
          className={`absolute ${direction === 'up' ? 'top-8' : 'bottom-8'} left-1/2 transform -translate-x-1/2
            bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-gray-700
            hover:bg-gray-800/90 hover:border-gray-600 transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            flex items-center gap-2 text-gray-300 hover:text-white`}
        >
          {direction === 'up' ? (
            <>
              <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-sm">Back to Top</span>
            </>
          ) : (
            <>
              <span className="text-sm">Scroll to Explore</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );

  return (
    <div className="h-screen w-screen bg-gray-900 text-white overflow-hidden">
      <DotNavigation
        totalSections={sections.length}
        currentSection={currentSection}
        onDotClick={scrollToSection}
      />
      
      <div
        ref={containerRef}
        className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none' }}
      >
        <AnimatePresence mode="wait">
          {sections.map((section, index) => (
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
              
              {/* Show scroll-up button conditionally */}
              {index === 0 && <ScrollButton direction="down" onClick={() => scrollToSection(1)} />}
              {showScrollUp && index === currentSection && index !== 0 && (
                <ScrollButton direction="up" onClick={() => scrollToSection(0)} />
              )}
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppLayout;
