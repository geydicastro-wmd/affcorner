import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useReveal from "../../hooks/useReveal";

import BPImg from "../../assets/pages/betphoenix-page.jpg";
import SKImg from "../../assets/pages/skybook-page.jpg";
import BMImg from "../../assets/pages/betmania-page.jpg";
import BCImg from "../../assets/pages/bogartcasino_img.jpg";

function getImageSrc(image, fallbackImage) {
  return image?.url || image?.src || image?.content || fallbackImage;
}

export default function BrandsIntro({ cms }) {
  useReveal();

  const {
    page,
    translation,
    loading,
    error,
    getBlocks,
    getText,
    renderHtml,
  } = cms || {};

  const h1 = getBlocks?.("h1") || [];
  const h2 = getBlocks?.("h2") || [];
  const h5 = getBlocks?.("h5") || [];
  const p = getBlocks?.("p") || [];
  const divs = getBlocks?.("div") || [];
  const imgs = getBlocks?.("img") || [];

  console.log("BrandsIntro CMS blocks", {
    h1,
    h2,
    h5,
    p,
    divs,
    imgs,
  });

  const brandSections = [
    {
      id: "betphoenix",
      link: "/affiliates-brands#betphoenix",
      // title: h2[0]?.content || h1[0]?.content || "BetPhoenix",
      // url: p[0]?.content ? getText(p[0].content) : "BetPhoenix.ag",
      textHtml:
        divs[0]?.content ||
        "Established in 2006, BetPhoenix.ag has built a strong reputation in the online gaming industry. It offers a comprehensive platform catering to sports betting, virtual and live casino gaming, horse racing, and lottery.",
      image: getImageSrc(imgs[4], BPImg),
      alt: imgs[4]?.alt || "BetPhoenix Page",
      reverse: false,
    },
    {
      id: "skybook",
      link: "/affiliates-brands#skybook",
      // title: h2[1]?.content || h1[1]?.content || "Skybook",
      // url: p[1]?.content ? getText(p[1].content) : "Skybook.ag",
      textHtml:
        divs[1]?.content ||
        "Skybook.ag is a trusted online betting platform that's been serving players since 1997. Known as the Home of the Bettor, it offers a comprehensive suite of betting options tailored to every gambling enthusiast.",
      image: getImageSrc(imgs[5], SKImg),
      alt: imgs[5]?.alt || "Skybook Page",
      reverse: true,
    },
    {
      id: "betmania",
      link: "/affiliates-brands#betmania",
      // title: h2[2]?.content || h1[2]?.content || "Betmania",
      // url: p[2]?.content ? getText(p[2].content) : "Betmania.ag",
      textHtml:
        divs[2]?.content ||
        "Since 2004, Betmania.ag has been a trusted name in the online gaming industry, offering a comprehensive platform that includes a Sportsbook, Virtual and Live Casino, Racebook, and Lottery. Known for its longevity and reliability, Betmania sets itself apart with the most competitive bonuses in the industry, designed to maximize your winnings.",
      image: getImageSrc(imgs[6], BMImg),
      alt: imgs[6]?.alt || "Betmania Page",
      reverse: false,
    },
    {
      id: "bogartcasino",
      link: "/affiliates-brands#bogartcasino",
      // title: h2[3]?.content || h1[3]?.content || "Bogart Casino",
      // url: p[3]?.content ? getText(p[3].content) : "BogartCasino.ag",
      textHtml:
        divs[3]?.content ||
        "Newly revamped and relaunched, Bogart Casino brings a fresh experience to online gaming. Originally established in 2001, Bogart Casino built its reputation offering a robust selection of virtual casino games, live dealer action, and lottery-style entertainment. Now, with an upgraded platform, players can enjoy an even more immersive and reliable gaming environment.",
      image: getImageSrc(imgs[7], BCImg),
      alt: imgs[7]?.alt || "Bogart Casino Page",
      reverse: true,
    },
  ];

  return (
    <section className="brands">
      <Container>
        {loading && !page && !error && (
          <span className="visually-hidden">Loading...</span>
        )}

        {h5[0]?.content && (
          <p className="section-heading__eyebrow visually-hidden">
            {getText(h5[0].content)}
          </p>
        )}

        {translation?.title && (
          <h1 className="visually-hidden">{translation.title}</h1>
        )}

        {brandSections.map((brand) => (
          <Row key={brand.id} className="align-items-center my-5">
            <Col
              lg={6}
              className={`text-center ${brand.reverse ? "order-lg-2" : ""}`}
            >
              <Link to={brand.link} aria-label={`View ${brand.alt}`}>
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className={`img-fluid shadow reveal ${
                    brand.reverse ? "reveal--right" : "reveal--left"
                  }`}
                  data-reveal
                />
              </Link>
            </Col>

            <Col
              lg={6}
              className={`p-3 ${brand.reverse ? "order-lg-1" : ""}`}
            >
              <div className="reveal reveal--fade" data-reveal>
                <h2 className="text-dark">{brand.title}</h2>
                <p className="text-muted">{brand.url}</p>
                <div
                  className="text-dark"
                  dangerouslySetInnerHTML={renderHtml?.(brand.textHtml)}
                />
                <Button
                  as={Link}
                  to={brand.link}
                  className="btn-yellow brands__learn-more"
                >{getText(h5[0]?.content)}
                  {/* Learn More */}
                </Button>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  );
}
