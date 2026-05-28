import { useState } from "react";
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap";
import {
  FaCheck,
  FaClock,
  FaEnvelope,
  FaRegCommentDots,
  FaSkype,
  FaTelegramPlane,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import useCmsPage from "../../hooks/useCmsPage";
import HeroBg from "../../assets/affcorner-landingpage-hero/affcorner-lp-hero-1920x1050.jpg";
import Logo from "../../assets/logo.png";
import BetmaniaLogo from "../../assets/icons_logos/header-card-bm.png";
import BetphoenixLogo from "../../assets/icons_logos/header-card-bp.png";
import SkybookLogo from "../../assets/icons_logos/header-card-sk.png";

export default function WelcomeSpecial() {
  const [showContact, setShowContact] = useState(false);

  const { page, translation, getBlocks } = useCmsPage("Landing");

  const h1 = getBlocks("h1");
  const h2 = getBlocks("h2");
  const h3 = getBlocks("h3");
  const h5 = getBlocks("h5");
  const h6 = getBlocks("h6");
  const p = getBlocks("p");
  const imgs = getBlocks("img");
  const title =
    page?.title || translation?.title || "Welcome Special | AffCorner";

  const benefits = [
    {
      title: h3[0]?.content || "50% Commission",
      text: p[1]?.content || "Earn big during your first month.",
    },
    {
      title: h3[1]?.content || "Reliable Payments",
      text: p[2]?.content ||   "Always on time and transparent.",
    },
    {
      title: h3[2]?.content || "Top Marketing Tools",
      text: p[3]?.content || "Access banners, links, and expert support.",
    },
    {
      title: h3[3]?.content || "Trusted Brand",
      text: p[4]?.content || "Partner with a leading sportsbook and casino platform.",
    },
  ];

  const brands = [
    {
      name: "BetPhoenix",
      logo: BetphoenixLogo,
      to: "/betphoenix-affiliates",
    },
    {
      name: "Skybook",
      logo: SkybookLogo,
      to: "/skybook-affiliates",
    },
    {
      name: "Betmania",
      logo: BetmaniaLogo,
      to: "/betmania-affiliates",
    },
  ];

  return (
    <div className="welcome-special">
      {translation && (
        <Helmet>
          <title>{translation.meta_title || page?.title || title}</title>
        </Helmet>
      )}

      <header className="welcome-special__topbar">
        <Link to="/" aria-label="AffCorner home">
          <img
            src={imgs[0]?.src || Logo}
            alt="AffCorner"
            className="welcome-special__logo"
          />
        </Link>
      </header>

      <section
        className="welcome-special__hero"
        style={{ "--welcome-special-bg": `url(${HeroBg})` }}
      >
        <Container fluid className="welcome-special__content">
          <Container className="welcome-special__container">
            <Row className="justify-content-center text-center text-light">
              <Col xl={11}>
                <h1 className="welcome-special__headline mt-3">
                  <span>{h1[0]?.content || "Earn 50% Commission"}</span>
                  {h1[1]?.content || "Join Our Affiliate Program Today!"}
                </h1>
              </Col>

              <Col lg={10} xl={9}>
                <p className="welcome-special__subhead">
                  {p[0]?.content ||
                    "Take your affiliate earnings to new heights with our exclusive 50% commission welcome bonus for your first month!"}
                </p>

                <Button
                  as={Link}
                  to="/register-now"
                  className="btn-yellow welcome-special__mobile-cta"
                >
                  {" "}
                  {h5[0]?.content || "Get Started!"}
                </Button>
              </Col>
            </Row>

            <Row className="welcome-special__offer align-items-stretch g-5">
              <Col lg={6}>
                <div className="welcome-special__benefits-panel">
                  <div className="welcome-special__section-heading text-center">
                    <span>{h2[0]?.content || "Why Join?"}</span>
                    <h2>
                      {p[1]?.content ||
                        "Built for affiliates who want to move faster."}
                    </h2>
                  </div>

                  <Row className="g-3">
                    {benefits.map((benefit) => (
                      <Col sm={6} key={benefit.title}>
                        <Card className="welcome-special__benefit h-100">
                          <Card.Body>
                            <div className="welcome-special__benefit-title">
                              <span>
                                <FaCheck aria-hidden="true" />
                              </span>
                              <h3>{benefit.title}</h3>
                            </div>
                            <p>{benefit.text}</p>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>

              <Col lg={6}>
                <div className="welcome-special__deadline text-center">
                  <p className="welcome-special__deadline-kicker">
                    <FaClock aria-hidden="true" />
                    {h6[0]?.content || "Limited Welcome Offer"}
                  </p>

                  <h2>
                    {h3[4]?.content || "Hurry, this offer ends March 1, 2025!"}
                  </h2>

                  <p className="welcome-special__signup-copy">
                    <Link to="/register-now">{h3[5]?.content || "Sign Up Now"}</Link> {h3[6]?.content || "and start earning today!"} 
                  </p>

                  <p className="welcome-special__terms">
                    {p[6]?.content || "Terms apply. New affiliates only."}
                  </p>

                  <Button
                    as={Link}
                    to="/register-now"
                    className="btn-yellow welcome-special__cta"
                  > {h5[0]?.content || "Get Started!"}
                  </Button>
                </div>
              </Col>
            </Row>

            <section
              className="welcome-special__brands"
              aria-label="Affiliate brands"
            >
              <Row className="g-4 justify-content-center">
                {brands.map((brand) => (
                  <Col md={4} lg={3} key={brand.name}>
                    <Link
                      to={brand.to}
                      className="welcome-special__brand-card"
                      aria-label={`${brand.name} affiliates`}
                    >
                      <img src={brand.logo} alt={brand.name} />
                    </Link>
                  </Col>
                ))}
              </Row>

              <div className="welcome-special__contact text-center">
                <Button
                  variant="outline-warning"
                  className="welcome-special__contact-btn"
                  onClick={() => setShowContact(true)}
                > {p[7]?.content || "Contact Us!"}
                </Button>
              </div>
            </section>
          </Container>
        </Container>
      </section>

      <Modal
        show={showContact}
        onHide={() => setShowContact(false)}
        centered
        className="welcome-special__modal"
      >
        <Modal.Header closeButton className="welcome-special__modal-header">
          <div>
            <span>AffCorner Support</span>
            <Modal.Title>{p[8]?.content || "Contact Info"}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="welcome-special__modal-body">
          <p className="welcome-special__modal-copy">
           {p[9]?.content || "Reach our team directly and we will help you get started with the right affiliate setup."}
          </p>

          <div className="welcome-special__contact-list">
            <a
              className="welcome-special__contact-item"
              href="mailto:support@affcorner.com"
            >
              <span>
                <FaEnvelope aria-hidden="true" />
              </span>
              <div>
                <strong>{h6[1]?.content || "Email"}</strong>
                <small>{p[10]?.content || "support@affcorner.com"}</small>
              </div>
            </a>

            <div className="welcome-special__contact-item">
              <span>
                <FaTelegramPlane aria-hidden="true" />
              </span>
              <div>
                <strong>{h6[2]?.content || "Telegram"}</strong>
                <small>{p[11]?.content || "Priscilla_AffCorner"}</small>
              </div>
            </div>

            <div className="welcome-special__contact-item">
              <span>
                <FaSkype aria-hidden="true" />
              </span>
              <div>
                <strong>{h6[3]?.content || "Skype"}</strong>
                <small>{p[12]?.content || "Priscilla_AffCorner"}</small>
              </div>
            </div>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-yellow" onClick={() => setShowContact(false)}>
          {p[13]?.content || "Close"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
