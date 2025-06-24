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
      color: 'from-[#8B5CF6] to-[#3B82F6] dark:from-[#8B5CF6] dark:to-[#3B82F6]',
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Flutter', level: 95, icon: '💙' },
        { name: 'React Native', level: 90, icon: '⚛️' },
        { name: 'React.js', level: 85, icon: '🌐' },
      ],
      color: 'from-[#3B82F6] to-[#6366F1] dark:from-[#3B82F6] dark:to-[#6366F1]',
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'CI/CD', level: 80, icon: '🚀' },
        { name: 'Figma', level: 75, icon: '🎨' },
      ],
      color: 'from-[#6366F1] to-[#8B5CF6] dark:from-[#6366F1] dark:to-[#8B5CF6]',
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#e0e7ef] via-[#f5f6fa] to-[#cfd9df] dark:from-[#232526] dark:via-[#393E46] dark:to-[#232526] relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-[#D65A31] drop-shadow-sm tracking-tight"
      >
        Skills & Technologies
      </motion.h2>

      <div className="grid gap-8 w-full max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="p-6 md:p-8 rounded-3xl bg-white/80 dark:bg-[#393E46]/80 border border-[#cccccc]/40 dark:border-[#2d2d2d]/40 shadow-lg backdrop-blur-md flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`h-2 w-16 rounded-full bg-gradient-to-r ${category.color}`}
              />
              <h3 className="text-xl font-bold text-[#222831] dark:text-[#EEEEEE]">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: categoryIndex * 0.2 + skillIndex * 0.1,
                  }}
                >
                  <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium text-[#4a4a4a] dark:text-[#b0b0b0] truncate">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-[#4a4a4a] dark:text-[#b0b0b0]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-[#EEEEEE]/60 dark:bg-[#393E46]/80 rounded-full overflow-hidden border border-[#cccccc]/40 dark:border-[#2d2d2d]/40">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{
                        duration: 1,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className="h-full rounded-full bg-[#D65A31]"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
