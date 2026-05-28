import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";
import CtaImage from "../../assets/cta_sp.png";

function getImageSrc(image, fallbackImage) {
  return image?.url || image?.src || image?.content || fallbackImage;
}

export default function CTASection({ cms }) {
  useReveal();

  const {
    getBlocks,
    getText,
    // renderHtml,
  } = cms || {};

  const h1 = getBlocks?.("h1") || [];
  const h6 = getBlocks?.("h6") || [];
  const h5 = getBlocks?.("h5") || [];
  const p = getBlocks?.("p") || [];
  const imgs = getBlocks?.("img") || [];

  return (
    <section className="cta">
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          
          {/* TEXT */}
          <Col
            xl={5}
            xs={12}
            className="cta__content text-center text-xl-start order-2 order-xl-1 reveal reveal--left"
            data-reveal
          >
            <p className="cta__eyebrow">
              {h6[4]?.content || "Ready to partner?"}
            </p>
            <h1 className="cta__title">
             {h1[4]?.content || "The best converting and highest paying program"}
            </h1>
            <p className="cta__copy">
             {p[12]?.content || "Join a brand portfolio built to help affiliates convert better, retain longer, and scale with confidence."}
            </p>

            <Button
              as={Link}
              to="/register-now"
              className="cta__btn"
            >
              {getText(h5[2]?.content) || "Register Now" }
            </Button>
          </Col>

          {/* IMAGE */}
          <Col
            xl={5}
            xs={12}
            className="cta__image text-center order-1 order-xl-2 reveal reveal--right"
            data-reveal
          >
            <img src={getImageSrc(imgs[16], CtaImage)} alt="Paying Program" />
          </Col>

        </Row>
      </Container>
    </section>
  );
}
