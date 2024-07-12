// import reactLogo from './assets/react.svg';
import Lenis from 'lenis';
import Home from './Pages/Home';
import { useEffect } from 'react';

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
    <div className="transition-colors duration-300">
      <Home />
    </div>
  );
}

export default App;
