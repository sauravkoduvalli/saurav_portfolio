
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
// Animated Counter Hook
function useCountUp(to: number, duration = 1200, suffix = '') {
  const [count, setCount] = useState(0);
  const raf = useRef<number | null>(null);
  useEffect(() => {
	let start: number | null = null;
	function animate(ts: number) {
	  if (!start) start = ts;
	  const progress = Math.min((ts - start) / duration, 1);
	  setCount(Math.floor(progress * to));
	  if (progress < 1) {
		raf.current = requestAnimationFrame(animate);
	  } else {
		setCount(to);
	  }
	}
	raf.current = requestAnimationFrame(animate);
	return () => {
	  if (raf.current !== null) cancelAnimationFrame(raf.current);
	};
  }, [to, duration]);
  return suffix ? `${count}${progressDone(count, to) ? suffix : ''}` : count;
}

function progressDone(count: number, to: number) {
  return count === to;
}

const socialLinks = [
	{
		href: 'https://github.com/sauravkoduvalli',
		label: 'GitHub',
		icon: (
			<svg
				width="22"
				height="22"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.7"
				viewBox="0 0 24 24"
			>
				<path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.36 9.36 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.47A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
			</svg>
		),
	},
	{
		href: 'https://www.linkedin.com/in/sauravkoduvalli',
		label: 'LinkedIn',
		icon: (
			<svg
				width="22"
				height="22"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.7"
				viewBox="0 0 24 24"
			>
				<path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6z" />
				<rect width="4" height="12" x="2" y="9" rx="2" />
				<circle cx="4" cy="4" r="2" />
			</svg>
		),
	},
	{
		href: 'mailto:sauravkoduvalli@gmail.com',
		label: 'Mail',
		icon: (
			<svg
				width="22"
				height="22"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.7"
				viewBox="0 0 24 24"
			>
				<rect width="20" height="16" x="2" y="4" rx="2" />
				<path d="m22 6-10 7L2 6" />
			</svg>
		),
	},
];


const HomePage = () => {
  // Animated stats
  const projects = useCountUp(5, 1200);
  const techs = useCountUp(20, 1200, '+');
  return (
	<div className="min-h-screen w-full flex flex-col items-start justify-center bg-white text-black dark:bg-[#18181b] dark:text-white px-4">
	  <div className="w-full max-w-5xl px-4 md:px-8 lg:pl-16 flex flex-col items-start justify-center min-h-[80vh]">
		{/* Avatar */}
		<div className="mb-8">
		  <img
			src="/assets/profile-pic.png"
			alt="Saurav K profile"
			className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-[#232323] shadow-lg"
		  />
		</div>
		{/* Heading */}
		<motion.h1
		  initial={{ opacity: 0, y: 20 }}
		  animate={{ opacity: 1, y: 0 }}
		  transition={{ duration: 0.5 }}
		  className="max-w-4xl text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-left"
		>
		  Cross-platform developer, full-stack learner.
		</motion.h1>
		{/* Subtext */}
		<motion.p
		  initial={{ opacity: 0, y: 20 }}
		  animate={{ opacity: 1, y: 0 }}
		  transition={{ duration: 0.5, delay: 0.1 }}
		  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 text-left"
		>
		  I'm Saurav, a mobile and web application developer based in Kochi, Kerala. With over 4.6 years of experience, I build scalable cross-platform apps using Flutter, React Native, and React.js. I'm passionate about crafting clean UIs, integrating robust backends, and transitioning toward full-stack development.
		</motion.p>
		{/* Spotlight Portfolio Stats */}
		<div className="flex gap-10 mb-8">
		  <div className="flex flex-col items-center">
			<span className="text-4xl font-bold text-black dark:text-white">{projects}</span>
			<span className="text-base text-gray-600 dark:text-gray-300 mt-1">Projects Completed</span>
		  </div>
		  <div className="flex flex-col items-center">
			<span className="text-4xl font-bold text-black dark:text-white">{techs}</span>
			<span className="text-base text-gray-600 dark:text-gray-300 mt-1">Technologies Known</span>
		  </div>
		</div>
		{/* CTA Buttons */}
		<div className="flex flex-wrap gap-4 mb-8">
		  <a
			href="#projects"
			className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
		  >
			View My Work
		  </a>
		  <a
			href="#contact"
			className="px-6 py-2 rounded-full border border-black dark:border-white text-black dark:text-white font-semibold hover:bg-gray-100 dark:hover:bg-[#232323] transition-colors"
		  >
			Get in Touch
		  </a>
		</div>
		{/* Social Icons */}
		<div className="flex gap-6 mt-2">
		  {socialLinks.map((link) => (
			<a
			  key={link.label}
			  href={link.href}
			  target="_blank"
			  rel="noopener noreferrer"
			  aria-label={link.label}
			  className="text-2xl text-gray-500 hover:text-black dark:hover:text-white transition-colors"
			>
			  {link.icon}
			</a>
		  ))}
		</div>
	  </div>
	</div>
  );
}

export default HomePage;
