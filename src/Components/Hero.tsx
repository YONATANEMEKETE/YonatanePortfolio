import BgPattern from './ui/BgPattern';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypewriterEffect } from './ui/TypewritterEffect';
import ButtonHero from './ui/ButtonHero';
import ButtonHero2 from './ui/ButtonHero2';
import { infiniteScrolls } from '@/Data/Data';
import { useRef } from 'react';
import profilepic from '../assets/profilepic.png';

const Hero = () => {
  const words = [
    {
      text: 'YONATANE',
      className:
        'text-3xl md:text-5xl text-text font-header font-extrabold mb-4',
    },
    {
      text: 'MEKETE',
      className:
        'text-3xl md:text-5xl text-accent font-header font-extrabold mb-4',
    },
  ];

  return (
    <section id="hero" className="relative z-0 pt-48">
      <BgPattern />
      <div className="w-max h-fit mx-auto flex flex-col items-center mb-32">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
          className="size-[8rem] relative rounded-xl shadow-2xl overflow-hidden bg-accent border-2 border-accent hover:ring-4 
        hover:ring-accent transition-all duration-300 mb-6 cursor-pointer"
        >
          <img
            // src="https://ik.imagekit.io/6qizpphtd1/Profile%20Pics/About.png?"
            src={profilepic}
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
          className="text-2xl  md:text-3xl text-textgrey font-body font-semibold mb-10"
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

      <TextAnimation />
    </section>
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
          initial={{ x: 0 }}
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
            x: '0',
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

const TextAnimation = () => {
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start start', 'end end'],
  });

  const scale = useTransform(scrollYProgress, [0.3, 1], [1, 2.5]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1.5, 3]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={target} className="relative h-[400vh]">
      <motion.div
        // style={{ scale }}
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        <motion.div
          style={{ scale }}
          className="size-full flex flex-col pt-10 pb-12"
        >
          <div className="absolute z-10 top-10 right-10 bg-text h-[20%] w-1"></div>
          <div className="absolute z-0 top-10 right-10 bg-accent w-[10%] h-1"></div>
          <div className="absolute z-10 left-10 bottom-16 bg-accent w-[10%] h-1"></div>
          <div className="absolute left-10 bottom-16 bg-text h-[20%] w-1"></div>
          <div className="basis-1/3  w-[80%] pl-10">
            <div className="size-fit overflow-hidden">
              <motion.p
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
                className="text-text text-3xl md:text-[3.5rem] lg:text-[5rem] font-header font-extrabold leading-[1] drop-shadow-2xl"
              >
                USER CENTERED
              </motion.p>
            </div>
            <div className="size-fit overflow-hidden">
              <motion.p
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: 'easeInOut',
                }}
                className="text-accent text-3xl md:text-[3.5rem] lg:text-[5rem] font-header font-extrabold leading-[1] drop-shadow-2xl"
              >
                DESIGNS
              </motion.p>
            </div>
            {/* <p className=" text-text text-[5rem] font-header font-extrabold leading-[1] drop-shadow-2xl">
              USER CENTERED <span className="text-accent">DESIGNS</span>
            </p> */}
          </div>
          <div className="basis-1/3 w-[80%] mx-auto self-center flex-wrap  grid place-content-center mb-6">
            <motion.p
              style={{ scale: scale2, opacity }}
              className="text-accent text-center text-[0.5rem] md:text-lg lg:text-2xl font-header font-extrabold pb-1 md:mb-2 lg:mb-4"
            >
              ACCESSIBLE
            </motion.p>
            <motion.p
              style={{ scale: scale2, opacity }}
              className="text-text text-center text-[0.5rem] md:text-lg lg:text-2xl font-header font-extrabold "
            >
              INTERFACE
            </motion.p>
          </div>
          <div className="basis-1/3 flex flex-col justify-end  self-end w-[70%] pr-10">
            <div className="w-full h-fit text-end overflow-hidden ">
              <motion.p
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="w-full text-end text-accent text-3xl md:text-[3.5rem] lg:text-[5rem] font-header font-extrabold leading-[1] drop-shadow-2xl"
              >
                FAST
              </motion.p>
            </div>
            <div className="w-full h-fit text-end overflow-hidden ">
              <motion.p
                initial={{ y: '100%' }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="w-full text-end text-text text-3xl md:text-[3.5rem] lg:text-[5rem] font-header font-extrabold leading-[1] drop-shadow-2xl"
              >
                LOADING TIME
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
