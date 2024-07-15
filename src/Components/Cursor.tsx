import useCursor from '@/Services/Cursor';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const Cursor = () => {
  const { hovered } = useCursor();

  const size = hovered ? 80 : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const handleMouse = (e: MouseEvent) => {
    mouse.x.set(e.clientX);
    mouse.y.set(e.clientY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', (e) => handleMouse(e));
    return window.removeEventListener('mousemove', (e) => handleMouse(e));
  }, []);

  return (
    <motion.div
      style={{ x: smoothMouse.x, y: smoothMouse.y }}
      animate={{
        width: size,
        height: size,
      }}
      className="fixed top-0 left-0 size-[20px] bg-text mix-blend-difference rounded-full z-30"
    ></motion.div>
  );
};

export default Cursor;
