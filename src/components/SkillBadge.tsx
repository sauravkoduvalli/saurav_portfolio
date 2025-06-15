import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  icon?: string;
  level?: number; // 1-5
}

const SkillBadge = ({ name, icon, level = 0 }: SkillBadgeProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2"
    >
      {icon && <img src={icon} alt={name} className="w-5 h-5" />}
      <span className="text-gray-200">{name}</span>
      {level > 0 && (
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full ${
                index < level ? 'bg-blue-400' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SkillBadge;
