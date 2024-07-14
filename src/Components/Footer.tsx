import { github, linkidin, telegram, x } from '@/assets/Icons/Icons';

const Footer = () => {
  return (
    <div className="mt-36 lg:mt-52  pb-20 w-full max-w-[1300px] mx-auto">
      <div className="text-text text-2xl md:text-5xl font-header font-extrabold text-center mb-6">
        YONATANE <span className="text-accent">MEKETE</span>
      </div>
      <div className="border-b border-textgrey w-[70vw] max-w-[1100px] mx-auto mb-2"></div>

      <div className="flex items-center justify-between w-[70vw] max-w-[1100px] mx-auto">
        <p className="text-textgrey text-sm md:text-base font-body font-semibold">
          Copyright © 2024. All right reserved
        </p>
        <div className="flex items-center gap-x-4">
          <div className="size-[1.75rem] md:size-[2.5rem] p-2 bg-bg rounded-full shadow-sm shadow-accent cursor-pointer">
            <img
              src={github}
              alt="social"
              className="size-full object-cover object-center"
            />
          </div>
          <div className="size-[1.75rem] md:size-[2.5rem] p-2 bg-bg rounded-full shadow-sm shadow-accent cursor-pointer">
            <img
              src={x}
              alt="social"
              className="size-full object-cover object-center"
            />
          </div>
          <div className="size-[1.75rem] md:size-[2.5rem] p-2 bg-bg rounded-full shadow-sm shadow-accent cursor-pointer">
            <img
              src={linkidin}
              alt="social"
              className="size-full object-cover object-center "
            />
          </div>
          <div className="size-[1.75rem] md:size-[2.5rem] p-2 bg-bg rounded-full shadow-sm shadow-accent cursor-pointer">
            <img
              src={telegram}
              alt="social"
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
