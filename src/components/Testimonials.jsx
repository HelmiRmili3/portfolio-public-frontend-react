import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
           <div className="text-center mb-8">
          <div className="inline-block px-6 py-1 bg-gray-300 dark:bg-gray-600 rounded-[20px]">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Testimonials
            </h2>
          </div>
          {/* Descriptive Phrase */}
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Nice things prople have said about me :
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300">
              "Amazing work! Highly recommended."
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              - Client A
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300">
              "Great attention to detail and timely delivery."
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              - Client B
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300">
              "Excellent communication and professionalism."
            </p>
            <p className="mt-4 font-semibold text-gray-900 dark:text-white">
              - Client C
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;