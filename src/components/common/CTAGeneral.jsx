import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import useCmsPage from "../../hooks/useCmsPage";

import CtaImg from "../../assets/cta-page.png";
import CtaBg from "../../assets/bg_contact_info.jpg";

export default function CTAGeneral() {
  const { getBlocks, renderHtml, } = useCmsPage("content", {
    title: "CTA General",
  });
  const h2 = getBlocks("h2");
  const h3 = getBlocks("h3");
  const h5 = getBlocks("h5");
  const h6 = getBlocks("h6");
  const p = getBlocks("p");
  const imgs = getBlocks("img");

  return (
    <section className="affiliate-cta overflow-hidden">
      {/* TOP CTA */}
      <Container fluid className="py-5">
        <Container>
          <Row className="align-items-center justify-content-center g-5">
            <Col xl={5} className="text-center">
              <img
                src={imgs[0]?.src || CtaImg}
                alt={imgs[0]?.alt || "Highest paying affiliate program"}
                className="img-fluid cta-image"
                width="650"
                height="859"
              />
            </Col>

            <Col xl={6} className="text-center text-xl-start">
              <span className="text-warning fw-bold text-uppercase small">
                {p[0]?.content || "Affiliate Program"}
              </span>

              <h2 className="display-3 fw-bold mt-3 mb-4">
                {h2[0]?.content ||
                  "The best converting and highest paying program"}
              </h2>

              <p
                className="lead text-body-secondary mb-5"
                dangerouslySetInnerHTML={renderHtml(
                  p[1]?.content ||
                    "Join one of the most trusted sportsbook and casino affiliate programs and maximize your revenue with high-converting brands.",
                )}
              />

              <Button
                as={Link}
                to="/register-now"
                size="lg"
                className="btn-yellow text-uppercase px-5 py-3"
              >
                {h5[0]?.content || "Register Now"}
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* CONTACT STRIP */}
      <Container
        fluid
        className="affiliate-cta__contact text-light py-5"
        style={{ "--cta-contact-bg": `url(${imgs[1]?.src || CtaImg})` }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <span className="text-warning fw-bold text-uppercase small">
                {p[2]?.content || "Contact"}
              </span>

              <h3 className="fw-bold mt-3 mb-3">
                {h3[0]?.content || "Need help getting started?"}
              </h3>

              <p className="text-light fw-bold mb-5">
                {p[3]?.content || "Our working hours are from 09:00 AM to 9:00 PM EST from Monday to Friday."}
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center g-4">
            <Col md={5} lg={4}>
              <div className="d-flex align-items-center justify-content-center gap-3 p-4 rounded-4 bg-white bg-opacity-10 affiliate-cta__contact-card">
                <div className="text-warning fs-4">
                  <FaEnvelope />
                </div>

                <div className="text-start">
                  <div className="small text-warning fw-bold text-uppercase">
                    {h6[0]?.content || "E-mail"}
                  </div>

                  <a
                    href="mailto:support@affcorner.com"
                    className="text-reset text-decoration-none"
                  >
                    {p[4]?.content || "support@affcorner.com"}
                  </a>
                </div>
              </div>
            </Col>

            <Col md={5} lg={4}>
              <div className="d-flex align-items-center justify-content-center gap-3 p-4 rounded-4 bg-white bg-opacity-10 affiliate-cta__contact-card">
                <div className="text-warning fs-4">
                  <FaPhoneAlt />
                </div>

                <div className="text-start">
                  <div className="small text-warning fw-bold text-uppercase">
                    {h6[1]?.content || "Telephone"}
                  </div>

                  <a
                    href="tel:+18883142347"
                    className="text-reset text-decoration-none"
                  >
                    {p[5]?.content || "1-888-314-2347"}
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
