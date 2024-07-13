// import profilepic from '../assets/profilepic.png';
import profile2 from '../assets/profile2.png';
import { aboutMe } from '@/Data/Data';

const AboutMe = () => {
  const words = aboutMe.split('');

  return (
    <div className="relative w-full h-[150vh]  p-10 px-20  flex items-start gap-x-8">
      <div className="sticky top-20 basis-1/3  pt-4 px-4 flex flex-col">
        <div className="text-3xl text-text font-body font-bold mb-6 text-center">
          About <span className="text-accent">Me</span>
        </div>
        <div className="size-[15rem] bg-accent rounded-lg shadow-2xl drop-shadow-xl hover:ring-1 ring-text transition-all duration-300 overflow-hidden self-center">
          <img
            src={profile2}
            alt="yonatane's image"
            className="size-full object-cover object-center"
          />
        </div>
      </div>
      <div className="basis-2/3 h-full pt-20  px-6">
        <div className="flex gap-[0.15rem] flex-wrap tracking-tighter  text-2xl text-text font-body font-semibold ">
          {words.map((word, index) => (
            <span key={index} className="">
              {word}
            </span>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutMe;
