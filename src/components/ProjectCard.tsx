import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, technologies, imageUrl, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border border-white/20 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text mb-2">{title}</h3>
        <p className="text-slate-700 dark:text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-white/5 dark:bg-slate-800/50 backdrop-blur-md border border-violet-100 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
