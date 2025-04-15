import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const links = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Blog', path: '/blog' },
    { name: 'Social', path: '/social' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 right-0 w-full lg:w-[calc(100%-280px)] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-40 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile navigation dropdown */}
        <div className="relative lg:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            {links.find(link => link.path === location.pathname)?.name || 'Menu'}
            <ChevronDown size={16} className={`transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 mt-2 w-40 rounded-md shadow-lg bg-white dark:bg-gray-800 py-2 z-50">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 text-sm ${
                    location.pathname === link.path
                      ? 'text-yellow-500'
                      : 'text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-yellow-500'
                  : 'text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <ThemeToggle />
      </div>
    </nav>
  );
};