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
      className="bg-[#EEEEEE] dark:bg-[#222831] backdrop-blur-xl border border-[#cccccc] dark:border-[#2d2d2d] rounded-2xl p-8 shadow-xl"
    >
      <h3 className="text-xl font-bold bg-[#D65A31] dark:bg-[#D65A31] text-transparent bg-clip-text mb-1">{position}</h3>
      <h4 className="text-lg text-[#222831] dark:text-[#EEEEEE] mb-2">{company}</h4>
      <p className="text-[#4a4a4a] dark:text-[#b0b0b0] text-sm mb-4">{duration}</p>
      <ul className="list-disc list-inside mb-4 text-[#222831] dark:text-[#EEEEEE] space-y-2">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-[#ffffff] dark:bg-[#393E46] backdrop-blur-md border border-[#D65A31] dark:border-[#D65A31] text-[#222831] dark:text-[#EEEEEE] rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
