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
      image: "/assets/thai-airways.png",
      technologies: ["Flutter", "Bloc", "RESTful APIs", "Firebase"],
      links: {
        appStore: "https://apps.apple.com/us/app/thai-airways/id1393912966",
        playStore: "https://play.google.com/store/apps/details?id=com.thaiairways.mobile&pcampaignid=web_share"
      }
    },
    {
      title: "miCoPS",
      subtitle: "Healthcare Management System",
      description: "Developed a comprehensive healthcare management system using React Native. Features include appointment scheduling, medical records management, and real-time consultation tracking.",
      image: "/assets/micops.png",
      technologies: ["React Native", "TypeScript", "Redux", "Node.js"],
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.keralapolice.micops&pcampaignid=web_share"
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
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-[#18181b] text-black dark:text-white px-4 py-16" id="projects">
      <div className="w-full max-w-5xl px-4 md:px-8 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold mb-10 text-center"
        >
          Projects
        </motion.h2>
        <div className="relative w-full flex items-center justify-center" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          {/* Carousel Arrows */}
          <button
            aria-label="Previous project"
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-[#232323] border border-gray-200 dark:border-[#232323] shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-[#232323]/80 transition-all"
            style={{ outline: 'none' }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            aria-label="Next project"
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-[#232323] border border-gray-200 dark:border-[#232323] shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-[#232323]/80 transition-all"
            style={{ outline: 'none' }}
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black dark:text-white" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
          </button>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              layout
              className="w-full h-full bg-white dark:bg-[#232323] border border-gray-200 dark:border-[#232323] shadow-lg rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Image Section */}
              <div className="w-full md:w-2/5 flex items-center justify-center">
                <div className="relative w-full h-[200px] sm:h-[260px] md:h-[340px] rounded-xl overflow-hidden bg-gray-100 dark:bg-[#18181b] border border-gray-200 dark:border-[#232323] flex items-center justify-center shadow-md">
                  {isImageLoading[projects[activeIndex].title] !== false && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-black dark:border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <img
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    className="w-full h-full object-cover"
                    onLoad={() => handleImageLoad(projects[activeIndex].title)}
                    onError={() => handleImageError(projects[activeIndex].title)}
                  />
                </div>
              </div>
              {/* Text/Info Section */}
              <div className="w-full md:w-3/5 flex flex-col gap-4 md:py-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-1 text-black dark:text-white">{projects[activeIndex].title}</h3>
                <h4 className="sm:text-sm md:text-lg text-gray-700 dark:text-gray-300 mb-2 font-medium">
                  {projects[activeIndex].subtitle}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4 max-w-xl">
                  {projects[activeIndex].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {projects[activeIndex].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-sm rounded-full bg-gray-100 dark:bg-[#18181b] border border-gray-200 dark:border-[#232323] text-black dark:text-white shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {Object.entries(projects[activeIndex].links).map(([key, url]) => (
                    url && (
                      <motion.a
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={[
                          'px-4 py-1.5 rounded-lg font-semibold text-xs xs:text-sm transition-all duration-300 flex items-center gap-2',
                          (key === 'appStore' || key === 'playStore')
                            ? 'bg-white text-black border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-[#232323] dark:text-white dark:border-[#444] dark:hover:bg-[#232323]/80'
                            : 'bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200'
                        ].join(' ')}
                      >
                        {key === 'appStore' && 'App Store'}
                        {key === 'playStore' && 'Play Store'}
                        {key !== 'appStore' && key !== 'playStore' && key.replace(/([A-Z])/g, ' $1').trim()}
                      </motion.a>
                    )
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Indicator Dots */}
        <div className="flex justify-center items-center gap-4 mt-6">
          {projects.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to project ${idx + 1}`}
              onClick={() => setActiveIndex(idx)}
              className={`transition-all duration-300 w-4 h-4 rounded-full border-2 focus:outline-none
                ${activeIndex === idx
                  ? 'border-black dark:border-white bg-black dark:bg-white ring-2 ring-gray-300 dark:ring-gray-700'
                  : 'border-gray-300 dark:border-[#232323] bg-gray-100 dark:bg-[#18181b] hover:border-black hover:bg-gray-200 dark:hover:bg-white/10'}
              `}
              style={{ minHeight: 0, minWidth: 0, padding: 0 }}
              tabIndex={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
