import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useCmsPage from "../../hooks/useCmsPage";
import Logo from "../../assets/logo.png";


export default function Footer() {
  const { getBlocks } = useCmsPage("Footer");
  const h5 = getBlocks?.("h5") || [];
  const p = getBlocks?.("p") || [];
  const imgs = getBlocks?.("img") || [];

  const companyLinks = [
  { label: p[2]?.content || "About Us", to: "/about" },
  { label: p[3]?.content || "Affiliate Brands", to: "/affiliates-brands" },
  { label: p[4]?.content || "Commissions", to: "/commissions" },
  { label: p[5]?.content || "FAQs", to: "/frequentlyaskedquestions" },
  { label: p[6]?.content || "Contact Us", to: "/contact" },
];

const affiliateLinks = [
  { label: p[7]?.content || "Betphoenix Affiliates", to: "/betphoenix-affiliates" },
  { label: p[8]?.content || "Skybook Affiliates", to: "/skybook-affiliates" },
  { label: p[9]?.content || "Betmania Affiliates", to: "/betmania-affiliates" },
  { label: p[10]?.content || "Bogart Casino Affiliates", to: "/bogart-casino-affiliates" },
];

  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <Row className="footer__grid g-4">
            <Col lg={4} md={6} xs={12} className="footer__brand">
              <Link to="/">
                <img src={imgs[0]?.src || Logo} alt="imgs[0]?.alt" />
              </Link>

              <p>
               {p[0]?.content} 
              </p>

              <Link to="/register-now" className="footer__button">
               <span>{p[1]?.content || "Get Started Here"}</span> 
              </Link>
            </Col>

            <Col lg={3} md={6} xs={12} className="footer__links">
              <h5>{h5[0]?.content || "Quick Access"}</h5>

              <Nav className="flex-column">
                {companyLinks.map((item) => (
                  <Nav.Link key={item.to} as={Link} to={item.to}>
                    {item.label}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>

            <Col lg={3} md={6} xs={12} className="footer__links">
              <h5>{h5[1]?.content || "Affiliate Links"}</h5>

              <Nav className="flex-column">
                {affiliateLinks.map((item) => (
                  <Nav.Link key={item.to} as={Link} to={item.to}>
                    {item.label}
                  </Nav.Link>
                ))}
              </Nav>
            </Col>

            <Col lg={2} md={6} xs={12} className="footer__platform">
              <h5>{h5[2]?.content || "Platform"}</h5>

              <p>
                {p[11]?.content || "AffCorner is a leading affiliate marketing platform connecting affiliates with top gaming brands for mutual growth and success."}
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
              <span> © {new Date().getFullYear()} {p[12]?.content || "AffCorner.com. All rights reserved."} </span> 
                <span>
                   <Link to="/terms-and-conditions">{p[13]?.content || "Terms and Conditions"}</Link>
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
