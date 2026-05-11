import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import InternalHeader from "../components/common/InternalHeader";

import BetPhoenixLogo from "../assets/icons_logos/header-card-bp.png";
import BetmaniaLogo from "../assets/icons_logos/header-card-bm.png";
import SkybookLogo from "../assets/icons_logos/header-card-sk.png";
import BogartLogo from "../assets/icons_logos/header-card-bc.png";

const brands = [
  {
    name: "BetPhoenix",
    logo: BetPhoenixLogo,
    alt: "BetPhoenix logo",
    infoLink: "/affiliates-brands",
    registerLink: "/betphoenix-affiliates",
  },
  {
    name: "Betmania",
    logo: BetmaniaLogo,
    alt: "Betmania logo",
    infoLink: "/affiliates-brands",
    registerLink: "/betmania-affiliates",
  },
  {
    name: "Skybook",
    logo: SkybookLogo,
    alt: "Skybook logo",
    infoLink: "/affiliates-brands",
    registerLink: "/skybook-affiliates",
  },
  {
    name: "Bogart Casino",
    logo: BogartLogo,
    alt: "Bogart Casino logo",
    infoLink: "/affiliates-brands",
    registerLink: "/bogart-casino-affiliates",
  },
];

export default function Register() {
  return (
    <div>
      <InternalHeader
        title="Register Brands"
        description="Join Affcorner.com’s Affiliate Program Today!"
      />
      <main className="affiliate-brands-page">
        <Container className="py-5">
          <Row className="justify-content-center text-center py-lg-5">
            <Col lg={8}>
              <span className="text-warning fw-bold text-uppercase small">
                Affiliate Brands
              </span>

              <h1 className="display-5 fw-bold mt-2 mb-3">
                Choose the brand you want to promote.
              </h1>

              <p className="lead text-body-secondary mb-0">
                Register with one of our established sportsbook and casino
                brands and start building your affiliate revenue.
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
                        as={Link}
                        to={brand.registerLink}
                        variant="warning"
                        className="rounded-pill fw-bold text-uppercase px-4"
                      >
                        Register Now
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
