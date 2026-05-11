import { Container } from "react-bootstrap";

export default function InternalHeader({ title, eyebrow, description }) {
  return (
    <header className="internal-header">
      <Container className="internal-header__container">
        <div className="internal-header__content">
          {eyebrow && <p className="internal-header__eyebrow">{eyebrow}</p>}

          <div
            className="internal-header__line internal-header__line--top"
            aria-hidden="true"
          >
            <span />
          </div>

          <h1 className="internal-header__title fw-bold">{title}</h1>

          <div
            className="internal-header__line internal-header__line--bottom"
            aria-hidden="true"
          >
            <span />
          </div>

          {description && (
            <p className="internal-header__description">{description}</p>
          )}
        </div>
      </Container>
    </header>
  );
}
