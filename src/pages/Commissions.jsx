import CommissionPlans from "../components/home/Commissions";
import InternalHeader from "../components/common/InternalHeader";
import CTAGeneral from "../components/common/CTAGeneral";
import BrandPeekSlider from "../components/common/BrandPeekSlider";

export default function Commissions() {
  return (
    <>
      <InternalHeader
        eyebrow="Monthly net revenue"
        title="Commission Plans"
        description="Transparent revenue-share tiers that reward growth across our sportsbook and casino brand portfolio."
      />
      <CommissionPlans showHeading={false} className="reveal" />

      <CTAGeneral />

      <BrandPeekSlider />
    </>
  );
}
