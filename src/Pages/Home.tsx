import AboutMe from '@/Components/AboutMe';
import Hero from '../Components/Hero';
import Navigation from '../Components/Navigation';
import Projects from '@/Components/Projects';
import Footer from '@/Components/Footer';
import Cursor from '@/Components/Cursor';

const Home = () => {
  return (
    <div className="bg-bg ">
      <Navigation />
      <Cursor />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
