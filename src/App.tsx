// import reactLogo from './assets/react.svg';
import Lenis from 'lenis';
import Home from './Pages/Home';
import { useEffect } from 'react';
// import Blogs from './Pages/Blogs';
// import NotFound from './Pages/NotFound';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="transition-colors  duration-300">
      <Home />
      {/* <Blogs /> */}
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
