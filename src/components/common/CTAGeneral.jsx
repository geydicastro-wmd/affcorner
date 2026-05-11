import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import CtaImg from "../../assets/cta-page.png";
import CtaBg from "../../assets/bg_contact_info.jpg";

export default function CTAGeneral() {
  return (
    <section className="affiliate-cta overflow-hidden">
      {/* TOP CTA */}
      <Container fluid className="py-5">
        <Container>
          <Row className="align-items-center justify-content-center g-5">
            <Col xl={5} className="text-center">
              <img
                src={CtaImg}
                alt="Highest paying affiliate program"
                className="img-fluid cta-image"
                width="650"
                height="859"
              />
            </Col>

            <Col xl={6} className="text-center text-xl-start">
              <span className="text-warning fw-bold text-uppercase small">
                Affiliate Program
              </span>

              <h2 className="display-3 fw-bold mt-3 mb-4">
                The best converting and highest paying program
              </h2>

              <p className="lead text-body-secondary mb-5">
                Join one of the most trusted sportsbook and casino affiliate
                programs and maximize your revenue with high-converting brands.
              </p>

              <Button
                as={Link}
                to="/register-now"
                variant="warning"
                size="lg"
                className="rounded-pill fw-bold text-uppercase px-5 py-3"
              >
                Register Now
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* CONTACT STRIP */}
      <Container
        fluid
        className="affiliate-cta__contact text-light py-5"
        style={{ "--cta-contact-bg": `url(${CtaBg})` }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <span className="text-warning fw-bold text-uppercase small">
                Contact
              </span>

              <h3 className="fw-bold mt-3 mb-3">
                Need help getting started?
              </h3>

              <p className="text-light fw-bold mb-5">
                Our working hours are from 09:00 AM to 9:00 PM EST from Monday
                to Friday.
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
                    E-mail
                  </div>

                  <a
                    href="mailto:support@affcorner.com"
                    className="text-reset text-decoration-none"
                  >
                    support@affcorner.com
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
                    Telephone
                  </div>

                  <a
                    href="tel:+18883142347"
                    className="text-reset text-decoration-none"
                  >
                    1-888-314-2347
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
