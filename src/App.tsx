import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { AppRoutes } from './AppRoutes';
import { useEffect, useState } from 'react';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  return (
    <Router basename="/portfolio">
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Sidebar />
        <div className={isMobile ? "pt-24 pb-16" : "ml-[280px]"}>
          {!isMobile && <Navbar />}
          <main className={isMobile ? "px-4" : "pt-20 px-6"}>
            <AppRoutes />
          </main>
        </div>
        {isMobile && <Navbar />}
      </div>
    </Router>
  );
}

export default App;