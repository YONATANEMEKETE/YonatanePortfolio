import { navs } from '../Data/Data';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const handleMouseLeave = () => {
    setPosition((prev) => ({
      ...prev,
      opacity: 0,
    }));
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="fixed top-4 left-[50%] -translate-x-[50%] w-fit h-fit px-2 py-1 bg-text rounded-xl  shadow-lg flex items-center gap-x-2 cursor-pointer"
    >
      {navs.map((nav) => (
        <Tab key={nav.text} text={nav.text} setPosition={setPosition} />
      ))}
      <motion.div
        animate={position}
        className="absolute h-12 w-20 bg-bg rounded-xl"
      ></motion.div>
    </div>
  );
};

const Tab = ({ text, setPosition }: { text: string; setPosition: any }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handlePosition = () => {
    if (!ref.current) return;

    // console.log(ref.current.getBoundingClientRect());
    const { width } = ref.current.getBoundingClientRect();
    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    });
  };

  return (
    <div
      ref={ref}
      onMouseEnter={handlePosition}
      className="relative z-10 text-lg font-body font-bold text-white mix-blend-difference leading-3 p-4"
    >
      {text}
    </div>
  );
};

export default Navigation;
