import About from '../../components/About/About.jsx';
import Courses from '../../components/Courses/Courses.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Teachers from '../../components/Teachers/Teachers.jsx';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Teachers />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
