import { Container, Row, Col } from "react-bootstrap";

const plans = [
  {
    percent: "20%",
    range: "Up to $10,000",
    label: "Starter volume",
    detail: "A strong entry tier for new partners building consistent traffic.",
  },
  {
    percent: "25%",
    range: "$10,001 to $50,000",
    label: "Growth tier",
    detail: "Designed for affiliates scaling campaigns across multiple brands.",
    featured: true,
  },
  {
    percent: "30%",
    range: "$50,001 or more",
    label: "Premium volume",
    detail: "Higher net revenue unlocks the strongest monthly commission rate.",
  },
];

export default function CommissionPlans({ showHeading = true }) {
  return (
    <section
      className={`commissions ${!showHeading ? "commissions--no-heading" : ""}`}
    >
      {showHeading && (
        <Container>
          <Row className="section-heading">
            <Col lg={7}>
              <p className="section-heading__eyebrow">Monthly net revenue</p>
              <h1 className="section-heading__title">Commission Plans</h1>
            </Col>
            <Col lg={5}>
              <p className="section-heading__subtitle">
                Transparent revenue-share tiers that reward growth across our
                sportsbook and casino brand portfolio.
              </p>
            </Col>
          </Row>
        </Container>
      )}

      <Container>
        <Row className="g-4 commissions__grid">
          {plans.map((plan) => (
            <Col md={4} xs={12} key={plan.percent}>
              <article
                className={`commissions__card ${
                  plan.featured ? "commissions__card--featured" : ""
                }`}
              >
                <div className="commissions__badge">
                  <span>{plan.percent}</span>
                </div>

                <p className="commissions__label">{plan.label}</p>
                <h2 className="commissions__range">{plan.range}</h2>
                <p className="commissions__detail">{plan.detail}</p>
              </article>
            </Col>
          ))}
        </Row>

        <div className="commissions__note">
          <span>Revenue share</span>
          <span>Monthly settled</span>
          <span>Built to scale</span>
        </div>
      </Container>
    </section>
  );
}
