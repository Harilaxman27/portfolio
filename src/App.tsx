import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { AppRoutes } from './AppRoutes';
import { Menu, X } from 'lucide-react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router basename="/portfolio">
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Mobile menu button */}
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-200 dark:bg-gray-800 lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Mobile overlay */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar - hidden on mobile by default, shown when toggled */}
        <div className={`lg:block ${sidebarOpen ? 'block' : 'hidden'} z-40`}>
          <Sidebar />
        </div>
        
        {/* Main content area */}
        <div className="lg:ml-[280px] ml-0">
          <Navbar />
          <main className="pt-20 px-4 md:px-6">
            <AppRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;