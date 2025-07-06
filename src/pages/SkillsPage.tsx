import { motion } from 'framer-motion';
import { useTheme } from '../contexts/useThemeContext';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

// Circular progress ring component
const SkillRing = ({
  percent,
  size = 56,
  stroke = 6,
  children,
}: {
  percent: number;
  size?: number;
  stroke?: number;
  children: React.ReactNode;
}) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);
  const { theme } = useTheme();
  const accent = theme === 'dark' ? 'white' : 'gray';
  const baseStroke = theme === 'dark' ? 'gray' : 'white';
  return (
    <svg
      width={size}
      height={size}
      className="block mx-auto"
      style={{ display: 'block' }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={baseStroke}
        strokeWidth={stroke}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={accent}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 1 }}
        strokeLinecap="round"
      />
      <foreignObject
        x={stroke}
        y={stroke}
        width={size - stroke * 2}
        height={size - stroke * 2}
      >
        <div className="w-full h-full flex items-center justify-center text-2xl select-none">
          {children}
        </div>
      </foreignObject>
    </svg>
  );
};

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
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Flutter', level: 95, icon: '💙' },
        { name: 'React Native', level: 90, icon: '⚛️' },
        { name: 'React.js', level: 85, icon: '🌐' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', level: 90, icon: '📦' },
        { name: 'Firebase', level: 85, icon: '🔥' },
        { name: 'CI/CD', level: 80, icon: '🚀' },
        { name: 'Figma', level: 75, icon: '🎨' },
      ],
    },
  ];

  // Flatten all skills for grid
  const allSkills = skillCategories.flatMap((cat) =>
    cat.skills.map((skill) => ({ ...skill, category: cat.title }))
  );

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white text-black dark:bg-[#18181b] dark:text-white px-4 py-16 pt-30 md:pt-36 lg:pt-40">
      <div className="w-full max-w-5xl px-4 md:px-8 flex flex-col items-center justify-center min-h-[80vh]">
        <div className="grid gap-8 w-full max-w-5xl grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {allSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-[#232323] border border-gray-200 dark:border-[#232323] shadow-sm"
            >
              <SkillRing percent={skill.level}>
                <span>{skill.icon}</span>
              </SkillRing>
              <div className="mt-3 text-center">
                <div className="font-semibold text-gray-800 dark:text-gray-200 text-base truncate">
                  {skill.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  {skill.level}%
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {skill.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
