import { useState } from "react";
import { Container, Form, Dropdown, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const NewEquipment = () => {
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [purchaseDate, setPurchaseDate] = useState(null);
  const [revisionPeriod, setRevisionPeriod] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = () => {
    //symulacja dodawania zdjecia
    setSelectedFile({ name: "exampleFoto.jpg" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      category,
      manufacturer,
      model,
      purchaseDate,
      revisionPeriod,
      description,
      selectedFile,
    });
    setCategory("");
    setManufacturer("");
    setModel("");
    setPurchaseDate("");
    setRevisionPeriod("");
    setDescription("");
    setSelectedFile(null);
  };

  return (
    <Container fluid>
      <h2>Add New Equipment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Dropdown onSelect={(category) => setCategory(category)}>
            <Dropdown.Toggle variant="primary" id="dropdown-category">
              {category ? category : "Select Category"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Regulators">Regulators</Dropdown.Item>
              <Dropdown.Item eventKey="Suits">Suits</Dropdown.Item>
              <Dropdown.Item eventKey="Jackets">Jackets</Dropdown.Item>
              <Dropdown.Item eventKey="Computers">Computers</Dropdown.Item>
              <Dropdown.Item eventKey="Masks">Masks</Dropdown.Item>
              <Dropdown.Item eventKey="Fins">Fins</Dropdown.Item>
              <Dropdown.Item eventKey="Tanks">Tanks</Dropdown.Item>
              <Dropdown.Item eventKey="Accessories">Accessories</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Form.Group controlId="manufacturer">
          <Form.Label className="mt-4 mr-2">Manufacturer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Manufacturer"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="input-field"
          />
        </Form.Group>

        <Form.Group controlId="model">
          <Form.Label className="mt-4 mr-2">Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Model"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            className="input-field"
          />
        </Form.Group>

        <Form.Group controlId="revisionPeriod">
          <Form.Label className="mt-4 mr-2">Revision Period</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Revision Period"
            value={revisionPeriod}
            onChange={(e) => setRevisionPeriod(e.target.value)}
            className="input-field"
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label className="mt-4 mr-2">Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input-field"
          />
        </Form.Group>

        <Form.Group controlId="purchaseDate">
          <Form.Label className="mt-4 mr-2">Purchase Date</Form.Label>
          <div className="datepicker-container">
            <DatePicker
              selected={purchaseDate}
              onChange={(date) => setPurchaseDate(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control"
            />
          </div>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label className="mt-4 mr-2">Upload Image</Form.Label>
          <div>
            <Button
              variant="secondary"
              onClick={handleFileSelect}
              className="mt-2"
            >
              {selectedFile ? selectedFile.name : "Choose file"}
            </Button>
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4 mr-2">
          Add Equipment
        </Button>
      </Form>
    </Container>
  );
};
