import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import profileimage from '../../images/picofme (3).png';

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-[280px] bg-gray-50 dark:bg-gray-900 p-8 flex flex-col shadow-lg z-50">
      <div className="text-center">
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden mb-4">
          <img
            src={profileimage}
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/128?text=HS';
            }}
          />
        </div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">Harilaxman Salendra</h1>
        <p className="text-sm font-bold text-gray-600 dark:text-gray-400">Code with purpose</p>
      </div>

      <div className="mt-auto">
        <div className="flex flex-col gap-4">
          <a href="mailto:salendraharilaxman@gmail.com" className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-500 break-all">
            <Mail className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs md:text-sm">salendraharilaxman@gmail.com</span>
          </a>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/Harilaxman27" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-500">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/salendraharilaxman/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-500">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://x.com/Harilaxman_27" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-500">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
};