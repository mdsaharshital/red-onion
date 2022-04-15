import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} height="35px" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link eventKey={2} as={Link} className="me-3" to="/cart">
                <FiShoppingCart />
              </Nav.Link>
              <Nav.Link as={Link} className="me-3" to="/register">
                Login
              </Nav.Link>
              <Nav.Link
                className="btn btn-danger text-white rounded-pill px-3 mx-3"
                eventKey={2}
                as={Link}
                to="/register"
              >
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
