import InternalHeader from "../components/common/InternalHeader";
import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import useCmsPage from "../hooks/useCmsPage";

import BetPhoenixLogo from "../assets/icons_logos/header-card-bp.png";
import BetmaniaLogo from "../assets/icons_logos/header-card-bm.png";
import SkybookLogo from "../assets/icons_logos/header-card-sk.png";
import BogartLogo from "../assets/icons_logos/header-card-bc.png";


export default function Login() {
  const { page, translation, loading, error, getBlocks } =
    useCmsPage("Login");
  const h2 = getBlocks("h2");
  const h6 = getBlocks("h6");
  const p = getBlocks("p");
  const imgs = getBlocks("img");

  const title = page?.title || translation?.title || "Account Login";

  const brands = [
  {
    name: imgs[0]?.alt || "BetPhoenix",
    logo: imgs[0]?.src || BetPhoenixLogo,
    alt: imgs[0]?.alt || "BetPhoenix logo",
    infoLink: "/affiliates-brands#betphoenix",
    loginLink: "https://affiliate2.betphoenix.ag/login",
  },
  {
    name: imgs[1]?.alt || "Skybook",
    logo: imgs[1]?.src || SkybookLogo,
    alt: imgs[1]?.alt || "Skybook logo",
    infoLink: "/affiliates-brands#skybook",
    loginLink: "https://affiliate2.skybook.ag/login",
  },
   {
    name: imgs[2]?.alt || "Betmania",
    logo: imgs[2]?.src || BetmaniaLogo,
    alt: imgs[2]?.alt || "Betmania logo",
    infoLink: "/affiliates-brands#betmania",
    loginLink: "https://affiliate2.betmania.ag/login",
  },
  {
    name: imgs[3]?.alt || "Bogart Casino",
    logo: imgs[3]?.src || BogartLogo,
    alt: imgs[3]?.alt || "Bogart Casino logo",
    infoLink: "/affiliates-brands#bogartcasino",
    loginLink: "https://affiliate2.bogartcasino.ag/login",
  },
];

  return (
    <div>
      <InternalHeader title={title} />

      <main className="affiliate-login-page">
        <Container className="py-5">
          {loading && !page && !error && <span className="visually-hidden">Loading...</span>}
          <Row className="justify-content-center text-center py-lg-5">
            <Col lg={8}>
              <span className="text-warning fw-bold text-uppercase small">
              {h6[0]?.content || "Affiliate Login"}
              </span>

              <h1 className="display-5 fw-bold mt-2 mb-3">
              {h2[0]?.content || "Access your affiliate dashboard."}
              </h1>

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
                      {p[0]?.content || `For more information about ${brand.name}...`}
                    </p>

                    <Link
                      to={brand.infoLink}
                      className="d-inline-flex align-items-center gap-2 text-muted text-decoration-none small mb-4"
                    >
                     {p[1]?.content || "Click here"} <FaArrowRight />
                    </Link>

                    <div>
                      <Button
                        href={brand.loginLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-yellow text-uppercase d-inline-flex align-items-center gap-2"
                      >
                       {p[2]?.content || "Log In Here"} <FaExternalLinkAlt size={13} />
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
