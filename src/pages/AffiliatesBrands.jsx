import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import BrandDetails from "../components/affiliates-brands/BrandDetails";
import BrandSelector from "../components/affiliates-brands/BrandSelector";
import BrandsHero from "../components/affiliates-brands/BrandsHero";
import BrandPeekSlider from "../components/common/BrandPeekSlider";
import CTAGeneral from "../components/common/CTAGeneral";
import useCmsPage from "../hooks/useCmsPage";

const defaultBrandId = "betphoenix";
const brandIds = ["betphoenix", "skybook", "betmania", "bogartcasino"];

function getBrandFromLocation(hash, search = "") {
  const brandId = hash.replace("#", "");
  const queryBrandId = new URLSearchParams(search).get("brand") || "";

  if (brandIds.includes(brandId)) return brandId;
  if (brandIds.includes(queryBrandId)) return queryBrandId;

  return defaultBrandId;
}

export default function AffiliatesBrands() {
  const { hash, search } = useLocation();
  const cmsPage = useCmsPage("BasicPage", {
    title: "Affiliates Brands",
  });
  const { page, translation } = cmsPage;
  const [activeBrand, setActiveBrand] = useState(() =>
    getBrandFromLocation(hash, search),
  );
  const title = page?.title || translation?.title || "Affiliates Brands";

  useEffect(() => {
    setActiveBrand(getBrandFromLocation(hash, search));
  }, [hash, search]);

  useEffect(() => {
    const hashBrandId = hash.replace("#", "");

    if (hashBrandId !== activeBrand) return;

    const frameId = window.requestAnimationFrame(() => {
      document.getElementById(activeBrand)?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeBrand, hash]);

  return (
    <div className="affiliates-brands-page">
      {translation && (
        <Helmet>
          <title>{translation.meta_title || page?.title || title}</title>
        </Helmet>
      )}

      <BrandsHero cms={cmsPage} />
      <BrandSelector
        cms={cmsPage}
        activeBrand={activeBrand}
        onSelectBrand={setActiveBrand}
      />
      <BrandDetails cms={cmsPage} activeBrand={activeBrand} />

      <CTAGeneral />
      <BrandPeekSlider />
    </div>
  );
}
