import { motion } from 'framer-motion';
import NeumorphicCard from '../components/NeumorphicCard';

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
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-16 md:p-6 lg:p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl space-y-8"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <NeumorphicCard>
              <h3 className="text-xl font-bold mb-4">Background</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate mobile app developer based in Kochi, India, with expertise 
                in Flutter and React Native. I specialize in creating beautiful, performant 
                mobile applications that provide exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in both front-end and back-end development, 
                I enjoy tackling complex problems and turning innovative ideas into 
                reality through clean, efficient code.
              </p>
            </NeumorphicCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <NeumorphicCard>
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4">
                    <h4 className="font-semibold text-white">{edu.degree}</h4>
                    <p className="text-gray-400 text-sm">{edu.institution}</p>
                    <p className="text-blue-400 text-sm">{edu.year}</p>
                  </div>
                ))}
              </div>
            </NeumorphicCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <NeumorphicCard>
            <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-gray-300">{skill.skill}</span>
                </motion.div>
              ))}
            </div>
          </NeumorphicCard>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
