import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";

const masks = [
  {
    id: 1,
    name: "Aqua Lung Impression",
    manufacturer: "Aqua Lung",
    model: "Impression",
    type: "Mask",
    features: "Low volume, wide field of view, comfortable fit",
    description:
      "High-quality mask with a wide field of view and low volume design.",
    image: "public/images/image_mask.png",
  },
  {
    id: 2,
    name: "Cressi Big Eyes Evolution",
    manufacturer: "Cressi",
    model: "Big Eyes Evolution",
    type: "Mask",
    features: "Inclined lenses, increased visibility, comfortable fit",
    description:
      "Innovative mask with inclined lenses for improved downward visibility.",
    image: "public/images/image_mask.png",
  },
  {
    id: 3,
    name: "Mares X-Vision Ultra",
    manufacturer: "Mares",
    model: "X-Vision Ultra",
    type: "Mask",
    features: "Wide field of view, mirrored lenses, silicone skirt",
    description:
      "Advanced mask with mirrored lenses for increased contrast and visibility.",
    image: "public/images/image_mask.png",
  },
  {
    id: 4,
    name: "Scubapro Synergy Twin",
    manufacturer: "Scubapro",
    model: "Synergy Twin",
    type: "Mask",
    features: "Trufit technology, dual lenses, comfortable fit",
    description:
      "Comfortable mask with dual lenses and Trufit technology for a secure fit.",
    image: "public/images/image_mask.png",
  },
  {
    id: 5,
    name: "TUSA Freedom HD",
    manufacturer: "TUSA",
    model: "Freedom HD",
    type: "Mask",
    features: "180-degree field of view, comfortable fit, high-quality lenses",
    description:
      "Premium mask with a wide field of view and high-quality lenses.",
    image: "public/images/image_mask.png",
  },
];

export const Masks = () => {
  return (
    <Container fluid>
      <h2>Dive Masks</h2>
      <Row>
        {masks.map((mask) => (
          <Col key={mask.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={mask.image}
                className="category-image"
              />
              <Card.Body>
                <Card.Title>{mask.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {mask.manufacturer}
                  <br />
                  <strong>Model:</strong> {mask.model}
                  <br />
                  <strong>Type:</strong> {mask.type}
                  <br />
                  <strong>Features:</strong> {mask.features}
                  <br />
                  <strong>Description:</strong> {mask.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
