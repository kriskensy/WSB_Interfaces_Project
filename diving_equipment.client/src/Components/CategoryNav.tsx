import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

export const CategoryNav = () => {
  return (
    <Nav className="category-nav justify-content-center mb-4">
      <Nav.Item>
        <Nav.Link as={Link} to="/regulators">
          Regulators
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/suits">
          Suits
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/jackets">
          Jackets
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/computers">
          Computers
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/masks">
          Masks
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/fins">
          Fins
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/tanks">
          Tanks
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/accessories">
          Accessories
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
