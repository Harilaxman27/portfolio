import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const location = useLocation();
  const links = [
    { name: 'About', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Blog', path: '/blog' },
    { name: 'Social', path: '/social' },
    { name: 'Contact', path: '/contact' },
  ];

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