import { Helmet } from "react-helmet-async";
import useCmsPage from "../hooks/useCmsPage";
import useReveal from "../hooks/useReveal";
import InternalHeader from "../components/common/InternalHeader";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  FaChartLine,
  FaMoneyBillWave,
  FaUsers,
  FaComments,
  FaTools,
  FaHandshake,
} from "react-icons/fa";
import BrandPeekSlider from "../components/common/BrandPeekSlider";
import SportsImg from "../assets/about_us/about-us_sports.jpg";
import CasinoImg from "../assets/about_us/about-us_casino.jpg";


export default function About() {
  useReveal();

  const { page, translation, getBlocks } =
    useCmsPage("AboutUs");
    
  const h1 = getBlocks("h1");
  const h2 = getBlocks("h2");
  const h3 = getBlocks("h3");
  const h6 = getBlocks("h6");
  const p = getBlocks("p");
  const imgs = getBlocks("img");
  const title = page?.title || translation?.title || "About Us";

  const reasons = [
  {
    icon: <FaChartLine />,
    title: h3[2]?.content || "Reliable and Transparent:",
    text: p[4]?.content || "Our platform offers clear reporting and performance tracking so you can measure your success 24/7.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: h3[3]?.content || "Lucrative Commission Plans:",
    text: p[5]?.content || "Enjoy competitive revenue share models tailored to maximize your profitability.",
  },
  {
    icon: <FaUsers />,
    title: h3[4]?.content || "Top-Tier Brands:",
    text: p[6]?.content || "We partner with reputable gaming operators that ensure high conversion rates and player retention.",
  },
  {
    icon: <FaComments />,
    title: h3[5]?.content || "Personalized Support:",
    text: p[7]?.content || "Our dedicated affiliate managers provide hands-on support, helping you optimize your campaigns for the best results.",
  },
  {
    icon: <FaTools />,
    title: h3[6]?.content || "Advanced Tools:",
    text: p[8]?.content || "Benefit from user-friendly dashboards, creative materials, and reliable tracking technology."
  },
];

  return (
    <>
      <InternalHeader title={title} />

      <Container className="py-5 about-page">
        {translation && (
          <Helmet>
            <title>{translation.meta_title || page?.title || title}</title>
          </Helmet>
        )}

        <Row
          className="align-items-center justify-content-center g-5 py-lg-5 reveal reveal--fade"
          data-reveal
        >
          <Col lg={6}>
            <span className="text-warning fw-bold text-uppercase small">
              {h6[0]?.content || "About Affcorner"}
            </span>

            <h1 className="display-5 fw-bold mt-2 mb-4">
               {h1[0]?.content || "Your trusted partner in affiliate marketing success."}
            </h1>

              <p className="lead mb-0">
                {p[0]?.content || "Welcome to Affcorner, your trusted partner in affiliate marketing success. At Affcorner, we specialize in connecting affiliates with top-tier gaming, sportsbook, and casino brands to drive mutual growth and profitability. With years of experience and industry know-how, we provide the tools, resources, and support needed to help affiliates maximize their earning potential"}
              </p>
          </Col>

          <Col lg={5}>
            <div className="ratio ratio-1x1 rounded-4 overflow-hidden shadow-sm">
              <img
                src={imgs[0]?.src || SportsImg}
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
                <h3 className="fw-bold mb-3">{h3[0]?.content || "Who We Are"}</h3>
                <p className="mb-0"> {p[1]?.content || "Affcorner is backed by a team of experienced professionals with a strong reputation in affiliate and gaming marketing. As a strategic partner of BetPhoenix, Betmania, Skybook and Bogart Casino, some of the most established names in the industry since 2006, we combine decades of expertise with modern marketing solutions."}
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={6}>
            <Card className="h-100 border-0 shadow-sm rounded-4">
              <Card.Body className="p-4 p-lg-5">
                <h3 className="fw-bold mb-3">{h3[1]?.content || "What We Do"}</h3>
                <p className="mb-0"> {p[2]?.content || "We offer a comprehensive affiliate program that empowers affiliates to monetize their traffic effectively while partnering with industry-leading gaming brands. From seamless tracking tools to competitive commissions, we provide everything affiliates need to succeed in a fast-paced, competitive market."}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
      </Container>
      <Container
        fluid
        className="about-platform my-5 p-0"
        style={{ backgroundImage: `url(${imgs[1]?.src ||CasinoImg})` }}
      >
        <div className="about-platform__overlay">
          <Container>
            <div className="about-platform__intro text-center">
              <span className="text-warning fw-bold text-uppercase small">
                {h6[1]?.content || "Why Join"}
              </span>

              <h2 className="display-6 fw-bold mt-2 mb-3">
               {h2[0]?.content || "Why Choose Affcorner?"}
              </h2>

              <p className="mb-0">
               {p[3]?.content || "Built for affiliates who need reliable tracking, responsive support, competitive commissions, and brand partners that convert."}
              </p>
            </div>

            <div className="about-platform__grid">
              {reasons.map((item) => (
                <article className="about-platform__item" key={item.title}>
                  <div className="about-platform__icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </Container>
        </div>

      </Container>

      <Container>
        <Row className="justify-content-center mb-5">
        <Col lg={10}>
            <Card className="h-100 border-0 shadow-sm rounded-4">
              <Card.Body className="p-4 p-lg-5">
                <h3 className="fw-bold mb-3">{h3[7]?.content || "Our Commitment"}</h3>
                <p className="mb-0">
                  {p[9]?.content || "At Affcorner, we believe in building strong, long-lasting relationships. Whether you are a seasoned affiliate marketer or just starting your journey, we are committed to providing the tools, support, and opportunities you need to thrive."}
                </p>
                <p>{p[10]?.content || "Join us and discover the power of partnership with Affcorner — where success is shared, and your growth is our priority."}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <BrandPeekSlider />
    </>
  );
}
