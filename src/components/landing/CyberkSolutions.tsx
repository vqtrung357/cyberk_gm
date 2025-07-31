import { Rocket, Code, Briefcase, Presentation } from 'lucide-react';

const solutions = [
  {
    icon: <Rocket className="w-8 h-8 mb-4 text-white" />,
    title: 'MVP Development (30-Day Delivery)',
    description: 'We specialize in rapid MVP development, delivering a market-ready product in 30 days or less. Our streamlined process ensures you can launch quickly, gather user feedback, and iterate faster than the competition.',
  },
  {
    icon: <Code className="w-8 h-8 mb-4 text-white" />,
    title: 'Full-Stack Web3 Development',
    description: 'From smart contracts to dApp interfaces, we provide end-to-end Web3 development services. Our expertise covers a wide range of blockchain ecosystems, ensuring your project is built on the right foundation for success.',
  },
  {
    icon: <Briefcase className="w-8 h-8 mb-4 text-white" />,
    title: 'CTO as a Service',
    description: 'Get the strategic technical leadership you need without the full-time cost. We act as your fractional CTO, guiding your technology strategy, managing your development roadmap, and ensuring your project stays on track.',
  },
  {
    icon: <Presentation className="w-8 h-8 mb-4 text-white" />,
    title: 'Fundraising & Pitch Deck Support',
    description: 'We help you craft a compelling narrative and a professional pitch deck that resonates with investors. Our support extends to connecting you with our network of VCs and angel investors in the Web3 space.',
  },
];

const CyberkSolutions = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
            </h2>
            <p className="text-lg text-gray-400">
            We offer a full suite of services to bring your Web3 vision to life.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-black p-8 rounded-lg border border-gray-800 hover:border-white hover:scale-105 transition-all duration-300 flex flex-col"
            >
              {solution.icon}
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-400 leading-relaxed flex-grow">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberkSolutions;