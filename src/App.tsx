import Lenis from 'lenis';
import Home from './Pages/Home';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound';

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
      <Routes>
        <Route path="/" element={<Home />} key="home" />
        <Route path="*" element={<NotFound />} key="404" />
      </Routes>
      {/* <Home /> */}
      {/* <Blogs /> */}
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
