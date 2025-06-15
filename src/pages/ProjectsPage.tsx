import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import NeumorphicCard from '../components/NeumorphicCard';

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
  color: string;
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
      },
      color: "from-purple-500 to-pink-600"
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
      },
      color: "from-blue-500 to-purple-600"
    }
  ];  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prevIndex) => (
      prevIndex + newDirection < 0 
        ? projects.length - 1 
        : (prevIndex + newDirection) % projects.length
    ));
  }, [projects.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && activeIndex > 0) {
      paginate(-1);
    } else if (e.key === 'ArrowRight' && activeIndex < projects.length - 1) {
      paginate(1);
    }
  }, [activeIndex, projects.length, paginate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleImageLoad = (projectTitle: string) => {
    setIsImageLoading(prev => ({ ...prev, [projectTitle]: false }));
  };

  const handleImageError = (projectTitle: string) => {
    setIsImageLoading(prev => ({ ...prev, [projectTitle]: false }));
    // Could set a fallback image here
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-4 py-16 md:p-6 lg:p-8 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="w-full max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h1>
        
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-w-5xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full h-full"
            >
              <NeumorphicCard className="w-full h-full">
                <div className="grid md:grid-cols-2 gap-6 h-full p-6">
                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className={`text-3xl font-bold mb-2 bg-gradient-to-r ${projects[activeIndex].color} bg-clip-text text-transparent`}>
                        {projects[activeIndex].title}
                      </h3>
                      <h4 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                        {projects[activeIndex].subtitle}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {projects[activeIndex].description}
                      </p>
                    </div>

                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {projects[activeIndex].technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700"
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
                              className={`px-4 py-2 rounded-lg bg-gradient-to-r ${projects[activeIndex].color} text-white font-medium`}
                            >
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </motion.a>
                          )
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
                    {isImageLoading[projects[activeIndex].title] !== false && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
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
              </NeumorphicCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(-1)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            disabled={activeIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
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
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex
                    ? 'bg-primary'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => paginate(1)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
            disabled={activeIndex === projects.length - 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
