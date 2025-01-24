import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto ">
      <div className="text-center mb-8">
          <div className="inline-block px-6 py-1 bg-gray-300 dark:bg-gray-600 rounded-[20px]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Get in touch
            </h2>
          </div>
    
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          What's next? Feel free to reach out to me if you're looking for a developer , have a query , or simply want to connect.
          </p>
        </div>
        <form className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;