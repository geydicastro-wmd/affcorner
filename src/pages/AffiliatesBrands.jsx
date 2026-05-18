import { useState } from "react";
import CTAGeneral from "../components/common/CTAGeneral";
import BrandPeekSlider from "../components/common/BrandPeekSlider";

import { Carousel, Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {
  FaDice,
  FaCircleDot,
  FaTicket,
  FaMoneyBillTransfer,
  FaCreditCard,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { TbPlayCard } from "react-icons/tb";
import { MdOutlineSportsFootball } from "react-icons/md";

import VirtualCasinoImg from "../assets/aff-header/virtualcasino_aff_500x500.png";
import HorseRacingImg from "../assets/aff-header/horseracing_aff_500x500.png";
import LiveCasinoImg from "../assets/aff-header/live-casino_aff_500x500.png";
import SportsbookImg from "../assets/aff-header/sportsbook_aff_500x500.png";

import BogartMainImg from "../assets/pages_internal/img_bc.jpg";
import BogartSecondImg from "../assets/pages_internal/2_bc.jpg";

import BPMainImg from "../assets/pages_internal/1_bp.jpg";
import BPSecondImg from "../assets/pages_internal/2_bp.jpg";

import SKMainImg from "../assets/pages_internal/1_sk.jpg";
import SKSecondImg from "../assets/pages_internal/2_sk.jpg";

import BMMainImg from "../assets/pages_internal/1_bm.jpg";
import BMSecondImg from "../assets/pages_internal/2_bm.jpg";

import Betphoenix from "../assets/affbrands/betphoenix.png";
import Skybook from "../assets/affbrands/skybook.png";
import Betmania from "../assets/affbrands/betmania.png";
import BogartCasino from "../assets/affbrands/bogartcasino.png";

import BetPhoenixLogo from "../assets/brands/brand1.png";
import SkybookLogo from "../assets/brands/brand2.png";
import BetmaniaLogo from "../assets/brands/brand3.png";
import BogartCasinoLogo from "../assets/brands/brand4.png";

const products = [
  {
    title: "Sportsbook",
    image: SportsbookImg,
  },
  {
    title: "Live Casino",
    image: LiveCasinoImg,
  },
  {
    title: "Virtual Casino",
    image: VirtualCasinoImg,
  },
  {
    title: "Horse Racing",
    image: HorseRacingImg,
  },
];

const affiliateBrands = [
  {
    id: "betphoenix",
    name: "BetPhoenix",
    logo: BetPhoenixLogo,
  },
  {
    id: "skybook",
    name: "Skybook",
    logo: SkybookLogo,
  },
  {
    id: "betmania",
    name: "Betmania",
    logo: BetmaniaLogo,
  },
  {
    id: "bogartcasino",
    name: "Bogart Casino",
    logo: BogartCasinoLogo,
  },
];

export default function AffiliatesBrands() {
  const [activeBrand, setActiveBrand] = useState(null);

  return (
    <div>
      {/* Header */}
      <section className="brands-hero text-light position-relative overflow-hidden pt-5">
        <Container className="position-relative py-5">
          <Row className="align-items-center justify-content-between min-vh-75 g-5">
            <Col lg={6} className="text-center text-lg-start">
              <span className="text-warning fw-bold text-uppercase small">
                Check Our Products
              </span>

              <h1 className="display-3 fw-bold mt-3 mb-4">
                Brands built to convert affiliate traffic.
              </h1>

              <p className="lead text-light mb-4">
                Explore our sportsbook and casino products, backed by
                established brands affiliates can promote with confidence.
              </p>

              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button
                  as={Link}
                  to="/register-now"
                  variant="warning"
                  size="lg"
                  className="rounded-pill fw-bold text-uppercase px-4 d-inline-flex align-items-center justify-content-center gap-2"
                >
                  Register Now <FaArrowRight />
                </Button>

                <Button
                  as={Link}
                  to="/commissions"
                  variant="outline-light"
                  size="lg"
                  className="rounded-pill fw-bold text-uppercase px-4"
                >
                  View Commissions
                </Button>
              </div>
            </Col>

            <Col lg={5}>
              <div className="brands-product-card rounded-5 p-4 p-lg-5">
                <Carousel
                  fade
                  controls
                  interval={2000}
                  pause="hover"
                  className="brands-product-carousel"
                >
                  {products.map((product) => (
                    <Carousel.Item key={product.title}>
                      <div className="text-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="img-fluid product-img mb-4"
                          width="500"
                          height="500"
                        />

                        <h3 className="fw-bold mb-3">{product.title}</h3>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="affiliate-brand-details py-5">
        <Container className="text-center mb-5">
          <span className="text-warning fw-bold text-uppercase small">
            Our Partners
          </span>

          <h2 className="display-4 fw-bold mt-2 mb-0">Affiliate Brands</h2>
        </Container>

        <Container className="mb-5">
          <Row className="g-3 justify-content-center">
            {affiliateBrands.map((brand) => (
              <Col key={brand.id} xs={6} md={3}>
                <button
                  type="button"
                  className={`w-100 h-100 border rounded-4 bg-body p-4 shadow-sm ${
                    activeBrand === brand.id ? "border-warning" : "border-0"
                  }`}
                  onClick={() => setActiveBrand(brand.id)}
                  aria-controls={brand.id}
                  aria-expanded={activeBrand === brand.id}
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="img-fluid"
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                </button>
              </Col>
            ))}
          </Row>
        </Container>

        {/* BetPhoenix Section */}
        {activeBrand === "betphoenix" && (
        <Container id="betphoenix" className="text-center">
          <Row className="align-items-center justify-content-center g-2 g-lg-5">
            <Col lg={12}>
              <span className="text-warning fw-bold text-uppercase small">
                Affiliate Brand
              </span>

              <h2 className="display-4 fw-bold">Betphoenix</h2>

              <p className="text-body-secondary">
                Established in 2006, <strong>BetPhoenix.ag</strong> has built a
                strong reputation in the online gaming industry. It offers a
                comprehensive platform catering to sports betting, virtual and
                live casino gaming, horse racing, and lottery.
              </p>

              <img
                src={Betphoenix}
                alt="Betphoenix page view"
                className="img-fluid rounded-4"
                height="400px"
              />
            </Col>

            <p className="fw-medium text-center">
                With some of the highest bonuses in the industry,{" "}
                <strong>BetPhoenix.ag </strong> continues to attract players
                seeking generous promotions and a reliable gaming experience.
              </p>
          </Row>

          <Row className="align-items-center text-start justify-content-center g-3 g-lg-5 mt-0">

            <Col lg={6}>
              <Row >
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <MdOutlineSportsFootball /> Sportsbook
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Step into the action at Bogart Casino’s Virtual Casino,
                      where over 1000 slots, thrilling fish and shooting games,
                      fast-paced crash games, and classic table favorites await.
                      There’s something for every player—anytime, anywhere.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <FaDice /> Virtual Casino
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Step into the action at Bogart Casino’s Virtual Casino,
                      where over 1000 slots, thrilling fish and shooting games,
                      fast-paced crash games, and classic table favorites await.
                      There’s something for every player—anytime, anywhere.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <TbPlayCard /> Live Casino
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Experience the thrill of real-time gaming at Bogart
                      Casino’s Live Casino. Play live blackjack, baccarat,
                      roulette, sicbo, and more—streamed straight to your screen
                      with professional dealers and nonstop action.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <FaTicket /> Lottery
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Fans of lottery games can enjoy an extra thrill with our
                      selection of options, including the popular Daily 3 and
                      Daily 4 draws.
                    </p>
                  </div>
                </Col>
              </Row>


            </Col>
            
            <Col lg={6}>
              

              <Row className="g-3">
                <Col md={4}>
                  <div className="h-100 p-4 rounded-4 border border-info">
                    <h4 className="fw-bold mb-3">Deposit Options:</h4>
                    <ul className="mb-0">
                      <li>KriPay (Google Pay & Apple Pay)</li>
                      <li>Send Bitcoin with Cash App</li>
                      <li>Bitcoin, Ethereum, Litecoin, Tether (USDT), USDC</li>
                      <li>Zpay</li>
                      <li>Boss Revolution</li>
                      <li>Person to Person</li>
                      <li>Credit Cards</li>
                    </ul>
                  </div>
                </Col>

                <Col md={4}>
                  <div className="h-100 p-4 rounded-4 border border-info">
                    <h4 className="fw-bold mb-3">Payout Options:</h4>
                    <ul className="mb-0">
                      <li>Tether (USDT)</li>
                      <li>Bitcoin</li>
                      <li>Person to Person</li>
                      <li>Checks</li>
                    </ul>
                  </div>
                </Col>

                <Col md={4}>
                  <div className="h-100 p-4 rounded-4 border border-info">
                    <h4 className="fw-bold mb-3">Types of Wagers:</h4>
                    <p className="mb-0">
                      Straight Bets, Parlays, Teasers, If Bets, Reverses, Action
                      Points, Props/Futures, Open Wagers, Live Wagering.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>

            

          </Row>

          <Button
                href="https://affiliate2.betphoenix.ag/login"
                target="_blank"
                rel="noopener noreferrer"
                variant="warning"
                className="rounded-pill fw-bold text-uppercase px-4 mt-4"
              >
                Visit Betphoenix Affiliate Platform 
              </Button>
        </Container>
        )}

        {/* Skybook Section */}
        {activeBrand === "skybook" && (
        <Container id="skybook" className="text-center">
          <Row className="align-items-center justify-content-center g-2 g-lg-5">
            <Col lg={12}>
              <span className="text-warning fw-bold text-uppercase small">
                Affiliate Brand
              </span>

              <h2 className="display-4 fw-bold">Skybook</h2>

              <p className="text-body-secondary">
                <strong>Skybook.ag</strong> is a trusted online betting platform
                that’s been serving players since 1997. Known as the “Home of
                the Bettor,” it offers a comprehensive suite of betting options
                tailored to every gambling enthusiast.
              </p>

              <img
                src={Skybook}
                alt="Skybook page view"
                className="img-fluid rounded-4"
                height="400px"
              />
            </Col>

            <p className="fw-medium text-center">
              With over 25 years of experience, <strong>Skybook.ag </strong>{" "}
              combines reliability, variety, and a player-first approach,
              making it a standout choice for online betting.
            </p>
          </Row>

          <Row className="align-items-center text-start justify-content-center g-3 g-lg-5 mt-0">
            <Col lg={6}>
              <Row>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <MdOutlineSportsFootball /> Sportsbook
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      <strong>Skybook.ag</strong> delivers competitive odds
                      across all major sports, including NFL, NBA, MLB, soccer,
                      and more. It’s a go-to destination for live betting and
                      sharp lines, catering to both casual and seasoned bettors.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <FaDice /> Virtual and Live Casino
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      The casino section includes an array of exciting games,
                      from slots and video poker to classic table games like
                      blackjack and roulette. For a more immersive experience,
                      the live casino brings the action to life with
                      professional dealers.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <TbPlayCard /> Racebook
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Horse racing fans can enjoy betting on all major tracks
                      and international events, with user-friendly interfaces
                      and enticing rebates.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <FaTicket /> Lottery
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Lottery enthusiasts can try their luck with a variety of
                      games, adding an extra layer of excitement to the
                      platform.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <Row className="g-3">
                <Col md={4}>
                  <div className="h-100 p-4 rounded-4 border border-success">
                    <h4 className="fw-bold mb-3">Deposit Options:</h4>
                    <ul className="mb-0">
                      <li>KriPay (Google Pay & Apple Pay)</li>
                      <li>Send Bitcoin with Cash App</li>
                      <li>Bitcoin, Ethereum, Litecoin, Tether (USDT), USDC</li>
                      <li>Zpay</li>
                      <li>Boss Revolution</li>
                      <li>Person to Person</li>
                      <li>Credit Cards</li>
                    </ul>
                  </div>
                </Col>

                <Col md={4}>
                  <div className="h-100 p-4 rounded-4 border border-success">
                    <h4 className="fw-bold mb-3">Payout Options:</h4>
                    <ul className="mb-0">
                      <li>Tether (USDT)</li>
                      <li>Bitcoin</li>
                      <li>Person to Person</li>
                      <li>Checks</li>
                    </ul>
                  </div>
                </Col>

                <Col md={4}>
                  <div className="h-100 p-4 rounded-4 border border-success">
                    <h4 className="fw-bold mb-3">Types of Wagers:</h4>
                    <p className="mb-0">
                      Straight Wagers, Point Spread, Money Line Wagers, Total
                      Wagers, Buying Point, Proposition Wagers, Futures,
                      Parlays, Round Robins, Teasers, Special Teasers and
                      Parlays, Special College Football Teasers, If Wagers,
                      Action Reverse, 'To Win It All' Futures, Half-Time Wagers,
                      Quarter Wagers, Horse Wagers.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Button
            href="https://affiliate2.skybook.ag/login"
            target="_blank"
            rel="noopener noreferrer"
            variant="warning"
            className="rounded-pill fw-bold text-uppercase px-4 mt-4"
          >
            Visit Skybook Affiliate Platform
          </Button>
        </Container>
        )}

        {/* Betmania Section */}
        {activeBrand === "betmania" && (
        <Container id="betmania" className="text-center">
          <Row className="align-items-center justify-content-center g-2 g-lg-5">
            <Col lg={12}>
              <span className="text-warning fw-bold text-uppercase small">
                Affiliate Brand
              </span>

              <h2 className="display-4 fw-bold">Betmania</h2>

              <p className="text-body-secondary">
                Since 2004, <strong>Betmania.ag</strong> has been a trusted name in the online gaming industry, offering a comprehensive platform that includes a Sportsbook, Virtual and Live Casino, Racebook, and Lottery. Known for its longevity and reliability, Betmania sets itself apart with the most competitive bonuses in the industry, designed to maximize your winnings.
              </p>

              <img
                src={Betmania}
                alt="Betmania page view"
                className="img-fluid rounded-4"
                height="400px"
              />
            </Col>

            <p className="fw-medium text-center">
              <strong>Betmania</strong> also takes pride in its top-of-the-line
              customer service, ensuring players feel supported and valued every
              step of the way. With over two decades of experience,{" "}
              <strong>Betmania.ag </strong> continues to deliver a trusted and
              dynamic gaming experience.
            </p>
          </Row>

          <Row className="align-items-center text-start justify-content-center g-3 g-lg-5 mt-0">
            <Col lg={6}>
              <Row>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <MdOutlineSportsFootball /> Sportsbook
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      <strong>Betmania.ag</strong> provides a wide range of betting options with sharp lines on all major sports, ensuring a premium experience for sports enthusiasts.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <FaDice /> Virtual and Live Casino
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Features exciting games and live dealer options.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <TbPlayCard /> Racebook
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Covers all major tracks with an attractive 15% weekly rebate on net losses.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <FaTicket /> Lottery
                    </h4>
                    <p className="small text-body-secondary mb-0">
                     This section completes the platform, offering a chance to test your luck in a straightforward and engaging way.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <Row className="g-3">
                <Col md={4}>
                  <div className="h-100 p-4 rounded-4 border border-danger">
                    <h4 className="fw-bold mb-3">Deposit Options:</h4>
                    <ul className="mb-0">
                      <li>KriPay (Google Pay & Apple Pay)</li>
                      <li>Send Bitcoin with Cash App</li>
                      <li>Bitcoin, Ethereum, Litecoin, Tether (USDT), USDC</li>
                      <li>Zpay</li>
                      <li>Boss Revolution</li>
                      <li>Person to Person</li>
                      <li>Credit Cards</li>
                    </ul>
                  </div>
                </Col>

                <Col md={4}>
                  <div className="h-100 p-4 rounded-4 border border-danger">
                    <h4 className="fw-bold mb-3">Payout Options:</h4>
                    <ul className="mb-0">
                      <li>Tether (USDT)</li>
                      <li>Bitcoin</li>
                      <li>Person to Person</li>
                      <li>Checks</li>
                    </ul>
                  </div>
                </Col>

                <Col md={4}>
                  <div className="h-100 p-4 rounded-4 border border-danger">
                    <h4 className="fw-bold mb-3">Types of Wagers:</h4>
                    <p className="mb-0">
                      Straight Bets, Parlays, Teasers, If Bets, Reverses, Live Wagering.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Button
            href="https://affiliate2.betmania.ag/login"
            target="_blank"
            rel="noopener noreferrer"
            variant="warning"
            className="rounded-pill fw-bold text-uppercase px-4 mt-4"
          >
            Visit Betmania Affiliate Platform
          </Button>
        </Container>
        )}

        {/* Bogart Casino Section */}
        {activeBrand === "bogartcasino" && (
        <Container id="bogartcasino" className="text-center">
          <Row className="align-items-center justify-content-center g-2 g-lg-5">
            <Col lg={12}>
              <span className="text-warning fw-bold text-uppercase small">
                Affiliate Brand
              </span>
              <h2 className="display-4 fw-bold mt-2 mb-4">Bogart Casino</h2>

              <p className="text-body-secondary">
                Newly revamped and relaunched, <strong>Bogart Casino</strong>{" "}
                brings a fresh experience to online gaming. Originally
                established in 2001, Bogart Casino built its reputation offering
                a robust selection of virtual casino games, live dealer action,
                and lottery-style entertainment. Now, with an upgraded platform,
                players can enjoy an even more immersive and reliable gaming
                environment.
              </p>
              <img
                src={BogartCasino}
                alt="Bogart Casino page view"
                className="img-fluid rounded-4"
                height="400px"
              />
            </Col>

            <p className="fw-medium text-center">
              <strong>Bogartcasino.ag</strong> is committed to outstanding
              customer service while offering one of the best game selections
              in the industry, featuring a wide catalog designed to cater to
              every type of player.
            </p>
          </Row>

          <Row className="align-items-center text-start justify-content-center g-3 g-lg-5 mt-0">
            <Col lg={6}>
              <Row>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <FaDice /> Virtual Casino
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Step into the action at{" "}
                      <strong>Bogart Casino’s Virtual Casino,</strong>
                      where over 1000 slots, thrilling fish and shooting games,
                      fast-paced crash games, and classic table favorites await.
                      There’s something for every player—anytime, anywhere.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <TbPlayCard /> Live Casino
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Experience the thrill of real-time gaming at Bogart
                      Casino’s Live Casino. Play live blackjack, baccarat,
                      roulette, sicbo, and more—streamed straight to your screen
                      with professional dealers and nonstop action.
                    </p>
                  </div>
                </Col>
                <Col md={12}>
                  <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                    <h4 className="fw-bold mb-2">
                      <FaTicket /> Lottery
                    </h4>
                    <p className="small text-body-secondary mb-0">
                      Fans of lottery games can enjoy an extra thrill with our
                      selection of options, including the popular Daily 3 and
                      Daily 4 draws.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col lg={6}>
              <Row className="g-3">
                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 border border-warning">
                    <h4 className="fw-bold mb-3">Deposit Options:</h4>
                    <ul className="mb-0">
                      <li>KriPay (Google Pay & Apple Pay)</li>
                      <li>Tether (USDT), USDC, Bitcoin, Litecoin, Ethereum</li>
                      <li>Boss Revolution</li>
                      <li>Person to Person</li>
                      <li>Credit Cards</li>
                    </ul>
                  </div>
                </Col>

                <Col md={6}>
                  <div className="h-100 p-4 rounded-4 border border-warning">
                    <h4 className="fw-bold mb-3">Payout Options:</h4>
                    <ul className="mb-0">
                      <li>Tether (USDT)</li>
                      <li>Bitcoin</li>
                      <li>Person to Person</li>
                      <li>Checks</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Button
            href="https://affiliate2.bogartcasino.ag/login"
            target="_blank"
            rel="noopener noreferrer"
            variant="warning"
            className="rounded-pill fw-bold text-uppercase px-4 mt-4"
          >
            Visit Bogart Casino Affiliate Platform
          </Button>
        </Container>
        )}
      </section>

      <CTAGeneral />
      <BrandPeekSlider />
    </div>
  );
}
