import React from 'react'; 
import { Github, Linkedin, Twitter, X } from 'lucide-react';  

export const Social = () => {
  const socialLinks = [
    {
      platform: "GitHub",
      icon: <Github className="h-8 w-8" />,
      username: "@iampotato",
      url: "https://github.com/Harilaxman27",
      bgColor: "bg-gray-900 hover:bg-gray-800"
    },
    {
      platform: "LinkedIn",
      icon: <Linkedin className="h-8 w-8" />,
      username: "Harilaxman Salendra",
      url: "https://www.linkedin.com/in/salendraharilaxman/",
      bgColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      platform: "X",
      icon: <X className="h-8 w-8 text-white" />,
      username: "@Harilaxman_27",
      url: "https://x.com/Harilaxman_27",
      description: "Thoughts & Updates",
      bgColor: "bg-black hover:bg-gray-800"
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
            Connect <span className="text-blue-600 dark:text-blue-400">With Me</span>
          </h1>
          <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>
                
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.bgColor} rounded-xl shadow-lg p-6 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex flex-col items-center text-center group`}
            >
              <div className="bg-white/10 p-4 rounded-full mb-4 transition-all duration-300 group-hover:bg-white/20">
                {social.icon}
              </div>
              <h2 className="text-2xl font-bold mb-2">{social.platform}</h2>
              <p className="text-gray-200 mb-1">{social.username}</p>
              {social.description && (
                <p className="text-sm text-gray-300 mt-2">{social.description}</p>
              )}
            </a>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border-l-4 border-blue-600 dark:border-blue-400">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm always interested in connecting with fellow developers, tech enthusiasts, and potential collaborators. 
            Feel free to reach out through any of the platforms above!
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">Developer</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">Tech Enthusiast</span>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full">Open to Collaborate</span>
          </div>
        </div>
      </div>
    </div>
  );
};