import InternalHeader from "../components/common/InternalHeader";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaUsers,
  FaComments,
  FaTools,
} from "react-icons/fa";
import SportsImg from "../assets/about_us/about-us_sports.jpg";
import CasinoImg from "../assets/about_us/about-us_casino.jpg";

const reasons = [
  {
    icon: <FaChartLine />,
    title: "Reliable and Transparent:",
    text: "Our platform offers clear reporting and performance tracking so you can measure your success 24/7.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Lucrative Commission Plans:",
    text: "Enjoy competitive revenue share models tailored to maximize your profitability.",
  },
  {
    icon: <FaUsers />,
    title: "Top-Tier Brands:",
    text: "We partner with reputable gaming operators that ensure high conversion rates and player retention.",
  },
  {
    icon: <FaComments />,
    title: "Personalized Support:",
    text: "Our dedicated affiliate managers provide hands-on support, helping you optimize your campaigns for the best results.",
  },
  {
    icon: <FaTools />,
    title: "Advanced Tools:",
    text: "Benefit from user-friendly dashboards, creative materials, and reliable tracking technology.",
  },
];

export default function About() {
  return (
    <>
      <InternalHeader title="About Us" />
      <Container className="py-5 about-page">
        <Row className="align-items-center justify-content-center g-5 py-lg-5">
          <Col lg={6}>
            <span className="text-warning fw-bold text-uppercase small">
              About Affcorner
            </span>

            <h1 className="display-5 fw-bold mt-2 mb-4">
              Your trusted partner in affiliate marketing success.
            </h1>

            <p className="lead mb-0">
              Welcome to <strong>Affcorner,</strong> your trusted partner in
              affiliate marketing success. At Affcorner, we specialize in
              connecting affiliates with top-tier gaming, sportsbook, and casino
              brands to drive mutual growth and profitability. With years of
              experience and industry know-how, we provide the tools, resources,
              and support needed to help affiliates maximize their earning
              potential.
            </p>
          </Col>

          <Col lg={5}>
            <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm">
              <img
                src={SportsImg}
                alt="Sportsbook"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </Col>
        </Row>

        <Row className="g-4 my-5">
          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm rounded-4">
              <Card.Body className="p-4 p-lg-5">
                <h3 className="fw-bold mb-3">Who We Are</h3>
                <p className="mb-0">
                  Affcorner is backed by a team of experienced professionals
                  with a strong reputation in affiliate and gaming marketing. As
                  a strategic partner of BetPhoenix, Betmania, Skybook and
                  Bogart Casino, some of the most established names in the
                  industry since 2006, we combine decades of expertise with
                  modern marketing solutions.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm rounded-4">
              <Card.Body className="p-4 p-lg-5">
                <h3 className="fw-bold mb-3">What We Do</h3>
                <p className="mb-0">
                  We offer a comprehensive affiliate program that empowers
                  affiliates to monetize their traffic effectively while
                  partnering with industry-leading gaming brands. From seamless
                  tracking tools to competitive commissions, we provide
                  everything affiliates need to succeed in a fast-paced,
                  competitive market.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="align-items-center justify-content-center g-5 py-5">
          <Col lg={5}>
            <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm">
              <img
                src={CasinoImg}
                alt="Casino affiliate program"
                className="w-100 h-100 object-fit-cover"
              />
            </div>
          </Col>

          <Col lg={6}>
            <span className="text-warning fw-bold text-uppercase small">
              Why Join
            </span>

            <h2 className="display-6 fw-bold mt-2 mb-4">
              Why Choose Affcorner?
            </h2>

            <Row className="g-3">
              {reasons.map((item) => (
                <Col xs={12} key={item.title}>
                  <div className="d-flex gap-3 p-3 rounded-4 bg-body-tertiary">
                    <div className="text-warning fs-3 lh-1">{item.icon}</div>

                    <div>
                      <h5 className="fw-bold mb-1">{item.title}</h5>
                      <p className="mb-0 small">{item.text}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center py-5">
          <Col lg={10}>
            <Card className="border-0 shadow-sm rounded-4 bg-body-tertiary">
              <Card.Body className="p-4 p-lg-5 text-center">
                <h3 className="fw-bold mb-3">Our Commitment</h3>

                <p>
                  At Affcorner, we believe in building strong, long-lasting
                  relationships. Whether you are a seasoned affiliate marketer or
                  just starting your journey, we are committed to providing the
                  tools, support, and opportunities you need to thrive.
                </p>

                <p className="mb-0">
                  Join us and discover the power of partnership with Affcorner —
                  where success is shared, and your growth is our priority.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
