import { Network } from 'lucide-react';

const BrandVision = () => {
  return (
    <section id="vision" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Vision
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To be the leading Web3 technology partner for early-stage startups, empowering founders to build innovative solutions that shape the future of the decentralized web.
            </p>
          </div>
          <div className="flex items-center justify-center order-first md:order-last">
            <Network className="w-48 h-48 md:w-64 md:h-64 text-gray-700" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandVision;