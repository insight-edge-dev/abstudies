import { Route, Routes } from 'react-router';

import About from './components/About/About.jsx';
import Courses from './components/Courses/Courses.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Teachers from './components/Teachers/Teachers.jsx';
import AboutPage from './pages/About/About.jsx';
import ContactPage from './pages/Contact/Contact.jsx';
import CourseDetailsPage from './pages/CourseDetails/CourseDetails.jsx';
import CoursesPage from './pages/Courses/Courses.jsx';
import GalleryPage from './pages/Gallery/Gallery.jsx';
import TeamPage from './pages/Team/Team.jsx';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Teachers />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:slug" element={<CourseDetailsPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
