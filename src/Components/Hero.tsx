const Hero = () => {
  return (
    <div className="relative z-0 pt-36 h-screen">
      <div className=" w-fit h-fit mx-auto flex flex-col items-center">
        <div className="size-[8rem] rounded-full shadow-2xl overflow-hidden bg-accent hover:ring-1 ring-accent transition-all duration-300 mb-6 cursor-pointer">
          <img
            src="https://ik.imagekit.io/6qizpphtd1/Profile%20Pics/About.png?"
            // src="https://ik.imagekit.io/6qizpphtd1/Profile%20Pics/Hero.png?updatedAt=1720685856406"
            alt="yonatane's picture"
            className="object-cover w-full h-full object-center"
          />
        </div>
        <p className="text-5xl text-text font-header font-bold mb-4">
          YONATENE MEKETE
        </p>
        <p className="text-2xl text-text font-header font-semibold">
          Frontend Developer
        </p>
        <div></div>
      </div>
      {/* hero pcis */}
      <div></div>
    </div>
  );
};

export default Hero;
