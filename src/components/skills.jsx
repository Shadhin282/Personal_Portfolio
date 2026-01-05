import React from 'react'


const defaultSkills = [
  {
    name: 'Javascript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    alt: 'JavaScript logo',
  },
  {
    name: 'Typescript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    alt: 'TypeScript logo',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    alt: 'React logo',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    alt: 'Next.js logo',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    alt: 'Node.js logo',
  },
  {
    name: 'Express.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    alt: 'Express.js logo',
  },
  // {
  //   name: 'Nest.js',
  //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
  //   alt: 'Nest.js logo',
  // },
  // {
  //   name: 'Socket.io',
  //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
  //   alt: 'Socket.io logo',
  // },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    alt: 'PostgreSQL logo',
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    alt: 'MongoDB logo',
  },
  {
    name: 'Sass/Scss',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    alt: 'Sass logo',
  },
  {
    name: 'Tailwindcss',
    icon: 'https://raw.githubusercontent.com/devicons/devicon/refs/tags/v2.17.0/icons/tailwindcss/tailwindcss-original.svg',
    alt: 'Tailwind CSS logo',
  },
  // {
  //   name: 'Figma',
  //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  //   alt: 'Figma logo',
  // },
  // {
  //   name: 'Cypress',
  //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg',
  //   alt: 'Cypress logo',
  // },
  // {
  //   name: 'Storybook',
  //   icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg',
  //   alt: 'Storybook logo',
  // },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    alt: 'Git logo',
  },
]
export const SkillsShowcase = ({
  title = 'The skills, tools and technologies I am really good at:',
  badgeText = 'Skills',
  skills = defaultSkills,
  'data-id': dataId,
}) => {
  return (
    <div id='skills' data-id={dataId} className="w-full  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block px-5 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
            {badgeText}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-gray-700 text-xl mb-16 font-normal">
          {title}
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-12">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.alt || `${skill.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-gray-700 text-sm text-center font-normal">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
