
import React, { useState, useEffect, useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
import { CartContext } from "../../context/CartContext";

const Header = () => {
  const [nav, setNav] = useState(false);
  const { cart } = useContext(CartContext);

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const user = JSON.parse(localStorage.getItem("user"));

  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    setNav(scrollValue > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);

    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={nav ? "sticky" : ""}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto align-items-center">

              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#menu">Our Menu</Nav.Link>
              <Nav.Link href="#shop">Shop</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>

              {isLoggedIn && (
                <Nav.Link as={Link} to="/orders">
                  📦 My Orders
                </Nav.Link>
              )}

              <Nav.Link as={Link} to="/wishlist">
                ❤️ Wishlist
              </Nav.Link>

              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{cart.length}</em>
                </div>
              </Nav.Link>

              {isLoggedIn ? (
                <>
                  <Nav.Link as={Link} to="/profile">
                    👤 {user?.name}
                  </Nav.Link>

                  <button
                    className="btn btn-danger btn-sm ms-3"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>

                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

