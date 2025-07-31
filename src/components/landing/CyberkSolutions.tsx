import { ChevronRight } from 'lucide-react';

const solutions = [
  {
    title: 'MVP Development',
    description: 'Turn your idea into a real product in less than 30 days. Our service helps you validate your concept quickly, reduce time-to-market, and minimize wasted investment.',
  },
  {
    title: 'Smart Contract Development',
    description: 'Get secure, reliable, and upgradable smart contracts for any major blockchain. We solve the complexity by providing expert consulting, design, and deployment.',
  },
  {
    title: 'Dedicated Lab',
    description: 'Dedicated Lab is a service where Cyberk and the client jointly build a long-term development team, fully dedicated to your product.',
  },
  {
    title: 'MVP Agent Development',
    description: 'Cyberk\'s MVP Agent Development service helps you quickly turn your idea of an “AI employee” into a real, working product.',
  },
];

const CyberkSolutions = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Cyberk Solutions
            </h2>
            <p className="text-lg text-gray-400">
              We offer a full suite of services to bring your Web3 vision to life.
            </p>
        </div>
        <div className="space-y-6">
          {solutions.map((solution) => (
            <a href="#" key={solution.title} className="group block bg-gray-900/50 p-8 rounded-lg border border-gray-800 hover:border-white transition-all duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-2xl">{solution.description}</p>
                </div>
                <ChevronRight className="w-8 h-8 text-gray-600 group-hover:text-white transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0 ml-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberkSolutions;