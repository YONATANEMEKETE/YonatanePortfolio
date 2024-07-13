import AboutMe from '@/Components/AboutMe';
import Hero from '../Components/Hero';
import Navigation from '../Components/Navigation';
import Projects from '@/Components/Projects';

const Home = () => {
  return (
    <div className="bg-bg pb-[100vh]">
      <Navigation />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Home;
