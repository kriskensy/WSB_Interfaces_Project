import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";
import React from "react";
import { CategoryNav } from "../Components/CategoryNav";

const jackets = [
  {
    id: 1,
    name: "Scubapro Hydros Pro",
    manufacturer: "Scubapro",
    model: "Hydros Pro",
    type: "BCD",
    features: "Modular design, durable, high buoyancy",
    description: "Premium buoyancy control device with innovative design",
    image: "public/images/jackets/image_Scubapro Hydros Pro.jpg",
  },
  {
    id: 2,
    name: "Aqualung Axiom i3",
    manufacturer: "Aqualung",
    model: "Axiom i3",
    type: "BCD",
    features: "i3 Control System, comfortable fit, integrated weights",
    description:
      "Advanced BCD with intuitive control system and integrated weights",
    image: "public/images/jackets/image_Aqualung Axiom i3.jpg",
  },
  {
    id: 3,
    name: "Cressi Start Pro 2.0",
    manufacturer: "Cressi",
    model: "Start Pro 2.0",
    type: "BCD",
    features: "Durable, multiple adjustment straps, high lift capacity",
    description: "Reliable and robust BCD suitable for rental and training",
    image: "public/images/jackets/image_Cressi Start Pro 2.0.jpg",
  },
  {
    id: 4,
    name: "Mares Dragon SLS",
    manufacturer: "Mares",
    model: "Dragon SLS",
    type: "BCD",
    features: "SLS Weight System, ergonomic design, high buoyancy",
    description: "Comfortable and secure BCD with advanced weight system",
    image: "public/images/jackets/image_Mares Dragon SLS.jpg",
  },
  {
    id: 5,
    name: "Oceanic Biolite",
    manufacturer: "Oceanic",
    model: "Biolite",
    type: "BCD",
    features: "Lightweight, integrated weights, streamlined design",
    description:
      "Travel-friendly BCD with compact and lightweight construction",
    image: "public/images/jackets/image_Oceanic Biolite.jpg",
  },
];

export const Jackets = () => {
  return (
    <Container fluid>
      <CategoryNav />
      <h2>Dive Jackets</h2>
      <Row>
        {jackets.map((jacket) => (
          <Col key={jacket.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={jacket.image}
                className="category-image"
              />
              <Card.Body>
                <Card.Title>{jacket.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {jacket.manufacturer}
                  <br />
                  <strong>Model:</strong> {jacket.model}
                  <br />
                  <strong>Type:</strong> {jacket.type}
                  <br />
                  <strong>Features:</strong> {jacket.features}
                  <br />
                  <strong>Description:</strong> {jacket.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
