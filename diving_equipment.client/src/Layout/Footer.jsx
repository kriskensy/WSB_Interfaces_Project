import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-2" style={{ width: "100%" }}>
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
            <h5>Social media</h5>
            <ul className="list-unstyled d-flex">
              <li className="mr-3">
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </li>
              <li className="mr-3">
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col className="text-center">
            <p>&copy; 2024 All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
