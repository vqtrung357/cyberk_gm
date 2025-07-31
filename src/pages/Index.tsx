import BrandNarrative from "../components/landing/BrandNarrative";
import BrandPosition from "../components/landing/BrandPosition";
import BrandValues from "../components/landing/BrandValues";
import BrandVision from "../components/landing/BrandVision";
import CTA from "../components/landing/CTA";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import Portfolio from "../components/landing/Portfolio";
import ShowcaseImage from "../components/landing/ShowcaseImage";
import Testimonials from "../components/landing/Testimonials";

const IndexPage = () => {
  return (
    <div className="bg-black text-white font-sans w-full">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <BrandPosition />
        <ShowcaseImage />
        <BrandNarrative />
        <BrandVision />
        <BrandValues />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;