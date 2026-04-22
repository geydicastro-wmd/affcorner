import { Container, Row, Col, Card } from "react-bootstrap";

const plans = [
  { percent: "20%", text: "Up to $10,000" },
  { percent: "25%", text: "$10,001 to $50,000" },
  { percent: "30%", text: "$50,001 or more" },
];

export default function CommissionPlans() {
  return (
    <section className="commissions">
      
      <Container className="text-center text-md-start pt-5">
        <h1 className="commissions__title">
          Commissions Plans
        </h1>

        <hr className="commissions__divider" />

        <h4 className="commissions__subtitle">
          Net Revenue (Monthly settled)
        </h4>
      </Container>

      <Container>
        <Row className="text-center pt-5">
          {plans.map((plan, index) => (
            <Col md={4} xs={12} className="mb-5" key={index}>
              
              <Card className="commissions__card shadow-sm border-0">
                
                <Card.Header className="position-relative p-5 bg-transparent border-0">
                  
                  {/* Circle */}
                  <div className="commissions__badge">
                    <span>{plan.percent}</span>
                  </div>

                </Card.Header>

                <Card.Body className="py-5">
                  <h2 className="commissions__text">
                    {plan.text}
                  </h2>
                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>
      </Container>

    </section>
  );
}