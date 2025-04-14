import React from 'react';
import { Calendar, PenLine, BookOpen, ChevronRight } from 'lucide-react';

export const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Thoughts, stories and ideas</p>
        </div>
        
        <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 dark:bg-blue-900 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-100 dark:bg-purple-900 rounded-full opacity-20"></div>
          
          <div className="relative p-8 md:p-12 text-center">
            <div className="inline-flex justify-center items-center mb-8 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full">
              <PenLine size={40} className="text-blue-600 dark:text-blue-400" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Exciting Content Coming Soon!
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
              I'm crafting thoughtful blog posts to share with you. In the meantime, subscribe to be notified when new content is published.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
              <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                <span className="text-gray-700 dark:text-gray-300">Web Development</span>
              </div>
              <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <Calendar className="h-5 w-5 mr-2 text-purple-500" />
                <span className="text-gray-700 dark:text-gray-300">Coming Soon</span>
              </div>
            </div>
            
            {/* Email subscription form */}
            <div className="max-w-md mx-auto">
              <div className="flex w-full mb-4 overflow-hidden rounded-lg shadow-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-200 focus:outline-none"
                />
                <button className="px-4 py-3 font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Be the first to know when new articles are published.
              </p>
            </div>
            
            <div className="mt-8 flex justify-center">
              <button className="group inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                Learn more about upcoming topics
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Preview of upcoming content */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Topics I'll Be Covering</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {["Machine Learning", "UI/UX Design", "Gen-AI", "VibeCoding"].map((topic, index) => (
              <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                <p className="font-medium text-gray-900 dark:text-white">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};