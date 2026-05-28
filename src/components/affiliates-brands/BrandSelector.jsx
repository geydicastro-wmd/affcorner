import { Col, Container, Row } from "react-bootstrap";
import BetPhoenixLogo from "../../assets/brands/brand1.png";
import SkybookLogo from "../../assets/brands/brand2.png";
import BetmaniaLogo from "../../assets/brands/brand3.png";
import BogartCasinoLogo from "../../assets/brands/brand4.png";

export default function BrandSelector({ cms, activeBrand, onSelectBrand }) {
  const { getBlocks} = cms || {};
  const h2 = getBlocks?.("h2") || [];
  const h6 = getBlocks?.("h6") || [];
  const imgs = getBlocks?.("img") || [];

  const affiliateBrands = [
  { id: "betphoenix", name: "BetPhoenix", logo: imgs[4]?.src || BetPhoenixLogo },
  { id: "skybook", name: "Skybook", logo: imgs[5]?.src || SkybookLogo },
  { id: "betmania", name: "Betmania", logo: imgs[6]?.src || BetmaniaLogo },
  { id: "bogartcasino", name: "Bogart Casino", logo: imgs[7]?.src || BogartCasinoLogo },
];

  return (
    <section className="affiliate-brand-selector py-5 pb-0">
      <Container className="text-center mb-5">
        <span className="text-warning fw-bold text-uppercase small">
          {h6[1]?.content || "Our Partners"}
        </span>

        <h2 className="display-4 fw-bold mt-2 mb-0">
          {h2[0]?.content || "Affiliate Brands"}
        </h2>
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
                onClick={() => onSelectBrand(brand.id)}
                aria-controls={brand.id}
                aria-pressed={activeBrand === brand.id}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="img-fluid"
                  style={{ maxHeight: "95px", objectFit: "contain" }}
                />
              </button>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
