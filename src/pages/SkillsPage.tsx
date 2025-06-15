import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

const SkillsPage = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', level: 90, icon: '🟨' },
        { name: 'TypeScript', level: 85, icon: '🔷' },
        { name: 'Dart', level: 90, icon: '💠' },
        { name: 'Kotlin', level: 80, icon: '🟣' },
      ],
      color: 'from-violet-600 to-sky-600 dark:from-violet-400 dark:to-sky-400',
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Flutter', level: 95, icon: '💙' },
        { name: 'React Native', level: 90, icon: '⚛️' },
        { name: 'React.js', level: 85, icon: '🌐' },
      ],
      color: 'from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400',
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'CI/CD', level: 80, icon: '🚀' },
        { name: 'Figma', level: 75, icon: '🎨' },
      ],
      color: 'from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400',
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-gradient-to-br from-violet-50 via-sky-50 to-indigo-50 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(88,28,135,0.3),rgba(255,255,255,0))]"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="p-8 rounded-3xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-indigo-500/5 dark:shadow-indigo-950/5"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-2 w-16 rounded-full bg-gradient-to-r ${category.color}`}
                  />
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-white/5 dark:bg-slate-800/40 rounded-full overflow-hidden backdrop-blur-xl border border-white/10 dark:border-slate-700/30">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
