import jobs from '../assets/Icons/jobs.png';
import slack from '../assets/Icons/slack.png';

const Projects = () => {
  return (
    <div className="w-full h-[160vh] pt-40 px-36 space-y-10">
      <p className="text-5xl text-text font-header font-bold">
        Proj<span className="text-accent">ects</span>
      </p>
      <div className="w-full h-[80%] grid grid-cols-5 grid-rows-2 gap-4">
        <div className="relative group bg-[#080908]  shadow-text shadow-sm  rounded-2xl col-span-3 pt-4 pb-2 px-4 cursor-pointer">
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
            <div className="text-xl text-text font-header font-bold w-max">
              Slack Clone Website
            </div>
            <button className="relative z-40 button">Live Preview</button>
          </div>
        </div>

        <div className="border-bgalt shadow-text  rounded-xl col-span-2 flex flex-col gap-4">
          <div className="basis-1/4 border border-bgalt rounded-xl shadow-sm shadow-text"></div>
          <div className="basis-[70%] flex gap-4">
            <div className="border border-bgalt basis-[50%] rounded-xl shadow-sm shadow-text"></div>
            <div className="border border-bgalt basis-[50%] rounded-xl shadow-sm shadow-text"></div>
          </div>
        </div>
        <div className="border-bgalt border shadow-text shadow-sm rounded-2xl "></div>
        <div className="relative group bg-[#080908] shadow-text shadow-sm  rounded-2xl  col-span-3 pt-4 pb-2 px-4 cursor-pointer">
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
            <div className="text-xl text-text font-header font-bold w-max">
              Jobs Listing Website
            </div>
            <button className="relative z-40 button">Live Preview</button>
          </div>
        </div>
        <div className="border-bgalt border shadow-text shadow-sm  rounded-2xl "></div>
      </div>
    </div>
  );
};

export default Projects;
