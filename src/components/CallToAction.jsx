import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CtaImage from "../assets/cta_sp.png";

export default function CTASection() {
  return (
    <section className="cta">
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          
          {/* TEXT */}
          <Col
            xl={5}
            xs={12}
            className="cta__content text-center text-xl-start order-2 order-xl-1"
          >
            <h1 className="cta__title">
              The best converting and highest paying program
            </h1>

            <Button
              as={Link}
              to="/register-now"
              className="cta__btn"
            >
              Register Now
            </Button>
          </Col>

          {/* IMAGE */}
          <Col
            xl={5}
            xs={12}
            className="cta__image text-center order-1 order-xl-2"
          >
            <img src={CtaImage} alt="Paying Program" />
          </Col>

        </Row>
      </Container>
    </section>
  );
}