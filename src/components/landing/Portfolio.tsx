const portfolioItems = [
  {
    src: '/landing/828.png',
    alt: 'Aethir project screenshot',
    title: 'Aethir',
    description: 'Aethir is a decentralized cloud computing platform that aggregates GPU power from enterprises, data centers, and individuals worldwide to provide GPU-as-a-Service for AI, gaming, and high-performance computing applications. Aethir reduces costs, increases scalability, and eliminates the centralization risks of traditional cloud services.',
  },
  {
    src: '/landing/583.png',
    alt: 'Helix project screenshot',
    title: 'Helix',
    description: 'Helix is a multi-strategy RWA (Real World Asset) DeFi platform powered by the USHD stablecoin, offering institutional-grade access to real-world assets, sustainable yield, and growth opportunities.',
  },
  {
    src: '/landing/507.png',
    alt: 'Coinseeker project screenshot',
    title: 'Coinseeker',
    description: 'Coinseeker helps users discover and analyze new and promising cryptocurrency projects with in-depth data, community insights, and expert reviews. Coinseeker was acquired by Titan Lab for $30M in January 2025, becoming one of the most notable M&A deals in blockchain analytics.',
  },
  {
    src: '/landing/373shots_so.png',
    alt: 'New project screenshot',
    title: 'New Project',
    description: 'Please provide a description for this project.',
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
            <div key={index} className="group flex flex-col rounded-lg border border-gray-800 hover:border-white transition-colors duration-300 bg-gray-900/20">
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 rounded-b-lg flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;