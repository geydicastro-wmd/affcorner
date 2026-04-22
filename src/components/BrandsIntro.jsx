import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

import BPImg from "../assets/pages/betphoenix-page.jpg";
import SKImg from "../assets/pages/skybook-page.jpg";
import BMImg from "../assets/pages/betmania-page.jpg";
import BCImg from "../assets/pages/bogartcasino_img.jpg";


const brands = [
  {
    id: "betphoenix",
    name: "BetPhoenix",
    url: "BetPhoenix.ag",
    img: BPImg,
    text: "Established in 2006, BetPhoenix has built a strong reputation...",
    reverse: false,
  },
  {
    id: "skybook",
    name: "Skybook",
    url: "Skybook.ag",
    img: SKImg,
    text: "Skybook is a trusted platform serving players since 1997...",
    reverse: true,
  },
  {
    id: "betmania",
    name: "Betmania",
    url: "Betmania.ag",
    img: BMImg,
    text: "Since 2004, Betmania has been a trusted name...",
    reverse: false,
  },
  {
    id: "bogartcasino",
    name: "Bogart Casino",
    url: "BogartCasino.ag",
    img: BCImg,
    text: "Newly revamped, Bogart Casino brings a fresh experience...",
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
              </div>
            </Col>

          </Row>
        ))}
      </Container>
    </section>
  );
}