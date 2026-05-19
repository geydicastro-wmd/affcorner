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

import HeroBg from "../../assets/affcorner-landingpage-hero/affcorner-lp-hero-1920x1050.jpg";
import Logo from "../../assets/logo.png";
import BetmaniaLogo from "../../assets/icons_logos/header-card-bm.png";
import BetphoenixLogo from "../../assets/icons_logos/header-card-bp.png";
import SkybookLogo from "../../assets/icons_logos/header-card-sk.png";

const benefits = [
  {
    title: "50% Commission",
    text: "Earn big during your first month.",
  },
  {
    title: "Reliable Payments",
    text: "Always on time and transparent.",
  },
  {
    title: "Top Marketing Tools",
    text: "Access banners, links, and expert support.",
  },
  {
    title: "Trusted Brand",
    text: "Partner with a leading sportsbook and casino platform.",
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

export default function WelcomeSpecial() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="welcome-special">
      <header className="welcome-special__topbar">
        <Link to="/" aria-label="AffCorner home">
          <img src={Logo} alt="AffCorner" className="welcome-special__logo" />
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
                  <span>Earn 50% Commission</span> Join Our Affiliate Program
                  Today!
                </h1>
              </Col>

              <Col lg={10} xl={9}>
                <p className="welcome-special__subhead">
                  Take your affiliate earnings to new heights with our exclusive{" "}
                  <strong>50% commission</strong> welcome bonus for your first
                  month!
                </p>

                <Button
                  as={Link}
                  to="/register-now"
                  className="btn-yellow welcome-special__mobile-cta"
                >
                  Get Started!
                </Button>
              </Col>
            </Row>

            <Row className="welcome-special__offer align-items-stretch g-5">
              <Col lg={6}>
                <div className="welcome-special__benefits-panel">
                  <div className="welcome-special__section-heading text-center">
                    <span>Why Join?</span>
                    <h2>Built for affiliates who want to move faster.</h2>
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
                    Limited Welcome Offer
                  </p>

                  <h2>
                    Hurry, this offer ends{" "}
                    <span>March 1, 2025!</span>
                  </h2>

                  <p className="welcome-special__signup-copy">
                    <Link to="/register-now">Sign Up Now</Link> and start
                    earning today!
                  </p>

                  <p className="welcome-special__terms">
                    Terms apply. New affiliates only.
                  </p>

                  <Button
                    as={Link}
                    to="/register-now"
                    className="btn-yellow welcome-special__cta"
                  >
                    Get Started!
                  </Button>
                </div>
              </Col>
            </Row>

            <section className="welcome-special__brands" aria-label="Affiliate brands">
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
                >
                  Contact Us
                </Button>
              </div>
            </section>
          </Container>
        </Container>
      </section>

      <footer className="welcome-special__footer">
        <p>© 2026 AffCorner.com. All rights reserved.</p>
        <Link to="/" aria-label="AffCorner home">
          <img src={Logo} alt="AffCorner" />
        </Link>
      </footer>

      <Modal
        show={showContact}
        onHide={() => setShowContact(false)}
        centered
        className="welcome-special__modal"
      >
        <Modal.Header closeButton className="welcome-special__modal-header">
          <div>
            <span>AffCorner Support</span>
            <Modal.Title>Contact Info</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="welcome-special__modal-body">
          <p className="welcome-special__modal-copy">
            Reach our team directly and we will help you get started with the
            right affiliate setup.
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
                <strong>Email</strong>
                <small>support@affcorner.com</small>
              </div>
            </a>

            <div className="welcome-special__contact-item">
              <span>
                <FaTelegramPlane aria-hidden="true" />
              </span>
              <div>
                <strong>Telegram</strong>
                <small>Priscilla_AffCorner</small>
              </div>
            </div>

            <div className="welcome-special__contact-item">
              <span>
                <FaSkype aria-hidden="true" />
              </span>
              <div>
                <strong>Skype</strong>
                <small>Priscilla_AffCorner</small>
              </div>
            </div>
          </div>

          <div className="welcome-special__modal-note">
            <FaRegCommentDots aria-hidden="true" />
            <span>New affiliates only. Terms apply.</span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-yellow" onClick={() => setShowContact(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
