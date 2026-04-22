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
      "Industry best dime lines",
      "Up to date odds on all major sports",
    ],
  },
  {
    title: "Live Casino",
    bg: CardBg02,
    icon: Icon02,
    features: ["No download needed", "Live dealer casino"],
  },
  {
    title: "Horse Racing",
    bg: CardBg03,
    icon: Icon03,
    features: ["Daily matchups", "Mobile betting available"],
  },
  {
    title: "Virtual Casino",
    bg: CardBg04,
    icon: Icon04,
    features: ["Video poker", "Over 15+ table games"],
  },
];

export default function ProductsSection() {
  return (
    <section className="products">

      <Container className="text-center text-md-start">
        <h1 className="products__title">Products Offered</h1>
        <hr />
        <h4 className="products__subtitle">
          What our brands include
        </h4>
      </Container>

      <Container>
        <Row className="g-5 mt-4">
          {products.map((item, i) => (
            <Col lg={6} xs={12} key={i}>
              
              <Card className="products__card">
                
                {/* Background */}
                <div
                  className="products__bg"
                  style={{ backgroundImage: `url(${item.bg})` }}
                />

                {/* Overlay Content */}
                <div className="products__overlay">

                  <div className="products__content">
                    <h2>{item.title}</h2>

                    <ul>
                      {item.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                  </div>

                  <img
                    src={item.icon}
                    alt={item.title}
                    className="products__icon"
                  />
                </div>

              </Card>

            </Col>
          ))}
        </Row>

        {/* CTA */}
        <Row className="justify-content-center mt-5">
          <Col lg={3} xs={8}>
            <Button
              as={Link}
              to="/login"
              className="products__cta w-100"
            >
              Sign in Now
            </Button>
          </Col>
        </Row>

      </Container>
    </section>
  );
}