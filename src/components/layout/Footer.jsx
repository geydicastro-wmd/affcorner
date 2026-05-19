import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const companyLinks = [
  { label: "About Us", to: "/about" },
  { label: "Affiliate Brands", to: "/affiliates-brands" },
  { label: "Commissions", to: "/commissions" },
  { label: "FAQs", to: "/frequentlyaskedquestions" },
  { label: "Contact Us", to: "/contact" },
];

const affiliateLinks = [
  { label: "Bogart Casino Affiliates", to: "/bogart-casino-affiliates" },
  { label: "Betmania Affiliates", to: "/betmania-affiliates" },
  { label: "Betphoenix Affiliates", to: "/betphoenix-affiliates" },
  { label: "Skybook Affiliates", to: "/skybook-affiliates" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <Row className="footer__grid g-4">
            <Col lg={4} md={6} xs={12} className="footer__brand">
              <Link to="/">
                <img src={Logo} alt="AffCorner" />
              </Link>

              <p>
                A performance affiliate casino platform built for sportsbook,
                casino, and gaming traffic.
              </p>

              <Link to="/register-now" className="footer__button">
                Get Started Here
              </Link>
            </Col>

            <Col lg={3} md={6} xs={12} className="footer__links">
              <h5>Quick Links</h5>

              <Nav className="flex-column">
                {companyLinks.map((item) => (
                  <Nav.Link key={item.to} as={Link} to={item.to}>
                    {item.label}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>

            <Col lg={3} md={6} xs={12} className="footer__links">
              <h5>Affiliate Programs</h5>

              <Nav className="flex-column">
                {affiliateLinks.map((item) => (
                  <Nav.Link key={item.to} as={Link} to={item.to}>
                    {item.label}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>

            <Col lg={2} md={6} xs={12} className="footer__platform">
              <h5>Platform</h5>

              <p>
                Trusted brands, simple sign-up, and affiliate support made for
                conversion.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <Row className="text-center">
            <Col xs={12} className="my-3">
              <p>
                © {new Date().getFullYear()} AffCorner.com. All rights reserved.{" "}
                <span>
                  <Link to="/terms-and-conditions">Terms and Conditions</Link>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
