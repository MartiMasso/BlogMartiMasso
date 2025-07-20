import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Dr. [Tu Nombre]</h3>
            <h3 className="text-2xl font-bold mb-4">Dr. [Your Name]</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Aerospace Engineer, Physicist, and NASA Researcher. Exploring the limits 
              of scientific knowledge and developing technologies that propel humanity toward the stars.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">Aerospace Engineering</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Quantum Physics</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">NASA Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Entrepreneurship</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Science & Technology</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Dr. [Your Name]. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Powered by</span>
            <Heart size={16} className="text-red-500" />
            <span>and scientific curiosity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;