
import { Link, useLocation } from "react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import ThemeControl from "./ThemeControl";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center bg-transparent pointer-events-none"
    >
      <div className="relative flex flex-col items-center w-full mt-4 sm:mt-6">
        {/* NavBar Row: Profile pic (left), nav links (center), theme toggle (right) */}
        <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 flex items-center justify-between">
          {/* Left: Profile pic (not shown on home route) */}
          {location.pathname !== "/" && (
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="pointer-events-auto">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-4 border-[#e5e5e5] dark:border-[#232326] bg-[#f3f3f3] dark:bg-[#18181b] shadow flex items-center justify-center">
                  <img src="/assets/profile-pic.png" alt="Profile" className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full" draggable={false} />
                </div>
              </Link>
            </div>
          )}
          {/* Center: Nav links (hidden on mobile, visible on md+) */}
          <motion.div layout className="hidden md:flex flex-1 justify-center pointer-events-auto">
            <div className="flex items-center justify-center gap-2 lg:gap-4 bg-white dark:bg-[#232326] rounded-full px-4 lg:px-6 py-2 lg:py-3 shadow-lg min-w-[220px] lg:min-w-[340px]">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-1.5 lg:px-4 lg:py-2 rounded-full font-semibold text-sm lg:text-base transition-colors duration-200 tracking-tight
                    ${location.pathname === item.path
                      ? "text-teal-500 dark:text-teal-400"
                      : "text-black dark:text-white hover:text-teal-500 dark:hover:text-teal-400"}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
          {/* Right: Theme toggle (always visible) */}
          <div className="flex items-center flex-shrink-0 ml-2 pointer-events-auto">
            <ThemeToggle />
          </div>
          {/* Mobile menu button (visible on mobile/tablet) */}
          <div className="md:hidden flex items-center ml-2 pointer-events-auto">
            <button
              className="p-2 rounded-full text-black dark:text-white hover:bg-white/10 focus:outline-none"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open main menu"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
                <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile menu dropdown (only on mobile/tablet) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute left-1/2 -translate-x-1/2 top-20 bg-white dark:bg-[#18181b] border border-white/10 rounded-xl shadow-xl py-2 w-11/12 max-w-xs flex flex-col z-50 animate-fade-in pointer-events-auto"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-6 py-4 rounded-lg font-semibold text-base transition-colors duration-200 tracking-tight
                    ${location.pathname === item.path
                      ? "text-teal-500 dark:text-teal-400"
                      : "text-black dark:text-white hover:text-teal-500 dark:hover:text-teal-400"}`}
                  onClick={() => {
                    setMenuOpen(false);
                    // Forcibly blur the button to close the menu on mobile
                    if (document.activeElement instanceof HTMLElement) {
                      document.activeElement.blur();
                    }
                  }}
                  tabIndex={0}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
