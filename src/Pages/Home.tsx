import AboutMe from '@/Components/AboutMe';
import Hero from '../Components/Hero';
import Navigation from '../Components/Navigation';
import Projects from '@/Components/Projects';
import Footer from '@/Components/Footer';

const Home = () => {
  return (
    <div className="bg-bg">
      <Navigation />
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
