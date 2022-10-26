import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import("./Header.css");

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/courses"} className="links">
                Courses
              </Link>
              <Link to={"/blogs"} className="links">
                Blogs
              </Link>
              <Link to={"/faq"} className="links">
                FAQ
              </Link>
            </Nav>
            <Nav>
              <Link to={"/login"} className="links">
                Login
              </Link>
              <Link to={"/signup"} className="links">
                Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
