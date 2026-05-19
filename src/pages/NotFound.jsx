import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import InternalHeader from "../components/common/InternalHeader";

export default function NotFound() {
  return (
    <>
      <InternalHeader
        eyebrow="Affcorner"
        title="404"
        description="The page you are looking for is not available."
      />

      <section className="not-found-page">
        <Container>
          <div className="not-found-page__content">
            <p className="not-found-page__eyebrow">Page not found</p>
            <h2>Let's get you back on track.</h2>
            <div className="not-found-page__line" aria-hidden="true">
              <span />
            </div>
            <p>
              This link may have moved, expired, or been typed incorrectly. You
              can return home or explore our affiliate brands.
            </p>

            <div className="not-found-page__actions">
              <Link to="/" className="btn btn-yellow">
                Go Home
              </Link>
              <Link
                to="/affiliates-brands"
                className="btn btn-yellow not-found-page__secondary-btn"
              >
                View Brands
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
