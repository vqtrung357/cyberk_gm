import BrandNarrative from '@/components/landing/BrandNarrative';
import BrandPosition from '@/components/landing/BrandPosition';
import BrandValues from '@/components/landing/BrandValues';
import BrandVision from '@/components/landing/BrandVision';
import CTA from '@/components/landing/CTA';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Testimonials from '@/components/landing/Testimonials';

const Index = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <Hero />
        <BrandNarrative />
        <BrandPosition />
        <BrandValues />
        <BrandVision />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;