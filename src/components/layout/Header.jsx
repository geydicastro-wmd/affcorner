import { useEffect, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Brands", to: "/brands" },
  { label: "Join", to: "/join" },
  { label: "Commissions", to: "/commissions" },
  { label: "Contact", to: "/contact" },
  { label: "FAQs", to: "/frequentlyaskedquestions" },
];

export default function Header() {
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
            <img src={Logo} width="210" alt="Affcorner logo" />
          </Navbar.Brand>

          <Nav className="navbar-menu d-none d-lg-flex mx-auto">
            {navItems.map(({ label, to }) => (
              <Nav.Link key={to} as={Link} to={to}>
                {label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="navbar-actions d-none d-lg-flex gap-2">
            <Link to="/register" className="btn btn-outline-white">
              REGISTER NOW
            </Link>
            <Link to="/login" className="btn btn-outline-white">
              LOGIN
            </Link>
          </div>

          <div className="navbar-mobile-actions d-flex d-lg-none align-items-center gap-2 ms-auto">
            <Link to="/register" className="btn btn-outline-white navbar-mobile-cta">
              REGISTER
            </Link>
            <Link to="/login" className="btn btn-outline-white navbar-mobile-cta">
              LOGIN
            </Link>
          </div>
        </Container>
      </Navbar>

      <Offcanvas
        id="main-menu"
        show={showMenu}
        onHide={closeMenu}
        placement="end"
        className="offcanvas-custom text-bg-dark"
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>
            <img src={Logo} width="140" alt="Affcorner logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="navbar-menu flex-column">
            {navItems.map(({ label, to }) => (
              <Nav.Link key={to} as={Link} to={to} onClick={closeMenu}>
                {label}
              </Nav.Link>
            ))}
          </Nav>

          <div className="d-grid gap-2 mt-4">
            <Link to="/register" className="btn btn-outline-white" onClick={closeMenu}>
              REGISTER NOW
            </Link>
            <Link to="/login" className="btn btn-outline-white" onClick={closeMenu}>
              LOGIN
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
