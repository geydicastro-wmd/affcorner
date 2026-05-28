import { createElement, useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { FaHome, FaInfoCircle, FaQuestionCircle } from "react-icons/fa";
import { MdHandshake, MdLocalOffer, MdMail } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import useCmsPage from "../../hooks/useCmsPage";

export default function Header() {
  const { getBlocks } = useCmsPage("Header");

  const p = getBlocks?.("p") || [];
  const imgs = getBlocks?.("img") || [];

  const navItems = [
  { label: p[0]?.content || "Home", to: "/", icon: FaHome },
  { label: p[1]?.content || "About", to: "/about", icon: FaInfoCircle },
  { label: p[2]?.content || "Brands", to: "/affiliates-brands", icon: MdLocalOffer },
  { label: p[3]?.content || "Why Join", to: "/join", icon: MdHandshake },
  { label: p[4]?.content || "Commissions", to: "/commissions", icon: RiMoneyDollarCircleFill },
  { label: p[5]?.content || "Contact", to: "/contact", icon: MdMail },
  { label: p[6]?.content || "FAQs", to: "/frequentlyaskedquestions", icon: FaQuestionCircle },
];

  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        variant="dark"
        className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
      >
        <Container fluid className="mx-0 mx-lg-5">
          <Navbar.Toggle
            aria-controls="main-menu"
            className="navbar-mobile-toggle d-lg-none"
            onClick={() => setShowMenu(true)}
          />

          <Navbar.Brand as={Link} to="/" className="navbar-logo">
            <img src={imgs[0]?.src || Logo} width="210" alt={imgs[0]?.alt || "AffCorner logo"} />
          </Navbar.Brand>

          <Nav className="navbar-menu d-none d-lg-flex mx-auto">
            {navItems.map(({ label, to }) => (
              <Nav.Link key={to} as={Link} to={to}>
                {label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="navbar-actions d-none d-lg-flex gap-2">
            <Link to="/register-now" className="btn btn-outline-white text-uppercase">
             <span>{p[7]?.content || "REGISTER NOW"}</span> 
            </Link>
            <Link to="/login" className="btn btn-outline-white text-uppercase">
              <span>{p[8]?.content || "LOGIN"}</span>
            </Link>
          </div>

          <div className="navbar-mobile-actions d-flex d-lg-none align-items-center gap-2 ms-auto">
            <Link
              to="/register-now"
              className="btn btn-outline-white navbar-mobile-cta text-uppercase"
            >
              {p[7]?.content || "REGISTER"}
            </Link>
            <Link
              to="/login"
              className="btn btn-outline-white navbar-mobile-cta text-uppercase"
            > <span>{p[8]?.content || "LOGIN"}</span>
            </Link>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        id="main-menu"
        show={showMenu}
        onHide={closeMenu}
        placement="start"
        className="offcanvas-custom text-bg-dark"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <img src={imgs[1]?.src || Logo} width="140" alt={imgs[1]?.alt || "AffCorner logo"} />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="navbar-menu flex-column">
            {navItems.map(({ label, to, icon: Icon }) => (
              <Nav.Link key={to} as={Link} to={to} onClick={closeMenu}>
                {createElement(Icon, {
                  "aria-hidden": true,
                  className: "offcanvas-custom__icon",
                })}
                {label}
              </Nav.Link>
            ))}
          </Nav>

          {/* <div className="offcanvas-custom__actions">
            <Link
              to="/register-now"
              className="btn btn-outline-white text-uppercase"
              onClick={closeMenu}
            >
              <span>{p[7]?.content || "Register"}</span>
            </Link>
            <Link
              to="/login"
              className="btn btn-outline-white text-uppercase"
              onClick={closeMenu}
            >
              <span>{p[8]?.content || "Login"}</span>
            </Link>
          </div> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
