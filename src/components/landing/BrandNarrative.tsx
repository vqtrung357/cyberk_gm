import { Code } from 'lucide-react';

const BrandNarrative = () => {
  return (
    <section id="brand" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Our Story
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Jon and Anderson, the founders of Cyberk, met through their mutual friend Logan in 2021, instantly connecting over their shared expertise and boundless passion for technology and software engineering. United by a bold vision, they set out to build a strong, trustworthy startup community across Asia.
            </p>
            <p>
              Their journey began with a simple but powerful philosophy: "Together." By joining forces, they believed they could spark real breakthroughs—collaborating, growing, and creating lasting value as one. With Vietnam rising as a powerhouse in the global tech scene, Jon and Anderson saw the opportunity to lead the charge in the decentralized future.
            </p>
            <p>
              They’ve lived the startup grind—racing to MVP, facing hiring challenges, and searching for partners who understand that speed is everything. Time-to-market controls opportunity and management costs, making or breaking a startup’s success. That’s why Cyberk exists: to empower ambitious startups with rapid, reliable, and innovative Web3 solutions—turning bold ideas into reality, fast.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center">
            <img
              src="/landing/our-story-image.jpg"
              alt="Our Story at Cyberk"
              className="rounded-lg object-cover w-full h-auto max-h-[400px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandNarrative;