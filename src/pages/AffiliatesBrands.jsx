import CTAGeneral from "../components/common/CTAGeneral";
import BrandPeekSlider from "../components/common/BrandPeekSlider";

import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import VirtualCasinoImg from "../assets/aff-header/virtualcasino_aff_500x500.png";
import HorseRacingImg from "../assets/aff-header/horseracing_aff_500x500.png";
import LiveCasinoImg from "../assets/aff-header/live-casino_aff_500x500.png";
import SportsbookImg from "../assets/aff-header/sportsbook_aff_500x500.png";

const products = [
  {
    title: "Sportsbook",
    image: SportsbookImg,
    description:
      "Promote high-performing sportsbook brands built for serious players and long-term affiliate value.",
  },
  {
    title: "Live Casino",
    image: LiveCasinoImg,
    description:
      "Connect players with immersive live dealer experiences from trusted casino brands.",
  },
  {
    title: "Virtual Casino",
    image: VirtualCasinoImg,
    description:
      "Offer exciting virtual casino products designed to keep players engaged.",
  },
  {
    title: "Horse Racing",
    image: HorseRacingImg,
    description:
      "Reach racing fans with products that complement strong sportsbook traffic.",
  },
];

export default function AffiliatesBrands() {
  return (
    <div>
       <section className="brands-hero text-light position-relative overflow-hidden pt-5">
      <Container className="position-relative py-5">
        <Row className="align-items-center justify-content-between min-vh-75 g-5">
          <Col lg={6} className="text-center text-lg-start">
            <span className="text-warning fw-bold text-uppercase small">
              Check Our Products
            </span>

            <h1 className="display-3 fw-bold mt-3 mb-4">
              Brands built to convert affiliate traffic.
            </h1>

            <p className="lead text-light mb-4">
              Explore our sportsbook and casino products, backed by established
              brands affiliates can promote with confidence.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Button
                as={Link}
                to="/register"
                variant="warning"
                size="lg"
                className="rounded-pill fw-bold text-uppercase px-4 d-inline-flex align-items-center justify-content-center gap-2"
              >
                Register Now <FaArrowRight />
              </Button>

              <Button
                as={Link}
                to="/commissions"
                variant="outline-light"
                size="lg"
                className="rounded-pill fw-bold text-uppercase px-4"
              >
                View Commissions
              </Button>
            </div>
          </Col>

          <Col lg={5}>
            <div className="brands-product-card rounded-5 p-4 p-lg-5">
              <Carousel
                fade
                controls
                indicators
                interval={3000}
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

      <CTAGeneral />
      <BrandPeekSlider />
    </div>
  );
}
