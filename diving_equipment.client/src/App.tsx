import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "./Components/useAuth";

function App() {
  const { isLoggedIn } = useAuth();
  console.log("Is logged in: ", isLoggedIn);

  return (
    <Container fluid>
      <Row className="mt-3">
        <Col xs={12} md={3}>
          <Accordion defaultActiveKey="0" className="mb-3 ms-2 me-2">
            <Accordion.Item eventKey="0" className="accordion-item">
              <Accordion.Header className="accordion-header">
                Find equipment
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <Nav.Link as={Link} to="/findEquipment">
                  <Button variant="primary" className="w-100 mb-2">
                    Find equipment
                  </Button>
                </Nav.Link>
                <p>Here you can search for your diving equipment.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className="accordion-item">
              <Accordion.Header className="accordion-header">
                Add equipment
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <Nav.Link as={Link} to="/newEquipment">
                  <Button variant="primary" className="w-100 mb-2">
                    Add equipment
                  </Button>
                </Nav.Link>
                <p>
                  Here you can add new equipment to your diving equipment list.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className="accordion-item">
              <Accordion.Header className="accordion-header">
                Next revisions
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <Nav.Link as={Link} to="/nextRevisions">
                  <Button variant="primary" className="w-100 mb-2">
                    Next revisions
                  </Button>
                </Nav.Link>
                <p>Here you will see when your equipment should be checked.</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="accordion-item">
              <Accordion.Header className="accordion-header">
                Deactivated equipment
              </Accordion.Header>
              <Accordion.Body className="accordion-body">
                <Nav.Link as={Link} to="/deactivatedEquipment">
                  <Button variant="primary" className="w-100 mb-2">
                    Deactivated equipment
                  </Button>
                </Nav.Link>
                <p>
                  Here you will check which elements of your equipment are on
                  the list of inoperable, for example, due to a missing
                  revision.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        <Col xs={12} md={6}>
          <Carousel className="mb-4">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel_image_1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Does your diving equipment have up-to-date revisions?</h3>
                <p>
                  Whether a regulator or a BCD, your diving equipment is your
                  life insurance
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel_image_2.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>All your diving equipment in one place</h3>
                <p>
                  Add your new equipment, search for it, save revision dates and
                  much more
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/carousel_image_3.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Enjoy worry-free diving</h3>
                <p>Explore stunning underwater landscapes.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        {/* {isLoggedIn && ( */}
        <Col xs={12} md={9}>
          <Row className="mb-3 ms-2 me-2">
            <Col>
              <Link to="/regulators" className="d-block">
                <Card
                  border="primary"
                  style={{ backgroundColor: "#d2d2d2", width: "10rem" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/image_regulator.png"
                    className="regulator img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Regulators</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>

            <Col>
              <Link to="/suits" className="d-block">
                <Card
                  border="primary"
                  style={{ backgroundColor: "#d2d2d2", width: "10rem" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/image_suit.png"
                    className="suit img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Suits</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/jackets" className="d-block">
                <Card
                  border="primary"
                  style={{ backgroundColor: "#d2d2d2", width: "10rem" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/image_jacket.png"
                    className="jacket img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Jackets</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/computers" className="d-block">
                <Card
                  border="primary"
                  style={{ backgroundColor: "#d2d2d2", width: "10rem" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/image_computer.png"
                    className="computer img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Computers</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/masks" className="d-block">
                <Card
                  border="primary"
                  style={{ backgroundColor: "#d2d2d2", width: "10rem" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/image_mask.png"
                    className="mask img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Masks</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/fins" className="d-block">
                <Card
                  border="primary"
                  style={{ backgroundColor: "#d2d2d2", width: "10rem" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/image_fin.png"
                    className="fin img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Fins</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/tanks" className="d-block">
                <Card
                  border="primary"
                  style={{ backgroundColor: "#d2d2d2", width: "10rem" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/image_tank.png"
                    className="tank img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Tanks</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col>
              <Link to="/accessories" className="d-block">
                <Card
                  border="primary"
                  style={{ backgroundColor: "#d2d2d2", width: "10rem" }}
                >
                  <Card.Img
                    variant="top"
                    src="/images/image_accessory.png"
                    className="accessory img-fluid"
                  />
                  <Card.Body>
                    <Card.Title>Accessories</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Col>
        {/* )} */}
      </Row>
    </Container>
  );
}

export default App;
