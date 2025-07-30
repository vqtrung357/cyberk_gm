import { Rocket, Users, Award, BrainCircuit } from 'lucide-react';

const values = [
  {
    icon: <Rocket className="w-8 h-8 mb-4 text-white" />,
    title: 'Superior Speed',
    description: 'We deliver MVPs in less than 30 days, giving our clients a powerful advantage in the fast-moving Web3 world. Speed is our standard—because we know that every day matters when launching something new.',
  },
  {
    icon: <Users className="w-8 h-8 mb-4 text-white" />,
    title: 'True Partnership',
    description: 'We strive to be more than just a service provider—we become your trusted partner, acting as your co-founder and CTO. We treat every business idea as our own, investing our passion, expertise, and commitment into every project.',
  },
  {
    icon: <Award className="w-8 h-8 mb-4 text-white" />,
    title: 'Lifecycle Excellence',
    description: 'We navigate the entire product lifecycle, ensuring excellence in every phase—from concept to launch and beyond. This dedication is why our clients return with bigger projects, confident we’ll continue to exceed their high expectations.',
  },
  {
    icon: <BrainCircuit className="w-8 h-8 mb-4 text-white" />,
    title: 'Continuous Adaptation',
    description: "We're always updating our Blockchain knowledge, ensuring we stay current with the latest trends and best practices in the Web3 industry. This commitment keeps us—and our clients—ahead of the curve.",
  },
];

const BrandValues = () => {
  return (
    <section id="values" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How We Deliver
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-black p-8 rounded-lg border border-gray-800 hover:border-white hover:scale-105 transition-all duration-300"
            >
              {value.icon}
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;