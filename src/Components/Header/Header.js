import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import("./Header.css");

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logout().then(() =>
      console
        .log("Sign Out successfully")
        .catch((error) => console.error(error))
    );
  };
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
              <Link to={"/checkout"} className="links">
                Checkout
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
              <button onClick={handleLogOut}>LogOut</button>
              {user?.uid ? <div className="">{user.email}</div> : <></>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
