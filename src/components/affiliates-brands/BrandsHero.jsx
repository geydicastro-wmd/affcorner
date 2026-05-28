import { Button, Carousel, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import VirtualCasinoImg from "../../assets/aff-header/virtualcasino_aff_500x500.png";
import HorseRacingImg from "../../assets/aff-header/horseracing_aff_500x500.png";
import LiveCasinoImg from "../../assets/aff-header/live-casino_aff_500x500.png";
import SportsbookImg from "../../assets/aff-header/sportsbook_aff_500x500.png";


export default function BrandsHero({ cms }) {
  const { getBlocks} = cms || {};
  const h1 = getBlocks?.("h1") || [];
  const h5 = getBlocks?.("h5") || [];
  const p = getBlocks?.("p") || [];
  const imgs = getBlocks?.("img") || [];

  const products = [
  { title: imgs[0]?.alt || "Sportsbook", image: imgs[0]?.src || SportsbookImg },
  { title: imgs[1]?.alt || "Live Casino", image: imgs[1]?.src || LiveCasinoImg },
  { title: imgs[2]?.alt || "Virtual Casino", image: imgs[2]?.src || VirtualCasinoImg },
  { title: imgs[3]?.alt || "Horse Racing", image: imgs[3]?.src || HorseRacingImg },
];

  return (
    <section className="brands-hero text-light position-relative overflow-hidden pt-5">
      <Container className="position-relative py-5">
        <Row className="align-items-center justify-content-between min-vh-75 g-5">
          <Col lg={6} className="text-center text-lg-start">
            <span className="text-warning fw-bold text-uppercase small">
              {p[0]?.content || "Check Our Products"}
            </span>

            <h1 className="display-3 fw-bold mt-3 mb-4">
              {h1[0]?.content ||
                "Brands built to convert affiliate traffic."}
            </h1>

            <p className="lead text-light mb-4">
              {p[1]?.content ||
                "Explore our sportsbook and casino products, backed by established brands affiliates can promote with confidence."}
            </p>
            

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Button
                as={Link}
                to="/register-now"
                variant="warning"
                size="lg"
                className="rounded-pill fw-bold text-uppercase px-4 d-inline-flex align-items-center justify-content-center gap-2"
              >
              {h5[0]?.content || "Register Now"} <FaArrowRight />
              </Button>

              <Button
                as={Link}
                to="/commissions"
                variant="outline-light"
                size="lg"
                className="rounded-pill fw-bold text-uppercase px-4"
              >
               {h5[1]?.content || "View Commissions"}
              </Button>
            </div>
          </Col>

          <Col lg={5}>
            <div className="brands-product-card rounded-5 p-4 p-lg-5">
              <Carousel
                fade
                controls
                interval={2000}
                pause="hover"
                className="brands-product-carousel"
              >
                {products.map((product) => (
                  <Carousel.Item key={product.title}>
                    <div className="text-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid product-img mb-4"
                        width="500"
                        height="500"
                      />
                      <h3 className="fw-bold mb-3">{product.title}</h3>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
