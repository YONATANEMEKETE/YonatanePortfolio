import { bentoIcons2 } from '@/Data/Data';
import jobs from '../assets/Icons/jobs.png';
import slack from '../assets/Icons/slack.png';
import profilepic from '../assets/profilepic.png';
import storeee from '../assets/storeee.png';
import travel from '../assets/travel.png';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full  overflow-hidden max-w-[1540px] mx-auto h-max min-[1500px]:h-[60vw] pt-40 xl:pt-80 px-4 md:px-12 lg:px-20 xl:px-36 space-y-20"
    >
      <p className="text-2xl md:text-3xl lg:text-7xl text-center  text-text font-header font-bold">
        Proj<span className="text-accent">ects</span>
      </p>
      <div className="w-full min-w-[350px] h-max grid grid-cols-4 grid-rows-3 min-[1100px]:grid-cols-5 min-[1100px]:grid-rows-2  gap-4 ">
        <div className="relative h-[20rem] group bg-[#080908]  shadow-text shadow-sm  rounded-2xl col-span-4 min-[1100px]:col-span-3 pt-4 pb-2 px-4 cursor-pointer">
          <div className="relative w-full h-[80%] rounded-xl overflow-hidden mb-4">
            <div className="absolute z-10 inset-0 drop-shadow-lg rounded-xl bg-bg opacity-20"></div>
            <div className="absolute z-0 inset-0  rounded-xl bg-gradient-to-br from-bg to-transparent opacity-50"></div>
            <img
              src={slack}
              className="size-full object-cover object-top group-hover:scale-110 transition-all duration-300 cursor-pointer"
              alt="slack clone website"
            />
          </div>
          <div className="flex items-start justify-between px-4">
            <div className="text-base md:text-xl text-text font-header font-bold w-max">
              Slack Clone Website
            </div>
            <a href="https://slack-clone-23.vercel.app/" target="_blank">
              <button className="relative z-40 button">Live Preview</button>
            </a>
          </div>
        </div>

        <div className="rounded-xl h-[20rem] col-span-2  flex flex-col justify-between">
          <div className="relative h-[25%] bg-[#080908] rounded-xl shadow-sm shadow-text  p-4 overflow-hidden cursor-pointer">
            <div className="absolute rounded-xl inset-0 bg-gradient-to-r from-bg to-transparent"></div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: '-100%' }}
              transition={{
                duration: 60,
                ease: 'linear',
                repeat: Infinity,
                repeatType: 'reverse',
              }}
              className="size-full rounded-xl flex items-center gap-x-10 flex-nowrap -translate-x-12"
            >
              <p className="text-2xl md:text-5xl  text-text opacity-20 hover:opacity-100 transition-all duration-300 font-header font-bold shrink-0">
                Frontend <span className="text-accent">Developer</span>
              </p>
              <p className="text-2xl md:text-5xl  text-text opacity-20 hover:opacity-100 transition-all duration-300 font-header font-bold shrink-0">
                USER <span className="text-accent">EXPERIENCE(UX)</span>
              </p>
              <p className="text-2xl md:text-5xl  text-text opacity-20 hover:opacity-100 transition-all duration-300 font-header font-bold shrink-0">
                USER <span className="text-accent">INTERFACE(UI)</span>
              </p>
            </motion.div>
          </div>
          <div className="h-[70%] rounded-xl overflow-hidden flex gap-4">
            <div className="bg-[#080908] basis-[50%] rounded-xl shadow-sm shadow-text overflow-hidden">
              <img
                src={profilepic}
                alt="yonatanes picture"
                className="size-full object-cover object-center"
              />
            </div>
            <div className="bg-[#080908] basis-[50%] rounded-xl shadow-sm shadow-text p-2 ">
              <div className="size-full px-1 pt-2 rounded-xl flex justify-center flex-wrap">
                {bentoIcons2.map((icon, i) => (
                  <div
                    key={i}
                    className="p-2 size-[2.5rem] lg:size-[3rem] rounded-lg"
                  >
                    <img
                      src={icon}
                      alt="icon"
                      className="size-full object-center object-cover cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#080908] h-[20rem] col-span-2 min-[1100px]:col-span-1 shadow-text shadow-sm rounded-2xl pt-2 md:pt-4 px-1 md:px-4 cursor-pointer flex flex-col items-end lg:items-center">
          <div className="group relative w-full h-[80%] rounded-xl overflow-hidden mb-4">
            <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-b from-bg to-transparent"></div>
            <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-t from-bg to-transparent"></div>
            <img
              src={storeee}
              alt="storeee website"
              className="size-full object-cover object-center "
            />
          </div>
          <a href="https://storeeeshop.vercel.app/" target="_blank">
            <button className="relative z-40 button mr-2">Live Preview</button>
          </a>
        </div>
        <div className="relative  h-[20rem] order-last min-[1100px]:order-none group bg-[#080908] shadow-text shadow-sm  rounded-2xl  col-span-4 min-[1100px]:col-span-3 pt-4 pb-2 px-4 cursor-pointer">
          <div className="relative w-full h-[80%] rounded-xl overflow-hidden mb-4">
            <div className="absolute z-10 inset-0 drop-shadow-lg rounded-xl bg-bg opacity-20"></div>
            <div className="absolute z-0 inset-0  rounded-xl bg-gradient-to-br from-bg to-transparent opacity-50"></div>
            <img
              src={jobs}
              className="size-full object-cover object-top group-hover:scale-110 transition-all duration-300 cursor-pointer"
              alt="slack clone website"
            />
          </div>
          <div className="flex items-start justify-between px-4">
            <div className="text-base md:text-xl text-text font-header font-bold w-max">
              Jobs Listing Website
            </div>
            <a href="https://jobsdream.vercel.app/" target="_blank">
              <button className="relative z-40 button">Live Preview</button>
            </a>
          </div>
        </div>
        <div className="bg-[#080908] hidden h-[20rem] shadow-text shadow-sm rounded-2xl pt-4 px-4 cursor-pointer min-[1100px]:flex flex-col items-center">
          <div className="group relative w-full h-[80%] rounded-xl overflow-hidden mb-4">
            <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-b from-bg to-transparent"></div>
            <div className="absolute inset-0 rounded-lg opacity-40 bg-gradient-to-t from-bg to-transparent"></div>
            <img
              src={travel}
              alt="storeee website"
              className="size-full object-cover object-center "
            />
          </div>
          <a
            href="https://github.com/YONATANEMEKETE/React-Travel-Website"
            target="_blank"
          >
            <button className="relative z-40 button mx-auto">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
