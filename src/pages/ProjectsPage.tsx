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

// Custom hook to detect desktop (non-touch) devices
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
}

const ProjectsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState<{ [key: string]: boolean }>({});
  const isDesktop = useIsDesktop();

  const projects: Project[] = [
    {
      title: "Thai Airways",
      subtitle: "Mobile App Revamp",
      description: "Led the development of Thai Airways' mobile app revamp, implementing a modern UI with Flutter. Enhanced user experience with real-time flight tracking, seamless booking flow, and personalized travel recommendations.",
      image: "/assets/thai-airways.png",
      technologies: ["Flutter", "Bloc", "RESTful APIs", "Firebase"],
      links: {
        appStore: "https://apps.apple.com/us/app/thai-airways/id1393912966",
        playStore: "https://apps.apple.com/us/app/thai-airways/id1393912966"
      }
    },
    {
      title: "miCoPS",
      subtitle: "Healthcare Management System",
      description: "Developed a comprehensive healthcare management system using React Native. Features include appointment scheduling, medical records management, and real-time consultation tracking.",
      image: "/assets/micops.png",
      technologies: ["React Native", "TypeScript", "Redux", "Node.js"],
      links: {
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
    <div className="md:min-h-screen w-full flex items-center justify-center bg-[#EEEEEE] dark:bg-[#222831] px-6 py-12 md:py-16" id='projects'>
      <div className="absolute inset-0" />
      <div className="w-full max-w-screen-lg mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-10 md:mb-14 text-[#D65A31]"
        >
          Projects
        </motion.h2>
        <div
          className="relative w-full flex items-stretch overflow-hidden min-h-[400px] md:min-h-[500px] h-[60vh]"
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
              className="w-full h-full bg-[#ffffff] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] shadow-2xl rounded-xl sm:rounded-2xl md:rounded-3xl p-4 md:p-8"
            >
              <div className="flex flex-col md:flex-row justify-around md:justify-between gap-2 md:gap-4 items-center h-full">
                {/* Image Section - show first on mobile */}
                <div className="w-full md:flex-[1.2] flex items-center justify-center h-auto md:h-full min-w-0 order-1 md:order-none">
                  <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[260px] md:h-[400px] rounded-xl overflow-hidden bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] flex items-center justify-center">
                    {isImageLoading[projects[activeIndex].title] !== false && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-[#D65A31] border-t-transparent rounded-full animate-spin" />
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
                <div className="w-full md:flex-1 flex flex-col md:py-6 px-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-1 text-[#D65A31]">{projects[activeIndex].title}</h3>
                    <h4 className="sm:text-sm md:text-lg text-[#EEEEEE] dark:text-[#EEEEEE] mb-2 font-medium">
                      {projects[activeIndex].subtitle}
                    </h4>
                    <p className="text-[#b0b0b0] dark:text-[#b0b0b0] mb-4 max-w-xl">
                      {projects[activeIndex].description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {projects[activeIndex].technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 text-sm rounded-full bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#222831] dark:text-[#EEEEEE]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
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
                                ? 'bg-white text-[#23272f] border border-[#e0e0e0] shadow-sm hover:bg-[#f3f4f6] dark:bg-[#23272f] dark:text-white dark:border-[#444] dark:hover:bg-[#23272f]/80'
                                : 'bg-[#D65A31] text-[#EEEEEE] hover:bg-[#b94a25] dark:hover:bg-[#b94a25]'
                            ].join(' ')}
                          >
                            {key === 'appStore' && (
                              <span className="w-5 h-5 inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
                                  <defs>
                                    <linearGradient id="appstore_svg" x1="24" x2="24" y1="4.617" y2="40.096" gradientUnits="userSpaceOnUse">
                                      <stop offset="0" stopColor="#33bef0" />
                                      <stop offset="1" stopColor="#0a85d9" />
                                    </linearGradient>
                                  </defs>
                                  <path fill="url(#appstore_svg)" d="M33.9,6H14.1C9.626,6,6,9.626,6,14.1v19.8c0,4.473,3.626,8.1,8.1,8.1h19.8c4.474,0,8.1-3.627,8.1-8.1V14.1C42,9.626,38.374,6,33.9,6z" />
                                  <path d="M12.3,30.977c-1.378,0-2.5-1.114-2.5-2.484c0-1.37,1.122-2.484,2.5-2.484h3.798l4.869-8.309l-1.423-2.429c-0.338-0.578-0.431-1.251-0.262-1.897c0.169-0.646,0.58-1.188,1.156-1.524c0.384-0.224,0.82-0.342,1.262-0.342c0.885,0,1.712,0.474,2.158,1.237l0.007,0.012l0.006-0.011c0.445-0.763,1.272-1.237,2.158-1.237c0.443,0,0.879,0.119,1.263,0.343c1.19,0.698,1.59,2.233,0.892,3.422l-6.291,10.736h3.328l0.293,0.295c0.222,0.223,0.425,0.476,0.623,0.774l0.197,0.33c0.489,0.911,0.598,1.918,0.319,2.854l-0.211,0.714H12.3z" opacity=".05" />
                                  <path d="M12.3,30.477c-1.103,0-2-0.89-2-1.984c0-1.094,0.897-1.984,2-1.984h4.084l5.162-8.809l-1.572-2.682c-0.27-0.461-0.345-1-0.209-1.518c0.135-0.517,0.463-0.95,0.924-1.219c0.307-0.179,0.656-0.274,1.01-0.274c0.708,0,1.37,0.379,1.727,0.989l0.438,0.749l0.438-0.748c0.356-0.61,1.018-0.989,1.726-0.989c0.354,0,0.703,0.095,1.01,0.274c0.952,0.559,1.271,1.787,0.713,2.738L21.02,26.509h3.992l0.146,0.147c0.198,0.199,0.381,0.427,0.56,0.698l0.185,0.31c0.418,0.781,0.511,1.646,0.27,2.456l-0.106,0.357H12.3z" opacity=".07" />
                                  <path fill="#fff" d="M25.302,27.63c-0.148-0.224-0.312-0.434-0.498-0.621h-4.656l7.173-12.242c0.419-0.715,0.179-1.634-0.535-2.053c-0.716-0.419-1.635-0.179-2.052,0.536l-0.87,1.484l-0.87-1.485c-0.418-0.715-1.337-0.954-2.052-0.536c-0.715,0.418-0.955,1.337-0.536,2.052l1.72,2.935l-5.455,9.309H12.3c-0.829,0-1.5,0.665-1.5,1.484c0,0.819,0.671,1.484,1.5,1.484h13.394c0.194-0.653,0.141-1.382-0.221-2.058L25.302,27.63z" />
                                  <path d="M14.5,36.179c-0.443,0-0.879-0.119-1.263-0.344c-0.576-0.338-0.986-0.88-1.155-1.526c-0.168-0.646-0.075-1.32,0.263-1.896l0.713-1.218l0.44-0.088C13.859,31.036,14.196,31,14.528,31l0.118,0.001c1.081,0.032,2.06,0.494,2.766,1.3l0.476,0.542l-1.229,2.1C16.211,35.706,15.385,36.179,14.5,36.179z" opacity=".05" />
                                  <path d="M14.5,35.679c-0.354,0-0.704-0.095-1.01-0.275c-0.46-0.27-0.789-0.704-0.924-1.221s-0.061-1.056,0.21-1.517l0.6-1.024l0.22-0.044c0.329-0.066,0.634-0.098,0.932-0.098l0.112,0.001c0.933,0.028,1.783,0.429,2.396,1.129l0.238,0.271l-1.047,1.789C15.87,35.3,15.208,35.679,14.5,35.679z" opacity=".07" />
                                  <path fill="#fff" d="M14.626,32.002c-0.317-0.009-0.628,0.026-0.932,0.087l-0.487,0.831c-0.419,0.715-0.179,1.634,0.536,2.053c0.238,0.14,0.5,0.206,0.757,0.206c0.515,0,1.017-0.266,1.295-0.741l0.865-1.477c-0.487-0.556-1.19-0.934-2.03-0.959H14.626z" />
                                  <path d="M33.229,36.179c-0.885,0-1.712-0.474-2.158-1.236l-6.027-10.285l-0.017-0.052c-0.417-1.289-0.335-2.618,0.214-3.793l1.669-2.858l4.72,8.055h4.07c1.378,0,2.5,1.114,2.5,2.484c0,1.37-1.122,2.484-2.5,2.484h-1.159l0.842,1.437c0.338,0.576,0.431,1.249,0.263,1.896s-0.579,1.188-1.155,1.526C34.109,36.06,33.673,36.179,33.229,36.179z" opacity=".05" />
                                  <path d="M33.229,35.679c-0.708,0-1.37-0.378-1.727-0.988l-6-10.238l-0.017-0.052c-0.361-1.118-0.288-2.317,0.208-3.376l1.216-2.081l4.433,7.565H35.7c1.103,0,2,0.89,2,1.984c0,1.094-0.897,1.984-2,1.984h-2.031l1.283,2.19c0.271,0.461,0.345,1,0.21,1.517s-0.463,0.951-0.924,1.221C33.933,35.584,33.584,35.679,33.229,35.679z" opacity=".07" />
                                  <path fill="#fff" d="M35.7,27.009h-4.643l-4.147-7.076l-0.763,1.303c-0.444,0.95-0.504,2.024-0.185,3.011l5.972,10.191c0.279,0.476,0.78,0.741,1.295,0.741c0.257,0,0.519-0.066,0.757-0.206c0.715-0.419,0.954-1.338,0.535-2.053l-1.725-2.943H35.7c0.829,0,1.5-0.665,1.5-1.484C37.2,27.674,36.529,27.009,35.7,27.009z" />
                                </svg>
                              </span>
                            )}
                            {key === 'playStore' && (
                              <span className="w-5 h-5 inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-full h-full">
                                  <defs>
                                    <linearGradient id="playstore_svg1" x1="18.102" x2="25.297" y1="3.244" y2="34.74" gradientUnits="userSpaceOnUse">
                                      <stop offset="0" stopColor="#35ab4a" />
                                      <stop offset=".297" stopColor="#31a145" />
                                      <stop offset=".798" stopColor="#288739" />
                                      <stop offset="1" stopColor="#237a33" />
                                    </linearGradient>
                                    <linearGradient id="playstore_svg2" x1="19.158" x2="21.194" y1="23.862" y2="66.931" gradientUnits="userSpaceOnUse">
                                      <stop offset="0" stopColor="#f14e5d" />
                                      <stop offset=".499" stopColor="#ea3d4f" />
                                      <stop offset="1" stopColor="#e12138" />
                                    </linearGradient>
                                    <linearGradient id="playstore_svg3" x1="32.943" x2="36.541" y1="14.899" y2="43.612" gradientUnits="userSpaceOnUse">
                                      <stop offset="0" stopColor="#ffd844" />
                                      <stop offset=".519" stopColor="#ffc63f" />
                                      <stop offset="1" stopColor="#ffb03a" />
                                    </linearGradient>
                                    <linearGradient id="playstore_svg4" x1="13.853" x2="15.572" y1="5.901" y2="42.811" gradientUnits="userSpaceOnUse">
                                      <stop offset=".003" stopColor="#0090e6" />
                                      <stop offset="1" stopColor="#0065a0" />
                                    </linearGradient>
                                  </defs>
                                  <path fill="url(#playstore_svg1)" d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z" />
                                  <path fill="url(#playstore_svg2)" d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z" />
                                  <path fill="url(#playstore_svg3)" d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z" />
                                  <path fill="url(#playstore_svg4)" d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z" />
                                </svg>
                              </span>
                            )}
                            {key === 'appStore' && 'App Store'}
                            {key === 'playStore' && 'Play Store'}
                            {key !== 'appStore' && key !== 'playStore' && key.replace(/([A-Z])/g, ' $1').trim()}
                          </motion.a>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Pagination / Navigation Arrows */}
        {isDesktop && (
          <div className="flex justify-between items-center mt-4 md:mt-6">
            <button
              onClick={() => paginate(-1)}
              className="px-4 py-2 rounded-lg bg-[#D65A31] text-[#EEEEEE] font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-md hover:bg-[#b94a25] dark:bg-[#393E46] dark:hover:bg-[#444]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="currentColor" d="M15.41,7.41L14,6l-6,6l6,6l1.41-1.41L9.83,12H20v-2H9.83L15.41,7.41z" />
              </svg>
              Previous
            </button>
            <button
              onClick={() => paginate(1)}
              className="px-4 py-2 rounded-lg bg-[#D65A31] text-[#EEEEEE] font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-md hover:bg-[#b94a25] dark:bg-[#393E46] dark:hover:bg-[#444]"
            >
              Next
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
                <path fill="currentColor" d="M8.59,16.59L10,18l6-6l-6-6l-1.41,1.41L14.17,12H4v2h10.17L8.59,16.59z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
