import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-600 dark:text-gray-300">
          © 2022 Crafted with ❤️ by <span className="font-bold text-blue-500">Helmi Rmili</span>.
        </p>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Turning ideas into reality, one line of code at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;