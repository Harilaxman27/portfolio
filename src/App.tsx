import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { AppRoutes } from './AppRoutes';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Sidebar />
        <div className="ml-[280px]">
          <Navbar />
          <main className="pt-20 px-6">
            <AppRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;