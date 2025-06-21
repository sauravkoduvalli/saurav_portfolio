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
      className="flex items-center gap-2 bg-[#EEEEEE] dark:bg-[#222831] backdrop-blur-xl border border-[#cccccc] dark:border-[#2d2d2d] rounded-full px-4 py-2 transition-all duration-300"
    >
      {icon && <span className="text-xl">{icon}</span>}
      <span className="text-[#222831] dark:text-[#EEEEEE] font-medium">
        {name}
      </span>
      {level > 0 && (
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                index < level
                  ? "bg-[#D65A31] to-[#007bff] dark:from-[#D65A31] dark:to-[#007bff]"
                  : "bg-[#2a2a3d] dark:bg-[#2a2a3d]"
              }`}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SkillBadge;
