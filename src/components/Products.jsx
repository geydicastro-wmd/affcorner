import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon01 from "../assets/products/icons_products_01.png";
import Icon02 from "../assets/products/icons_products_02.png";
import Icon03 from "../assets/products/icons_products_03.png";
import Icon04 from "../assets/products/icons_products_04.png";
import CardBg01 from "../assets/products/sp_back.jpg";
import CardBg02 from "../assets/products/livecasino_back.jpg";
import CardBg03 from "../assets/products/hr_back.jpg";
import CardBg04 from "../assets/products/virtualcasino_back.jpg";

const products = [
  {
    title: "Sportsbook",
    bg: CardBg01,
    icon: Icon01,
    features: [
      "Competitive dime lines",
      "Updated odds on major sports",
    ],
  },
  {
    title: "Live Casino",
    bg: CardBg02,
    icon: Icon02,
    features: ["Instant browser access", "Live dealer casino tables"],
  },
  {
    title: "Horse Racing",
    bg: CardBg03,
    icon: Icon03,
    features: ["Daily race matchups", "Mobile betting available"],
  },
  {
    title: "Virtual Casino",
    bg: CardBg04,
    icon: Icon04,
    features: ["Video poker and slots", "15+ table game options"],
  },
];

export default function ProductsSection() {
  return (
    <section className="products">

      <Container>
        <Row className="section-heading">
          <Col lg={7}>
            <p className="section-heading__eyebrow">Product coverage</p>
            <h1 className="section-heading__title">Products Offered</h1>
          </Col>
          <Col lg={5}>
            <p className="section-heading__subtitle">
              Sportsbook, casino, racing, and virtual products give partners
              multiple ways to convert and retain players.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="g-4 products__grid">
          {products.map((item, i) => (
            <Col lg={6} xs={12} key={i}>
              <Card className="products__card">
                <div
                  className="products__bg"
                  style={{ backgroundImage: `url(${item.bg})` }}
                />

                <div className="products__overlay">
                  <div className="products__content">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="products__icon"
                    />

                    <h2>{item.title}</h2>

                    <ul>
                      {item.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center">
          <Col lg={5} xs={12}>
            <div className="products__cta-panel">
              <span>Ready to explore the full platform?</span>
            <Button
              as={Link}
              to="/login"
                className="products__cta"
            >
                Sign in Now
            </Button>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
}
