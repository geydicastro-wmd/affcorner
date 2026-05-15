import { Container, Row, Col } from "react-bootstrap";
import { createElement, useEffect, useState } from "react";
import { GrMoney } from "react-icons/gr";
import { FaUserPlus, FaGear } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

const reasons = [
  {
    icon: GrMoney,
    text: "Revenue share commissions amongst the highest in the gaming industry",
  },
  {
    icon: FaUserPlus,
    text: "Lifetime commissions on your referred players",
  },
  {
    icon: FaGear,
    text: "Wide variety of marketing tools",
  },
  {
    icon: RiCustomerServiceFill,
    text: "Dedicated customer service",
  },
  {
    icon: FaCheckCircle,
    text: "Payouts guaranteed",
  },
];

export default function ReasonsSection() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reasons.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (i) => {
    setIndex(i);
    setIsPaused(true);
  };

  const getSlideClass = (i) => {
    const previous = (index - 1 + reasons.length) % reasons.length;
    const next = (index + 1) % reasons.length;

    if (i === index) return "active";
    if (i === previous) return "previous";
    if (i === next) return "next";
    return "";
  };

  return (
    <section className="reasons">
      <Container className="pt-5 mt-3 text-center text-md-start">
        <Row className="section-heading">
          <Col lg={7}>
            <p className="section-heading__eyebrow">Partner advantages</p>
            <h1 className="section-heading__title">Reasons to Join</h1>
          </Col>
        </Row>
      </Container>

      <Container className="reasons__spotlight-wrapper">
        <Row className="justify-content-center">
          <Col xs={12} lg={10} xl={9}>
            <div
              className="reasons__spotlight"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="reasons__slider" aria-live="polite">
                {reasons.map(({ icon, text }, i) => (
                  <article
                    key={text}
                    className={`reasons__card ${getSlideClass(i)}`}
                    aria-hidden={i !== index}
                  >
                    <div className="reasons__icon-wrap">
                      {createElement(icon, {
                        className: "reasons__icon",
                        "aria-hidden": true,
                      })}
                    </div>
                    <p className="reasons__text">{text}</p>
                  </article>
                ))}
              </div>

              <div className="reasons__dots" aria-label="Reason slides">
                {reasons.map((reason, i) => (
                  <button
                    key={reason.text}
                    type="button"
                    onClick={() => goToSlide(i)}
                    className={`reasons__dot ${i === index ? "active" : ""}`}
                    aria-label={`Show reason ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                  />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
