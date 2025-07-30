const portfolioItems = [
  {
    src: '/landing/828.png',
    alt: 'Aethir project screenshot',
  },
  {
    src: '/landing/583.png',
    alt: 'Helix project screenshot',
  },
  {
    src: '/landing/507.png',
    alt: 'Coinseeker project screenshot',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Work
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-lg border border-gray-800 hover:border-white transition-colors duration-300">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;