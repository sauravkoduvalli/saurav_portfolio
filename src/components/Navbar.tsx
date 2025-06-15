import { Link } from 'react-router';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/10 dark:bg-slate-900/20 backdrop-blur-xl border-b border-white/20 dark:border-slate-700/30 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-violet-600 via-indigo-600 to-sky-600 dark:from-violet-400 dark:via-indigo-400 dark:to-sky-400 text-transparent bg-clip-text">
            Portfolio
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400">
              <span className="sr-only">Open main menu</span>
              {/* Add your hamburger icon here */}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
