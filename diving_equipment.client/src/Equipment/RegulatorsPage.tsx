// import Container from "react-bootstrap/Container";

// export const Regulators = () => {
//   return <Container fluid>This is regulators view.</Container>;
// };

import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";

// Przykładowa lista zestawów regulatorów nurkowych
const regulators = [
  {
    id: 1,
    name: "Apeks MTX-R",
    manufacturer: "Apeks",
    model: "MTX-R",
    type: "Balanced Diaphragm",
    stages: "Double",
    ports: "4 HP, 2 MP",
    description:
      "High-performance regulator designed for extreme diving conditions",
    image: "path/to/apeks_mtx_r.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 2,
    name: "Scubapro MK25 EVO/S620 Ti",
    manufacturer: "Scubapro",
    model: "MK25 EVO/S620 Ti",
    type: "Balanced Diaphragm",
    stages: "Double",
    ports: "5 HP, 2 MP",
    description:
      "Premium regulator set with excellent breathing performance and durability",
    image: "path/to/scubapro_mk25_s620.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 3,
    name: "Atomic Aquatics T3",
    manufacturer: "Atomic Aquatics",
    model: "T3",
    type: "Balanced Piston",
    stages: "Single",
    ports: "2 HP, 5 LP",
    description:
      "Ultra-lightweight and corrosion-resistant regulator for travel and warm-water diving",
    image: "path/to/atomic_t3.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 4,
    name: "Oceanic Omega 3",
    manufacturer: "Oceanic",
    model: "Omega 3",
    type: "Unbalanced Piston",
    stages: "Single",
    ports: "2 HP, 4 LP",
    description:
      "Reliable and affordable regulator ideal for recreational diving",
    image: "path/to/oceanic_omega_3.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 5,
    name: "Cressi AC2/XS2",
    manufacturer: "Cressi",
    model: "AC2/XS2",
    type: "Unbalanced Piston",
    stages: "Single",
    ports: "1 HP, 4 LP",
    description: "Simple and robust regulator suitable for entry-level divers",
    image: "path/to/cressi_ac2_xs2.jpg", // Podaj odpowiednią ścieżkę do obrazu
  },
];

export const Regulators = () => {
  return (
    <Container fluid>
      <h2>Dive Regulators</h2>
      <Row>
        {regulators.map((regulator) => (
          <Col key={regulator.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={regulator.image} />
              <Card.Body>
                <Card.Title>{regulator.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {regulator.manufacturer}
                  <br />
                  <strong>Model:</strong> {regulator.model}
                  <br />
                  <strong>Type:</strong> {regulator.type}
                  <br />
                  <strong>Stages:</strong> {regulator.stages}
                  <br />
                  <strong>Ports:</strong> {regulator.ports}
                  <br />
                  <strong>Description:</strong> {regulator.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
