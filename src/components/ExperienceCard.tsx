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
      className="bg-gray-800 rounded-lg p-6 shadow-lg mb-6"
    >
      <h3 className="text-xl font-bold text-white mb-1">{position}</h3>
      <h4 className="text-lg text-blue-400 mb-2">{company}</h4>
      <p className="text-gray-400 text-sm mb-4">{duration}</p>
      <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
