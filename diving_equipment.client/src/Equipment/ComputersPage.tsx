import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";
import React from "react";
import { CategoryNav } from "../Components/CategoryNav";

const computers = [
  {
    id: 1,
    name: "Aqua Lung i770R",
    manufacturer: "Aqua Lung",
    model: "i770R",
    purchaseDate: "2023-05-12",
    description: "Advanced OLED color display dive computer",
    image: "public/images/computers/image_Aqua Lung i770R.jpg",
  },
  {
    id: 2,
    name: "Shearwater Teric",
    manufacturer: "Shearwater",
    model: "Teric",
    purchaseDate: "2022-11-05",
    description: "High-end dive computer with full-color AMOLED display",
    image: "public/images/computers/image_Shearwater Teric.jpg",
  },
  {
    id: 3,
    name: "Garmin Descent Mk2i",
    manufacturer: "Garmin",
    model: "Descent Mk2i",
    purchaseDate: "2023-01-20",
    description: "Advanced multi-sport watch and dive computer",
    image: "public/images/computers/image_Garmin Descent Mk2i.jpg",
  },
  {
    id: 4,
    name: "Suunto D5",
    manufacturer: "Suunto",
    model: "D5",
    purchaseDate: "2022-06-18",
    description: "Compact and versatile dive computer with color display",
    image: "public/images/computers/image_Suunto D5.jpg",
  },
  {
    id: 5,
    name: "Mares Genius",
    manufacturer: "Mares",
    model: "Genius",
    purchaseDate: "2023-03-10",
    description: "High-precision dive computer with full-color display",
    image: "public/images/computers/image_Mares Genius.jpg",
  },
  {
    id: 6,
    name: "Oceanic ProPlus X",
    manufacturer: "Oceanic",
    model: "ProPlus X",
    purchaseDate: "2021-12-05",
    description: "Large screen console dive computer with intuitive interface",
    image: "public/images/computers/image_Oceanic ProPlus X.jpg",
  },
  {
    id: 7,
    name: "Cressi Giotto",
    manufacturer: "Cressi",
    model: "Giotto",
    purchaseDate: "2022-04-15",
    description: "User-friendly dive computer with high-definition screen",
    image: "public/images/computers/image_Cressi Giotto.jpg",
  },
  {
    id: 8,
    name: "Ratio iX3M Pro",
    manufacturer: "Ratio",
    model: "iX3M Pro",
    purchaseDate: "2023-02-27",
    description: "Advanced dive computer with customizable display",
    image: "public/images/computers/image_Ratio iX3M Pro.jpg",
  },
];

export const Computers = () => {
  return (
    <Container fluid>
      <CategoryNav />
      <h2>Dive Computers</h2>
      <Row>
        {computers.map((computer) => (
          <Col key={computer.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={computer.image}
                className="category-image"
              />
              <Card.Body>
                <Card.Title>{computer.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {computer.manufacturer}
                  <br />
                  <strong>Model:</strong> {computer.model}
                  <br />
                  <strong>Purchase Date:</strong> {computer.purchaseDate}
                  <br />
                  <strong>Description:</strong> {computer.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
