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
      className="fixed top-0 left-0 right-0 bg-[#EEEEEE] dark:bg-[#222831] backdrop-blur-xl border-b border-[#cccccc] dark:border-[#2d2d2d] z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D65A31] via-[#6b21a8] to-[#4f46e5] dark:from-[#D65A31] dark:via-[#6b21a8] dark:to-[#4f46e5]">
            Portfolio
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-[#222831] dark:text-[#EEEEEE] hover:text-[#D65A31] dark:hover:text-[#D65A31] px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-[#222831] dark:text-[#EEEEEE] hover:text-[#D65A31] dark:hover:text-[#D65A31]">
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
