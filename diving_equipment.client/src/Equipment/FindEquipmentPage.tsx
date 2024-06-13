// import Container from "react-bootstrap/Container";

// export const FindEquipment = () => {
//   return <Container fluid>This is Find Equipment equipment view.</Container>;
// };
//====================================
import { useState } from "react";
import { Container, Form, Dropdown, Button, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FindEquipment = () => {
  const [category, setCategory] = useState<string>("");
  const [manufacturer, setManufacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [purchaseDate, setPurchaseDate] = useState<Date | null>(null);
  const [sortBy, setSortBy] = useState<string>("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Search criteria:", {
      category,
      manufacturer,
      model,
      purchaseDate,
      sortBy,
    });
    // Implement search logic here
  };

  return (
    <Container fluid>
      <h2>Find Equipment</h2>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Dropdown onSelect={(category) => setCategory(category || "")}>
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
          <Form.Label className="mt-4">Manufacturer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            className="input-field"
          />
        </Form.Group>

        <Form.Group controlId="model">
          <Form.Label className="mt-4">Model</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="input-field"
          />
        </Form.Group>

        <Form.Group controlId="purchaseDate">
          <Form.Label className="mt-4">Purchase Date</Form.Label>
          <div className="custom-datepicker">
            <DatePicker
              selected={purchaseDate}
              onChange={(date: Date | null) => setPurchaseDate(date)}
              dateFormat="yyyy-MM-dd"
              className="form-control"
              style={{ width: "400px" }}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="sortBy">
          <Form.Label className="mt-4">Sort By</Form.Label>
          <Dropdown onSelect={(sortBy) => setSortBy(sortBy || "")}>
            <Dropdown.Toggle variant="primary" id="dropdown-sortby">
              {sortBy ? sortBy : "Select Sort Option"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="Category">Category</Dropdown.Item>
              <Dropdown.Item eventKey="Manufacturer">
                Manufacturer
              </Dropdown.Item>
              <Dropdown.Item eventKey="Model">Model</Dropdown.Item>
              <Dropdown.Item eventKey="Purchase Date">
                Purchase Date
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Search Equipment
        </Button>
      </Form>

      <h3 className="mt-5">Search Results</h3>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Category</th>
            <th>Manufacturer</th>
            <th>Model</th>
            <th>Purchase Date</th>
          </tr>
        </thead>
        <tbody>{/* Render search results here */}</tbody>
      </Table>
    </Container>
  );
};

//=================

// import { useState } from "react";
// import { Container, Form, Dropdown, Button, Table } from "react-bootstrap";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Computers } from "./ComputersPage";
// import { fins } from "./FinsPage";
// import { Regulators } from "./RegulatorsPage";
// import { Suits } from "./SuitsPage";
// import { Jackets } from "./JacketsPage";
// import { Masks } from "./MasksPage";
// import { Tanks } from "./TanksPage";
// import { Accessories } from "./AccessoriesPage";

// const allEquipment = [
//   ...Computers,
//   ...fins,
//   ...Regulators,
//   ...Suits,
//   ...Jackets,
//   ...Masks,
//   ...Tanks,
//   ...Accessories,
// ];

// export const FindEquipment = () => {
//   const [category, setCategory] = useState<string>("");
//   const [manufacturer, setManufacturer] = useState<string>("");
//   const [model, setModel] = useState<string>("");
//   const [purchaseDate, setPurchaseDate] = useState<Date | null>(null);
//   const [sortBy, setSortBy] = useState<string>("");
//   const [filteredEquipment, setFilteredEquipment] = useState(allEquipment);

//   const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     let results = allEquipment;

//     if (category) {
//       results = results.filter((item) => item.category === category);
//     }

//     if (manufacturer) {
//       results = results.filter((item) =>
//         item.manufacturer.toLowerCase().includes(manufacturer.toLowerCase())
//       );
//     }

//     if (model) {
//       results = results.filter((item) =>
//         item.model.toLowerCase().includes(model.toLowerCase())
//       );
//     }

//     if (purchaseDate) {
//       const dateStr = purchaseDate.toISOString().split("T")[0];
//       results = results.filter((item) => item.purchaseDate === dateStr);
//     }

//     if (sortBy) {
//       results = [...results].sort((a, b) => {
//         if (sortBy === "Category") return a.category.localeCompare(b.category);
//         if (sortBy === "Manufacturer") return a.manufacturer.localeCompare(b.manufacturer);
//         if (sortBy === "Model") return a.model.localeCompare(b.model);
//         if (sortBy === "Purchase Date") return (a.purchaseDate || '').localeCompare(b.purchaseDate || '');
//         return 0;
//       });
//     }

//     setFilteredEquipment(results);
//   };

//   return (
//     <Container fluid>
//       <h2>Find Equipment</h2>
//       <Form onSubmit={handleSearch}>
//         <Form.Group controlId="category">
//           <Form.Label>Category</Form.Label>
//           <Dropdown onSelect={(category) => setCategory(category || "")}>
//             <Dropdown.Toggle variant="primary" id="dropdown-category">
//               {category ? category : "Select Category"}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item eventKey="Computers">Computers</Dropdown.Item>
//               <Dropdown.Item eventKey="Fins">Fins</Dropdown.Item>
//               <Dropdown.Item eventKey="Regulators">Regulators</Dropdown.Item>
//               <Dropdown.Item eventKey="Suits">Suits</Dropdown.Item>
//               <Dropdown.Item eventKey="Jackets">Jackets</Dropdown.Item>
//               <Dropdown.Item eventKey="Masks">Masks</Dropdown.Item>
//               <Dropdown.Item eventKey="Tanks">Tanks</Dropdown.Item>
//               <Dropdown.Item eventKey="Accessories">Accessories</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Form.Group>

//         <Form.Group controlId="manufacturer">
//           <Form.Label className="mt-4">Manufacturer</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Manufacturer"
//             value={manufacturer}
//             onChange={(e) => setManufacturer(e.target.value)}
//             className="input-field"
//           />
//         </Form.Group>

//         <Form.Group controlId="model">
//           <Form.Label className="mt-4">Model</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Model"
//             value={model}
//             onChange={(e) => setModel(e.target.value)}
//             className="input-field"
//           />
//         </Form.Group>

//         <Form.Group controlId="purchaseDate">
//           <Form.Label className="mt-4">Purchase Date</Form.Label>
//           <div className="custom-datepicker">
//             <DatePicker
//               selected={purchaseDate}
//               onChange={(date: Date | null) => setPurchaseDate(date)}
//               dateFormat="yyyy-MM-dd"
//               className="form-control"
//               style={{ width: "400px" }}
//             />
//           </div>
//         </Form.Group>

//         <Form.Group controlId="sortBy">
//           <Form.Label className="mt-4">Sort By</Form.Label>
//           <Dropdown onSelect={(sortBy) => setSortBy(sortBy || "")}>
//             <Dropdown.Toggle variant="primary" id="dropdown-sortby">
//               {sortBy ? sortBy : "Select Sort Option"}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item eventKey="Category">Category</Dropdown.Item>
//               <Dropdown.Item eventKey="Manufacturer">Manufacturer</Dropdown.Item>
//               <Dropdown.Item eventKey="Model">Model</Dropdown.Item>
//               <Dropdown.Item eventKey="Purchase Date">Purchase Date</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Form.Group>

//         <Button variant="primary" type="submit" className="mt-4">
//           Search Equipment
//         </Button>
//       </Form>

//       <h3 className="mt-5">Search Results</h3>
//       <Table striped bordered hover className="mt-3">
//         <thead>
//           <tr>
//             <th>Category</th>
//             <th>Manufacturer</th>
//             <th>Model</th>
//             <th>Purchase Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredEquipment.map((item) => (
//             <tr key={item.id}>
//               <td>{item.category}</td>
//               <td>{item.manufacturer}</td>
//               <td>{item.model}</td>
//               <td>{item.purchaseDate || "N/A"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </Container>
//   );
// };
