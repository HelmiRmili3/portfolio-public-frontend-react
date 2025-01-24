import React, { useState } from 'react';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const handleDownloadCV = () => {
    // Replace with the actual path to your CV file
    const cvUrl = '/path/to/your/cv.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Helmi_Rmili_CV.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="fixed w-full z-50 bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          {"<Developer/>"}
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 items-center">
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-900 dark:text-white hover:text-blue-500"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="text-gray-900 dark:text-white hover:text-blue-500"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-900 dark:text-white hover:text-blue-500"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-900 dark:text-white hover:text-blue-500"
          >
            Contact
          </button>
          <button
            onClick={toggleDarkMode}
            className="text-gray-900 dark:text-white hover:text-blue-500"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          {/* Download CV Button */}
          <button
            onClick={handleDownloadCV}
            className="px-4 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
          >
            Download CV
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-gray-900 dark:text-white"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-800 shadow-md">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('work')}
            className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection('testimonials')}
            className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Contact
          </button>
          <button
            onClick={toggleDarkMode}
            className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          {/* Download CV Button in Mobile Menu */}
          <button
            onClick={handleDownloadCV}
            className="px-4 py-2 mx-4 my-4 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
          >
            Download CV
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;