import React from 'react';
import ProjectCard from './ProjectCard';

const WorkSection = () => {
    return (
        <div className="bg-background-light dark:bg-background-dark">
            <ProjectCard
                category="Contest"
                status="Developed"
                title="ContestHub - A Contest Management Website"
                tags="React.Js • Payment System Inegrate • Full Stack Web App • MERN Stack"
                linkText="View Live Website"
                linked="https://heroic-gecko-3aea39.netlify.app/"
                imageSrc="https://i.ibb.co.com/v4b6HJD3/contest-Hub-Project-View.png"
                imageAlt="ContestHub Dashboard"
                bgGradient="bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20"
                reverse={false}
                decorations={
                    <>
                        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px grid-line hidden lg:block z-0 pointer-events-none opacity-60 bg-gray-200 dark:bg-gray-800"></div>
                        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-200 dark:text-green-900 hidden lg:block z-0">
                            <svg className="sparkle w-12 h-12" fill="currentColor" height="48" viewBox="0 0 24 24" width="48">
                                <path d="M12,0 L14,10 L24,12 L14,14 L12,24 L10,14 L0,12 L10,10 Z"></path>
                            </svg>
                        </div>
                        <div className="absolute top-1/3 left-[55%] text-pink-300 dark:text-pink-900 hidden lg:block z-0 opacity-60">
                            <svg className="sparkle w-8 h-8 delay-700" fill="currentColor" height="32" viewBox="0 0 24 24" width="32">
                                <path d="M12,0 L14,10 L24,12 L14,14 L12,24 L10,14 L0,12 L10,10 Z"></path>
                            </svg>
                        </div>
                        <div className="absolute bottom-20 right-10 lg:right-40 text-purple-200 dark:text-purple-900 z-0">
                            <svg className="sparkle w-10 h-10 delay-300" fill="currentColor" height="40" viewBox="0 0 24 24" width="40">
                                <path d="M12,0 L14,10 L24,12 L14,14 L12,24 L10,14 L0,12 L10,10 Z"></path>
                            </svg>
                        </div>
                    </>
                }
            />

            <ProjectCard
                category="Real Estate"
                status="Developed"
                title=" Real Estate/ Property Management Application"
                tags={['MERN Stack', 'React.js', 'Web App']}
                linkText="View Live Website"
                linked="https://gorgeous-faloodeh-170cc9.netlify.app/"
                imageSrc="https://i.ibb.co.com/sv2XsLHm/Real-state.png"
                imageAlt="Real Estate website"
                bgGradient=""
                reverse={true}
                isMobileApp={true}
            />

            {/* Repeats the first one again as per index.html lines 263-321? 
                 Actually line 263 seems to be a duplicate of the first section OR a new one.
                 Looking at the text, it is "Redesigning an e-commerce platform for artisans" AGAIN.
                 I will include it if it's meant to be a placeholder for a 3rd project, 
                 or maybe the user just copied pasted sections in HTML.
                 I will comment it out or include it as a duplicate for fidelity if expected, 
                 but for a "polished" app, duplicates look like errors.
                 However, the user said "Convert HTML to React". 
                 I'll add it but maybe vary it slightly or just assume it's a 3rd item.
              */}
            <ProjectCard
                category="Apps"
                status="Developed"
                title="App Browser – Search, Explore & Download Apps"
                tags="React.js• Tailwind Css • Web App • fronted development"
                linked="https://beamish-narwhal-5d4965.netlify.app/"
                linkText="View Live Website"
                imageSrc="https://i.ibb.co.com/Q7v0XMKJ/Hero-IO.png"
                imageAlt="App Management Website"
                bgGradient="bg-gradient-to-tr from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-600/20 dark:via-purple-600/20 dark:to-pink-600/20"
                reverse={false}
            />
        </div>
    );
};

export default WorkSection;
