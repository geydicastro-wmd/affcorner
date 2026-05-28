import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import brand1 from "../../assets/brands/brand1.png";
import brand2 from "../../assets/brands/brand2.png";
import brand3 from "../../assets/brands/brand3.png";
import brand4 from "../../assets/brands/brand4.png";

function getImageSrc(image, fallbackImage) {
  return image?.url || image?.src || image?.content || fallbackImage;
}

export default function BrandsLogos({ cms }) {
  const {
    getBlocks,
    getText,
  } = cms || {};

  const h1 = getBlocks?.("h1") || [];
  const h2 = getBlocks?.("h2") || [];
  // const h5 = getBlocks?.("h5") || [];
  const h6 = getBlocks?.("h6") || [];
  const p = getBlocks?.("p") || [];
  // const divs = getBlocks?.("div") || [];
  const imgs = getBlocks?.("img") || [];

  const brandLogoCards = [
    {
      id: "betphoenix",
      name: h2[4]?.content || "BetPhoenix",
      category: p[0]?.content ? getText(p[0].content) : "Sportsbook",
      signal: p[1]?.content ? getText(p[1].content) : "Established brand",
      size: "wide",
      logo: getImageSrc(imgs[0], brand1),
      alt: imgs[0]?.alt || "BetPhoenix",
    },
    {
      id: "skybook",
      name: h2[5]?.content || "Skybook",
      category: p[0]?.content ? getText(p[0].content) : "Sportsbook",
      signal: p[2]?.content ? getText(p[2].content) : "Legacy platform",
      size: "wide",
      logo: getImageSrc(imgs[1], brand2),
      alt: imgs[1]?.alt || "Skybook",
    },
    {
      id: "betmania",
      name: h2[6]?.content || "Betmania",
      category: p[0]?.content || "Sportsbook",
      signal: p[3]?.content || "Player-focused",
      size: "compact",
      logo: getImageSrc(imgs[2], brand3),
      alt: imgs[2]?.alt || "Betmania",
    },
    {
      id: "bogartcasino",
      name: h2[7]?.content || "Bogart Casino",
      category: p[4]?.content || "Casino",
      signal: p[5]?.content || "Casino experience",
      size: "compact",
      logo: getImageSrc(imgs[3], brand4),
      alt: imgs[3]?.alt || "Bogart Casino",
    },
  ];

  return (
    <section className="brands-logos">
      <Container>
        <Row className="section-heading brands-logos__header">
          <Col lg={7}>
            <p className="section-heading__eyebrow">
              {h6[0]?.content
                ? getText(h6[0].content)
                : "Affiliate brand portfolio"}
            </p>
            <h1 className="section-heading__title">
              {h1[0]?.content || "Our Brands"}
            </h1>
          </Col>
        </Row>

        <Row className="g-4 brands-logos__grid">
          {brandLogoCards.map((brand) => (
            <Col key={brand.name} xs={12} sm={6} lg={3}>
              <Link
                to={`/affiliates-brands#${brand.id}`}
                className="brands-logos__card"
                aria-label={`View ${brand.name} brand details`}
              >
                <div className="brands-logos__logo-shell">
                  <Image
                    src={brand.logo}
                    alt={brand.alt}
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
