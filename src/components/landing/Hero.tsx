const Hero = () => {
  return (
    <section className="relative flex h-[calc(100vh-5rem)] items-center justify-center text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight animate-fade-in-up">
          Web3 Solutions Built for Innovators
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up [animation-delay:300ms]">
          Build Fast. Build Right. Build with Cyberk.
        </p>
      </div>
    </section>
  );
};

export default Hero;