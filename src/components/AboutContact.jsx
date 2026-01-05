 import React, { useEffect } from 'react';
import { FaLinkedin, FaDev, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Swal from 'sweetalert2';


const AboutContact = () => {

    const handleTouchClick = () => {
       Swal.fire({
  title: "Let's Connect!",
  icon: "info",
  html: `
    <div style="text-align:center;">
      <img style="width:150px; height:150px; margin-left:150px" src="https://i.ibb.co.com/zhrV1CM8/Gemini-Generated-Image-ctmo5ictmo5ictmo.pngg" />
      <p style="margin-top:12px;">Email me at</p>
      <strong>shadhinkhan28@gmail.com</strong>
    </div>
  `,
  confirmButtonText: "Copy Email",
}).then(() => {
  navigator.clipboard.writeText("shadhinkhan28@gmail.com");
});

    }
    return (
        <section id='contact' className="bg-background-light dark:bg-background-dark text-text-light dark:text-gray-100 min-h-screen flex items-center justify-center overflow-x-hidden transition-colors duration-300 relative">
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative flex flex-col items-center justify-center">
                {/* Background lines */}
                <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 z-0 flex justify-center">
                    <div className="w-px h-full bg-black dark:bg-white mx-32 hidden md:block"></div>
                    <div className="w-px h-full bg-black dark:bg-white mx-32 hidden md:block"></div>
                </div>

                <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Arc Text - Hard to replicate perfectly with standard CSS without SVG or libraries, 
                        but we can try to mimic the "WISH I'D SMILED..." curve or just use the text.
                        The original used span transforms. I can port that. 
                     */}
                    <div className="static-arc-text text-gray-800 dark:text-gray-100 mb-[-60px] md:mb-[-80px] z-20 select-none hidden sm:block relative h-40 w-full max-w-md">
                        {/* We can use a helper or SVG for this. 
                             Porting the exact spans for now. */}
                        {['WISH',"I'D", 'SMILED', 'IN', 'THIS', 'PIC'].map((char, i) => {
                            // Angles from -75 to 102 roughly.
                            // Total chars = 22. 
                            // Let's just output the exact spans from the HTML because calculating the rotation here is tedious.
                            const rotations = [   -25, -17,-7,3, 12, 20 ];
                            return (
                                <span
                                    key={i}
                                    className="absolute left-1/2 origin-[50%_450px] text-xl font-bold uppercase"
                                    style={{ transform: `translateX(-30%) rotate(${rotations[i]}deg)`, bottom: '100px' }}
                                >
                                    {char}
                                </span>
                            )
                        })}
                    </div>
                    {/* Mobile alternative text */}
                    <div className="sm:hidden mb-8 text-center font-display font-bold text-xl tracking-wider text-gray-800 dark:text-gray-100 uppercase">
                        Wish I'd smiled in this pic
                    </div>

                    {/* Content Grid */}
                    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-16 lg:gap-24 mt-20 md:mt-0">

                        {/* Left Icons */}
                        <div className="flex md:flex-col gap-6 md:gap-12 order-2 md:order-1">
                            <SocialIcon href="https://www.linkedin.com/in/md-mahmodul-hassen-khan-shadin/" icon={<FaLinkedin />} label="LinkedIn" />
                            <SocialIcon href="https://dev.to/shadhin282" icon={<FaDev />} label="Dev.to" />
                        </div>

                        {/* Center Image */}
                        <div className="relative order-1 md:order-2 group">
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-transparent dark:border-gray-800 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                                <img
                                    alt="Portrait of Jishnu"
                                    className="w-full h-full object-cover object-top"
                                    src="https://i.ibb.co.com/zhrV1CM8/Gemini-Generated-Image-ctmo5ictmo5ictmo.pngg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 dark:opacity-40 pointer-events-none"></div>
                            </div>
                        </div>

                        {/* Right Icons */}
                        <div className="flex md:flex-col gap-6 md:gap-12 order-3">
                            <SocialIcon href="https://github.com/Shadhin282" icon={<FaGithub />} label="Github" />
                            <SocialIcon href="https://x.com/Shadhin282" icon={<FaXTwitter />} label="Twitter" />
                        </div>
                    </div>

                    <div className="mt-8 md:mt-12 text-center">
                        <h1 className="font-display font-bold text-4xl md:text-6xl text-gray-900 dark:text-white tracking-tight">
                            Shadin
                        </h1>
                        <p className="font-body text-gray-500 dark:text-gray-400 mt-2 text-lg">Web &amp; Developer</p>
                        <div className="mt-8">
                            <button onClick={handleTouchClick} href="" className="inline-flex items-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:bg-primary dark:hover:bg-gray-200 transition-colors duration-300 shadow-lg">
                                Get in Touch
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

const SocialIcon = ({ href, icon, label }) => (
    <a href={href} aria-label={label} className="group relative flex items-center justify-center p-3 rounded-xl transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
        <div className="w-8 h-8 text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors text-2xl">
            {icon}
        </div>
    </a>
)

export default AboutContact;
