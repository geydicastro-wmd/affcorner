import InternalHeader from "../components/common/InternalHeader";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";


export default function Contact() {
  return (
    <div>
      <InternalHeader title="Contact Us" />
      <main className="contact-page">
      <Container className="py-5">
        <Row className="justify-content-center text-center py-lg-3">
          <Col lg={8}>
            <span className="text-warning fw-bold text-uppercase small">
              Contact Us
            </span>

            <h1 className="display-5 fw-bold mt-2 mb-3">
              We’re here to help you grow.
            </h1>

            <p className="lead mb-4">
              If you have any questions, comments or suggestions about the
              program, don’t hesitate to contact us anytime.
            </p>

            <div className="d-inline-flex align-items-center gap-2 px-4 py-3 rounded-pill bg-body-tertiary border">
              <FaClock className="text-warning" />
              <span>
                <strong>09:00 AM to 9:00 PM EST</strong> · Monday to Friday
              </span>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center g-4 my-5">
          <Col md={6} lg={5}>
            <Card className="h-100 border-0 shadow-sm rounded-4 text-center">
              <Card.Body className="p-4 p-lg-5">
                <div className="fs-2 text-warning mb-3">
                  <FaEnvelope />
                </div>

                <h3 className="fw-bold mb-2">E-mail Support</h3>

                <p className="text-body-secondary mb-4">
                  Send us your questions and our affiliate support team will
                  assist you.
                </p>

                <a
                  href="mailto:support@affcorner.com"
                  className="fw-bold text-reset text-decoration-none"
                >
                  support@affcorner.com
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} lg={5}>
            <Card className="h-100 border-0 shadow-sm rounded-4 text-center">
              <Card.Body className="p-4 p-lg-5">
                <div className="fs-2 text-warning mb-3">
                  <FaPhoneAlt />
                </div>

                <h3 className="fw-bold mb-2">Telephone Support</h3>

                <p className="text-body-secondary mb-4">
                  Speak directly with our team during business hours for faster
                  assistance.
                </p>

                <a
                  href="tel:+18883142347"
                  className="fw-bold text-reset text-decoration-none"
                >
                  1-888-314-2347
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center text-center pb-5">
          <Col lg={10}>
            <div className="p-4 p-lg-5 bg-body-tertiary border rounded-4">
              <h3 className="fw-bold mb-3">Account Support</h3>

              <p className="mb-0">
                We look forward to assisting you with all your needs and helping
                you make the most of the Affcorner affiliate program.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
    </div>
  )
}