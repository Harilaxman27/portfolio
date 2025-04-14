import React from 'react';
import { GraduationCap, Newspaper, Share2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore my professional journey, thoughts, and connections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/resume" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Resume</h2>
                <p className="text-gray-600 dark:text-gray-300">View my professional experience</p>
              </div>
            </div>
          </Link>

          <Link to="/blog" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center">
              <Newspaper className="h-8 w-8 text-green-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Blog</h2>
                <p className="text-gray-600 dark:text-gray-300">Read my latest thoughts</p>
              </div>
            </div>
          </Link>

          <Link to="/social" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center">
              <Share2 className="h-8 w-8 text-purple-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Social</h2>
                <p className="text-gray-600 dark:text-gray-300">Connect with me</p>
              </div>
            </div>
          </Link>

          <Link to="/contact" className="transform hover:scale-105 transition-transform duration-200">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex items-center">
              <Mail className="h-8 w-8 text-red-500 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contact</h2>
                <p className="text-gray-600 dark:text-gray-300">Get in touch</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};