import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id='about' className="bg-background-light dark:bg-background-dark font-sans  flex items-center justify-center transition-colors duration-300 relative">
      {/* The old HTML had a specific absolute dark mode toggle here (line 96-101), 
                but we are using a global fixed one or the one in Navbar. 
                I will omit the redundant absolute component-level toggle to clean up the UI 
                unless strictly necessary. The fixed one covers it. */}

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16 text-center max-w-6xl">
        <div className="mb-8">
          <div className="profile-container">
            <div className="bg-background-light dark:bg-background-dark rounded-full p-1">
              <img
                alt="shadin Profile Picture"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-transparent"
                src="https://i.ibb.co.com/fzNKPY6m/03.jpg"
              />
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-gradient-text gradient-text from-green-500 to-blue-500 bg-clip-text text-transparent">
            Hi, I’m Shadin :)
            <br />
            <strong>Full Stack Web Developer</strong>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-secondary-text-light dark:text-gray-300 leading-relaxed mb-5 max-w-5xl mx-auto font-medium">
          Around 40+ project has created, 3+ full stack website, capable to
          provide services like Professional MERN Stack Web Application
          Development, React.js Frontend Development & UI Optimization, Full
          Website Development with Next.js (SEO Optimized), REST API Development
          & Backend Services, Bug Fixing, Performance Optimization & Code
          Refactoring
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-secondary-text-light dark:text-gray-300">
          <SocialLink
            target="_blank"
            href="https://drive.google.com/file/d/1MZ4FxPv_eNrZHQW0-EzDdNt-uZlVFtM6/view?usp=drive_link"
            icon="far fa-file-alt"
            label="Resume"
          />
          <SocialLink
            target="_blank"
            href="https://www.linkedin.com/in/md-mahmodul-hassen-khan-shadin/"
            icon="fab fa-linkedin"
            label="Linkedin"
          />
          <SocialLink
            target="_blank"
            href="https://github.com/Shadhin282"
            icon="fab fa-github-square"
            label="github"
          />
          <SocialLink
            target="_blank"
            href="https://dev.to/shadhin282"
            icon="dev.to"
            label="dev.to"
          />
        </div>
      </motion.main>
    </section>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="group flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
    <span className="text-2xl">
      {/* Note: The original HTML used FontAwesome icons. 
                We installed react-icons, but replacing them 1:1 requires importing specific icons.
                I'll stick to 'i' tags if the user plans to keep FontAwesome CDN, 
                OR I should replace them with react-icons. 
                The plan mentioned react-icons. I will use appropriate react-icons here. 
             */}
      {/* Mapping: 
                fa-file-alt -> FaFileAlt
                fa-linkedin -> FaLinkedin
                fa-medium -> FaMedium
                fa-figma -> FaFigma
             */}
      <IconMapper iconClass={icon} />
    </span>
    <span className="font-medium text-lg">{label}</span>
  </a>
);

// Helper to map old classes to React Icons if we want, or just load the CDN.
// For now, to ensure the look is exactly "polished" as requested, I will load the FontAwesome CDN in index.html (or use react-icons).
// Using react-icons is better for React.
import { FaFileAlt, FaLinkedin, FaGithub, FaDev } from "react-icons/fa";

const IconMapper = ({ iconClass }) => {
  if (iconClass.includes("file-alt")) return <FaFileAlt />;
  if (iconClass.includes("linkedin")) return <FaLinkedin />;
  if (iconClass.includes("github")) return <FaGithub />;
  if (iconClass.includes("dev.to")) return <FaDev />;
  return null;
};

export default Hero;
