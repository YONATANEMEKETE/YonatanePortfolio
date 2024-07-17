// import profilepic from '../assets/profilepic.png';
import profile2 from '../assets/profile2.png';
import { aboutMe, aboutMe2, tools } from '@/Data/Data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import IconCloud from './magicui/icon-cloud';

const AboutMe = () => {
  const words = aboutMe.split(' ');
  const words2 = aboutMe2.split(' ');
  const target = useRef(null);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start end', 'start 0.2'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, '-100%']);

  const varients = {
    initial: {
      opacity: 0,
      x: '-30px',
    },
    vissible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <section
      id="about"
      ref={container}
      className="relative w-full max-w-[1540px] mx-auto   p-10 px-20  flex flex-col md:flex-row items-center md:items-start gap-x-12 lg:gap-x-8"
    >
      <motion.div
        variants={varients}
        initial="initial"
        whileInView="vissible"
        transition={{
          duration: 1,
          type: 'tween',
          ease: 'easeInOut',
        }}
        className="static md:sticky top-20 w-[30%]  pt-4 px-4 flex flex-col"
      >
        <motion.div
          variants={varients}
          initial="initial"
          whileInView={'vissible'}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="text-2xl md:text-3xl  text-text font-header font-bold mb-6 text-center"
        >
          About <span className="text-accent">Me</span>
        </motion.div>
        <motion.div
          variants={varients}
          className="size-[15rem] bg-accent rounded-lg shadow-xl shadow-accent  transition-all duration-300 overflow-hidden self-center"
        >
          <img
            src={profile2}
            alt="yonatane's image"
            className="size-full object-cover object-center"
          />
        </motion.div>
      </motion.div>
      <div className="w-[90vw] md:w-2/3 h-full pt-20 px-4 space-y-6">
        <motion.div
          ref={target}
          style={{ y: y }}
          className="relative space-y-8 pb-6"
        >
          <div className="space-y-8">
            <div className="flex items-baseline flex-wrap ">
              {words.map((word, index) => {
                const start = index / words.length;
                const end = (index + 1) / words.length;

                const opacity = useTransform(
                  scrollYProgress,
                  [start, end],
                  [0, 1]
                );

                return (
                  <motion.span
                    style={{ opacity: opacity }}
                    key={index}
                    className={`${
                      word === 'YONATANE' || word === 'MEKETE,'
                        ? 'text-accent'
                        : ' text-text'
                    } text-xl md:text-xl  font-body font-medium mr-2  antialiased`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>

            <div className="flex items-baseline flex-wrap ">
              {words2.map((word, index) => {
                const start = index / words2.length;
                const end = (index + 1) / words2.length;
                const opacity = useTransform(
                  scrollYProgress,
                  [start, end],
                  [0, 1]
                );

                return (
                  <motion.span
                    style={{ opacity: opacity }}
                    key={index}
                    className={`${
                      word === 'clean,' || word === 'maintainable'
                        ? 'text-accent'
                        : ' text-text'
                    } text-xl md:text-xl font-body font-medium mr-2   antialiased`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          </div>
          <div className="absolute -top-8 space-y-8">
            <div className="flex items-baseline flex-wrap ">
              {words.map((word, index) => {
                return (
                  <span
                    key={index}
                    className={`${
                      word === 'Yonatane' || word === 'Mekete,'
                        ? 'text-text'
                        : ' text-textgrey'
                    } text-xl md:text-xl  font-body font-medium mr-2  antialiased opacity-15`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>

            <div className="flex items-baseline flex-wrap ">
              {words2.map((word, index) => {
                return (
                  <span
                    key={index}
                    className={`${
                      word === 'clean,' || word === 'maintainable'
                        ? 'text-text'
                        : ' text-textgrey'
                    } text-xl md:text-xl  font-body font-medium mr-2 antialiased opacity-15`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
        <a href="#footer">
          <button className="relative z-40  button">Let's Talk</button>
        </a>

        {/* <div>Languages and Tools</div> */}
        <div className=" pt-4  pl-0">
          <p className="text-xl md:text-3xl text-text font-header font-bold  mb-4">
            Languages and Tools
          </p>
          <div className=" h-[60vh]">
            <Tools />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

const Tools = () => {
  const slugs = tools;

  return (
    <div
      className="relative grid place-content-center overflow-hidden size-full bg-bg border border-bgalt 
    rounded-lg shadow-accent shadow-sm px-20 pt-20 pb-20 lg:px-36 lg:py-28"
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};
