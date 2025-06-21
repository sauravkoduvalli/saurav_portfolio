import { motion } from 'framer-motion';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

const ExperiencePage = () => {
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

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-[#EEEEEE] dark:bg-[#222831]">
      <div className="absolute inset-0" />
      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#D65A31]"
        >
          Work Experience
        </motion.h2>
        <div className="relative flex flex-col gap-6 mt-8 px-4">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#D65A31] dark:bg-[#D65A31] transform -translate-x-1/2 z-0" />
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative flex flex-col items-center md:grid md:grid-cols-2 md:gap-8">
              {/* Timeline dot above the card, centered on the timeline */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -top-4 md:top-8 w-5 h-5 rounded-full bg-[#D65A31] z-0 border-4 border-white dark:border-[#222831] shadow-lg"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`w-full max-w-md mx-auto p-8 rounded-3xl bg-[#ffffff] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] shadow-2xl text-center md:text-left z-10 ${
                  index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
                }`}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-[#D65A31]">{exp.role}</h3>
                    <p className="text-lg font-medium text-[#222831] dark:text-[#EEEEEE]">{exp.company}</p>
                    <div className="flex flex-col items-center md:flex-row md:items-center gap-1 md:gap-3 text-sm text-[#4a4a4a] dark:text-[#b0b0b0] mt-1">
                      <span>{exp.period}</span>
                      <span className="hidden md:inline">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-start gap-3 group justify-center md:justify-start"
                      >
                        <span className="text-[#D65A31] mt-1.5">•</span>
                        <span className="text-[#222831] dark:text-[#EEEEEE] group-hover:text-[#222831] dark:group-hover:text-[#EEEEEE] transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] text-[#222831] dark:text-[#EEEEEE]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
