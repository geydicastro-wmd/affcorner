import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";

import BPImg from "../../assets/pages/betphoenix-page.jpg";
import SKImg from "../../assets/pages/skybook-page.jpg";
import BMImg from "../../assets/pages/betmania-page.jpg";
import BCImg from "../../assets/pages/bogartcasino_img.jpg";


const brands = [
  {
    id: "betphoenix",
    name: "BetPhoenix",
    url: "BetPhoenix.ag",
    img: BPImg,
    text: "Established in 2006, BetPhoenix.ag has built a strong reputation in the online gaming industry. It offers a comprehensive platform catering to sports betting, virtual and live casino gaming, horse racing, and lottery.",
    reverse: false,
  },
  {
    id: "skybook",
    name: "Skybook",
    url: "Skybook.ag",
    img: SKImg,
    text: "Skybook.ag is a trusted online betting platform that’s been serving players since 1997. Known as the “Home of the Bettor,” it offers a comprehensive suite of betting options tailored to every gambling enthusiast.",
    reverse: true,
  },
  {
    id: "betmania",
    name: "Betmania",
    url: "Betmania.ag",
    img: BMImg,
    text: "Since 2004, Betmania.ag has been a trusted name in the online gaming industry, offering a comprehensive platform that includes a Sportsbook, Virtual and Live Casino, Racebook, and Lottery. Known for its longevity and reliability, Betmania sets itself apart with the most competitive bonuses in the industry, designed to maximize your winnings.",
    reverse: false,
  },
  {
    id: "bogartcasino",
    name: "Bogart Casino",
    url: "BogartCasino.ag",
    img: BCImg,
    text: "Newly revamped and relaunched, Bogart Casino brings a fresh experience to online gaming. Originally established in 2001, Bogart Casino built its reputation offering a robust selection of virtual casino games, live dealer action, and lottery-style entertainment. Now, with an upgraded platform, players can enjoy an even more immersive and reliable gaming environment.",
    reverse: true,
  },
];

export default function BrandsSection() {
  useReveal();

  return (
    <section className="brands">
      <Container>
        {brands.map((brand) => (
          <Row key={brand.id} className="align-items-center my-5">
            
            <Col
              lg={6}
              className={`text-center ${
                brand.reverse ? "order-lg-2" : ""
              }`}
            >
              <img
                src={brand.img}
                alt={brand.name}
                className={`img-fluid shadow reveal ${
                  brand.reverse ? "reveal--right" : "reveal--left"
                }`}
                data-reveal
              />
            </Col>

            <Col
              lg={6}
              className={`p-3 ${
                brand.reverse ? "order-lg-1" : ""
              }`}
            >
              <div className="reveal reveal--fade" data-reveal>
                <h2 className="text-dark">{brand.name}</h2>
                <p className="text-muted">{brand.url}</p>
                <p className="text-dark">{brand.text}</p>
                <Button
                  as={Link}
                  to="/affiliates-brands"
                  className="btn-yellow brands__learn-more"
                >
                  Learn More
                </Button>
              </div>
            </Col>

          </Row>
        ))}
      </Container>
    </section>
  );
}
