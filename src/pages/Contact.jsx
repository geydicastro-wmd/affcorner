import InternalHeader from "../components/common/InternalHeader";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaClock } from "react-icons/fa";
import useCmsPage from "../hooks/useCmsPage";

export default function Contact() {
  const { page, translation, loading, error, getBlocks, renderHtml } =
    useCmsPage("ContactUs");

  const h2 = getBlocks("h2");
  const h3 = getBlocks("h3");
  const h6 = getBlocks("h6");
  const p = getBlocks("p");

  const title = page?.title || translation?.title || "Contact Us";

  return (
    <div>
      <InternalHeader title={title} />

      {translation && (
        <Helmet>
          <title>{translation.meta_title || page?.title || title}</title>
        </Helmet>
      )}

      <main className="contact-page">
        <Container className="py-5">
          {loading && !page && !error && (
            <span className="visually-hidden">Loading...</span>
          )}
          <Row className="justify-content-center text-center py-lg-3">
            <Col lg={8}>
              <span className="text-warning fw-bold text-uppercase small">
                {h6[0]?.content}
              </span>

              <h1 className="display-5 fw-bold mt-2 mb-3">{h2[0]?.content}</h1>

              <p className="lead mb-4">{p[0]?.content}</p>

              <div className="d-inline-flex align-items-center gap-2 px-4 py-3 rounded-pill bg-body-tertiary border">
                <FaClock className="text-warning" />
                <span dangerouslySetInnerHTML={renderHtml(h6[1]?.content || "Our support team is available Monday to Friday, 9 AM to 5 PM EST.")}>
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

                  <h3 className="fw-bold mb-2">{h3[0]?.content || "E-mail Support"}</h3>

                  <p className="text-body-secondary mb-4">
                    {p[1]?.content || "Send us your questions and our affiliate support team will assist you."}
                  </p>

                  <a
                    href="mailto:support@affcorner.com"
                    className="fw-bold text-reset text-decoration-none"
                  >{h6[2]?.content || "support@affcorner.com"}
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

                  <h3 className="fw-bold mb-2">{h3[1]?.content || "Telephone Support"}</h3>

                  <p className="text-body-secondary mb-4">
                    {p[2]?.content || "Speak directly with our team during business hours for faster assistance."}
                  </p>

                  <a
                    href="tel:+18883142347"
                    className="fw-bold text-reset text-decoration-none"
                  > {h6[3]?.content || "1-888-314-2347"}
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center text-center pb-5">
            <Col lg={10}>
              <div className="p-4 p-lg-5 bg-body-tertiary border rounded-4">
                <h3 className="fw-bold mb-3">{h3[2]?.content || "Account Support"}</h3>

                <p className="mb-0">
                 {p[3]?.content || "We look forward to assisting you with all your needs and helping you make the most of the Affcorner affiliate program."}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
