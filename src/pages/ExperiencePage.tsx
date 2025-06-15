import { motion } from 'framer-motion';
import NeumorphicCard from '../components/NeumorphicCard';

const ExperiencePage = () => {
  const experiences = [
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
      technologies: ["Flutter", "React Native", "Firebase", "RESTful APIs"],
      color: "from-blue-500 to-purple-600"
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
      technologies: ["Flutter", "Bloc", "Firebase", "REST APIs"],
      color: "from-purple-500 to-pink-600"
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
      technologies: ["Flutter", "Git", "UI/UX", "Agile"],
      color: "from-pink-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>
        
        <div className="relative space-y-16 px-4 md:px-8 mb-8">
          {/* Timeline line with glowing effect */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2 shadow-[0_0_10px_rgba(147,51,234,0.3)]" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2, 
                type: "spring",
                stiffness: 100 
              }}
              className={`relative md:w-[calc(50%-2rem)] ${
                index % 2 === 0 
                  ? 'md:mr-auto md:pr-8' 
                  : 'md:ml-auto md:pl-8'
              }`}
            >
              <div className="relative pl-16 md:pl-0">
                {/* Animated timeline dot */}
                <motion.div 
                  className={`absolute left-8 md:left-0 w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} transform 
                    ${index % 2 === 0 ? 'md:-right-10 md:left-auto' : 'md:-left-10'}
                    -translate-x-1/2 md:translate-x-0 shadow-lg
                    hover:scale-150 transition-transform duration-300 ease-in-out
                    before:absolute before:content-[''] before:w-7 before:h-7 before:rounded-full 
                    before:bg-gradient-to-r before:${exp.color} before:opacity-30 before:-left-1 before:-top-1
                    after:absolute after:content-[''] after:w-12 after:h-0.5 
                    after:bg-gradient-to-r after:${exp.color} after:opacity-50
                    ${index % 2 === 0 ? 'md:after:-left-12' : 'md:after:-right-12'}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative z-10"
                >
                  <NeumorphicCard>
                    <div className="space-y-6 p-4 md:p-6">
                      <div className="flex justify-between items-start flex-wrap gap-3">
                        <div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{exp.role}</h3>
                          <p className="text-blue-400 font-medium text-lg">{exp.company}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-300 font-medium">{exp.period}</p>
                          <p className="text-gray-400 text-sm">{exp.location}</p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="flex items-start space-x-3 group"
                          >
                            <span className="text-blue-400 mt-1.5 group-hover:scale-125 transition-transform duration-200">•</span>
                            <span className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-200">{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-3">
                        {exp.technologies.map((tech) => (
                          <motion.span
                            key={tech}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 py-1.5 text-sm rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 border border-gray-700
                              hover:border-gray-600 hover:text-white transition-colors duration-200 shadow-lg"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </NeumorphicCard>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ExperiencePage;
