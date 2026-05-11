import Reasonshome from "../components/Reasonshome";
import CTAGeneral from "../components/common/CTAGeneral";
import BrandPeekSlider from "../components/common/BrandPeekSlider";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

import HeroPerson from "../assets/internalpages_banner/img_header_wtj.png";
import HeroIcons from "../assets/internalpages_banner/header_icons-wtj.png";

export default function Join() {
  return (
    <div>
      <section className="why-join-hero text-light position-relative overflow-hidden pt-5">
        <Container className="position-relative py-5">
          <Row className="align-items-center justify-content-between min-vh-75 g-5">
            <Col
              lg={6}
              className="text-center text-lg-start order-2 order-lg-1"
            >
              <span className="text-warning fw-bold text-uppercase small">
                Why Join Affcorner
              </span>

              <h1 className="display-4 fw-bold mt-3 mb-4">
                Start a prosperous business venture with the right affiliate
                program.
              </h1>

              <p className="lead text-light mb-4">
                Join our casino affiliate program and start making money today.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button
                  as={Link}
                  to="/register"
                  variant="warning"
                  size="lg"
                  className="rounded-pill fw-bold text-uppercase px-4 d-inline-flex align-items-center justify-content-center gap-2"
                >
                  Sign In Now <FaArrowRight />
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

              <Row className="g-3 mt-5">
                <Col sm={6}>
                  <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-white bg-opacity-10">
                    <FaChartLine className="text-warning fs-3" />
                    <span className="fw-bold">High-converting brands</span>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-white bg-opacity-10">
                    <FaMoneyBillWave className="text-warning fs-3" />
                    <span className="fw-bold">Competitive commissions</span>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6} className="order-1 order-lg-2">
              <div className="why-join-visual position-relative mx-auto">
                <img
                  src={HeroIcons}
                  alt="Sportsbook and casino affiliate icons"
                  className="img-fluid hero-icons position-absolute"
                  width="650"
                  height="604"
                />

                <img
                  src={HeroPerson}
                  alt="Casino affiliate program"
                  className="img-fluid hero-person position-relative"
                  width="500"
                  height="500"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Reasonshome />
      <CTAGeneral />
      <BrandPeekSlider/>
    </div>
  );
}
