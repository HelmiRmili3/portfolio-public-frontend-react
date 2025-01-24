import React from 'react';

const Experience = () => {
  // Example data for experience
  const experiences = [
    {
      title: 'Sr. Frontend Developer',
      company: 'XYZ Company',
      duration: 'Nov 2021 - Present',
      responsibilities: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Ut pretium arcu et massa semper, id fringilla leo semper.',
        'Sed quis justo ac magna.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ],
      logo: 'https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png', // Replace with actual logo URL
    },
    {
      title: 'Frontend Developer',
      company: 'ABC Tech',
      duration: 'Jun 2019 - Oct 2021',
      responsibilities: [
        'Developed user interfaces using React and Tailwind CSS.',
        'Collaborated with backend developers to integrate APIs.',
        'Optimized applications for maximum speed and scalability.',
        'Participated in code reviews and team meetings.',
      ],
      logo: 'https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png', // Replace with actual logo URL
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Startup Inc.',
      duration: 'Jan 2018 - May 2019',
      responsibilities: [
        'Assisted in the development of web applications.',
        'Learned and applied modern frontend technologies.',
        'Worked closely with senior developers to improve skills.',
        'Contributed to the design and implementation of new features.',
      ],
      logo: 'https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png', // Replace with actual logo URL
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Experience Heading */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-1 bg-gray-300 dark:bg-gray-600 rounded-[20px]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Experience
            </h2>
          </div>
          {/* Descriptive Phrase */}
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            My professional journey so far.
          </p>
        </div>
        {/* Experience List */}
        <div className="mt-8 space-y-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
            >
              {/* Company Logo */}
              <div className="w-16 h-16 flex-shrink-0 mb-4 md:mb-0">
                <img
                  src={experience.logo}
                  alt={`${experience.company} Logo`}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              {/* Content */}
              <div className="flex-1 mx-0 md:mx-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.title} at {experience.company}
                </h3>
                <ul className="mt-2 space-y-2">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      • {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Timeline */}
              <div className="w-full md:w-40 flex-shrink-0 text-left md:text-right mt-4 md:mt-0">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {experience.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;