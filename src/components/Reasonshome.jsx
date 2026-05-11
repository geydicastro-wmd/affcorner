import { Container, Row, Col } from "react-bootstrap";
import { createElement } from "react";
import { GrMoney } from "react-icons/gr";
import { FaUserPlus, FaGear } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  {
    icon: GrMoney,
    text: "Revenue share commissions amongst the highest in the gaming industry",
  },
  {
    icon: FaUserPlus,
    text: "Lifetime commissions on your referred players",
  },
  {
    icon: FaGear,
    text: "Wide variety of marketing tools",
  },
  {
    icon: RiCustomerServiceFill,
    text: "Dedicated customer service",
  },
  {
    icon: FaCheckCircle,
    text: "Payouts guaranteed",
  },
];

export default function ReasonsSection() {
  return (
    <section className="reason-home">

      <Container className="text-center text-md-start">
        <Row className="section-heading">
          <Col lg={7}>
            <p className="section-heading__eyebrow">Partner advantages</p>
            <h1 className="section-heading__title">Reasons to Join</h1>
          </Col>
        </Row>
      </Container>

      <Container className="reason-home__cards-wrapper">
        <Row className="g-4 justify-content-center">
          {reasons.map(({ icon, text }, i) => (
            <Col key={i} xs={12} md={6} lg={4}>
              <article className="reason-home__card">
                <div className="reason-home__icon-wrap">
                  {createElement(icon, {
                    className: "reason-home__icon",
                    "aria-hidden": true,
                  })}
                </div>
                <p className="reason-home__text">{text}</p>
              </article>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
