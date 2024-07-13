// import profilepic from '../assets/profilepic.png';
import profile2 from '../assets/profile2.png';
import { aboutMe, aboutMe2, tools } from '@/Data/Data';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
// import {
//   react,
//   next,
//   tailwind,
//   typescript,
//   javascript,
//   shadcn,
// } from '../assets/Icons/Icons';
import IconCloud from './magicui/icon-cloud';

const AboutMe = () => {
  const words = aboutMe.split(' ');
  const words2 = aboutMe2.split(' ');
  const target = useRef(null);

  const { scrollYProgress } = useScroll({
    target: target,
    offset: ['start end', 'start 0.2'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, '-100%']);

  return (
    <div className="relative w-full   p-10 px-20  flex items-start gap-x-8">
      <div className="sticky top-20 basis-1/3  pt-4 px-4 flex flex-col">
        <div className="text-3xl text-text font-header font-bold mb-6 text-center">
          About <span className="text-accent">Me</span>
        </div>
        <div className="size-[15rem] bg-accent rounded-lg shadow-xl shadow-accent  transition-all duration-300 overflow-hidden self-center">
          <img
            src={profile2}
            alt="yonatane's image"
            className="size-full object-cover object-center"
          />
        </div>
      </div>
      <div className="basis-2/3 h-full pt-20 px-4 space-y-6">
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
                    } text-2xl  font-body font-medium mr-2  antialiased`}
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
                    } text-2xl  font-body font-medium mr-2   antialiased`}
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
                    } text-2xl  font-body font-medium mr-2  antialiased opacity-15`}
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
                    } text-2xl  font-body font-medium mr-2 antialiased opacity-15`}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
        <button
          className="text-xl text-text font-body font-bold px-4 py-2 bg-transparent border border-accent 
          hover:border-text hover:text-accent rounded-md"
        >
          Hire Me
        </button>

        {/* <div>Languages and Tools</div> */}
        <div className="h-[100vh]  pt-4  pl-0">
          <p className="text-3xl text-text font-header font-bold  mb-4">
            Languages and Tools
          </p>
          <div className="h-[90%] ">
            <Tools />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

const Tools = () => {
  const slugs = tools;

  return (
    <div
      className="relative grid place-content-center overflow-hidden size-full bg-bg border border-bgalt 
    rounded-lg shadow-accent shadow-sm px-48 pt-10 pb-20"
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};
