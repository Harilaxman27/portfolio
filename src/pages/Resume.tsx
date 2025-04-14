import React from 'react';
import agriVerseImage from '../../images/ecofarm.jpg';
import authenticatorImage from '../../images/1728628380935.jpeg';
import eduVerseImage from '../../images/Screenshot 2025-04-13 165446.png';
import aiTutorImage from '../../images/Screenshot 2025-04-13 165828.png';
import todoImage from '../../images/1728434909411.jpeg';

import { Briefcase, GraduationCap, Award, Download, Code, FolderGit, Github, ExternalLink } from 'lucide-react';

export default function Resume() {
  const skills = [
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "Flutter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
    },
    {
      name: "Dart",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    }
  ];

  // Project data
  const projects = [
    {
      title: "AgriVerse",
      description: "A smart irrigation system that optimizes water usage by automatically adjusting irrigation based on real-time soil moisture and environmental conditions.",
      technologies: ["React", "TensorFlow", "Flutter", "Firebase"],
      gitRepo: "https://github.com/Harilaxman27/eco_farm_ai",
      liveDemo: "",
      image: agriVerseImage
    },
    {
      title: "Authenticator",
      description: "A Flutter app with Firebase Authentication for secure user sign-in, sign-up, and session management.",
      technologies: ["Flutter", "Dart", "Firebase"],
      gitRepo: "https://github.com/Harilaxman27/Authenticator",
      liveDemo: "",
      image: authenticatorImage
    },
    {
      title: "Edu-verse",
      description: "An AI-powered learning platform that personalizes educational content based on student performance and learning style.",
      technologies: ["React", "Python", "TensorFlow", "MySQL"],
      gitRepo: "",
      liveDemo: "https://edu-verse.tech/",
      image: eduVerseImage
    },
    {
      title: "Ai-Tutor",
      description: "An AI-powered tutor that provides personalized learning support using intelligent feedback, adaptive content, and real-time assistance.",
      technologies: ["React", "Python", "TensorFlow", "MySQL"],
      gitRepo: "https://github.com/Harilaxman27/ai-tutor",
      liveDemo: "",
      image: aiTutorImage
    },
    {
      title: "ToDo",
      description: "A Flutter-based ToDo app that uses Hive for fast, lightweight, and offline-first local data storage.",
      technologies: ["Flutter", "Dart", "Hive", "Firebase"],
      gitRepo: "https://github.com/Harilaxman27/ToDo",
      liveDemo: "",
      image: todoImage
    },
  ];

  // For infinite scrolling effect, duplicate the skills array
  const duplicatedSkills = [...skills, ...skills];

  // Define the animation CSS as a style object
  const carouselStyles = {
    '@keyframes carousel': {
      '0%': {
        transform: 'translateX(0)'
      },
      '100%': {
        transform: 'translateX(-50%)'
      }
    },
    animateCarousel: {
      animation: 'carousel 30s linear infinite'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Resume</h1>
          <a
            href="/path-to-your-resume.pdf"
            download
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Download className="h-5 w-5 mr-2" />
            Download Resume
          </a>
        </div>
        
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8 transition-all duration-300 hover:shadow-xl">
          <div className="flex items-center mb-6">
            <Briefcase className="h-6 w-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Work Experience</h2>
          </div>
          
          <div className="border-l-2 border-blue-200 dark:border-blue-800 pl-4 ml-2">
            <div className="mb-6 relative">
              <div className="absolute -left-6 mt-1 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Intern</h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-medium">OpenPixel Web Solutions Private Limited</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">Feburary - June 2021</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-2">
                Led development of key frontend features using React and integrated with backend APIs. Collaborated with the design team to implement responsive UI components and mentored by junior developers in best practices.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-6 w-6 text-green-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Education</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            {/* First Education Entry */}
            <div className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">B. Tech – CSE (AI & ML)</h3>
                  <p className="text-md font-medium text-blue-600 dark:text-blue-400">CMR College of Engineering & Technology</p>
                </div>
                <span className="text-sm font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full">2023 - 2027</span>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Pursuing Bachelor's degree with focus on Artificial Intelligence and Machine Learning.
              </p>
            </div>
            
            {/* Second Education Entry */}
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">High School | PCM Stream</h3>
                  <p className="text-md font-medium text-blue-600 dark:text-blue-400">Sri Chaitanya Junior Kalasala</p>
                </div>
                <span className="text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">2022 - 2023</span>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                Completed high school with focus on Physics, Chemistry, and Mathematics.
              </p>
            </div>
          </div>
        </section>

        {/* New Projects Section */}
        <section className="mb-8">
          <div className="flex items-center mb-6">
            <FolderGit className="h-6 w-6 text-indigo-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-all duration-300 hover:shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={project.gitRepo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub Repo
                    </a>
                    {project.liveDemo && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-yellow-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Achievements</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <ul className="space-y-6">
              {/* Hackathon Achievement 1 */}
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900">
                    <Award className="h-5 w-5 text-yellow-500" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">1st Prize, Team VibeSeek – VNR DESIGN-A-THON 2025</h4>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">VNRVJIET, Hyderabad</p>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">
                    Led a 4-member team to victory by building a user-centric tech product with strong UI/UX and innovation.
                  </p>
                </div>
              </li>
              
              {/* Hackathon Achievement 2 */}
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900">
                    <Award className="h-5 w-5 text-yellow-500" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">2nd Prize, Team VibeSeek – Epitome'25 Hackathon</h4>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Gokaraju Rangaraju Engineering College</p>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">
                    Developed a scalable, real-world solution that impressed judges for its technical and practical strength.
                  </p>
                </div>
              </li>
              
              {/* Hackathon Achievement 3 */}
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900">
                    <Award className="h-5 w-5 text-yellow-500" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">2nd Prize, Team VibeSeek, Sustainability Domain – HackSavvy-25</h4>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Mahatma Gandhi Institute of Technology (MGIT)</p>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">
                    Built an eco-focused platform to address environmental challenges through intelligent systems.
                  </p>
                </div>
              </li>
              
              {/* Course Achievement */}
              <li className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-900">
                    <GraduationCap className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Supervised Machine Learning: Regression and Classification</h4>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Stanford University (Coursera)</p>
                  <p className="mt-1 text-gray-700 dark:text-gray-300">
                    Successfully completed comprehensive coursework in machine learning fundamentals.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="flex items-center mb-6">
            <Code className="h-6 w-6 text-purple-500 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills</h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="relative h-24 w-full overflow-hidden">
              {/* Skills carousel with continuous animation */}
              <div 
                className="flex absolute" 
                style={{
                  animation: "carousel 30s linear infinite"
                }}
              >
                {duplicatedSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="group mx-4 flex flex-col items-center justify-center"
                  >
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-full p-2 transition-all duration-300 group-hover:scale-110">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="mt-2 text-sm text-gray-600 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/* Add keyframes animation */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes carousel {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `
      }} />
    </div>
  );
}