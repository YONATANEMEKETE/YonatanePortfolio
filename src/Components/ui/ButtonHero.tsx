const ButtonHero = () => {
  return (
    <a href="#projects">
      <button
        className="inline-flex h-12 animate-background-shine items-center justify-center 
      rounded-md border border-gray-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
      bg-[length:200%_100%] px-2 md:px-6 font-semibold text-text2 text-lg transition-colors focus:outline-none 
      focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 focus:ring-offset-gray-50"
      >
        View Projects
      </button>
    </a>
  );
};

export default ButtonHero;
