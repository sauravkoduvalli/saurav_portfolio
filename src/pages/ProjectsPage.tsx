import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, useRef } from 'react';

interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    live?: string;
    appStore?: string;
    playStore?: string;
  };
}

const ProjectsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState<{ [key: string]: boolean }>({});

  const projects: Project[] = [
    {
      title: "Thai Airways",
      subtitle: "Mobile App Revamp",
      description: "Led the development of Thai Airways' mobile app revamp, implementing a modern UI with Flutter. Enhanced user experience with real-time flight tracking, seamless booking flow, and personalized travel recommendations.",
      image: "/projects/thai-airways.png",
      technologies: ["Flutter", "Bloc", "RESTful APIs", "Firebase"],
      links: {
        appStore: "https://apps.apple.com/app/thai-airways",
        playStore: "https://play.google.com/store/apps/thai-airways"
      }
    },
    {
      title: "miCoPS",
      subtitle: "Healthcare Management System",
      description: "Developed a comprehensive healthcare management system using React Native. Features include appointment scheduling, medical records management, and real-time consultation tracking.",
      image: "/projects/micops.png",
      technologies: ["React Native", "TypeScript", "Redux", "Node.js"],
      links: {
        github: "https://github.com/yourusername/micops",
        appStore: "https://apps.apple.com/app/micops",
        playStore: "https://play.google.com/store/apps/micops"
      }
    }
  ];

  const paginate = useCallback((newDirection: number) => {
    setActiveIndex((prevIndex) => (
      prevIndex + newDirection < 0 
        ? projects.length - 1 
        : (prevIndex + newDirection) % projects.length
    ));
  }, [projects.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paginate(-1);
      if (e.key === 'ArrowRight') paginate(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  const handleImageLoad = (projectTitle: string) => {
    setIsImageLoading(prev => ({ ...prev, [projectTitle]: false }));
  };

  const handleImageError = (projectTitle: string) => {
    setIsImageLoading(prev => ({ ...prev, [projectTitle]: false }));
  };

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && activeIndex < projects.length - 1) {
          paginate(1);
        } else if (diff < 0 && activeIndex > 0) {
          paginate(-1);
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#EEEEEE] dark:bg-[#222831] px-2 sm:px-4 py-12 md:py-16">
      <div className="absolute inset-0" />
      <div className="w-full max-w-screen-lg mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-10 md:mb-14 text-[#D65A31]"
        >
          Projects
        </motion.h2>
        <div
          className="relative w-full min-h-[500px] flex items-stretch overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              layout
              className="w-full h-full bg-[#ffffff] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] shadow-2xl rounded-xl sm:rounded-2xl md:rounded-3xl p-3 xs:p-4 sm:p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
                {/* Text/Info Section */}
                <div className="flex-1 flex flex-col justify-between space-y-4 md:space-y-8">
                  <div>
                    <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-1 text-[#D65A31]">{projects[activeIndex].title}</h3>
                    <h4 className="text-base xs:text-lg sm:text-xl text-[#222831] dark:text-[#EEEEEE] mb-2">
                      {projects[activeIndex].subtitle}
                    </h4>
                    <p className="text-[#4a4a4a] dark:text-[#b0b0b0] text-sm sm:text-base">
                      {projects[activeIndex].description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-5">
                      {projects[activeIndex].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#222831] dark:text-[#EEEEEE]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {Object.entries(projects[activeIndex].links).map(([key, url]) => (
                        url && (
                          <motion.a
                            key={key}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 sm:px-4 py-2 rounded-xl bg-[#D65A31] text-[#EEEEEE] font-medium hover:bg-[#b94a25] dark:hover:bg-[#b94a25] text-xs sm:text-base transition-all duration-300"
                          >
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </motion.a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
                {/* Image Section */}
                <div className="flex-1 flex items-center justify-center min-h-[160px] xs:min-h-[200px] sm:min-h-[240px] md:min-h-0">
                  <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-full aspect-[4/3] sm:aspect-[16/9] rounded-lg sm:rounded-xl overflow-hidden bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d]">
                    {isImageLoading[projects[activeIndex].title] !== false && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-[#D65A31] border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                    <img
                      src={projects[activeIndex].image}
                      alt={projects[activeIndex].title}
                      className="w-full h-auto max-h-60 sm:max-h-80 md:max-h-[340px] object-cover"
                      onLoad={() => handleImageLoad(projects[activeIndex].title)}
                      onError={() => handleImageError(projects[activeIndex].title)}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Carousel Navigation - hidden on mobile/tablet */}
        <div className="hidden md:flex flex-row justify-center items-center gap-2 mt-5">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => paginate(-1)}
            className="p-2 rounded-full bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#222831] dark:text-[#EEEEEE] transition-all duration-200 disabled:opacity-40"
            disabled={activeIndex === 0}
            aria-label="Previous project"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <div className="flex flex-row items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full border border-[#cccccc] dark:border-[#2d2d2d] transition-all duration-200 ${
                  index === activeIndex
                    ? 'bg-[#D65A31] scale-110'
                    : 'bg-[#EEEEEE] dark:bg-[#393E46]'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => paginate(1)}
            className="p-2 rounded-full bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#222831] dark:text-[#EEEEEE] transition-all duration-200 disabled:opacity-40"
            disabled={activeIndex === projects.length - 1}
            aria-label="Next project"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
        {/* Swipe hint for mobile/tablet */}
        <div className="block md:hidden mt-4 text-center text-xs text-[#888] select-none">
          <span className="inline-flex items-center gap-1">
            <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            Swipe left/right to explore
            <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
