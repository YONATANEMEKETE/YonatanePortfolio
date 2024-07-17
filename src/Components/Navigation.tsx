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
    <motion.div
      initial={{ opacity: 0, y: -100, x: '-50%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
        ease: 'easeInOut',
        type: 'spring',
        damping: 10,
      }}
      onMouseLeave={handleMouseLeave}
      className="fixed z-40 top-6 left-[50%] -translate-x-[50%] w-fit h-fit px-1 py-1 bg-bg border border-text rounded-xl  shadow-lg flex items-center gap-x-2 cursor-pointer"
    >
      {navs.map((nav) => (
        <Tab
          key={nav.text}
          text={nav.text}
          link={nav.link}
          setPosition={setPosition}
        />
      ))}
      <motion.div
        animate={position}
        className="absolute h-12 w-20 bg-text rounded-xl"
      ></motion.div>
    </motion.div>
  );
};

const Tab = ({
  text,
  setPosition,
  link,
}: {
  text: string;
  setPosition: any;
  link: string;
}) => {
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
    <a href={link}>
      <div
        ref={ref}
        onMouseEnter={handlePosition}
        className="relative z-10 text-lg font-body font-bold text-white mix-blend-difference leading-3 p-4 px-2 min-[500px]:px-4"
      >
        {text}
      </div>
    </a>
  );
};

export default Navigation;
