import { Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import useCmsPage from "../../hooks/useCmsPage";

import BetPhoenixLogo from "../../assets/icons_logos/icons-01.png";
import SkybookLogo from "../../assets/icons_logos/icons-logos-03.png";
import BetmaniaLogo from "../../assets/icons_logos/icons-logos-02.png";
import BogartLogo from "../../assets/icons_logos/icons-logos-04.png";

export default function BrandPeekSlider() {
  const cms = useCmsPage("content", { title: "Brand Peek" });

  const {
    getBlocks,
  } = cms || {};

  const h2 = getBlocks?.("h2") || [];
  const p = getBlocks?.("p") || [];
  const imgs = getBlocks?.("img") || [];

  const brands = [
  {
    name: imgs[0]?.alt || "BetPhoenix",
    href: "/affiliates-brands#betphoenix",
    logo: imgs[0]?.src || BetPhoenixLogo,
    alt: imgs[0]?.alt || "BetPhoenix",
  },
  {
    name: imgs[1]?.alt || "Skybook",
    href: "/affiliates-brands#skybook",
    logo: imgs[1]?.src || SkybookLogo,
    alt: imgs[1]?.alt || "Skybook",
  },
  {
    name: imgs[2]?.alt || "Betmania",
    href: "/affiliates-brands#betmania",
    logo: imgs[2]?.src || BetmaniaLogo,
    alt: imgs[2]?.alt || "Betmania",
  },
  {
    name: imgs[3]?.alt || "Bogart Casino",
    href: "/affiliates-brands#bogartcasino",
    logo: imgs[3]?.src || BogartLogo,
    alt: imgs[3]?.alt || "Bogart Casino",
  },
];

  return (
    <section className="brand-peek" aria-label="Brand quick links">
      <Container>
        <Row className="align-items-center justify-content-center py-5">
          <Col xs={12} className="text-center">
            <p className="brand-peek__eyebrow">{p[0]?.content || "Checkout our brands"}</p>
            <h2 className="brand-peek__title">{h2[0]?.content || "Take a quick look"}</h2>
          </Col>

          <Col xs={12} className="text-center mt-3">
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
                    <img src={brand.logo} alt={brand.alt} />
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
