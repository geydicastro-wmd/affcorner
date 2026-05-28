import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import AffcornerLogo from "../assets/logo.png";
import BetphoenixLogoLarge from "../assets/logo_brands/LOGO_BETPHOENIX.png";
import BetphoenixLogoMobile from "../assets/logo_brands/BETPHOENIX.png";

import useCmsPage from "../hooks/useCmsPage";

export default function BetphoenixAff() {
  const cmsPage = useCmsPage("BasicPage", {
    title: "Brand Affiliate Register",
  });

  const { page, translation, getBlocks } = cmsPage;

  const title = page?.title || translation?.title || "Brand Affiliate Register";

  const h2 = getBlocks("h2");
  const h6 = getBlocks("h6");
  const p = getBlocks("p");
  const imgs = getBlocks("img");

  return (
    <main className="affiliate-signup-page bg-dark text-light">
      {translation && (
        <Helmet>
          <title>{translation.meta_title || page?.title || title}</title>
        </Helmet>
      )}

      <Container className="py-4 py-lg-5">
        <Row className="align-items-center justify-content-between border-bottom border-light border-opacity-10 pb-4 mb-5">
          <Col lg={5} className="text-center text-lg-start">
            <Link to="/">
              <img
                src={imgs[0]?.src || AffcornerLogo}
                alt={imgs[0]?.alt || "Affcorner"}
                className="img-fluid affiliate-logo"
                width="250"
                height="78"
              />
            </Link>
          </Col>

          <Col lg={5} className="text-center text-lg-end mt-3 mt-lg-0">
            <Button
              href="https://affiliate2.betphoenix.ag/login"
              variant="outline-light"
              className="rounded-pill fw-bold px-4 me-2"
            >{p[0]?.content || "Sign-In"}
            </Button>

            <Button
              as={Link}
              to="/register-now"
              variant="warning"
              className="rounded-pill fw-bold px-4"
            >{p[1]?.content || "Sign-Up"}
            </Button>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-between g-5">
          <Col lg={6} className="affiliate-brand-column text-center">
            <picture>
              <source
                media="(max-width: 991px)"
                srcSet={imgs[1]?.src || BetphoenixLogoMobile}
              />
              <img
                src={imgs[1]?.src || BetphoenixLogoLarge}
                alt={imgs[1]?.alt || "Betphoenix"}
                className="img-fluid brand-logo-hero"
                width="450"
                height="450"
              />
            </picture>
          </Col>

          <Col lg={5}>
            <div className="signup-panel rounded-5 p-3 p-lg-4">
              <div className="text-center mb-4">
                <span className="text-warning fw-bold text-uppercase small">
                 {h6[0]?.content || "Start Now"}
                </span>

                <h2 className="fw-bold mt-2 mb-0">{h2[0]?.content || "Sign-Up"}</h2>
              </div>

              <div className="signup-iframe-wrap rounded-4 bg-light">
                <iframe
                  title="Betphoenix affiliate sign-up"
                  id="aff-signup"
                  src="https://original.cdncasino.ag/affsignup/index2.php?brand=betphoenix&brand_domain=betphoenix.ag&affiliate_version=2"
                  className="w-100 h-100 rounded-4"
                  frameBorder="0"
                />
              </div>

              <p className="small text-light text-center mt-3 mb-0">
               {p[2]?.content || "Already have an account?"}{" "}
                <a
                  href="https://affiliate2.betphoenix.ag/login"
                  className="text-warning fw-bold text-decoration-none"
                >{p[3]?.content || "Sign in here"} <FaArrowRight size={12} />
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
}
