import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";


const reasons = [
  "Revenue share commissions amongst the highest in the gaming industry",
  "Lifetime commissions on your referred players",
  "Wide variety of marketing tools",
  "Dedicated customer service",
  "Payouts guaranteed",
];

export default function ReasonsSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reasons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (i) => {
    setIndex(i);
    setIsPaused(true); // pausa cuando el user interactúa
  };

  return (
    <section className="reasons">
      <Container className="pt-5 mt-3 text-center text-md-start">
        <h1 className="reasons__title">Reasons to Join</h1>
        <hr />
        <h4 className="reasons__subtitle">To our brands</h4>
      </Container>

      <Container fluid className="reasons__slider-wrapper">
        <Row className="align-items-center text-center justify-content-center">

          <Col lg={4} className="d-none d-lg-flex justify-content-end">
            <div className="reasons__line reasons__line--left" />
          </Col>

          {/* SLIDER */}
          <Col
            lg={4}
            xs={12}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="reasons__slider">
              
              {/* TEXT */}
              {reasons.map((text, i) => (
                <p
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`reasons__item ${
                    i === index ? "active" : ""
                  }`}
                >
                  {text}
                </p>
              ))}

              {/* 🔥 DOTS */}
              <div className="reasons__dots">
                {reasons.map((_, i) => (
                  <span
                    key={i}
                    onClick={() => goToSlide(i)}
                    className={`reasons__dot ${
                      i === index ? "active" : ""
                    }`}
                  />
                ))}
              </div>

            </div>
          </Col>

          <Col lg={4} className="d-none d-lg-flex justify-content-start">
            <div className="reasons__line reasons__line--right" />
          </Col>

        </Row>
      </Container>
    </section>
  );
}