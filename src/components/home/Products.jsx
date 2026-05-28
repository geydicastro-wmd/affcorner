import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";
import Icon01 from "../../assets/products/icons_products_01.png";
import Icon02 from "../../assets/products/icons_products_02.png";
import Icon03 from "../../assets/products/icons_products_03.png";
import Icon04 from "../../assets/products/icons_products_04.png";
import CardBg01 from "../../assets/products/sp_back.jpg";
import CardBg02 from "../../assets/products/livecasino_back.jpg";
import CardBg03 from "../../assets/products/hr_back.jpg";
import CardBg04 from "../../assets/products/virtualcasino_back.jpg";

function getImageSrc(image, fallbackImage) {
  return image?.url || image?.src || image?.content || fallbackImage;
}

export default function ProductsSection({ cms }) {
  useReveal();

  const {
    getBlocks,
    getText,
  } = cms || {};

  const h1 = getBlocks?.("h1") || [];
  const h2 = getBlocks?.("h2") || [];
  const h5 = getBlocks?.("h5") || [];
  const h6 = getBlocks?.("h6") || [];
  const p = getBlocks?.("p") || [];
  // const divs = getBlocks?.("div") || [];
  const imgs = getBlocks?.("img") || [];
  const li = getBlocks?.("li") || [];

  const productCards = [
    {
      title: h2[0]?.content || "Sportsbook",
      bg: getImageSrc(imgs[8], CardBg01),
      icon: getImageSrc(imgs[15], Icon01),
      alt: imgs[8]?.alt || "Sportsbook",
      features: [
        li[0]?.content ? getText(li[0].content) : "Competitive dime lines",
        li[1]?.content ? getText(li[1].content) : "Updated odds on major sports",
      ],
    },
    {
      title: h2[10]?.content || "Live Casino",
      bg: getImageSrc(imgs[9], CardBg02),
      icon: getImageSrc(imgs[12], Icon02),
      alt: imgs[9]?.alt || "Live Casino",
      features: [
        li[2]?.content ? getText(li[2].content) : "Instant browser access",
        li[3]?.content ? getText(li[3].content) : "Live dealer casino tables",
      ],
    },
    {
      title: h2[11]?.content || "Horse Racing",
      bg: getImageSrc(imgs[10], CardBg03),
      icon: getImageSrc(imgs[14], Icon03),
      alt: imgs[10]?.alt || "Horse Racing",
      features: [
        li[4]?.content ? getText(li[4].content) : "Daily race matchups",
        li[5]?.content ? getText(li[5].content) : "Mobile betting available",
      ],
    },
    {
      title: h2[12]?.content || "Virtual Casino",
      bg: getImageSrc(imgs[11], CardBg04),
      icon: getImageSrc(imgs[13], Icon04),
      alt: imgs[11]?.alt || "Virtual Casino",
      features: [
        li[6]?.content ? getText(li[6].content) : "Video poker and slots",
        li[7]?.content ? getText(li[7].content) : "15+ table game options",
      ],
    },
  ];

  return (
    <section className="products">
      <Container>
        <Row className="section-heading">
          <Col lg={7}>
            <p className="section-heading__eyebrow">
              {h6[1]?.content || "Product coverage"}
            </p>
            <h1 className="section-heading__title">
              {h1[1]?.content || "Products Offered"}
            </h1>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="g-4 products__grid reveal reveal--fade" data-reveal>
          {productCards.map((item) => (
            <Col lg={6} xs={12} key={item.title}>
              <Card className="products__card">
                <div
                  className="products__bg"
                  style={{ backgroundImage: `url(${item.bg})` }}
                />

                <div className="products__overlay">
                  <div className="products__content">
                    <img
                      src={item.icon}
                      alt={item.alt}
                      className="products__icon"
                    />

                    <h2>{item.title}</h2>

                    <ul>
                      {item.features.map((feature) => (
                        <li key={feature}>{feature}</li>
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
              <span>
                {p[6]?.content
                  || "Ready to explore the full platform?"}
              </span>
              <Button
                as={Link}
                to="/login"
                className="products__cta"
              >{getText(h5[1]?.content) || "Sign in Now"}
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
