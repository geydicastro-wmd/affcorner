import { useState } from "react";
import { Helmet } from "react-helmet-async";
import InternalHeader from "../components/common/InternalHeader";
import { Accordion, Button, Container, Form, Row, Col } from "react-bootstrap";
import { FaQuestionCircle, FaSearch } from "react-icons/fa";
import useCmsPage from "../hooks/useCmsPage";

const faqCategoryIds = [
  "commissions",
  "commissions",
  "joining",
  "support",
  "marketing",
  "joining",
  "support",
  "support",
  "support",
  "payments",
  "payments",
  "joining",
  "joining",
  "account-rules",
  "payments",
  "commissions",
  "tracking",
  "account-rules",
  "tracking",
];

const cleanText = (value) =>
  typeof value === "string"
    ? value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").toLowerCase()
    : "";

export default function Frequentlyaskedquestions() {
  const { page, loading, translation, getBlocks, renderHtml } =
    useCmsPage("FrequentlyAskedQuestions");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const h1 = getBlocks("h1");
  const h6 = getBlocks("h6");
  const h5 = getBlocks("h5");
  const p = getBlocks("p");
  const divs = getBlocks("div");
  const title = page?.title || translation?.title || "FAQs";

  const categories = [
  { id: "all", label: h6[1]?.content || "All Topics" },
  { id: "commissions", label: h6[2]?.content ||  "Commissions" },
  { id: "payments", label: h6[3]?.content ||  "Payments" },
  { id: "joining", label: h6[4]?.content || "Joining" },
  { id: "account-rules", label: h6[5]?.content || "Account Rules" },
  { id: "tracking", label: h6[6]?.content || "Tracking" },
  { id: "support", label: h6[7]?.content || "Support" },
  { id: "marketing", label: h6[8]?.content || "Marketing Tools" },
];

  const faqs = [
  {
    question: h5[0]?.content ||
      "What is the commission structure at Affcorner.com’s Affiliate Program?",
    answer: p[0]?.content ||
      "We encourage you to effortlessly boost your earnings with lucrative commissions, offering between 20% and up to 30% of net revenue.",
  },
  {
    question: h5[1]?.content ||
      "Do you offer a CPA (Cost Per Acquisition) structure?",
    answer: p[1]?.content ||
      "Yes, we offer a CPA structure tailored for affiliates who are interested in customized commission plans. For more information about our CPA options, please contact our team. We aim to establish a partnership that meets your specific objectives.",
  },
  {
    question: h5[2]?.content ||
      "Is the program open to affiliates accepting US Players?",
    answer: p[2]?.content ||
      "We are delighted to welcome affiliates aiming to reach US players. Broaden your horizons and engage a diverse audience through our affiliate program.",
  },
  {
    question: h5[3]?.content ||
      "What support does Affcorner.com’s Affiliate Program provide to affiliates?",
    answer: p[3]?.content ||
      "We recognize how crucial support is in your affiliate journey. Our dedicated team is devoted to your success, providing timely help, expert advice, and continuous support to ensure you excel in the competitive world of affiliate marketing.",
  },
  {
    question: h5[4]?.content ||
      "What marketing tools are available?",
    answer: p[4]?.content ||
      "We provide a comprehensive set of marketing tools to empower your campaigns. From eye-catching banners to engaging content, our marketing tools are designed to enhance your promotional efforts and maximize your conversion rates.",
  },
  {
    question: h5[5]?.content ||
      "How do I join Affcorner.com’s Affiliate Program?",
    answer: p[5]?.content ||
      "Simply sign up on our website, discover our high-performing brand, and begin enhancing your campaigns to maximize the potential of your affiliate marketing experience.",
  },
  {
    question: h5[6]?.content ||
      "Where are your headquarters located?",
    answer: p[6]?.content ||
      "We’re located in San Jose, Costa Rica.",
  },
  {
    question: h5[7]?.content ||
      "How long has Affcorner.com’s Affiliate Program been operating?",
    answer: p[7]?.content ||
      "We’ve been in business since 2006, led by a highly experienced and financially stable bookmaking team in the industry.",
  },
  {
    question: h5[8]?.content ||
      "What are your business hours?",
    answer: p[8]?.content ||
      "Our business hours are from 9:00 a.m. to 5:00 p.m. EST, Monday to Friday.",
  },
  {
    question: h5[9]?.content ||
      "What payment methods are available for affiliates?",
    answer: p[9]?.content ||
      "We offer payment methods such as Person to Person Money Transfers and BTC for our affiliates.",
  },
  {
    question: h5[10]?.content ||
      "What is the minimum payment amount?",
    answer: p[10]?.content ||
      "The minimum payout amount is $100 USD.",
  },
  {
    question: h5[11]?.content ||
      "Do I need a website to participate in the program?",
    answer: p[11]?.content ||
      "Although having a website can enhance your affiliate potential, we accept affiliates through multiple channels. Even if you use offline methods or other alternative channels to promote our high-converting brands, you can still join our affiliate program. We appreciate diverse promotional strategies and are committed to offering opportunities to affiliates with different marketing techniques.",
  },
  {
    question: h5[12]?.content ||
      "How much does it cost to join your affiliate program?",
    answer: p[12]?.content ||
      "It is completely free, and there are no charges for our marketing tools.",
  },
  {
    question: h5[13]?.content ||
      "Can I use my own affiliate account to play?",
    answer: p[13]?.content ||
      "Affiliates are not allowed to bet using their affiliate account. In the event that an Affiliate wishes to play at Affcorner.com, said Affiliate must set up a separate player account, but will not earn commissions from his/her own player account.",
  },
  {
    question: h5[14]?.content || "How often do I receive payments?",
    answer:
      "We process payments from the 8th to the 10th day of every month. Payments will be sent according to the selected payment method, and statements will be sent out during the same timeframe. It's crucial to note that payments are scheduled between the 8th and 10th of each month to ensure accurate grading of all sporting events, thereby reducing discrepancies in your commission payout.",
  },
  {
    question: h5[15]?.content || "What is a Net Revenue Share Model?",
    answer: divs[0]?.content || (
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
    question: h5[16]?.content || "How can I track my earnings?",
    answer: p[16]?.content ||
      "Affiliates can log into their accounts to check their stats at any time, 24/7, 365 days a year. Additionally, the support team is available by phone for any inquiries. Please note that it might take until the next day for a new sign-up to show in your account.",
  },
  {
    question: h5[17]?.content || "Do negative balances carry over?",
    answer: p[17]?.content ||
      "Yes, negative balances will carry over. Since the main merchants are sportsbooks, clearing negatives at the end of each month is not feasible. However, the nature of sports bettors offers opportunities to offset potential losses due to their higher average value.",
  },
  {
    question: h5[18]?.content || "How long do cookies last?",
    answer: p[18]?.content ||
      "Cookies stay active for a duration of 30 days. This means that if a player you've referred visits our brand's websites, leaves, and then comes back within that 30-day window, they'll still be associated with your Affiliate Account.",
  },
];

  const visibleFaqs = (() => {
    const query = searchTerm.trim().toLowerCase();

    return faqs
      .map((faq, index) => {
        const category = faqCategoryIds[index] || "all";
        const searchableText = `${cleanText(faq.question)} ${cleanText(faq.answer)}`;
        const categoryMatch =
          activeCategory === "all" || category === activeCategory;
        const searchMatch = !query || searchableText.includes(query);

        return { ...faq, category, index, categoryMatch, searchMatch };
      })
      .filter((faq) => faq.categoryMatch && faq.searchMatch);
  })();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchInput);
  };

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchInput("");
    setSearchTerm("");
  };

  return (
    <div>
      <InternalHeader
        title={title || "FAQs"}
      />

      {translation && (
        <Helmet>
          <title>{translation.meta_title || page?.title || title}</title>
        </Helmet>
      )}

      <main className="faq-page">
        <Container className="py-5">
          {loading && <span className="visually-hidden">Loading...</span>}
          <Row className="justify-content-center text-center py-lg-5">
            <Col lg={9}>
              <span className="text-warning fw-bold text-uppercase small">
                {h6?.[0]?.content ? (
                  <span dangerouslySetInnerHTML={renderHtml(h6[0].content)} />
                ) : (
                  "Affiliate Program"
                )}
              </span>

              <h1 className="display-4 fw-bold mt-2 mb-3">
                {h1?.[0]?.content ? (
                  <span dangerouslySetInnerHTML={renderHtml(h1[0].content)} />
                ) : (
                  "Frequently Asked Questions"
                )}
              </h1>
            </Col>
          </Row>

          <Row className="g-4 align-items-start">
            <Col lg={3}>
              <aside className="faq-sidebar">
                <Form className="faq-search" onSubmit={handleSearch}>
                  <Form.Control
                    type="search"
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    placeholder="Search FAQs"
                    aria-label="Search FAQs"
                  />
                  <Button type="submit" className="faq-search-button">
                    <FaSearch aria-hidden="true" />
                    <span className="visually-hidden">Search</span>
                  </Button>
                </Form>

                <div className="faq-category-list">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      type="button"
                      variant="link"
                      className={`faq-category-button ${
                        activeCategory === category.id ? "is-active" : ""
                      }`}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.label}
                    </Button>
                  ))}
                </div>
              </aside>
            </Col>

            <Col lg={9}>
              <Accordion defaultActiveKey="0" className="faq-accordion">
                {visibleFaqs.map((faq) => (
                  <Accordion.Item
                    eventKey={String(faq.index)}
                    key={faq.index}
                    className="mb-3 border rounded-4 overflow-hidden shadow-sm"
                  >
                    <Accordion.Header>
                      <span className="d-flex align-items-center gap-3 fw-bold">
                        <FaQuestionCircle className="text-warning flex-shrink-0" />
                        <span dangerouslySetInnerHTML={renderHtml(faq.question)} />
                      </span>
                    </Accordion.Header>

                    <Accordion.Body className="text-body-secondary">
                      {typeof faq.answer === "string" ? (
                        <p
                          className="mb-0"
                          dangerouslySetInnerHTML={renderHtml(faq.answer)}
                        />
                      ) : (
                        faq.answer
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>

              {!visibleFaqs.length && (
                <p className="text-center text-body-secondary my-5"
                dangerouslySetInnerHTML={renderHtml(divs[1]?.content || "No related questions found.")}
                />         
              )}
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
