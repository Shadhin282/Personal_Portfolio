import React from "react";
import { motion } from "framer-motion";
import { MdAutoAwesome, MdArrowForward } from "react-icons/md";

const ProjectCard = ({
  category,
  status,
  title,
  tags,
    linkText,
  linked,
  imageSrc,
  imageAlt,
  bgGradient,
  reverse = false, // To alternate layout
  isMobileApp = false, // For specific styling adjustments like the "Popo" section
  decorations, // For extra absolute elements like sparkles
}) => {
  return (
    <section className="font-sans transition-colors duration-300 overflow-hidden py-16">
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Background Sparkles/Decorations */}
        {decorations}

        <div
          className={`relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
            reverse ? "" : ""
          }`}>
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col space-y-8 ${
              reverse ? "lg:order-2 lg:pl-8" : "lg:pr-8"
            }`}>
            <div className="flex items-center space-x-4">
              <span className="text-primary dark:text-gray-200 font-bold text-lg tracking-wide">
                {category}
              </span>
              {status && (
                <div className="flex items-center space-x-1 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 shadow-sm">
                  <MdAutoAwesome className="text-[14px]" />
                  <span>{status}</span>
                </div>
              )}
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight tracking-tight">
              {title}
            </h2>

            {tags && (
              <div className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                {Array.isArray(tags) ? (
                  <div className="flex flex-wrap gap-2 items-center">
                    {tags.map((tag, idx) => (
                      <React.Fragment key={idx}>
                        <span>{tag}</span>
                        {idx < tags.length - 1 && (
                          <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full mx-2"></span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                ) : (
                  tags // For string input
                )}
              </div>
            )}

            <div className="pt-4">
              <a
                              href={linked}
                              target="_blank"
                className="group inline-flex items-center text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-slate-300 dark:border-slate-600 group-hover:border-primary dark:group-hover:border-primary transition-colors duration-200">
                  <MdArrowForward
                    className={`transform transition-transform duration-200 ${
                      isMobileApp
                        ? "group-hover:rotate-0 -rotate-45"
                        : "group-hover:translate-x-1"
                    }`}
                  />
                </div>
                <span className="ml-4 font-semibold text-lg">{linkText}</span>
              </a>
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`relative w-full flex justify-center ${
              reverse ? "lg:justify-start lg:order-1" : "lg:justify-end"
            } perspective-1000`}>
            {/* Gradient Blob */}
            {bgGradient && (
              <div
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${bgGradient} blur-3xl rounded-full pointer-events-none`}></div>
            )}

            <div
              className={`relative z-10 w-full max-w-lg transform transition-transform duration-500 hover:scale-[1.02] group`}>
              {isMobileApp ? (
                <div className="relative z-10 cursor-pointer">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-auto object-contain max-h-[600px] drop-shadow-2xl rounded-3xl"
                    style={{
                      maskImage:
                        "linear-gradient(to bottom, black 90%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 90%, transparent 100%)",
                    }}
                  />
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20 blur-xl animate-pulse"></div>
                </div>
              ) : (
                <div className="relative bg-slate-900 dark:bg-black rounded-xl p-2 shadow-2xl ring-1 ring-slate-900/10 dark:ring-white/10">
                  <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-slate-800 rounded-full z-20"></div>
                  <div className="relative overflow-hidden rounded-lg bg-white dark:bg-slate-800 aspect-[16/10]">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="absolute -bottom-3 left-[5%] right-[5%] h-3 bg-slate-800 dark:bg-slate-900 rounded-b-lg shadow-lg z-0">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-slate-700 rounded-b-sm"></div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
