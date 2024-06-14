import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";
import React from "react";
import { CategoryNav } from "../Components/CategoryNav";

const tanks = [
  {
    id: 1,
    name: "Aqua Lung Pro HD",
    manufacturer: "Aqua Lung",
    model: "Pro HD",
    type: "Tank",
    features: "Aluminum, 80 cu ft, standard valve",
    description:
      "Durable aluminum tank with standard valve, perfect for recreational diving.",
    image: "public/images/tanks/image_Aqua Lung Pro HD.jpg",
  },
  {
    id: 2,
    name: "Catalina S80",
    manufacturer: "Catalina",
    model: "S80",
    type: "Tank",
    features: "Aluminum, 80 cu ft, lightweight design",
    description:
      "Lightweight and robust tank designed for comfort and ease of use.",
    image: "public/images/tanks/image_Catalina S80.jpg",
  },
  {
    id: 3,
    name: "Faber HP100",
    manufacturer: "Faber",
    model: "HP100",
    type: "Tank",
    features: "Steel, 100 cu ft, high-pressure",
    description:
      "High-pressure steel tank with a large capacity for extended dive times.",
    image: "public/images/tanks/image_Faber HP100.jpg",
  },
  {
    id: 4,
    name: "Luxfer 40",
    manufacturer: "Luxfer",
    model: "40",
    type: "Tank",
    features: "Aluminum, 40 cu ft, pony bottle",
    description:
      "Compact aluminum pony bottle, ideal for redundancy and safety.",
    image: "public/images/tanks/image_Luxfer 40.jpg",
  },
  {
    id: 5,
    name: "OMS 112",
    manufacturer: "OMS",
    model: "112",
    type: "Tank",
    features: "Steel, 112 cu ft, nitrox compatible",
    description:
      "Nitrox compatible steel tank with large capacity and excellent buoyancy characteristics.",
    image: "public/images/tanks/image_OMS 112.jpg",
  },
];

export const Tanks = () => {
  return (
    <Container fluid>
      <CategoryNav />
      <h2>Dive Tanks</h2>
      <Row>
        {tanks.map((tank) => (
          <Col key={tank.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={tank.image}
                className="category-image"
              />
              <Card.Body>
                <Card.Title>{tank.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {tank.manufacturer}
                  <br />
                  <strong>Model:</strong> {tank.model}
                  <br />
                  <strong>Type:</strong> {tank.type}
                  <br />
                  <strong>Features:</strong> {tank.features}
                  <br />
                  <strong>Description:</strong> {tank.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
