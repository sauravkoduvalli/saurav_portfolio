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
    <div className="md:min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-[#EEEEEE] dark:bg-[#222831]">
      <div className="absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl space-y-8 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#D65A31]"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-8 rounded-3xl bg-[#ffffff] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-[#222831] dark:text-[#EEEEEE]">Background</h3>
              <p className="text-[#4a4a4a] dark:text-[#b0b0b0] leading-relaxed mb-4">
                I'm a passionate mobile app developer based in Kochi, India, with expertise 
                in Flutter and React Native. I specialize in creating beautiful, performant 
                mobile applications that provide exceptional user experiences.
              </p>
              <p className="text-[#4a4a4a] dark:text-[#b0b0b0] leading-relaxed">
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
            <div className="p-8 rounded-3xl bg-[#ffffff] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-[#222831] dark:text-[#EEEEEE]">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-[#D65A31] dark:border-[#D65A31]">
                    <h4 className="font-semibold text-[#222831] dark:text-[#EEEEEE]">{edu.degree}</h4>
                    <p className="text-[#4a4a4a] dark:text-[#b0b0b0] text-sm">{edu.institution}</p>
                    <p className="text-[#D65A31] text-sm">{edu.year}</p>
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
        >
          <div className="p-8 rounded-3xl bg-[#ffffff] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] shadow-2xl">
            <h3 className="text-xl font-bold mb-6 text-[#222831] dark:text-[#EEEEEE]">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-[#EEEEEE] dark:bg-[#393E46] border border-[#cccccc] dark:border-[#2d2d2d] min-w-0"
                >
                  <span className="text-2xl flex-shrink-0">{skill.icon}</span>
                  <span className="text-[#4a4a4a] dark:text-[#b0b0b0] break-words text-base sm:text-sm md:text-base">{skill.skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
