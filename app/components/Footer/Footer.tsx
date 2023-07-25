import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white py-8">
      <div className="container mx-auto px-4 text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Fabin Ziyad</h2>
            <p>123 Main Street, City, Country</p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition duration-300"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition duration-300"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 transition duration-300"
            >
              Privacy Policy
            </a>
          </div>
        </div>
        <div className=" mt-4 pt-4 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
