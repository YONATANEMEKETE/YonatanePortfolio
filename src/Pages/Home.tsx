import AboutMe from '@/Components/AboutMe';
import Hero from '../Components/Hero';
import Navigation from '../Components/Navigation';

const Home = () => {
  return (
    <div className="bg-bg pb-[100vh]">
      <Navigation />
      <Hero />
      <AboutMe />
    </div>
  );
};

export default Home;
