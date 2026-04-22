import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap'
import { FaHome, FaInfoCircle, FaStar, FaQuestion } from 'react-icons/fa'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { BsChatSquareDotsFill } from 'react-icons/bs'
import { MdJoinFull } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function Header({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        variant="dark"
        className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
      >
        <Container className="navbar-layout">

          {/* Logo izquierda */}
          <Navbar.Brand as={Link} to="/" className="navbar-logo">
            <img src={Logo} width="210" alt="Affcorner logo" />
          </Navbar.Brand>

          {/* Toggle mobile */}
          <Navbar.Toggle onClick={() => setShow(true)} />

          {/* Menú desktop centrado */}
          <Nav className="navbar-center d-none d-lg-flex">
            <Nav.Link as={Link} to="/"> Home</Nav.Link>
            <Nav.Link as={Link} to="/about"> About</Nav.Link>
            <Nav.Link as={Link} to="/brands"> Brands</Nav.Link>
            <Nav.Link as={Link} to="/join">Join</Nav.Link>
            <Nav.Link as={Link} to="/commissions"> Commissions</Nav.Link>
            <Nav.Link as={Link} to="/contact"> Contact</Nav.Link>
            <Nav.Link as={Link} to="/frequentlyaskedquestions"> FAQs</Nav.Link>
          </Nav>

          {/* Auth desktop derecha */}
          <div className="auth-desktop d-none d-lg-flex g-3">
            <Link to="/login" className="btn btn-outline-light rounded-pill btn-lg">Login</Link>
            <Link to="/register" className="btn btn-warning rounded-pill btn-lg ms-3">Register</Link>
          </div>

          <button
            className="theme-toggle ms-3 d-none d-lg-block"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

        </Container>
      </Navbar>

      {/* OFFCANVAS MOBILE */}
      <Offcanvas show={show} onHide={() => setShow(false)} placement="end" className="offcanvas-custom text-bg-dark">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src={Logo} width="140" alt="Affcorner logo" />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/" onClick={() => setShow(false)}><FaHome /> Home</Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={() => setShow(false)}><FaInfoCircle /> About</Nav.Link>
            <Nav.Link as={Link} to="/brands" onClick={() => setShow(false)}><FaStar /> Brands</Nav.Link>
            <Nav.Link as={Link} to="/join" onClick={() => setShow(false)}><MdJoinFull /> Join</Nav.Link>
            <Nav.Link as={Link} to="/commissions" onClick={() => setShow(false)}><RiMoneyDollarCircleFill /> Commissions</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={() => setShow(false)}><BsChatSquareDotsFill /> Contact</Nav.Link>
            <Nav.Link as={Link} to="/frequentlyaskedquestions" onClick={() => setShow(false)}><FaQuestion /> FAQs</Nav.Link>

            <div className="mt-4">
              <Link to="/login" onClick={() => setShow(false)} className="btn btn-outline-light w-100 mb-2">Login</Link>
              <Link to="/register" onClick={() => setShow(false)} className="btn btn-warning w-100 text-dark">Register</Link>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}