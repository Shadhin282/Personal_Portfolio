import React from 'react';
import { motion } from 'framer-motion';
// Using react-icons instead of Google Fonts Material Icons for better performance/integration
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = ({ theme, toggleTheme, className }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 transition-colors ${className} ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'dark' ? <MdLightMode className="w-6 h-6" /> : <MdDarkMode className="w-6 h-6" />}
        </motion.button>
    );
};

export default ThemeToggle;
