import InternalHeader from "../components/common/InternalHeader";
import { Accordion, Container, Row, Col } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";


const faqs = [
  {
    question:
      "What is the commission structure at Affcorner.com’s Affiliate Program?",
    answer:
      "We encourage you to effortlessly boost your earnings with lucrative commissions, offering between 20% and up to 30% of net revenue.",
  },
  {
    question: "Do you offer a CPA (Cost Per Acquisition) structure?",
    answer:
      "Yes, we offer a CPA structure tailored for affiliates who are interested in customized commission plans. For more information about our CPA options, please contact our team. We aim to establish a partnership that meets your specific objectives.",
  },
  {
    question: "Is the program open to affiliates accepting US Players?",
    answer:
      "We are delighted to welcome affiliates aiming to reach US players. Broaden your horizons and engage a diverse audience through our affiliate program.",
  },
  {
    question:
      "What support does Affcorner.com’s Affiliate Program provide to affiliates?",
    answer:
      "We recognize how crucial support is in your affiliate journey. Our dedicated team is devoted to your success, providing timely help, expert advice, and continuous support to ensure you excel in the competitive world of affiliate marketing.",
  },
  {
    question: "What marketing tools are available?",
    answer:
      "We provide a comprehensive set of marketing tools to empower your campaigns. From eye-catching banners to engaging content, our marketing tools are designed to enhance your promotional efforts and maximize your conversion rates.",
  },
  {
    question: "How do I join Affcorner.com’s Affiliate Program?",
    answer:
      "Simply sign up on our website, discover our high-performing brand, and begin enhancing your campaigns to maximize the potential of your affiliate marketing experience.",
  },
  {
    question: "Where are your headquarters located?",
    answer: "We’re located in San Jose, Costa Rica.",
  },
  {
    question: "How long has Affcorner.com’s Affiliate Program been operating?",
    answer:
      "We’ve been in business since 2006, led by a highly experienced and financially stable bookmaking team in the industry.",
  },
  {
    question: "What are your business hours?",
    answer: "Our business hours are from 9:00 a.m. to 5:00 p.m. EST, Monday to Friday.",
  },
  {
    question: "What payment methods are available for affiliates?",
    answer:
      "We offer payment methods such as Person to Person Money Transfers and BTC for our affiliates.",
  },
  {
    question: "What is the minimum payment amount?",
    answer: "The minimum payout amount is $100 USD.",
  },
  {
    question: "Do I need a website to participate in the program?",
    answer:
      "Although having a website can enhance your affiliate potential, we accept affiliates through multiple channels. Even if you use offline methods or other alternative channels to promote our high-converting brands, you can still join our affiliate program. We appreciate diverse promotional strategies and are committed to offering opportunities to affiliates with different marketing techniques.",
  },
  {
    question: "How much does it cost to join your affiliate program?",
    answer: "It is completely free, and there are no charges for our marketing tools.",
  },
  {
    question: "Can I use my own affiliate account to play?",
    answer:
      "Affiliates are not allowed to bet using their affiliate account. In the event that an Affiliate wishes to play at Affcorner.com, said Affiliate must set up a separate player account, but will not earn commissions from his/her own player account.",
  },
  {
    question: "How often do I receive payments?",
    answer:
      "We process payments from the 8th to the 10th day of every month. Payments will be sent according to the selected payment method, and statements will be sent out during the same timeframe. It's crucial to note that payments are scheduled between the 8th and 10th of each month to ensure accurate grading of all sporting events, thereby reducing discrepancies in your commission payout.",
  },
  {
    question: "What is a Net Revenue Share Model?",
    answer: (
      <>
        <p>
          The net revenue share within a sportsbook and casino affiliate program
          denotes the portion of commission that an affiliate receives,
          determined by the net revenue produced by the players they've directed
          to the platform.
        </p>

        <p className="fw-bold pb-2 mb-0">
          The formula for net revenue share typically involves subtracting the
          following from the gross revenue:
        </p>

        <p><strong>Player Winnings:</strong> The amount paid out to players as winnings.</p>
        <p><strong>Fraud and Chargebacks:</strong> Any losses incurred due to fraudulent activities or chargebacks.</p>
        <p><strong>Bonuses:</strong> The value of bonuses provided to players.</p>
        <p><strong>Processing Costs:</strong> Costs associated with payment processing and other related services.</p>
        <p className="mb-0"><strong>Other Incentives:</strong> Any additional incentives or costs associated with retaining or attracting referred players.</p>
      </>
    ),
  },
  {
    question: "How can I track my earnings?",
    answer:
      "Affiliates can log into their accounts to check their stats at any time, 24/7, 365 days a year. Additionally, the support team is available by phone for any inquiries. Please note that it might take until the next day for a new sign-up to show in your account.",
  },
  {
    question: "Do negative balances carry over?",
    answer:
      "Yes, negative balances will carry over. Since the main merchants are sportsbooks, clearing negatives at the end of each month is not feasible. However, the nature of sports bettors offers opportunities to offset potential losses due to their higher average value.",
  },
  {
    question: "How long do cookies last?",
    answer:
      "Cookies stay active for a duration of 30 days. This means that if a player you've referred visits our brand's websites, leaves, and then comes back within that 30-day window, they'll still be associated with your Affiliate Account.",
  },
];

export default function Frequentlyaskedquestions() {
  return (
    <div>
      <InternalHeader
        title="FAQs"
        description="Find answers to your most frequently asked questions."
      />
      <main className="faq-page">
        <Container className="py-5">
          <Row className="justify-content-center text-center py-lg-5">
            <Col lg={9}>
              <span className="text-warning fw-bold text-uppercase small">
                Affiliate Program
              </span>

              <h1 className="display-4 fw-bold mt-2 mb-3">
                Frequently Asked Questions
              </h1>

              <p className="lead text-body-secondary mb-0">
                Find quick answers about commissions, payments, tracking,
                support, and how to get started with Affcorner.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={10}>
              <Accordion defaultActiveKey="0" className="faq-accordion">
                {faqs.map((faq, index) => (
                  <Accordion.Item
                    eventKey={String(index)}
                    key={faq.question}
                    className="mb-3 border rounded-4 overflow-hidden shadow-sm"
                  >
                    <Accordion.Header>
                      <span className="d-flex align-items-center gap-3 fw-bold">
                        <FaQuestionCircle className="text-warning flex-shrink-0" />
                        {faq.question}
                      </span>
                    </Accordion.Header>

                    <Accordion.Body className="text-body-secondary">
                      {typeof faq.answer === "string" ? (
                        <p className="mb-0">{faq.answer}</p>
                      ) : (
                        faq.answer
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
