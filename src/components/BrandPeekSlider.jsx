import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import BetPhoenixLogo from "../assets/icons_logos/icons-01.png";
import SkybookLogo from "../assets/icons_logos/icons-logos-03.png";
import BetmaniaLogo from "../assets/icons_logos/icons-logos-02.png";
import BogartLogo from "../assets/icons_logos/icons-logos-04.png";

const brands = [
  {
    name: "BetPhoenix",
    href: "/affiliates-brands",
    logo: BetPhoenixLogo,
  },
  {
    name: "Skybook",
    href: "/affiliates-brands",
    logo: SkybookLogo,
  },
  {
    name: "Betmania",
    href: "/affiliates-brands",
    logo: BetmaniaLogo,
  },
  {
    name: "Bogart Casino",
    href: "/affiliates-brands",
    logo: BogartLogo,
  },
];

export default function BrandPeekSlider() {
  return (
    <section className="brand-peek" aria-label="Brand quick links">
      <Container>
        <Row className="align-items-center justify-content-center g-3">
          <Col md={6} xs={12} className="text-center text-md-end">
            <p className="brand-peek__eyebrow">Checkout our brands</p>
            <h2 className="brand-peek__title">Take a quick look</h2>
          </Col>

          <Col md={4} xs={12} className="text-center text-md-start">
            <Carousel
              fade
              controls={false}
              indicators={false}
              interval={2600}
              pause="hover"
              className="brand-peek__carousel"
            >
              {brands.map((brand) => (
                <Carousel.Item key={brand.name}>
                  <Link
                    to={brand.href}
                    className="brand-peek__link"
                    aria-label={`View ${brand.name}`}
                  >
                    <img src={brand.logo} alt={brand.name} />
                    <span>{brand.name}</span>
                  </Link>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
