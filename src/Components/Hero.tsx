import BgPattern from './ui/BgPattern';
// import ShimmerButton from './magicui/shimmer-button';
// import { IKContext, IKImage } from 'imagekitio-react';
import { motion } from 'framer-motion';
import { TypewriterEffect } from './ui/TypewritterEffect';
import ButtonHero from './ui/ButtonHero';
import ButtonHero2 from './ui/ButtonHero2';

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
      <div className="w-max h-fit mx-auto flex flex-col items-center mb-20">
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
          {/* <ShimmerButton
            className="shadow-2xl"
            borderRadius="20px"
            shimmerColor="#08f78b"
            background="rgba(0, 0, 0, .95)"
          >
            <span className="text-textgrey text-lg font-body font-bold">
              let's connect
            </span>
          </ShimmerButton> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
