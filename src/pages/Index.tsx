import BrandPosition from "../components/landing/BrandPosition";
import Footer from "../components/landing/Footer";
import ShowcaseImage from "../components/landing/ShowcaseImage";

const IndexPage = () => {
  return (
    <main className="bg-black text-white">
      <BrandPosition />
      <ShowcaseImage />
      <Footer />
    </main>
  );
};

export default IndexPage;