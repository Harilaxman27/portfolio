import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const links = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Blog', path: '/blog' },
    { name: 'Social', path: '/social' },
    { name: 'Contact', path: '/contact' },
  ];

  if (isMobile) {
    return (
      <>
        <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 z-50 p-2">
          <div className="flex justify-around">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs px-2 py-1 font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-yellow-500'
                    : 'text-gray-300 hover:text-yellow-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </>
    );
  }

  return (
    <nav className="fixed top-0 right-0 w-[calc(100%-280px)] bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-8">
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