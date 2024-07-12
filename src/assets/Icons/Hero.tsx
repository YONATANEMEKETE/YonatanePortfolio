import BgPattern from './ui/BgPattern';
// import ShimmerButton from './magicui/shimmer-button';
// import { IKContext, IKImage } from 'imagekitio-react';
import { motion } from 'framer-motion';
import { TypewriterEffect } from './ui/TypewritterEffect';
import ButtonHero from './ui/ButtonHero';
import ButtonHero2 from './ui/ButtonHero2';
import { infiniteScrolls } from '@/Data/Data';

const Hero = () => {
  const words = [
    {
      text: 'YONATANE',
      className: 'text-5xl text-text font-header font-extrabold mb-4',
    },
    {
      text: 'MEKETE',
      className: 'text-5xl text-accent font-header font-extrabold mb-4',
    },
  ];

  return (
    <div className="relative z-0 pt-48">
      <BgPattern />
      <div className="w-max h-fit mx-auto flex flex-col items-center mb-32">
        <motion.div
          className="size-[8rem] rounded-xl shadow-2xl overflow-hidden bg-accent border-2 border-accent hover:ring-4 
        hover:ring-accent transition-all duration-300 mb-6 cursor-pointer"
        >
          <img
            src="https://ik.imagekit.io/6qizpphtd1/Profile%20Pics/About.png?"
            // src="https://ik.imagekit.io/6qizpphtd1/Profile%20Pics/Hero.png?updatedAt=1720685856406"
            alt="yonatane's picture"
            className="object-cover w-full h-full object-center"
          />
        </motion.div>

        <TypewriterEffect words={words} />
        {/* <motion.p className="text-5xl text-text font-header font-extrabold mb-4">
          YONATENE MEKETE
        </motion.p> */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
          className="text-3xl text-textgrey font-body font-semibold mb-10"
        >
          FrontEnd Developer
        </motion.p>

        <div className=" flex items-center gap-4">
          <ButtonHero />
          <ButtonHero2 />
        </div>
      </div>

      {/* infinte Scroll text */}
      <InfiniteScroll rotate="rotate-[1.5deg]" />

      {/* hero cards */}
      <Herocards />
    </div>
  );
};

export default Hero;

const InfiniteScroll = ({ rotate }: { rotate?: string }) => {
  return (
    <div className=" w-full bg-transparent mb-32">
      <div
        className={`relative w-full ${rotate} mx-auto py-4 bg-bg border-y border-textgrey overflow-hidden`}
      >
        <div className="absolute z-50 left-0 bottom-0 top-0 w-[20%] bg-gradient-to-r from-bg to-transparent"></div>
        <div className="absolute z-50 right-0 bottom-0 top-0 w-[20%] bg-gradient-to-l from-bg to-transparent"></div>
        <motion.div
          animate={{
            x: '-100%',
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 60,
            ease: 'linear',
          }}
          className="w-[90%]  mx-auto flex items-center gap-x-16 flex-nowrap"
        >
          {infiniteScrolls.map((item, index) => (
            <p
              className="text-3xl text-text opacity-50 cursor-pointer hover:opacity-90 transition-all duration-500 font-header font-medium italic shrink-0"
              key={index}
            >
              {item}
            </p>
          ))}
        </motion.div>
      </div>
      <div
        className={`relative w-full mx-auto py-4 bg-bg border-y border-textgrey overflow-hidden`}
      >
        <div className="absolute z-50 left-0 bottom-0 top-0 w-[20%] bg-gradient-to-r from-bg to-transparent"></div>
        <div className="absolute z-50 right-0 bottom-0 top-0 w-[20%] bg-gradient-to-l from-bg to-transparent"></div>
        <motion.div
          initial={{ x: '-100%' }}
          animate={{
            x: 0,
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 60,
            ease: 'linear',
          }}
          className="w-[90%]  mx-auto flex items-center gap-x-16 flex-nowrap"
        >
          {infiniteScrolls.map((item, index) => (
            <p
              className="text-3xl text-text opacity-50 cursor-pointer hover:opacity-90 transition-all duration-500 font-header font-medium italic shrink-0"
              key={index}
            >
              {item}
            </p>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Herocards = () => {
  return (
    <div className="relative h-[300vh]">
      <div className="sticky top-0 border h-screen overflow-hidden">
        <div className=" size-full flex items-start gap-x-6">{}</div>
      </div>
    </div>
  );
};
