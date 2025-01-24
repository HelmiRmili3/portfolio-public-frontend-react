import React from 'react';

const Skills = () => {
  // Example data for skills (logo URLs and names)
  const skills = [
    {
      name: 'React',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    },
    {
      name: 'JavaScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      name: 'Node.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      name: 'Python',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    },
    {
      name: 'Git',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    },
    {
      name: 'HTML',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      name: 'CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        {/* Skills Heading */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-1 bg-gray-300 dark:bg-gray-600 rounded-[20px]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skills
            </h2>
          </div>
          {/* Descriptive Phrase */}
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Technologies I work with to bring ideas to life.
          </p>
        </div>
        {/* Skills Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;