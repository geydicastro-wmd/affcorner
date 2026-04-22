import HeroSlider from "../components/HeroSlider";
import Intro from "../components/Intro";
import BrandsLogos from "../components/BrandsLogos";
import BrandsIntro from "../components/BrandsIntro";
import ProductsSection from "../components/Products";
import Reasons from "../components/Reasons";
import CommissionsPlans from "../components/Commissions";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSlider />
     {/*<Intro />*/}
      <BrandsLogos />
      <BrandsIntro />
      <ProductsSection />
      <Reasons />
      <CommissionsPlans />
      <CallToAction />
    </>
  );
}
