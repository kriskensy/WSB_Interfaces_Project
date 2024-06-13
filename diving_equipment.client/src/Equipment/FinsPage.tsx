// import Container from "react-bootstrap/Container";

// export const Fins = () => {
//   return <Container fluid>This is fins view.</Container>;
// };

import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";

// Przykładowa lista płetw nurkowych
const fins = [
  {
    id: 1,
    name: 'Scubapro Jet Fins',
    manufacturer: 'Scubapro',
    model: 'Jet Fins',
    size: 'Medium',
    color: 'Black',
    description: 'Traditional heavy-duty rubber fins for strong propulsion',
    image: 'path/to/scubapro_jet_fins.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 2,
    name: 'Cressi Frog Plus',
    manufacturer: 'Cressi',
    model: 'Frog Plus',
    size: 'Large',
    color: 'Yellow',
    description: 'Versatile open-heel fins with comfortable foot pocket',
    image: 'path/to/cressi_frog_plus.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 3,
    name: 'Mares Avanti Quattro Plus',
    manufacturer: 'Mares',
    model: 'Avanti Quattro Plus',
    size: 'Small',
    color: 'Blue',
    description: 'High-performance channel thrust fins for efficient kicking',
    image: 'path/to/mares_avanti_quattro_plus.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 4,
    name: 'Atomic Split Fins',
    manufacturer: 'Atomic',
    model: 'Split Fins',
    size: 'Medium',
    color: 'Red',
    description: 'Innovative split fins design for reduced drag and effort',
    image: 'path/to/atomic_split_fins.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 5,
    name: 'Aqua Lung Slingshot',
    manufacturer: 'Aqua Lung',
    model: 'Slingshot',
    size: 'Large',
    color: 'Green',
    description: 'Adjustable open-heel fins with power bands for variable thrust',
    image: 'path/to/aqualung_slingshot.jpg', // Podaj odpowiednią ścieżkę do obrazu
  }
];

export const Fins = () => {
  return (
    <Container fluid>
      <h2>Dive Fins</h2>
      <Row>
        {fins.map((fin) => (
          <Col key={fin.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={fin.image} />
              <Card.Body>
                <Card.Title>{fin.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {fin.manufacturer}<br />
                  <strong>Model:</strong> {fin.model}<br />
                  <strong>Size:</strong> {fin.size}<br />
                  <strong>Color:</strong> {fin.color}<br />
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
