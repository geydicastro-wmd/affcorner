import { Helmet } from "react-helmet-async";
import useCmsPage from "../hooks/useCmsPage";
import HeroSlider from "../components/home/HeroSlider";
import BrandsLogos from "../components/home/BrandsLogos";
import BrandsIntro from "../components/home/BrandsIntro";
import ProductsSection from "../components/home/Products";
import Reasons from "../components/home/Reasons";
import CommissionsPlans from "../components/home/Commissions";
import CallToAction from "../components/home/CallToAction";
import BrandPeekSlider from "../components/common/BrandPeekSlider";

const defaultHelmet = {
  title: "AffCorner | Affiliate Program",
  description:
    "Join AffCorner and grow your affiliate business with trusted gaming brands, competitive commissions, and dedicated support.",
  ogTitle: "AffCorner | Affiliate Program",
  ogDescription:
    "Grow your affiliate business with trusted gaming brands, competitive commissions, and dedicated support.",
  ogType: "website",
};

export default function Home() {
  const cmsPage = useCmsPage("home", {
    defaultHelmet,
  });
  const { helmet, sliders, slidersLoading } = cmsPage;

  return (
    <>
      <Helmet>
        <title>{helmet.title}</title>
        <meta
          name="description"
          content={helmet.description}
        />
        {helmet.keywords && (
          <meta name="keywords" content={helmet.keywords} />
        )}
        <meta property="og:title" content={helmet.ogTitle} />
        <meta
          property="og:description"
          content={helmet.ogDescription}
        />
        <meta property="og:type" content={helmet.ogType} />
        {helmet.ogImage && (
          <meta property="og:image" content={helmet.ogImage} />
        )}
        {helmet.canonical && (
          <link rel="canonical" href={helmet.canonical} />
        )}
        {helmet.robots && <meta name="robots" content={helmet.robots} />}
        {helmet.twitterTitle && (
          <meta name="twitter:title" content={helmet.twitterTitle} />
        )}
        {helmet.twitterDescription && (
          <meta
            name="twitter:description"
            content={helmet.twitterDescription}
          />
        )}
        {helmet.twitterImage && (
          <meta name="twitter:image" content={helmet.twitterImage} />
        )}
      </Helmet>
      <HeroSlider slidesData={sliders} loading={slidersLoading} />
      <BrandsLogos cms={cmsPage} />
      <BrandsIntro cms={cmsPage} />
      <ProductsSection cms={cmsPage} />
      <Reasons cms={cmsPage} />
      <CommissionsPlans cms={cmsPage} />
      <CallToAction cms={cmsPage} />
      <BrandPeekSlider />
    </>
  );
}
