import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRegMoon, FaSun, FaHeart, FaPlay } from 'react-icons/fa';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 shadow-md
        ${scrolled
          ? 'bg-gray-200/70 dark:bg-gray-800/70 backdrop-blur-md'
          : 'bg-gray-100 dark:bg-gray-900'
        }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo */}
            <div className="flex-shrink-0 select-none">
                <Link to="/" className="flex items-center space-x-2">
                    <img src="logo.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 text-transparent bg-clip-text tracking-tight">
                    SMART BOLI
                    </span>
                </Link>
            </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <motion.li whileHover={{ scale: 1.12 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              to="/"
              className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Home
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.12 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              to="/aboutus"
              className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              About Us
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.12 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link
              to="/contactus"
              className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.li>
        </ul>

        {/* Right: Buttons & Theme Toggle */}
        <div className="flex items-center gap-4">

          {/* Donate */}
          <motion.a
            href="/donate"
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full font-semibold shadow hover:bg-green-600 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHeart className="text-white" />
            Donate
          </motion.a>

          {/* Demo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 px-4 py-2 bg-yellow-300 text-gray-900 rounded-full font-semibold shadow hover:bg-yellow-400 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay />
            Demo
          </motion.a>

          {/* Dark Mode Toggle */}
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle Dark Mode"
          >
            <div className="w-5 h-5 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{ rotate: darkMode ? 180 : 0, opacity: darkMode ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaSun size={18} />
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={false}
                animate={{ rotate: darkMode ? 0 : -180, opacity: darkMode ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaRegMoon size={18} />
              </motion.div>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
