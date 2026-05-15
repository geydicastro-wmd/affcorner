import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import brand1 from "../../assets/brands/brand1.png";
import brand2 from "../../assets/brands/brand2.png";
import brand3 from "../../assets/brands/brand3.png";
import brand4 from "../../assets/brands/brand4.png";

const brands = [
  {
    name: "BetPhoenix",
    category: "Sportsbook",
    signal: "Established brand",
    size: "wide",
    logo: brand1,
  },
  {
    name: "Skybook",
    category: "Sportsbook",
    signal: "Legacy platform",
    size: "wide",
    logo: brand2,
  },
  {
    name: "Betmania",
    category: "Sportsbook",
    signal: "Player-focused",
    size: "compact",
    logo: brand3,
  },
  {
    name: "Bogart Casino",
    category: "Casino",
    signal: "Casino experience",
    size: "compact",
    logo: brand4,
  },
];

export default function BrandsLogos() {
  return (
    <section className="brands-logos">
      <Container>
        <Row className="section-heading brands-logos__header">
          <Col lg={7}>
            <p className="section-heading__eyebrow">Affiliate brand portfolio</p>
            <h1 className="section-heading__title">Our Brands</h1>
          </Col>
        </Row>

        <Row className="g-4 brands-logos__grid">
          {brands.map((brand) => (
            <Col key={brand.name} xs={12} sm={6} lg={3}>
              <Link
                to="/affiliates-brands"
                className="brands-logos__card"
                aria-label={`View ${brand.name} brand details`}
              >
                <div className="brands-logos__logo-shell">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fluid
                    className={`brands-logos__logo brands-logos__logo--${brand.size}`}
                  />
                </div>
                <div className="brands-logos__meta">
                  <span>{brand.category}</span>
                  <span>{brand.signal}</span>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
