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
    <div className="min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-gradient-to-br from-violet-50 via-sky-50 to-indigo-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(88,28,135,0.3),rgba(255,255,255,0))]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl space-y-8 relative z-10"
      >
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-8 rounded-3xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-indigo-500/5 dark:shadow-indigo-950/5">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">Background</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                I'm a passionate mobile app developer based in Kochi, India, with expertise 
                in Flutter and React Native. I specialize in creating beautiful, performant 
                mobile applications that provide exceptional user experiences.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
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
            <div className="p-8 rounded-3xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-indigo-500/5 dark:shadow-indigo-950/5">
              <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-violet-500 dark:border-violet-400">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200">{edu.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.institution}</p>
                    <p className="text-violet-600 dark:text-violet-400 text-sm">{edu.year}</p>
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
          <div className="p-8 rounded-3xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-indigo-500/5 dark:shadow-indigo-950/5">
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-200">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 dark:bg-slate-800/40 backdrop-blur-md border border-violet-100 dark:border-slate-700/50"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-slate-600 dark:text-slate-300">{skill.skill}</span>
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
