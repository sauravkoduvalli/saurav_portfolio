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
    <div className="min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-gradient-to-br from-violet-50 via-sky-50 to-indigo-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(88,28,135,0.3),rgba(255,255,255,0))]"></div>

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text"
        >
          Work Experience
        </motion.h2>
        
        <div className="relative space-y-8">
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <motion.div 
                className={`absolute left-1/2 w-5 h-5 rounded-full bg-gradient-to-r from-violet-600 to-sky-600 dark:from-violet-400 dark:to-sky-400 transform -translate-x-1/2
                  hover:scale-150 transition-transform duration-300 ease-in-out z-10`}
                style={{ top: '2rem' }}
                whileHover={{ scale: 1.2 }}
              />

              <div className={`p-8 rounded-3xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-indigo-500/5 dark:shadow-indigo-950/5 ${
                index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'
              }`}>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-sky-600 dark:from-violet-400 dark:to-sky-400 text-transparent bg-clip-text">{exp.role}</h3>
                    <p className="text-lg font-medium text-slate-700 dark:text-slate-300">{exp.company}</p>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mt-1">
                      <span>{exp.period}</span>
                      <span>•</span>
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
                        className="flex items-start gap-3 group"
                      >
                        <span className="text-violet-600 dark:text-violet-400 mt-1.5">•</span>
                        <span className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-white/5 dark:bg-slate-800/40 backdrop-blur-md border border-violet-100 dark:border-slate-700/50 text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
