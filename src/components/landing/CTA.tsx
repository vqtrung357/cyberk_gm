import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let's Build Together
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Have a project in mind? We'd love to hear about it. Reach out and let's create something amazing.
        </p>
        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black transition-colors">
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default CTA;