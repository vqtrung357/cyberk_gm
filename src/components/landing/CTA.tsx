import { Button } from '@/components/ui/button';
import { Linkedin, Facebook, Send } from 'lucide-react';

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
        <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-colors">
          Get in Touch
        </Button>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/company/cyberk-io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a
            href="https://www.facebook.com/Cyberk.io/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
          <a
            href="https://t.me/cyberk_anderson"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <Send className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;