// import Container from "react-bootstrap/Container";

// export const Suits = () => {
//   return <Container fluid>This is suits view.</Container>;
// };


import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";

// Przykładowa lista kombinezonów nurkowych
const suits = [
  {
    id: 1,
    name: 'Aqualung AquaFlex 7mm',
    manufacturer: 'Aqualung',
    model: 'AquaFlex 7mm',
    type: 'Wetsuit',
    thickness: '7mm',
    features: 'Thermal protection, comfortable fit, easy on and off',
    description: 'High-performance wetsuit for cold water diving',
    image: 'path/to/aqualung_aquaflex.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 2,
    name: 'Scubapro Everdry 4',
    manufacturer: 'Scubapro',
    model: 'Everdry 4',
    type: 'Drysuit',
    thickness: '4mm',
    features: 'Durable, flexible, warm, neoprene drysuit',
    description: 'Top-quality drysuit designed for demanding diving conditions',
    image: 'path/to/scubapro_everdry4.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 3,
    name: 'Mares Flexa 5.4.3',
    manufacturer: 'Mares',
    model: 'Flexa 5.4.3',
    type: 'Wetsuit',
    thickness: '5/4/3mm',
    features: 'Ergonomic, trilastic material, protection and comfort',
    description: 'Versatile wetsuit for a range of water temperatures',
    image: 'path/to/mares_flexa.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 4,
    name: 'Bare X-Mission Evolution',
    manufacturer: 'Bare',
    model: 'X-Mission Evolution',
    type: 'Drysuit',
    thickness: 'Lightweight',
    features: 'Technical diving, reinforced protection, high mobility',
    description: 'Advanced drysuit for technical and cave diving',
    image: 'path/to/bare_xmission.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 5,
    name: 'Cressi Lido 2mm',
    manufacturer: 'Cressi',
    model: 'Lido 2mm',
    type: 'Shorty',
    thickness: '2mm',
    features: 'Short sleeves and legs, front zipper, flexible and lightweight',
    description: 'Ideal shorty wetsuit for tropical water diving',
    image: 'path/to/cressi_lido.jpg', // Podaj odpowiednią ścieżkę do obrazu
  }
];

export const Suits = () => {
  return (
    <Container fluid>
      <h2>Dive Suits</h2>
      <Row>
        {suits.map((suit) => (
          <Col key={suit.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={suit.image} />
              <Card.Body>
                <Card.Title>{suit.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {suit.manufacturer}<br />
                  <strong>Model:</strong> {suit.model}<br />
                  <strong>Type:</strong> {suit.type}<br />
                  <strong>Thickness:</strong> {suit.thickness}<br />
                  <strong>Features:</strong> {suit.features}<br />
                  <strong>Description:</strong> {suit.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
