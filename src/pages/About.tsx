import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Code, Brain, User, ArrowUpRight } from 'lucide-react';

export const About = () => {
  const learningTopics = [
    "Artificial Intelligence",
    "Machine Learning",
    "Full Stack Development",
    "App Development",
    "Cloud Computing"
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      icon: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
      url: "https://leetcode.com/u/CBHs7rPEmB/",
      description: "Competitive Programming"
    },
    {
      platform: "CodeForces",
      icon: "https://codeforces.org/s/0/images/codeforces-sponsored-by-ton.png",
      url: "https://codeforces.com/profile/Harilaxman",
      description: "Algorithm Challenges"
    },
    {
      platform: "CodeChef",
      icon: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Codechef%28new%29_logo.svg/512px-Codechef%28new%29_logo.svg.png",
      url: "https://www.codechef.com/users/harilaxman",
      description: "Competitive Coding"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center md:text-left">
          About Me
        </h1>
        
        {/* About Me Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <User className="h-6 w-6 text-indigo-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Who I Am</h2>
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300">
            <p>
              I'm a <span className="font-medium text-indigo-600 dark:text-indigo-400">Machine Learning Engineer</span> and <span className="font-medium text-indigo-600 dark:text-indigo-400">Developer</span> passionate about creating intelligent solutions to real-world problems.
            </p>
            <p>
              My technical expertise spans <span className="font-medium">Python</span>, <span className="font-medium">TensorFlow</span>, and <span className="font-medium">Flutter</span>, with a strong foundation in supervised learning techniques for regression and classification models.
            </p>
            <p>
              I've successfully applied AI to practical challenges including crop disease detection, personalized recommendation systems, resume analyser, ai tutor, garbage classification model, and sustainable farming initiatives. My approach combines technical rigor with creative problem-solving to deliver impactful solutions.
            </p>
          </div>
        </section>

        {/* Currently Learning Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <Brain className="h-6 w-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Currently Learning</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {learningTopics.map((topic, index) => (
              <div 
                key={index}
                className="bg-gray-100 dark:bg-gray-700 rounded-lg p-5 text-center transform hover:scale-105 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-600"
              >
                <Book className="h-6 w-6 text-blue-500 mx-auto mb-3" />
                <span className="text-gray-800 dark:text-gray-200 font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Coding Profiles Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <Code className="h-6 w-6 text-purple-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Coding Profiles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-5 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-purple-50 dark:hover:bg-gray-600">
                  <img 
                    src={profile.icon} 
                    alt={`${profile.platform} profile icon`} 
                    className="h-14 w-14 object-contain mb-3"
                  />
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{profile.platform}</span>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{profile.description}</p>
                  <div className="flex items-center mt-3 text-purple-600 dark:text-purple-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Visit Profile</span>
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};