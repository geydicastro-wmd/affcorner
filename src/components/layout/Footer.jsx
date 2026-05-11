import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer__top">
        <Container fluid >
          <Row className="align-items-center text-center">
            {/* Logo */}
            <Col xl={3} xs={12} className="footer__logo mb-4 mb-xl-0">
              <Link to="/">
                <img src={Logo} alt="AffCorner" />
              </Link>
            </Col>

            {/* Links */}
            <Col xl={6} xs={12} className="footer__links">
              <h5 className="text-center mx-auto">Quick Links</h5>

              <Nav className="justify-content-center text-uppercase fw-bold small">
                <Nav.Link as={Link} to="/frequentlyaskedquestions">
                  FAQs
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact Us
                </Nav.Link>
                <Nav.Link as={Link} to="/affiliates-brands">
                  Affiliates Brands
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav>
            </Col>

            {/* CTA */}
            <Col xl={3} xs={12} className="mt-4 mt-xl-0">
              <Link to="/register" className="btn btn-outline-white text-uppercase">
                Get Started Here
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <Container>
          <Row className="text-center">
            <Col xs={12} className="my-3">
              <p>© 2026 AffCorner.com. All rights reserved. <span><Link to="/terms-and-conditions">Terms and Conditions</Link></span></p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
