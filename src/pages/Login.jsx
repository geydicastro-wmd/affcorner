import InternalHeader from "../components/common/InternalHeader";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";

import BetPhoenixLogo from "../assets/icons_logos/header-card-bp.png";
import BetmaniaLogo from "../assets/icons_logos/header-card-bm.png";
import SkybookLogo from "../assets/icons_logos/header-card-sk.png";
import BogartLogo from "../assets/icons_logos/header-card-bc.png";

const brands = [
  {
    name: "BetPhoenix",
    logo: BetPhoenixLogo,
    alt: "BetPhoenix logo",
    infoLink: "/affiliates-brands#betphoenix",
    loginLink: "https://affiliate2.betphoenix.ag/login",
  },
  {
    name: "Betmania",
    logo: BetmaniaLogo,
    alt: "Betmania logo",
    infoLink: "/affiliates-brands#betmania",
    loginLink: "https://affiliate2.betmania.ag/login",
  },
  {
    name: "Skybook",
    logo: SkybookLogo,
    alt: "Skybook logo",
    infoLink: "/affiliates-brands#skybook",
    loginLink: "https://affiliate2.skybook.ag/login",
  },
  {
    name: "Bogart Casino",
    logo: BogartLogo,
    alt: "Bogart Casino logo",
    infoLink: "/affiliates-brands#bogartcasino",
    loginLink: "https://affiliate2.bogartcasino.ag/login",
  },
];

export default function Login() {
  return (
    <div>
      <InternalHeader title="Account Login" />
      <main className="affiliate-login-page">
        <Container className="py-5">
          <Row className="justify-content-center text-center py-lg-5">
            <Col lg={8}>
              <span className="text-warning fw-bold text-uppercase small">
                Affiliate Login
              </span>

              <h1 className="display-5 fw-bold mt-2 mb-3">
                Access your affiliate dashboard.
              </h1>

              <p className="lead text-body-secondary mb-0">
                Choose your brand and log in to manage your campaigns, review
                your stats, and track your affiliate performance.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center g-4">
            {brands.map((brand) => (
              <Col md={6} lg={5} key={brand.name}>
                <Card className="h-100 border-0 shadow-sm rounded-4 overflow-hidden text-center">
                  <div className="bg-body-tertiary p-4 p-lg-5">
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      className="img-fluid brand-card-logo"
                      width="950"
                      height="567"
                    />
                  </div>

                  <Card.Body className="p-4 p-lg-5">
                    <h3 className="fw-bold mb-3">{brand.name}</h3>

                    <p className="text-body-secondary mb-2">
                      For more information about {brand.name}...
                    </p>

                    <Link
                      to={brand.infoLink}
                      className="d-inline-flex align-items-center gap-2 text-muted text-decoration-none small mb-4"
                    >
                      Click here <FaArrowRight />
                    </Link>

                    <div>
                      <Button
                        href={brand.loginLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="warning"
                        className="rounded-pill fw-bold text-uppercase px-4 d-inline-flex align-items-center gap-2"
                      >
                        Log In Here <FaExternalLinkAlt size={13} />
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </div>
  );
}
