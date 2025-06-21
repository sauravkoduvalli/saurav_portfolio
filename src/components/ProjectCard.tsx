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
      className="bg-[#EEEEEE] dark:bg-[#222831] backdrop-blur-xl border border-[#cccccc] dark:border-[#2d2d2d] rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
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
        <h3 className="text-xl font-semibold bg-clip-text mb-2" style={{ backgroundImage: 'linear-gradient(to right, #7f1d8d, #641e7b, #3b82f6)' }}>
          {title}
        </h3>
        <p className="text-[#4a4a4a] dark:text-[#b0b0b0] mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#ffffff] dark:bg-[#393E46] backdrop-blur-md border border-[#3b82f6] dark:border-[#3b82f6] text-[#222831] dark:text-[#EEEEEE] rounded-full text-sm"
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
              className="text-[#3b82f6] dark:text-[#3b82f6] hover:text-[#2563eb] dark:hover:text-[#2563eb] transition-colors"
            >
              GitHub
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3b82f6] dark:text-[#3b82f6] hover:text-[#2563eb] dark:hover:text-[#2563eb] transition-colors"
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
