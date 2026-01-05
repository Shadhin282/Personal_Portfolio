import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdMenu, MdClose } from 'react-icons/md';
import ThemeToggle from './ThemeToggle';
import AboutContact from './AboutContact';

const Navbar = ({ theme, toggleTheme,projectref,skillref,contactref,aboutref }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Resume',ref: '', href: 'https://drive.google.com/file/d/1MZ4FxPv_eNrZHQW0-EzDdNt-uZlVFtM6/view?usp=drive_link' },
        { name: 'Projects',ref:projectref, href: '#project' },
        { name: 'Skills',ref:skillref, href: '#skills' },
        { name: 'About',ref:aboutref, href: '#about' },
        { name: 'Contact',ref:contactref, href: `#contact` },
    ];

    return (
        <nav className="w-full max-w-4xl mx-auto p-4 z-50 relative">
            <div className="relative flex items-center justify-between px-8 py-4 border border-nav-border-light dark:border-nav-border-dark rounded-full bg-white dark:bg-gray-800 shadow-sm transition-all duration-300">
                <div className="flex-shrink-0">
                    
                    <a href="/" className="text-xl font-bold tracking-tight text-nav-text-light dark:text-nav-text-dark hover:text-black dark:hover:text-white transition-colors">
                        <div className='flex items-center jusitfy-center gap-2'>
                            <img className='w-5 h-5' src="./src/assets/logo.jpg" alt="" /> <span className='bg-gradient-text gradient-text from-green-500 to-blue-500 bg-clip-text text-transparen'>Shadin Khan</span>
                       </div>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-nav-text-light dark:text-nav-text-dark hover:text-gray-900 dark:hover:text-white focus:outline-none"
                    >
                        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center md:space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            onClick={() => link.ref.current.scrollIntoView({ behavior: "smooth" })}
                            href={link.href}
                            className="text-sm font-semibold text-nav-text-light dark:text-nav-text-dark hover:text-black dark:hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-nav-text-light dark:bg-nav-text-dark transition-all group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
                {/* Desktop Theme Toggle (was fixed bottom right in HTML, but can be here too or stick to original) */}
                {/* The original had it fixed bottom right, but also a hidden/visible logic. Let's keep the fixed one in Layout/App, but maybe add one here?
                     Actually the original HTML had one in the Nav (lines 86-89) AND one fixed bottom right (lines 257-259).
                     Wait, line 86 button has `fixed bottom-4 right-4` but is INSIDE nav `div`. That's weird CSS structure in original HTML.
                     I will put one in the Navbar for desktop if it fits, or adhere to the design. 
                     The design shows a fixed button in the bottom right. I'll stick to that for the global toggle, 
                     but notice the existing HTML nav didn't strictly have a toggle *inside* the flex container, 
                     it had a button *after* the links but strictly positioned fixed?
                     Line 86: `<button class="fixed bottom-4 right-4 ...`
                     So it's not visually in the navbar.
                     However, there is ALSO a button at line 97 (absolute top right of section?).
                     I will consolidate. A fixed bottom-right toggler is standard and good.
                  */}
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 md:hidden flex flex-col space-y-4 z-40"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-medium text-nav-text-light dark:text-nav-text-dark hover:text-primary dark:hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
