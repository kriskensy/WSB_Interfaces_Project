import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";

const fins = [
  {
    id: 1,
    name: "Scubapro Jet Fins",
    manufacturer: "Scubapro",
    model: "Jet Fins",
    size: "Medium",
    color: "Black",
    description: "Traditional heavy-duty rubber fins for strong propulsion",
    image: "public/images/image_fin.png",
  },
  {
    id: 2,
    name: "Cressi Frog Plus",
    manufacturer: "Cressi",
    model: "Frog Plus",
    size: "Large",
    color: "Yellow",
    description: "Versatile open-heel fins with comfortable foot pocket",
    image: "public/images/image_fin.png",
  },
  {
    id: 3,
    name: "Mares Avanti Quattro Plus",
    manufacturer: "Mares",
    model: "Avanti Quattro Plus",
    size: "Small",
    color: "Blue",
    description: "High-performance channel thrust fins for efficient kicking",
    image: "public/images/image_fin.png",
  },
  {
    id: 4,
    name: "Atomic Split Fins",
    manufacturer: "Atomic",
    model: "Split Fins",
    size: "Medium",
    color: "Red",
    description: "Innovative split fins design for reduced drag and effort",
    image: "public/images/image_fin.png",
  },
  {
    id: 5,
    name: "Aqua Lung Slingshot",
    manufacturer: "Aqua Lung",
    model: "Slingshot",
    size: "Large",
    color: "Green",
    description:
      "Adjustable open-heel fins with power bands for variable thrust",
    image: "public/images/image_fin.png",
  },
];

export const Fins = () => {
  return (
    <Container fluid>
      <h2>Dive Fins</h2>
      <Row>
        {fins.map((fin) => (
          <Col key={fin.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={fin.image}
                className="category-image"
              />
              <Card.Body>
                <Card.Title>{fin.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {fin.manufacturer}
                  <br />
                  <strong>Model:</strong> {fin.model}
                  <br />
                  <strong>Size:</strong> {fin.size}
                  <br />
                  <strong>Color:</strong> {fin.color}
                  <br />
                  <strong>Description:</strong> {fin.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
