import "bootstrap/dist/css/bootstrap.min.css";
import "../Header/Header.scss";
import React from "react";
import { useState } from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { ThemeComponent } from "./DarkMode.js";

export const Header = () => {
  const [navbar, setNavbar] = useState("false");
  // const [mode,setMode]=useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
 
  return (
    <React.Fragment>
      <div
        className={navbar ? "sticky-wrapper is-sticky" : "sticky-wrapper"}
        style={{ height: "93px" }}
      >
        
        {["sm"].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className={navbar ? "navbarClass" : ""}
          >
            <Container className="HeaderMediaQuery">
              <Navbar.Brand  href="/" className="navTitleHeading">
                React
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-start flex-grow-1 pe-3">
                  <Nav.Link  href="/" className="navFirstLi">
                    HOME
                  </Nav.Link>
                  <Nav.Link  href="/about" className="navLi">
                    ABOUT
                  </Nav.Link>
                  <Nav.Link href="/experiences" className="navLi">
                  EXPERIENCES
                  </Nav.Link>
                  <Nav.Link href="/services" className="navLi">
                    SERVICES
                  </Nav.Link>
                  <Nav.Link  href="/projects" className="navLi">
                    PROJECTS
                  </Nav.Link>
                  <Nav.Link href="/map" className="navLi">
                    MAP
                  </Nav.Link>
                  <Nav.Link href="contact" className="navLi">
                    CONTACT
                  </Nav.Link>
                </Nav>
                <div className="iconsClassDiv">
                  <FontAwesomeIcon icon={faPhone} className="avatar-icon" />
                </div>
                <Form className="d-flex">
                  <Button variant="outline-success" className="nav-Btn">
                    120-240-9600
                  </Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        ))}
      </div>
    </React.Fragment>
  );
};
