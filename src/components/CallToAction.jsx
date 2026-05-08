import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";
import CtaImage from "../assets/cta_sp.png";

export default function CTASection() {
  useReveal();

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
            <p className="cta__eyebrow">Ready to partner?</p>
            <h1 className="cta__title">
              The best converting and highest paying program
            </h1>
            <p className="cta__copy">
              Join a brand portfolio built to help affiliates convert better,
              retain longer, and scale with confidence.
            </p>

            <Button
              as={Link}
              to="/register"
              className="cta__btn"
            >
              Register Now
            </Button>
          </Col>

          {/* IMAGE */}
          <Col
            xl={5}
            xs={12}
            className="cta__image text-center order-1 order-xl-2 reveal reveal--right"
            data-reveal
          >
            <img src={CtaImage} alt="Paying Program" />
          </Col>

        </Row>
      </Container>
    </section>
  );
}
