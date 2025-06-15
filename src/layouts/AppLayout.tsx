import { useEffect, useState, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeControl from '../components/ThemeControl';

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
  const [touchStart, setTouchStart] = useState(0);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollTop = container.scrollTop;
    const viewportHeight = container.clientHeight;
    setShowScrollUp(scrollTop > viewportHeight * 0.3);
  }, []);

  // Track scroll position for scroll-up button with debounce
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeoutId: number;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(handleScroll, 100);
    };

    container.addEventListener('scroll', debouncedScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  // Improved intersection observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const index = sections.findIndex((s) => s.id === entry.target.id);
            setCurrentSection(index);
          }
        });
      },
      {
        root: container,
        threshold: [0.2, 0.5, 0.8],
        rootMargin: '-10% 0px'
      }
    );

    const sectionElements = container.querySelectorAll('section');
    sectionElements.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sections, isScrolling]);

  // Smooth scroll implementation
  const scrollToSection = useCallback((index: number) => {
    setIsScrolling(true);
    const container = containerRef.current;
    if (!container) return;

    const sectionElement = container.querySelector(`#${sections[index].id}`);
    if (sectionElement) {
      const targetPosition = (sectionElement as HTMLElement).getBoundingClientRect().top + container.scrollTop;
      
      container.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      setCurrentSection(index);
      
      // Clear the isScrolling flag after animation completes
      const clearScrollFlag = () => setIsScrolling(false);
      setTimeout(clearScrollFlag, 1000);
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

  const ScrollButton = ({ direction, onClick, show = true }: { direction: 'up' | 'down', onClick: () => void, show?: boolean }) => (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: direction === 'up' ? 20 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: direction === 'up' ? 20 : -20 }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick();
          }}
          className={`fixed ${direction === 'up' ? 'bottom-8' : 'bottom-24'} left-1/2 transform -translate-x-1/2 z-[100]
            bg-gray-800/80 backdrop-blur-sm p-3 rounded-full border border-gray-700
            hover:bg-gray-800/90 hover:border-gray-600 transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            active:scale-95 cursor-pointer select-none
            flex items-center gap-2 text-gray-300 hover:text-white`}
          style={{ touchAction: 'manipulation' }}
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
    <div className="relative h-screen w-screen overflow-hidden bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300">
      <ThemeControl />
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
              
              {/* Show scroll buttons with improved positioning and logic */}
              {index === 0 && (
                <ScrollButton 
                  direction="down" 
                  onClick={() => {
                    const nextSection = sections[1];
                    if (nextSection) {
                      setIsScrolling(true);
                      scrollToSection(1);
                    }
                  }}
                  show={true}
                />
              )}
              {showScrollUp && index === currentSection && index !== 0 && (
                <ScrollButton direction="up" onClick={() => scrollToSection(0)} show={true} />
              )}
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppLayout;
