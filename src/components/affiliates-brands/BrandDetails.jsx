import { Button, Col, Container, Row } from "react-bootstrap";
import { FaDice, FaTicket } from "react-icons/fa6";
import { TbPlayCard } from "react-icons/tb";
import { MdOutlineSportsFootball } from "react-icons/md";
import { CgCardDiamonds } from "react-icons/cg";
import { GiHorseshoe } from "react-icons/gi";
import BetphoenixPreview from "../../assets/affbrands/betphoenix.png";
import SkybookPreview from "../../assets/affbrands/skybook.png";
import BetmaniaPreview from "../../assets/affbrands/betmania.png";
import BogartCasinoPreview from "../../assets/affbrands/bogartcasino.png";

const featureIcons = {
  casino: FaDice,
  liveCasino: CgCardDiamonds,
  lottery: FaTicket,
  virtualCasino: TbPlayCard,
  sportsbook: MdOutlineSportsFootball,
  horseracing: GiHorseshoe,
};

const standardDeposits = [
  "KriPay (Google Pay & Apple Pay)",
  "Send Bitcoin with Cash App",
  "Bitcoin, Ethereum, Litecoin, Tether (USDT), USDC",
  "Zpay",
  "Boss Revolution",
  "Person to Person",
  "Credit Cards",
];

const standardPayouts = [
  "Tether (USDT)",
  "Bitcoin",
  "Person to Person",
  "Checks",
];

function stripTags(value) {
  return String(value).replace(/<[^>]*>/g, "").trim();
}

function normalizeStatItems(items) {
  if (Array.isArray(items)) {
    return items.map(stripTags).filter(Boolean);
  }

  if (!items) {
    return [];
  }

  if (Array.isArray(items?.items)) {
    return normalizeStatItems(items.items);
  }

  if (items?.content) {
    return normalizeStatItems(items.content);
  }

  const value = String(items);
  const listItems = [...value.matchAll(/<li[^>]*>(.*?)<\/li>/gis)]
    .map((match) => stripTags(match[1]))
    .filter(Boolean);

  if (listItems.length) {
    return listItems;
  }

  return value
    .split(/\r?\n/)
    .map(stripTags)
    .filter(Boolean);
}


export default function BrandDetails({ cms, activeBrand }) {
  const { getBlocks } = cms || {};
  const h4 = getBlocks?.("h4") || [];
  const h6 = getBlocks?.("h6") || [];
  const p = getBlocks?.("p") || [];
  const ul = getBlocks?.("ul") || [];
  const divs = getBlocks?.("div") || [];
  const imgs = getBlocks?.("img") || [];

  const affiliateBrands = [
    {
      id: "betphoenix",
      name: imgs[8]?.alt || "BetPhoenix",
      preview: imgs[8]?.src || BetphoenixPreview,
      tone: "info",
      affiliateUrl: "https://affiliate2.betphoenix.ag/login",
      description: p[2]?.content ||
        "Established in 2006, BetPhoenix.ag has built a strong reputation in the online gaming industry. It offers sports betting, virtual and live casino gaming, horse racing, and lottery.",
      summary: p[3]?.content ||
        "With some of the highest bonuses in the industry, BetPhoenix.ag continues to attract players seeking generous promotions and a reliable gaming experience.",
      features: [
      {
        icon: "sportsbook",
        title: h4[0]?.content || "Sportsbook",
        description: divs[0]?.content ||
          "Players can follow major sports, live markets, props, futures, and other betting options from a long-running sportsbook brand.",
      },
      {
        icon: "liveCasino",
        title: h4[1]?.content || "Virtual Casino",
        description: divs[1]?.content ||
          "The virtual casino adds slots, table games, and fast-play options for players who want more than sportsbook action.",
      },
      {
        icon: "horseracing",
        title: h4[2]?.content || "Racing",
        description: divs[2]?.content ||
          "Live dealer tables bring blackjack, baccarat, roulette, and other real-time casino experiences to the platform.",
      },
      {
        icon: "lottery",
        title: h4[3]?.content || "Lottery",
        description: divs[3]?.content ||
          "Lottery options add quick draw entertainment alongside the main sportsbook and casino products.",
      },
    ],
      stats: [
      { title: h4[4]?.content || "Deposit Options:", width: 4, items: ul[0]?.content || standardDeposits },
      { title: h4[5]?.content || "Payout Options:", width: 4, items: ul[1]?.content || standardPayouts },
      {
        title: h4[6]?.content || "Types of Wagers:",
        width: 4,
        description: p[4]?.content ||
          "Straight Bets, Parlays, Teasers, If Bets, Reverses, Action Points, Props/Futures, Open Wagers, Live Wagering.",
      },
    ],
    },
    {
      id: "skybook",
      name: imgs[9]?.alt || "Skybook",
      preview: imgs[9]?.src || SkybookPreview,
      tone: "success",
      affiliateUrl: "https://affiliate2.skybook.ag/login",
      description: p[5]?.content ||
        "Skybook.ag is a trusted online betting platform that has been serving players since 1997. Known as the Home of the Bettor, it offers a broad betting lineup for gambling enthusiasts.",
      summary: p[6]?.content ||
        "With over 25 years of experience, Skybook.ag combines reliability, variety, and a player-first approach for online betting.",
      features: [
      {
        icon: "sportsbook",
        title: h4[0]?.content || "Sportsbook",
        description: divs[4]?.content ||
          "Skybook.ag delivers competitive odds across major sports, including NFL, NBA, MLB, soccer, live betting, and sharp lines.",
      },
      {
        icon: "casino",
        title: h4[1]?.content || "Virtual and Live Casino",
        description: divs[5]?.content ||
          "Slots, video poker, table games, and live dealer tables give casino players a broad mix of experiences.",
      },
      {
        icon: "horseracing",
        title: h4[2]?.content || "Racebook",
        description: divs[6]?.content ||
          "Horse racing fans can bet major tracks and international events with user-friendly interfaces and rebates.",
      },
      {
        icon: "lottery",
        title: h4[3]?.content || "Lottery",
        description: divs[7]?.content ||
          "Lottery games add another product line for players looking for quick entertainment.",
      },
    ],
      stats: [
      { title: h4[4]?.content || "Deposit Options:", width: 4, items: ul[0]?.content || standardDeposits },
      { title: h4[5]?.content || "Payout Options:", width: 4, items: ul[1]?.content || standardPayouts },
      {
        title: h4[6]?.content || "Types of Wagers:",
        width: 4,
        description: p[7]?.content ||
          "Straight Wagers, Point Spread, Money Line Wagers, Totals, Props, Futures, Parlays, Round Robins, Teasers, If Wagers, Action Reverse, Half-Time Wagers, Quarter Wagers, and Horse Wagers.",
      },
    ],
    },
    {
      id: "betmania",
      name: imgs[10]?.alt || "Betmania",
      preview: imgs[10]?.src || BetmaniaPreview,
      tone: "danger",
      affiliateUrl: "https://affiliate2.betmania.ag/login",
      description: p[8]?.content ||
        "Since 2004, Betmania.ag has offered a Sportsbook, Virtual and Live Casino, Racebook, and Lottery with a focus on longevity, reliability, and competitive bonuses.",
      summary: p[9]?.content ||
        "Betmania pairs its product lineup with strong customer service and more than two decades of gaming experience.",
      features: [
      {
        icon: "sportsbook",
        title: h4[0]?.content || "Sportsbook",
        description: divs[8]?.content ||
          "Betmania.ag provides a wide range of betting options with sharp lines across major sports.",
      },
      {
        icon: "casino",
        title: h4[1]?.content || "Virtual and Live Casino",
        description: divs[9]?.content ||
          "Features exciting games and live dealer options.",
      },
      {
        icon: "horseracing",
        title: h4[2]?.content || "Racebook",
        description: divs[10]?.content ||
          "Covers all major tracks with an attractive 15% weekly rebate on net losses.",
      },
      {
        icon: "lottery",
        title: h4[3]?.content || "Lottery",
        description: divs[11]?.content ||
          "This section completes the platform, offering a chance to test your luck in a straightforward and engaging way.",
      },
    ],
      stats: [
      { title: h4[4]?.content || "Deposit Options:", width: 4, items: ul[0]?.content || standardDeposits },
      { title: h4[5]?.content || "Payout Options:", width: 4, items: ul[1]?.content || standardPayouts },
      {
        title: h4[6]?.content || "Types of Wagers:",
        width: 4,
        description: p[4]?.content ||
          "Straight Bets, Parlays, Teasers, If Bets, Reverses, and Live Wagering.",
      },
    ],
    },
    {
      id: "bogartcasino",
      name: imgs[11]?.alt || "Bogart Casino",
      preview: imgs[11]?.src || BogartCasinoPreview,
      tone: "warning",
      affiliateUrl: "https://affiliate2.bogartcasino.ag/login",
      description:  p[10]?.content ||
        "Newly revamped and relaunched, Bogart Casino brings a fresh experience to online gaming. Originally established in 2001, Bogart Casino built its reputation offering a robust selection of virtual casino games, live dealer action, and lottery-style entertainment. Now, with an upgraded platform, players can enjoy an even more immersive and reliable gaming environment.",
      summary: p[11]?.content ||
        "Bogartcasino.ag focuses on customer service and a wide game catalog designed for different types of casino players.",
      features: [
      {
        icon: "casino",
        title:  h4[13]?.content || "Virtual Casino",
        description: divs[13]?.content ||
          "Over 1000 slots, fish and shooting games, crash games, and classic table favorites keep the virtual casino broad and active.",
      },
      {
        icon: "liveCasino",
        title: h4[14]?.content || "Live Casino",
        description: divs[14]?.content ||
          "Real-time blackjack, baccarat, roulette, sicbo, and more stream with professional dealers.",
      },
      {
        icon: "lottery",
        title: h4[15]?.content || "Lottery",
        width: 12,
        description: divs[15]?.content ||
          "Daily 3, Daily 4, and other lottery-style options add another layer of entertainment.",
      },
    ],
      stats: [
      { title: h4[4]?.content || "Deposit Options:",  items: ul[0]?.content || standardDeposits },
      { title: h4[5]?.content || "Payout Options:",  items: ul[1]?.content || standardPayouts },
    ],
    },
  ];
  const brand =
    affiliateBrands.find((item) => item.id === activeBrand) ||
    affiliateBrands[0];

  return (
    <section className="affiliate-brand-details py-5">
      <Container id={brand.id} className="text-center">
        <Row className="align-items-center justify-content-center g-2 g-lg-5">
          <Col lg={12}>
            <span className="text-warning fw-bold text-uppercase small">
             {h6[2]?.content || " Affiliate Brand"} 
            </span>

            <h2 className="display-4 fw-bold mt-2 mb-4">{brand.name}</h2>

            <p className="text-body-secondary">{brand.description}</p>

            <img
              src={brand.preview}
              alt={`${brand.name} page view`}
              className="img-fluid rounded-4"
              height="400"
            />
          </Col>

          <p className="fw-medium text-center">{brand.summary}</p>
        </Row>

        <Row className="align-items-center text-start justify-content-center g-3 g-lg-5 mt-0">
          <Col lg={6}>
            <Row>
              {brand.features.map((feature) => {
                const Icon = featureIcons[feature.icon] || TbPlayCard;

                return (
                  <Col md={feature.width || 6} key={feature.title}>
                    <div className="h-100 p-4 rounded-4 bg-body-tertiary shadow-sm">
                      <h4 className="fw-bold mb-2">
                        <Icon /> {feature.title}
                      </h4>
                      <p className="small text-body-secondary mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>

          <Col lg={6}>
            <Row className="g-3">
              {brand.stats.map((stat) => {
                const statItems = normalizeStatItems(stat.items);

                return (
                  <Col md={stat.width} key={stat.title}>
                    <div className={`h-100 p-4 rounded-4 border border-${brand.tone}`}>
                      <h4 className="fw-bold mb-3">{stat.title}</h4>
                      {statItems.length ? (
                        <ul className="mb-0">
                          {statItems.map((item, index) => (
                            <li key={`${item}-${index}`}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mb-0">{stat.description}</p>
                      )}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>

        <Button
          href={brand.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-yellow mt-5"
        >
          Visit {brand.name} Affiliate Platform
        </Button>
      </Container>
    </section>
  );
}
