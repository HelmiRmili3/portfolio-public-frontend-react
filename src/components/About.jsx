import React from 'react';

const About = ({data}) => {
  const {aboutcontent}= data;
  return (
    <section id="about" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        {/* About Heading */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-1 bg-gray-300 dark:bg-gray-600 rounded-[20px]">
            <h1 className="text-2xl  text-gray-900 dark:text-white">
              About Me
            </h1>
          </div>
          {/* Descriptive Phrase */}
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Curious about me? Here you have it:
          </p>
        </div>
        {/* About Content */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Image (on the left) */}
          <div className="md:w-1/2 mt-8 mr-4 md:mt-0 mb-8 md:mb-0 flex justify-center md:justify-start">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg" // Replace with your image URL
              alt="About Me"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>

          {/* Text Content (on the right) */}
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {aboutcontent}
            </p>
            {/* <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;