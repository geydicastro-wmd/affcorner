import CTAGeneral from "../components/common/CTAGeneral";
import BrandPeekSlider from "../components/common/BrandPeekSlider";

import { Helmet } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChartLine, FaMoneyBillWave } from "react-icons/fa";
import { createElement } from "react";
import { GrMoney } from "react-icons/gr";
import { FaUserPlus, FaGear } from "react-icons/fa6";
import { RiCustomerServiceFill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";

import HeroPerson from "../assets/internalpages_banner/img_header_wtj.png";
import HeroIcons from "../assets/internalpages_banner/header_icons-wtj.png";
import useCmsPage from "../hooks/useCmsPage";

export default function Join() {
  const cmsPage = useCmsPage("BasicPage", {
    title: "Why Join",
  });
  const { getBlocks, renderHtml, page, translation, } = cmsPage;
  const h6 = getBlocks("h6");
  const h1 = getBlocks("h1");
  const p = getBlocks("p");
  const imgs = getBlocks("img");

  const title = page?.title || translation?.title || "Why Join";

  const reasons = [
    {
      icon: GrMoney,
      text:
        p[5]?.content ||
        "Revenue share commissions amongst the highest in the gaming industry",
    },
    {
      icon: FaUserPlus,
      text: p[6]?.content || "Lifetime commissions on your referred players",
    },
    {
      icon: FaGear,
      text: p[7]?.content || "Wide variety of marketing tools",
    },
    {
      icon: RiCustomerServiceFill,
      text: p[8]?.content || "Dedicated customer service",
    },
    {
      icon: FaCheckCircle,
      text: p[9]?.content || "Payouts guaranteed",
    },
  ];

  return (
    <div>

      {translation && (
        <Helmet>
          <title>{translation.meta_title || page?.title || title}</title>
        </Helmet>
      )}

      <section className="why-join-hero text-light position-relative overflow-hidden pt-5">
        <Container className="position-relative py-5">
          <Row className="align-items-center justify-content-between min-vh-75 g-5">
            <Col
              lg={6}
              className="text-center text-lg-start order-2 order-lg-1"
            >
              <span className="text-warning fw-bold text-uppercase small">
                {h6[0]?.content}
              </span>

              <h1 className="display-4 fw-bold mt-3 mb-4">{h1[0]?.content}</h1>

              <p
                className="lead text-light mb-4"
                dangerouslySetInnerHTML={renderHtml(p[0]?.content)}
              />

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button
                  as={Link}
                  to="/register-now"
                  variant="warning"
                  size="lg"
                  className="rounded-pill fw-bold text-uppercase px-4 d-inline-flex align-items-center justify-content-center gap-2"
                >
                  {p[1]?.content || "Sign In Now"} <FaArrowRight />
                </Button>

                <Button
                  as={Link}
                  to="/commissions"
                  variant="outline-light"
                  size="lg"
                  className="rounded-pill fw-bold text-uppercase px-4"
                >
                  {p[2]?.content || "View Commissions"}
                </Button>
              </div>

              <Row className="g-3 mt-5">
                <Col sm={6}>
                  <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-white bg-opacity-10">
                    <FaChartLine className="text-warning fs-3" />
                    <span className="fw-bold">
                      {" "}
                      {p[3]?.content || "High-converting brands"}
                    </span>
                  </div>
                </Col>

                <Col sm={6}>
                  <div className="d-flex align-items-center gap-3 p-3 rounded-4 bg-white bg-opacity-10">
                    <FaMoneyBillWave className="text-warning fs-3" />
                    <span className="fw-bold">
                      {" "}
                      {p[4]?.content || "Competitive commissions"}
                    </span>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6} className="order-1 order-lg-2">
              <div className="why-join-visual position-relative mx-auto">
                <img
                  src={imgs[1]?.content || HeroIcons}
                  alt="Sportsbook and casino affiliate icons"
                  className="img-fluid hero-icons position-absolute"
                  width="650"
                  height="604"
                />

                <img
                  src={imgs[0]?.content || HeroPerson}
                  alt="Casino affiliate program"
                  className="img-fluid hero-person position-relative"
                  width="500"
                  height="500"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="reason-home">
        <Container className="text-center text-md-start">
          <Row className="section-heading">
            <Col lg={7}>
              <p className="section-heading__eyebrow">
                {h6[1]?.content || "Partner advantages"}
              </p>
              <h1 className="section-heading__title">
                {h1[1]?.content || "Reasons to Join"}
              </h1>
            </Col>
          </Row>
        </Container>

        <Container className="reason-home__cards-wrapper">
          <Row className="g-4 justify-content-center">
            {reasons.map(({ icon, text }, i) => (
              <Col key={i} xs={12} md={6} lg={4}>
                <article className="reason-home__card">
                  <div className="reason-home__icon-wrap">
                    {createElement(icon, {
                      className: "reason-home__icon",
                      "aria-hidden": true,
                    })}
                  </div>
                  <p className="reason-home__text">{text}</p>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <CTAGeneral />
      <BrandPeekSlider />
    </div>
  );
}
