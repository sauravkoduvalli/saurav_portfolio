import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";

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
  const [isImageLoading, setIsImageLoading] = useState<{
    [key: string]: boolean;
  }>({});

  const projects: Project[] = [
    {
      title: "Thai Airways",
      subtitle: "Mobile App Revamp",
      description:
        "Led the development of Thai Airways' mobile app revamp, implementing a modern UI with Flutter. Enhanced user experience with real-time flight tracking, seamless booking flow, and personalized travel recommendations.",
      image: "/assets/thai-airways.png",
      technologies: ["Flutter", "Bloc", "RESTful APIs", "Firebase"],
      links: {
        appStore: "https://apps.apple.com/us/app/thai-airways/id1393912966",
        playStore:
          "https://play.google.com/store/apps/details?id=com.thaiairways.mobile&pcampaignid=web_share",
      },
    },
    {
      title: "miCoPS",
      subtitle: "Healthcare Management System",
      description:
        "Developed a comprehensive healthcare management system using React Native. Features include appointment scheduling, medical records management, and real-time consultation tracking.",
      image: "/assets/micops.png",
      technologies: ["React Native", "TypeScript", "Redux", "Node.js"],
      links: {
        playStore:
          "https://play.google.com/store/apps/details?id=com.keralapolice.micops&pcampaignid=web_share",
      },
    },
  ];

  const paginate = useCallback(
    (newDirection: number) => {
      setActiveIndex((prevIndex) =>
        prevIndex + newDirection < 0
          ? projects.length - 1
          : (prevIndex + newDirection) % projects.length
      );
    },
    [projects.length]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1);
      if (e.key === "ArrowRight") paginate(1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [paginate]);

  const handleImageLoad = (projectTitle: string) => {
    setIsImageLoading((prev) => ({ ...prev, [projectTitle]: false }));
  };

  const handleImageError = (projectTitle: string) => {
    setIsImageLoading((prev) => ({ ...prev, [projectTitle]: false }));
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
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-[#18181b] text-black dark:text-white px-4 py-16 pt-30 md:pt-36 lg:pt-40"
      id="projects"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 flex flex-col items-center justify-center min-h-[80vh]">
        <div
          className="relative w-full flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carousel Arrows */}
          <button
            aria-label="Previous project"
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-[#232323] border border-gray-200 dark:border-[#232323] shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-[#232323]/80 transition-all"
            style={{ outline: "none" }}
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black dark:text-white"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            aria-label="Next project"
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white dark:bg-[#232323] border border-gray-200 dark:border-[#232323] shadow rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-[#232323]/80 transition-all"
            style={{ outline: "none" }}
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black dark:text-white"
              viewBox="0 0 24 24"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
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
                    onError={() =>
                      handleImageError(projects[activeIndex].title)
                    }
                  />
                </div>
              </div>
              {/* Text/Info Section */}
              <div className="w-full md:w-3/5 flex flex-col gap-4 md:py-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-1 text-black dark:text-white">
                  {projects[activeIndex].title}
                </h3>
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
                  {Object.entries(projects[activeIndex].links).map(
                    ([key, url]) =>
                      url && (
                        <motion.a
                          key={key}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={[
                            "px-4 py-1.5 rounded-lg font-semibold text-xs xs:text-sm transition-all duration-300 flex items-center gap-2",
                            key === "appStore" || key === "playStore"
                              ? "bg-white text-black border border-gray-200 shadow-sm hover:bg-gray-100 dark:bg-[#232323] dark:text-white dark:border-[#444] dark:hover:bg-[#232323]/80"
                              : "bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200",
                          ].join(" ")}
                        >
                          {key === "appStore" && (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                height="20"
                                viewBox="0 0 48 48"
                              >
                                <path
                                  fill="#2196f3"
                                  d="M44,24c0,11.044-8.956,20-20,20S4,35.044,4,24S12.956,4,24,4S44,12.956,44,24z"
                                ></path>
                                <path
                                  fill="#fff"
                                  d="M31.684 23.867l-2.48 1.441L22.43 13.652c-.27-.465-.113-1.063.355-1.336l.793-.461c.465-.27 1.063-.113 1.332.355L31.684 23.867zM29.48 25.789l2.48-1.441 1.438 2.469-2.48 1.441L29.48 25.789zM13.84 28.152l5.988-10.246 2.555 1.492-5.988 10.246L13.84 28.152zM12.285 33.375l1.234-4.676 2.555 1.496-3.469 3.367c-.059.063-.156.074-.23.031C12.297 33.547 12.262 33.461 12.285 33.375M20.035 17.547l.863-1.469c.27-.469.871-.625 1.336-.352l.867.508c.465.273.621.871.348 1.336l-.859 1.473L20.035 17.547zM33.023 27.578c-.402.23-1.004.586-1.359.797-.664.395-.152 1.559 0 1.809.859 1.441 1.746 1.238 2.414 2.258.367.559.266.805.379.992.047.066.191.133.246.055 1.031-1.426.73-3.879-.02-4.973C34.336 28.004 33.703 27.191 33.023 27.578M36.637 25.41h-3.563l-1.555-2.855h5.117V25.41zM28.617 25.41h-9.293l1.586-2.855h6.121L28.617 25.41zM14.945 25.41h-3.617v-2.855h5.309L14.945 25.41z"
                                ></path>
                              </svg>
                              App Store
                            </>
                          )}
                          {key === "playStore" && (
                            <>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="20"
                                height="20"
                                viewBox="0 0 48 48"
                              >
                                <linearGradient
                                  id="jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1"
                                  x1="1688.489"
                                  x2="1685.469"
                                  y1="-883.003"
                                  y2="-881.443"
                                  gradientTransform="matrix(11.64 0 0 22.55 -19615.32 19904.924)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#047ed6"></stop>
                                  <stop offset="1" stop-color="#50e6ff"></stop>
                                </linearGradient>
                                <path
                                  fill="url(#jFdG-76_seIEvf-hbjSsaa_rZwnRdJyYqRi_gr1)"
                                  fill-rule="evenodd"
                                  d="M7.809,4.608c-0.45,0.483-0.708,1.227-0.708,2.194	v34.384c0,0.967,0.258,1.711,0.725,2.177l0.122,0.103L27.214,24.2v-0.433L7.931,4.505L7.809,4.608z"
                                  clip-rule="evenodd"
                                ></path>
                                <linearGradient
                                  id="jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2"
                                  x1="1645.286"
                                  x2="1642.929"
                                  y1="-897.055"
                                  y2="-897.055"
                                  gradientTransform="matrix(9.145 0 0 7.7 -15001.938 6931.316)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#ffda1c"></stop>
                                  <stop offset="1" stop-color="#feb705"></stop>
                                </linearGradient>
                                <path
                                  fill="url(#jFdG-76_seIEvf-hbjSsab_rZwnRdJyYqRi_gr2)"
                                  fill-rule="evenodd"
                                  d="M33.623,30.647l-6.426-6.428v-0.45l6.428-6.428	l0.139,0.086l7.603,4.321c2.177,1.227,2.177,3.249,0,4.493l-7.603,4.321C33.762,30.561,33.623,30.647,33.623,30.647z"
                                  clip-rule="evenodd"
                                ></path>
                                <linearGradient
                                  id="jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3"
                                  x1="1722.978"
                                  x2="1720.622"
                                  y1="-889.412"
                                  y2="-886.355"
                                  gradientTransform="matrix(15.02 0 0 11.5775 -25848.943 10324.73)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#d9414f"></stop>
                                  <stop offset="1" stop-color="#8c193f"></stop>
                                </linearGradient>
                                <path
                                  fill="url(#jFdG-76_seIEvf-hbjSsac_rZwnRdJyYqRi_gr3)"
                                  fill-rule="evenodd"
                                  d="M33.762,30.561l-6.565-6.567L7.809,43.382	c0.708,0.761,1.9,0.847,3.232,0.103L33.762,30.561"
                                  clip-rule="evenodd"
                                ></path>
                                <linearGradient
                                  id="jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4"
                                  x1="1721.163"
                                  x2="1722.215"
                                  y1="-891.39"
                                  y2="-890.024"
                                  gradientTransform="matrix(15.02 0 0 11.5715 -25848.943 10307.886)"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop offset="0" stop-color="#33c481"></stop>
                                  <stop offset="1" stop-color="#61e3a7"></stop>
                                </linearGradient>
                                <path
                                  fill="url(#jFdG-76_seIEvf-hbjSsad_rZwnRdJyYqRi_gr4)"
                                  fill-rule="evenodd"
                                  d="M33.762,17.429L11.041,4.522	c-1.33-0.761-2.524-0.658-3.232,0.103l19.386,19.369L33.762,17.429z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              Play Store
                            </>
                          )}
                          {key !== "appStore" &&
                            key !== "playStore" &&
                            key.replace(/([A-Z])/g, " $1").trim()}
                        </motion.a>
                      )
                  )}
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
                ${
                  activeIndex === idx
                    ? "border-black dark:border-white bg-black dark:bg-white ring-2 ring-gray-300 dark:ring-gray-700"
                    : "border-gray-300 dark:border-[#232323] bg-gray-100 dark:bg-[#18181b] hover:border-black hover:bg-gray-200 dark:hover:bg-white/10"
                }
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
