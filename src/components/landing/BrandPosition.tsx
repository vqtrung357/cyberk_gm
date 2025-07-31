const BrandPosition = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="relative flex flex-col justify-center p-8 md:p-12 border border-gray-800 rounded-lg overflow-hidden min-h-[350px]">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Cyberk is the fastest Web3 technology partner in the industry
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                We guarantee MVP delivery in less than 30 days — empowering startups and entrepreneurs to move from idea to market faster than anyone else.
              </p>
            </div>
            <img
              src="/landing/brand-chart.svg"
              alt="Decorative chart graphic"
              className="absolute bottom-0 left-0 w-1/2 md:w-2/3 max-w-xs"
            />
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col justify-center p-8 md:p-12 border border-gray-800 rounded-lg overflow-hidden min-h-[350px]">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Cyberk is built for entrepreneurs and early-stage startups.
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                For ambitious innovators ready to make their mark—and raise their next round—in Web3, Cyberk is the launchpad to success.
              </p>
            </div>
            <img
              src="/landing/brand-icons.svg"
              alt="Decorative icons graphic"
              className="absolute top-0 right-0 w-1/2 md:w-2/3 max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPosition;