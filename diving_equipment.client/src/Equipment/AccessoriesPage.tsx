// import Container from "react-bootstrap/Container";

// export const Accessories = () => {
//   return <Container fluid>This is accessories view.</Container>;
// };

import React from "react";
import Container from "react-bootstrap/Container";
import { Card, Row, Col } from "react-bootstrap";

// Przykładowa lista akcesoriów nurkowych
const accessories = [
  {
    id: 1,
    name: 'Dive Flag Buoy',
    manufacturer: 'ScubaMax',
    model: 'DFB-01',
    type: 'Buoy',
    features: 'High visibility, inflatable',
    description: 'Inflatable dive flag buoy for increased visibility and safety.',
    image: 'path/to/dive_flag_buoy.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 2,
    name: 'Underwater Flashlight',
    manufacturer: 'TUSA',
    model: 'TUL-300',
    type: 'Flashlight',
    features: 'LED, 1000 lumens, waterproof',
    description: 'Powerful LED flashlight with 1000 lumens, waterproof to 200 meters.',
    image: 'path/to/underwater_flashlight.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 3,
    name: 'Dive Knife',
    manufacturer: 'Aqua Lung',
    model: 'Argonaut',
    type: 'Knife',
    features: 'Stainless steel, sheath included',
    description: 'Durable stainless steel dive knife with a secure sheath.',
    image: 'path/to/dive_knife.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 4,
    name: 'Underwater Slate',
    manufacturer: 'Trident',
    model: 'US-01',
    type: 'Slate',
    features: 'Writable, with pencil',
    description: 'Handy underwater slate for communication and note-taking.',
    image: 'path/to/underwater_slate.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 5,
    name: 'Surface Marker Buoy',
    manufacturer: 'Mares',
    model: 'SMB-01',
    type: 'Buoy',
    features: 'High visibility, easy inflation',
    description: 'High visibility surface marker buoy for safe ascents and signaling.',
    image: 'path/to/surface_marker_buoy.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 6,
    name: 'Dive Reel',
    manufacturer: 'Scubapro',
    model: 'Reel 150',
    type: 'Reel',
    features: '150 ft line, durable construction',
    description: 'Reliable dive reel with 150 feet of line for navigation and safety.',
    image: 'path/to/dive_reel.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 7,
    name: 'Tank Banger',
    manufacturer: 'XS Scuba',
    model: 'TB-01',
    type: 'Signal Device',
    features: 'Loud, easy to use',
    description: 'Simple and effective tank banger for attracting attention underwater.',
    image: 'path/to/tank_banger.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 8,
    name: 'Dive Compass',
    manufacturer: 'Suunto',
    model: 'SK-8',
    type: 'Compass',
    features: 'High accuracy, wrist mount',
    description: 'Accurate and reliable dive compass with wrist mount.',
    image: 'path/to/dive_compass.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 9,
    name: 'Signal Mirror',
    manufacturer: 'Nautilus',
    model: 'SM-01',
    type: 'Signal Device',
    features: 'Compact, high reflectivity',
    description: 'Compact signal mirror for emergency signaling and increased safety.',
    image: 'path/to/signal_mirror.jpg', // Podaj odpowiednią ścieżkę do obrazu
  },
  {
    id: 10,
    name: 'Dry Bag',
    manufacturer: 'SealLine',
    model: 'BlockerLite',
    type: 'Bag',
    features: 'Waterproof, lightweight',
    description: 'Lightweight and waterproof dry bag for keeping gear dry.',
    image: 'path/to/dry_bag.jpg', // Podaj odpowiednią ścieżkę do obrazu
  }
];

export const Accessories = () => {
  return (
    <Container fluid>
      <h2>Dive Accessories</h2>
      <Row>
        {accessories.map((accessory) => (
          <Col key={accessory.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={accessory.image} />
              <Card.Body>
                <Card.Title>{accessory.name}</Card.Title>
                <Card.Text>
                  <strong>Manufacturer:</strong> {accessory.manufacturer}<br />
                  <strong>Model:</strong> {accessory.model}<br />
                  <strong>Type:</strong> {accessory.type}<br />
                  <strong>Features:</strong> {accessory.features}<br />
                  <strong>Description:</strong> {accessory.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
