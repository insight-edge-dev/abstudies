import About from '../../components/About/About.jsx';
import Courses from '../../components/Courses/Courses.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import Navbar from '../../components/Navbar/Navbar.jsx';
import SEO from '../../components/SEO/SEO.jsx';
import Teachers from '../../components/Teachers/Teachers.jsx';

function HomePage() {
  return (
    <>
      <SEO title="AB Studies | Home" pathname="/" />
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
