const ButtonHero2 = () => {
  return (
    <button
      className="relative inline-flex h-12 items-center justify-center 
    rounded-md bg-accent px-2 md:px-6 text-text2 text-lg font-body font-semibold transition-colors focus:outline-none focus:ring-1 
    focus:ring-accent focus:ring-offset-1 focus:ring-offset-accent"
    >
      <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#78f9f2] opacity-75 blur" />
      Let's Connect
    </button>
  );
};

export default ButtonHero2;
