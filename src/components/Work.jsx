import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon from react-icons
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import { Navigation } from 'swiper/modules'; // Import Swiper navigation module

const Work = () => {
  // Example data for projects
  const projects = [
    {
      name: 'Project 1',
      description: 'This is a detailed description of Project 1. It includes the goals, challenges, and outcomes of the project. The description spans four lines to provide a comprehensive overview.',
      technologies: ['React', 'Tailwind CSS', 'Node.js'],
      images: [
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.png',
        'https://i.ytimg.com/vi/EkRJ5zKHhX0/hqdefault.jpg',
        'https://www.jimdo.com/fr/blog/wp-content/uploads/2021/07/Screen-Shot-2021-07-14-at-10.54.14.png',
      ],
      githubUrl: 'https://github.com/HelmiRmili3',
    },
    {
      name: 'Project 2',
      description: 'This is a detailed description of Project 2. It includes the goals, challenges, and outcomes of the project. The description spans four lines to provide a comprehensive overview.',
      technologies: ['Next.js', 'TypeScript', 'Supabase'],
      images: [
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.png',
        'https://i.ytimg.com/vi/EkRJ5zKHhX0/hqdefault.jpg',
        'https://www.jimdo.com/fr/blog/wp-content/uploads/2021/07/Screen-Shot-2021-07-14-at-10.54.14.png',
      ],
      githubUrl: 'https://github.com/HelmiRmili3',
    },
    {
      name: 'Project 3',
      description: 'This is a detailed description of Project 3. It includes the goals, challenges, and outcomes of the project. The description spans four lines to provide a comprehensive overview.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      images: [
        'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.png',
        'https://i.ytimg.com/vi/EkRJ5zKHhX0/hqdefault.jpg',
        'https://www.jimdo.com/fr/blog/wp-content/uploads/2021/07/Screen-Shot-2021-07-14-at-10.54.14.png',
      ],
      githubUrl: 'https://github.com/HelmiRmili3',
    },
  ];

  return (
    <section id="work" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto ">
     
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-1 bg-gray-300 dark:bg-gray-600 rounded-[20px]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Work
            </h2>
          </div>
    
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Some of the noteworthy projects i have build :
          </p>
        </div>
        <div className="mt-8 space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-700 rounded-[25px] shadow-md overflow-hidden " // Added md:mx-8 for desktop margin
            >
              {/* Project Images Carousel */}
              <div className="md:w-1/3 w-full p-4">
                <Swiper
                  navigation={true} // Enable navigation arrows
                  modules={[Navigation]} // Add navigation module
                  className="swiper-container"
                >
                  {project.images.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={image}
                        alt={`Project ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Project Details */}
              <div className="md:w-2/3 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                {/* Technology Chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm text-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* GitHub Icon */}
                <div className="mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
                  >
                    <FaGithub className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;