import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Footer from "./Layout/Footer";

function App() {
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col xs={12} md={3}>
          <Row>
            <Card
              border="primary"
              style={{ width: "18rem" }}
              className="mb-3 ms-2 me-2"
            >
              <Card.Header>
                <Nav.Link>
                  <Link to="/findEquipment" className="d-block">
                    <Button variant="primary">Find equipment</Button>
                  </Link>
                </Nav.Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Here you can search for your diving equipment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card
              border="primary"
              style={{ width: "18rem" }}
              className="mb-3 ms-2 me-2"
            >
              <Card.Header>
                <Nav.Link>
                  <Link to="/newEquipment" className="d-block">
                    <Button variant="primary">Add equipment</Button>
                  </Link>
                </Nav.Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Here you can add new equipment to your diving equipment list.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card
              border="primary"
              style={{ width: "18rem" }}
              className="mb-3 ms-2 me-2"
            >
              <Card.Header>
                <Nav.Link>
                  <Link to="/nextRevisions" className="d-block">
                    <Button variant="primary">Next revisions</Button>
                  </Link>
                </Nav.Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Here you will see when your equipment should be checked.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Card
              border="primary"
              style={{ width: "18rem" }}
              className="mb-3 ms-2 me-2"
            >
              <Card.Header>
                <Nav.Link>
                  <Link to="/deactivatedEquipment" className="d-block">
                    <Button variant="primary">Deactivated equipment</Button>
                  </Link>
                </Nav.Link>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Here you will check which elements of your equipment are on
                  the list of inoperable, for example, due to a missing
                  revision.
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Col>

        <Col xs={12} md={9}>
          <Row>
            <Col xs={12} md={10}>
              <Image src="images/image_logo.png" className="img-fluid" />
            </Col>
          </Row>
          <Row className="mb-3 ms-2 me-2">
            <Col>
              <Link to="/regulators" className="d-block">
                <Card border="primary" style={{ width: "10rem" }}>
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
                <Card border="primary" style={{ width: "10rem" }}>
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
                <Card border="primary" style={{ width: "10rem" }}>
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
                <Card border="primary" style={{ width: "10rem" }}>
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
          </Row>

          <Row className="mb-3 ms-2 me-2">
            <Col>
              <Link to="/masks" className="d-block">
                <Card border="primary" style={{ width: "10rem" }}>
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
                <Card border="primary" style={{ width: "10rem" }}>
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
                <Card border="primary" style={{ width: "10rem" }}>
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
                <Card border="primary" style={{ width: "10rem" }}>
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
      </Row>
      <Footer />
    </Container>
  );
}
export default App;
