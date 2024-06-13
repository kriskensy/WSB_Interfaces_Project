// import Container from "react-bootstrap/Container";

// export const Tanks = () => {
//   return <Container fluid>This is tanks view.</Container>;
// };

import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";

// Przykładowa lista zbiorników nurkowych
const tanks = [
  {
    id: 1,
    name: 'Aqua Lung Pro HD',
    manufacturer: 'Aqua Lung',
    model: 'Pro HD',
    type: 'Tank',
    features: 'Aluminum, 80 cu ft, standard valve',
    description: 'Durable aluminum tank with standard valve, perfect for recreational diving.',
    image: 'path/to/aqua_lung_pro_hd.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 2,
    name: 'Catalina S80',
    manufacturer: 'Catalina',
    model: 'S80',
    type: 'Tank',
    features: 'Aluminum, 80 cu ft, lightweight design',
    description: 'Lightweight and robust tank designed for comfort and ease of use.',
    image: 'path/to/catalina_s80.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 3,
    name: 'Faber HP100',
    manufacturer: 'Faber',
    model: 'HP100',
    type: 'Tank',
    features: 'Steel, 100 cu ft, high-pressure',
    description: 'High-pressure steel tank with a large capacity for extended dive times.',
    image: 'path/to/faber_hp100.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 4,
    name: 'Luxfer 40',
    manufacturer: 'Luxfer',
    model: '40',
    type: 'Tank',
    features: 'Aluminum, 40 cu ft, pony bottle',
    description: 'Compact aluminum pony bottle, ideal for redundancy and safety.',
    image: 'path/to/luxfer_40.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 5,
    name: 'OMS 112',
    manufacturer: 'OMS',
    model: '112',
    type: 'Tank',
    features: 'Steel, 112 cu ft, nitrox compatible',
    description: 'Nitrox compatible steel tank with large capacity and excellent buoyancy characteristics.',
    image: 'path/to/oms_112.jpg', // Podaj odpowiednią ścieżkę do obrazu
  }
];

export const Tanks = () => {
  return (
    <Container fluid>
      <h2>Dive Tanks</h2>
      <Row>
        {tanks.map((tank) => (
          <Col key={tank.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={tank.image} />
              <Card.Body>
                <Card.Title>{tank.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {tank.manufacturer}<br />
                  <strong>Model:</strong> {tank.model}<br />
                  <strong>Type:</strong> {tank.type}<br />
                  <strong>Features:</strong> {tank.features}<br />
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
