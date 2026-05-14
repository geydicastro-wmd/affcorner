import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaLock, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

import AffcornerLogo from "../assets/logo.png";
import SkybookLogo from "../assets/logo_brands/SKYBOOK_WH.png";

export default function SkybookAff() {
  return (
    <main className="affiliate-signup-page bg-dark text-light">
      <Container className="py-4 py-lg-5">

        {/* Header */}
        <Row className="align-items-center justify-content-between border-bottom border-light border-opacity-10 pb-4 mb-5">
          <Col lg={5} className="text-center text-lg-start">
            <Link to="/">
              <img
                src={AffcornerLogo}
                alt="Affcorner"
                className="img-fluid affiliate-logo"
                width="250"
                height="78"
              />
            </Link>
          </Col>

          <Col lg={5} className="text-center text-lg-end mt-3 mt-lg-0">
            <Button
              href="https://affiliate2.skybook.ag/login"
              variant="outline-light"
              className="rounded-pill fw-bold px-4 me-2"
            >
              Sign-In
            </Button>

            <Button
              as={Link}
              to="/register-now"
              variant="warning"
              className="rounded-pill fw-bold px-4"
            >
              Sign-Up
            </Button>
          </Col>
        </Row>


        <Row className="align-items-center justify-content-between g-5">

          {/* Left side */}
          <Col lg={7} className="text-center text-lg-start order-1 order-lg-0">
            <span className="text-warning fw-bold text-uppercase small">
              Skybook Affiliates
            </span>

            <h1 className="display-4 fw-bold mt-3 mb-4">
              Partner with a sportsbook brand built to convert.
            </h1>

            <p className="lead text-light mb-5">
              Sign up for the Skybook affiliate program and start promoting a
              competitive sportsbook and casino platform backed by trusted
              affiliate support.
            </p>

            <picture>
              <img
                src={SkybookLogo}
                alt="Skybook"
                className="img-fluid brand-logo-hero mb-5"
                width="450"
              />
            </picture>

            <Row className="g-3">
              <Col md={4}>
                <div className="partner-benefit h-100 p-3 rounded-4">
                  <FaChartLine className="text-warning fs-3 mb-3" />
                  <h5 className="fw-bold mb-1">High Conversion</h5>
                  <p className="small text-light mb-0">
                    Promote a brand designed for sportsbook traffic.
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="partner-benefit h-100 p-3 rounded-4">
                  <FaMoneyBillWave className="text-warning fs-3 mb-3" />
                  <h5 className="fw-bold mb-1">Affiliate Revenue</h5>
                  <p className="small text-light mb-0">
                    Monetize your players with strong commission potential.
                  </p>
                </div>
              </Col>

              <Col md={4}>
                <div className="partner-benefit h-100 p-3 rounded-4">
                  <FaLock className="text-warning fs-3 mb-3" />
                  <h5 className="fw-bold mb-1">Secure Sign-Up</h5>
                  <p className="small text-light mb-0">
                    Complete your registration directly through the affiliate form.
                  </p>
                </div>
              </Col>
            </Row>
          </Col>

          {/* Register */}
          <Col lg={5} className="text-center order-0 order-lg-1">
          <picture>
              <img
                src={SkybookLogo}
                alt="Skybook"
                className="img-fluid d-lg-none mb-3"
                width="220"
                height="220"
              />
            </picture>
            <div className="signup-panel rounded-5 p-3 p-lg-4 ">
              
              <div className="text-center mb-4">
                <span className="text-warning fw-bold text-uppercase small">
                  Start Now
                </span>

                <h2 className="fw-bold mt-2 mb-0">Sign-Up</h2>
              </div>

              <div className="signup-iframe-wrap rounded-4 bg-light">
                <iframe
                  title="Skybook affiliate sign-up"
                  id="aff-signup"
                  src="https://original.cdncasino.ag/affsignup/index2.php?brand=skybook&brand_domain=skybook.ag&affiliate_version=2"
                  className="w-100 h-100 rounded-4"
                  frameBorder="0"
                />
              </div>

              <p className="small text-light text-center mt-3 mb-0">
                Already have an account?{" "}
                <a
                  href="https://affiliate2.skybook.ag/login"
                  className="text-warning fw-bold text-decoration-none"
                >
                  Sign in here <FaArrowRight size={12} />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}