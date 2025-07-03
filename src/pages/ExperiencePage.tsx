
import { motion } from 'framer-motion';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}


const experiences: Experience[] = [
  {
    company: "TCS",
    role: "Mobile App Developer",
    period: "2023 - Present",
    location: "Kochi, India",
    description: [
      "Lead developer for multiple client projects using Flutter and React Native",
      "Successfully delivered high-performance mobile applications with complex UI/UX",
      "Collaborated with cross-functional teams across different time zones",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["Flutter", "React Native", "Firebase", "RESTful APIs"]
  },
  {
    company: "ASDesigns",
    role: "Flutter Developer",
    period: "2022 - 2023",
    location: "Kochi, India",
    description: [
      "Developed and maintained multiple Flutter applications",
      "Implemented complex state management solutions",
      "Integrated third-party services and APIs",
      "Optimized app performance and reduced load times"
    ],
    technologies: ["Flutter", "Bloc", "Firebase", "REST APIs"]
  },
  {
    company: "Techtern",
    role: "Mobile App Development Intern",
    period: "2022",
    location: "Remote",
    description: [
      "Assisted in developing mobile applications using Flutter",
      "Learned and implemented modern mobile development practices",
      "Contributed to UI/UX improvements",
      "Participated in daily stand-ups and sprint planning"
    ],
    technologies: ["Flutter", "Git", "UI/UX", "Agile"]
  }
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-[#18181b] text-[#232326] dark:text-[#e5e5e5] px-4 py-16">
      <div className="w-full max-w-5xl px-4 md:px-8 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-center text-[#232326] dark:text-[#e5e5e5]"
        >
          Work Experience
        </motion.h2>
        <p className="mb-14 text-lg md:text-xl text-[#6b6b6b] dark:text-[#b0b0b0] text-center max-w-2xl">
          A timeline of my professional journey, projects, and the skills I've honed along the way.
        </p>
        <div className="relative w-full">
          {/* Timeline vertical line (hidden on small screens) */}
          <div className="absolute left-[18%] md:left-1/5 top-0 bottom-0 w-px bg-[#ececec] dark:bg-[#232323] hidden sm:block" />
          <div className="flex flex-col divide-y divide-[#ececec] dark:divide-[#232323]">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative flex flex-col sm:flex-row py-8 sm:py-10"
              >
                {/* Date */}
                <div className="w-full sm:w-1/5 flex flex-row sm:flex-col items-start sm:items-end justify-between sm:pr-6 pr-0 mb-2 sm:mb-0 relative z-10">
                  <span className="text-sm md:text-base text-[#6b6b6b] dark:text-[#b0b0b0] whitespace-nowrap">{exp.period}</span>
                </div>
                {/* Dot (hidden on xs) */}
                <div className="relative flex flex-col items-center" style={{width: '0'}}>
                  <span className="hidden sm:block w-3 h-3 rounded-full bg-[#00e6a2] border-4 border-white dark:border-[#18181b] shadow absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
                </div>
                {/* Content */}
                <div className="w-full sm:w-4/5 pl-0 sm:pl-10">
                  <div className="flex flex-col md:flex-row md:items-center md:gap-4 mb-1">
                    <h3 className="text-lg md:text-xl font-bold text-[#232326] dark:text-[#e5e5e5]">{exp.role}</h3>
                    <span className="hidden md:inline text-[#b0b0b0]">@</span>
                    <span className="text-base font-medium text-[#b0b0b0]">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#6b6b6b] dark:text-[#b0b0b0] mb-2">
                    <span>{exp.location}</span>
                  </div>
                  <ul className="mb-2 space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#232326] dark:text-[#cccccc]">
                        <span className="text-[#00e6a2] mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-[#f3f3f3] dark:bg-[#29292c] border border-[#ececec] dark:border-[#35363a] text-[#00b386] dark:text-[#00e6a2] font-semibold shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
