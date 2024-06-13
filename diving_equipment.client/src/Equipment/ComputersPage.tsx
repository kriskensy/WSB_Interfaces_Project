// import Container from "react-bootstrap/Container";

// export const Computers = () => {
//   return <Container fluid>This is computers view.</Container>;
// };

import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";

// Przykładowa lista komputerów nurkowych
const computers = [
  {
    id: 1,
    name: "Aqua Lung i770R",
    manufacturer: "Aqua Lung",
    model: "i770R",
    purchaseDate: "2023-05-12",
    description: "Advanced OLED color display dive computer",
    image: "path/to/aqualung_i770r.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 2,
    name: "Shearwater Teric",
    manufacturer: "Shearwater",
    model: "Teric",
    purchaseDate: "2022-11-05",
    description: "High-end dive computer with full-color AMOLED display",
    image: "path/to/shearwater_teric.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 3,
    name: "Garmin Descent Mk2i",
    manufacturer: "Garmin",
    model: "Descent Mk2i",
    purchaseDate: "2023-01-20",
    description: "Advanced multi-sport watch and dive computer",
    image: "path/to/garmin_descent_mk2i.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 4,
    name: "Suunto D5",
    manufacturer: "Suunto",
    model: "D5",
    purchaseDate: "2022-06-18",
    description: "Compact and versatile dive computer with color display",
    image: "path/to/suunto_d5.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 5,
    name: "Mares Genius",
    manufacturer: "Mares",
    model: "Genius",
    purchaseDate: "2023-03-10",
    description: "High-precision dive computer with full-color display",
    image: "path/to/mares_genius.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 6,
    name: "Oceanic ProPlus X",
    manufacturer: "Oceanic",
    model: "ProPlus X",
    purchaseDate: "2021-12-05",
    description: "Large screen console dive computer with intuitive interface",
    image: "path/to/oceanic_proplus_x.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 7,
    name: "Cressi Giotto",
    manufacturer: "Cressi",
    model: "Giotto",
    purchaseDate: "2022-04-15",
    description: "User-friendly dive computer with high-definition screen",
    image: "path/to/cressi_giotto.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 8,
    name: "Ratio iX3M Pro",
    manufacturer: "Ratio",
    model: "iX3M Pro",
    purchaseDate: "2023-02-27",
    description: "Advanced dive computer with customizable display",
    image: "path/to/ratio_ix3m_pro.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
];

export const Computers = () => {
  return (
    <Container fluid>
      <h2>Dive Computers</h2>
      <Row>
        {computers.map((computer) => (
          <Col key={computer.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={computer.image} />
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
