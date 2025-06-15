import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';

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
  const [direction, setDirection] = useState(0);
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
    setDirection(newDirection);
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

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-gradient-to-br from-violet-50 via-sky-50 to-indigo-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(88,28,135,0.3),rgba(255,255,255,0))]"></div>
      
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text"
        >
          Projects
        </motion.h2>
        
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 100 : -100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full h-full p-8 rounded-3xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-indigo-500/5 dark:shadow-indigo-950/5"
            >
              <div className="grid md:grid-cols-2 gap-8 h-full">
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text">
                      {projects[activeIndex].title}
                    </h3>
                    <h4 className="text-xl text-slate-700 dark:text-slate-300 mb-4">
                      {projects[activeIndex].subtitle}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      {projects[activeIndex].description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[activeIndex].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm rounded-full bg-white/5 dark:bg-slate-800/40 backdrop-blur-md border border-violet-100 dark:border-slate-700/50 text-slate-700 dark:text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {Object.entries(projects[activeIndex].links).map(([key, url]) => (
                        url && (
                          <motion.a
                            key={key}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-500 dark:to-indigo-500 text-white font-medium hover:shadow-lg transition-all duration-300"
                          >
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </motion.a>
                        )
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-white/5 dark:bg-slate-800/40 backdrop-blur-md border border-white/10 dark:border-slate-700/30">
                  {isImageLoading[projects[activeIndex].title] !== false && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
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
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="p-3 rounded-full bg-white/10 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 text-slate-700 dark:text-slate-300"
            disabled={activeIndex === 0}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1);
                  setActiveIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'bg-gradient-to-r from-violet-600 to-sky-600 dark:from-violet-400 dark:to-sky-400 scale-125'
                    : 'bg-white/20 dark:bg-slate-700/50 hover:bg-violet-500/30 dark:hover:bg-violet-400/30'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="p-3 rounded-full bg-white/10 dark:bg-slate-800/40 backdrop-blur-md border border-white/20 dark:border-slate-700/30 text-slate-700 dark:text-slate-300"
            disabled={activeIndex === projects.length - 1}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
