import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import BrandNarrative from "@/components/landing/BrandNarrative";
import BrandVision from "@/components/landing/BrandVision";
import BrandValues from "@/components/landing/BrandValues";
import BrandPosition from "@/components/landing/BrandPosition";
import Portfolio from "@/components/landing/Portfolio";
import Contact from "@/components/landing/Contact";

const Index = () => {
  return (
    <div className="bg-black text-white font-sans">
      <Header />
      <main>
        <Hero />
        <BrandNarrative />
        <BrandVision />
        <BrandValues />
        <BrandPosition />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default Index;