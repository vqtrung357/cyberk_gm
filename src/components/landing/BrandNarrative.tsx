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
              Before starting Cyberk, Jon and Anderson were founders chasing their own startup dreams. They had the vision, but they still hit the wall that slows down so many early-stage teams: slow execution. By the time their MVP was ready, the market had moved on, cost them time, money, and a shot at success.
            </p>
            <p>
              They realized what most early-stage startups truly need: a lean, reliable, execution-first tech team that understands how critical time-to-market is—especially in the fast-moving world of Web3. No over-engineering. Just a team that moves fast, builds well, and delivers results.
            </p>
            <p>
              So they created Cyberk—a Web3-focused tech studio built by founders, for founders. Cyberk is the partner that understands what’s at stake—because they’ve been there too.
            </p>
          </div>
          <div className="flex items-center justify-center">
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