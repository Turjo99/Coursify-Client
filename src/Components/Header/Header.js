import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import { MDBSwitch } from "mdb-react-ui-kit";
import("./Header.css");

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {
        console.log("Sign Out successfully");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
        <Container>
          <Link className="logo fs-4 mx-auto mx-md-start" to={"/"}>
            Coursify
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to={"/courses"} className="links">
                Courses
              </Link>
              {/* <Link to={"/checkout"} className="links">
                Checkout
              </Link> */}
              <Link to={"/blogs"} className="links">
                Blogs
              </Link>
              <Link to={"/faq"} className="links">
                FAQ
              </Link>
            </Nav>
            <Nav>
              {user?.uid ? (
                <></>
              ) : (
                <div>
                  {" "}
                  <Link to={"/login"} className="links">
                    Login
                  </Link>
                  <Link to={"/signup"} className="links">
                    Register
                  </Link>
                </div>
              )}

              {user?.uid ? (
                <button className="btn btn-secondary" onClick={handleLogOut}>
                  LogOut
                </button>
              ) : (
                <></>
              )}

              {user?.uid ? (
                <div className="my-auto mx-2 fs-5">{user.displayName}</div>
              ) : (
                <></>
              )}
              {user?.uid ? (
                <div className="my-auto mx-2">
                  <img
                    src={user.photoURL}
                    alt="userimg"
                    title={user.displayName}
                    className="userImg"
                  />
                </div>
              ) : (
                <></>
              )}
              <div className="my-auto">
                <MDBSwitch
                  className=""
                  defaultChecked
                  id="flexSwitchCheckChecked"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
