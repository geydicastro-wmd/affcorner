import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import InternalHeader from "../components/common/InternalHeader";
import CTAGeneral from "../components/common/CTAGeneral";
import BrandPeekSlider from "../components/common/BrandPeekSlider";
import useCmsPage from "../hooks/useCmsPage";
import useReveal from "../hooks/useReveal";

export default function Commissions() {
  useReveal();

  const cmsPage = useCmsPage("BasicPage", {
      title: "Commissions Plans",
    });

  const { page, translation, getBlocks, renderHtml } = cmsPage;

  const title = page?.title || translation?.title || "Commission Plans";


  const h2 = getBlocks("h2");
  const divs = getBlocks("div");

  const commissionPlans = [
    {
      percent: h2[0]?.content || "20%",
     //range: h2[16]?.content || "Up to $10,000",
      // label: p[10]?.content ? getText(p[10].content) : "Starter volume",
      detail: divs[0]?.content ||
       "A strong entry tier for new partners building consistent traffic.",
    },
    {
      percent: h2[1]?.content || "25%",
      // range: h2[18]?.content || "$10,001 to $50,000",
      // label: p[11]?.content ? getText(p[11].content) : "Growth tier",
      detail: divs[1]?.content || "Designed for affiliates scaling campaigns across multiple brands.",
      featured: true,
    },
    {
      percent: h2[2]?.content || "30%",
      // range: h2[20]?.content || "$50,001 or more",
      // label: p[12]?.content ? getText(p[12].content) : "Premium volume",
      detail: divs[2]?.content ||
     "Higher net revenue unlocks the strongest monthly commission rate.",
    },
  ];

  return (
    <>
      <InternalHeader title={title} />

      {translation && (
        <Helmet>
          <title>{translation.meta_title || page?.title || title}</title>
        </Helmet>
      )}

      <Container>
        <Row className="g-4 commissions__grid reveal reveal--fade" data-reveal>
          {commissionPlans.map((plan) => (
            <Col md={4} xs={12} key={plan.percent}>
              <article
                className={`commissions__card ${
                  plan.featured ? "commissions__card--featured" : ""
                }`}
              >
                <div className="commissions__badge">
                  <span>{plan.percent}</span>
                </div>

                {/* <p className="commissions__label">{plan.label}</p>
                <h2 className="commissions__range">{plan.range}</h2> */}
                <div className="commissions__detail" 
                dangerouslySetInnerHTML={renderHtml?.(plan.detail)}
                ></div>

              </article>
            </Col>
          ))}
        </Row>
      </Container>

      <CTAGeneral />

      <BrandPeekSlider />
    </>
  );
}
