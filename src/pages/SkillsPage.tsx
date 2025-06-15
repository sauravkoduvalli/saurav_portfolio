import { motion } from 'framer-motion';
import NeumorphicCard from '../components/NeumorphicCard';

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
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Flutter', level: 95, icon: '💙' },
        { name: 'React Native', level: 90, icon: '⚛️' },
        { name: 'React.js', level: 85, icon: '🌐' },
      ],
      color: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'CI/CD', level: 80, icon: '🚀' },
        { name: 'Figma', level: 75, icon: '🎨' },
      ],
      color: 'from-pink-500 to-red-600',
    },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 py-16 md:p-6 lg:p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-5xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <NeumorphicCard>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`h-2 w-16 rounded-full bg-gradient-to-r ${category.color}`}
                    />
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
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
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
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
              </NeumorphicCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
