import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import Resume from './pages/Resume'; // ✅ Default import
import { Blog } from './pages/Blog';
import { Social } from './pages/Social';
import { Contact } from './pages/Contact';
import { CodingProfiles } from './pages/CodingProfiles';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/social" element={<Social />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/coding-profiles" element={<CodingProfiles />} />
    </Routes>
  );
};