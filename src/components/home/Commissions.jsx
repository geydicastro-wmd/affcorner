import { Container, Row, Col } from "react-bootstrap";
import useReveal from "../../hooks/useReveal";

export default function CommissionPlans({ cms, showHeading = true }) {
  useReveal();

  const {
    getBlocks,
    getText,
    renderHtml,
  } = cms || {};


  const h1 = getBlocks?.("h1") || [];
  const h2 = getBlocks?.("h2") || [];
  const h5 = getBlocks?.("h5") || [];
  // const h6 = getBlocks?.("h6") || [];
  // const p = getBlocks?.("p") || [];
  const divs = getBlocks?.("div") || [];

  const commissionPlans = [
    {
      percent: h2[4]?.content || "20%",
     //range: h2[16]?.content || "Up to $10,000",
      // label: p[10]?.content ? getText(p[10].content) : "Starter volume",
      detail: divs[4]?.content ||
       "A strong entry tier for new partners building consistent traffic.",
    },
    {
      percent: h2[5]?.content || "25%",
      // range: h2[18]?.content || "$10,001 to $50,000",
      // label: p[11]?.content ? getText(p[11].content) : "Growth tier",
      detail: divs[5]?.content || "Designed for affiliates scaling campaigns across multiple brands.",
      featured: true,
    },
    {
      percent: h2[6]?.content || "30%",
      // range: h2[20]?.content || "$50,001 or more",
      // label: p[12]?.content ? getText(p[12].content) : "Premium volume",
      detail: divs[6]?.content ||
     "Higher net revenue unlocks the strongest monthly commission rate.",
    },
  ];

  return (
    <section
      className={`commissions ${!showHeading ? "commissions--no-heading" : ""}`}
    >
      {showHeading && (
        <Container>
          <Row className="section-heading">
            <Col lg={7}>
              <p className="section-heading__eyebrow">
                {h5[3]?.content
                  ? getText(h5[3].content)
                  : "Net Revenue (Monthly settled)"}
              </p>
              <h1 className="section-heading__title">
                {h1[3]?.content || "Commission Plans"}
              </h1>
            </Col>
          </Row>
        </Container>
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
    </section>
  );
}
