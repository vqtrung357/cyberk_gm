import { Lightbulb, PenTool, Code, Server, Shield, Rocket } from 'lucide-react';

const solutions = [
  {
    icon: <Lightbulb className="w-8 h-8 mb-4 text-white" />,
    title: 'Ideation & Strategy',
    description: 'We help you refine your concept, define your product-market fit, and create a roadmap for success.',
  },
  {
    icon: <PenTool className="w-8 h-8 mb-4 text-white" />,
    title: 'UI/UX Design',
    description: 'Our design team creates intuitive and engaging user experiences that drive adoption and retention.',
  },
  {
    icon: <Code className="w-8 h-8 mb-4 text-white" />,
    title: 'Smart Contract Development',
    description: 'We build secure, audited, and optimized smart contracts for any blockchain ecosystem.',
  },
  {
    icon: <Server className="w-8 h-8 mb-4 text-white" />,
    title: 'Backend Development',
    description: 'Our backend solutions are scalable, reliable, and built to support your dApp\'s growth.',
  },
  {
    icon: <Shield className="w-8 h-8 mb-4 text-white" />,
    title: 'Security Audits',
    description: 'We provide comprehensive security audits to ensure your smart contracts and dApps are safe from vulnerabilities.',
  },
  {
    icon: <Rocket className="w-8 h-8 mb-4 text-white" />,
    title: 'Launch & Scaling',
    description: 'We support you through launch and beyond, helping you scale your platform and reach a global audience.',
  },
];

const CyberkSolutions = () => {
  return (
    <section id="solutions" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cyberk Solutions
            </h2>
            <p className="text-lg text-gray-400">
            We offer a full suite of services to bring your Web3 vision to life.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="bg-black p-8 rounded-lg border border-gray-800 hover:border-white hover:scale-105 transition-all duration-300"
            >
              {solution.icon}
              <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
              <p className="text-gray-400 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberkSolutions;