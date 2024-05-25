import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Navbar expand="lg" className="bg-dark-blue navbar-dark">
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <Image src="images/image_logo.png" className="logo" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <NavDropdown title="Profile" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/Certificates">
                    Certificates
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Logbook">
                    Logbook
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Statistics">
                    Statistics
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Buddys">
                    Buddys
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sign in" id="signInDropdown">
                  <Form className="px-4 py-3">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 mt-3"
                    >
                      Sign in
                    </Button>
                  </Form>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <main className="flex-grow-1">
        <Container fluid className="py-3">
          <Outlet />
        </Container>
      </main>

      <footer className="bg-dark-blue text-light-blue mt-auto py-2">
        <Container>
          <Row>
            <Col md={4}>
              <h5>About</h5>
              <p>Author: Krzysztof Kensy</p>
            </Col>
            <Col md={4}>
              <h5>Contact</h5>
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faEnvelope} /> Email:
                  kkensy@student.wsb-nlu.edu.pl
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Social Media</h5>
              <ul className="list-unstyled d-flex">
                <li className="me-3">
                  <a href="#" className="text-light-blue">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="text-light-blue">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-light-blue">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col className="text-center">
              <p>&copy; 2024 Dive Inventory. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Layout;
