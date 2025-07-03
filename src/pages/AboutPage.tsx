import { motion } from 'framer-motion';

const AboutPage = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Kannur University",
      year: "2020-2022"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Kannur University",
      year: "2017-2020"
    }
  ];

  const softSkills = [
    { skill: "Problem Solving", icon: "🧩" },
    { skill: "Team Collaboration", icon: "👥" },
    { skill: "Communication", icon: "💬" },
    { skill: "Adaptability", icon: "🔄" },
    { skill: "Time Management", icon: "⏰" },
    { skill: "Creative Thinking", icon: "💡" }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-black dark:bg-[#18181b] dark:text-white px-4">
      <div className="w-full max-w-5xl px-4 md:px-8 flex flex-col items-center justify-center min-h-[80vh]">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-extrabold mb-10 text-center"
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#232323] border border-gray-200 dark:border-[#232323] shadow-sm text-center">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white text-center">Background</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-center">
                I'm a passionate mobile app developer based in Kochi, India, with expertise
                in Flutter and React Native. I specialize in creating beautiful, performant
                mobile applications that provide exceptional user experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                With a strong foundation in both front-end and back-end development,
                I enjoy tackling complex problems and turning innovative ideas into
                reality through clean, efficient code.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#232323] border border-gray-200 dark:border-[#232323] shadow-sm text-center">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white text-center">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-gray-300 dark:border-gray-600 text-center">
                    <h4 className="font-semibold text-black dark:text-white text-center">{edu.degree}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm text-center">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm text-center">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-4xl"
        >
          <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-[#232323] border border-gray-200 dark:border-[#232323] shadow-sm text-center">
            <h3 className="text-xl font-bold mb-6 text-black dark:text-white text-center">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gray-100 dark:bg-[#18181b] border border-gray-200 dark:border-[#232323] min-w-0 shadow-sm text-center"
                >
                  <span className="text-2xl flex-shrink-0">{skill.icon}</span>
                  <span className="text-gray-800 dark:text-gray-200 break-words text-base sm:text-sm md:text-base text-center">{skill.skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
