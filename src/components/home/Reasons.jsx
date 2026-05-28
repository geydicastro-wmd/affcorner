import { Container, Row, Col } from "react-bootstrap";
import { createElement, useEffect, useState } from "react";
import { GrMoney } from "react-icons/gr";
import { FaUserPlus, FaGear } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ReasonsSection({ cms }) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const {
    getBlocks,
  } = cms || {};

  const h1 = getBlocks?.("h1") || [];
  // const h2 = getBlocks?.("h2") || [];
  const h6 = getBlocks?.("h6") || [];
  const p = getBlocks?.("p") || [];
  // const divs = getBlocks?.("div") || [];

  const reasonSlides = [
    {
      icon: GrMoney,
      text: p[7]?.content || "Revenue share commissions amongst the highest in the gaming industry",
    },
    {
      icon: FaUserPlus,
      text: p[8]?.content || "Lifetime commissions on your referred players",
    },
    {
      icon: FaGear,
      text: p[9]?.content || "Wide variety of marketing tools",
    },
    {
      icon: RiCustomerServiceFill,
      text: p[10]?.content || "Dedicated customer service",
    },
    {
      icon: FaCheckCircle,
      text: p[11]?.content || "Payouts guaranteed",
    },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reasonSlides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, reasonSlides.length]);

  const goToSlide = (i) => {
    setIndex(i);
    setIsPaused(true);
  };

  const goToPrevious = () => {
    setIndex((prev) => (prev - 1 + reasonSlides.length) % reasonSlides.length);
    setIsPaused(true);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % reasonSlides.length);
    setIsPaused(true);
  };

  const getSlideClass = (i) => {
    const previous = (index - 1 + reasonSlides.length) % reasonSlides.length;
    const next = (index + 1) % reasonSlides.length;

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
            <p className="section-heading__eyebrow">
              {h6[2]?.content || "Partner advantages"}
            </p>
            <h1 className="section-heading__title">
              {h1[2]?.content || "Reasons to Join"}
            </h1>
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
                <button
                  type="button"
                  className="reasons__arrow reasons__arrow--prev"
                  onClick={goToPrevious}
                  aria-label="Show previous reason"
                >
                  <FaChevronLeft aria-hidden="true" />
                </button>

                {reasonSlides.map(({ icon, text }, i) => (
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

                <button
                  type="button"
                  className="reasons__arrow reasons__arrow--next"
                  onClick={goToNext}
                  aria-label="Show next reason"
                >
                  <FaChevronRight aria-hidden="true" />
                </button>
              </div>

              <div className="reasons__dots" aria-label="Reason slides">
                {reasonSlides.map((reason, i) => (
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
