import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon?: string;
  level?: number; // 1-5
}

const SkillBadge = ({ name, icon, level = 0 }: SkillBadgeProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-full px-4 py-2 transition-all duration-300"
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="text-slate-700 dark:text-slate-300 font-medium">
        {name}
      </span>
      {level > 0 && (
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                index < level
                  ? "bg-gradient-to-r from-violet-600 to-sky-600 dark:from-violet-400 dark:to-sky-400"
                  : "bg-slate-200 dark:bg-slate-700"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SkillBadge;
