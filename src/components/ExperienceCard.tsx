import { motion } from 'framer-motion';

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const ExperienceCard = ({ company, position, duration, description, technologies }: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl p-8 shadow-xl"
    >
      <h3 className="text-xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text mb-1">{position}</h3>
      <h4 className="text-lg text-slate-700 dark:text-slate-300 mb-2">{company}</h4>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{duration}</p>
      <ul className="list-disc list-inside mb-4 text-slate-700 dark:text-slate-300 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-white/5 dark:bg-slate-800/50 backdrop-blur-md border border-violet-100 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
