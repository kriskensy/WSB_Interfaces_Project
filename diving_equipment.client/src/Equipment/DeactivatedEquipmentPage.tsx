import Container from "react-bootstrap/Container";

export const DeactivatedEquipment = () => {
  return <Container fluid>This is deactivated equipment view.</Container>;
};

// import React, { useState } from "react";
// import { Container, Form, Dropdown } from "react-bootstrap";
// import FilteredEquipmentList from "./FilteredEquipmentList"; // Importujemy komponent FilteredEquipmentList

// const deactivatedEquipment = [
//   {
//     id: 1,
//     category: "Regulators",
//     manufacturer: "ScubaPro",
//     model: "MK25 EVO/S620 Ti",
//     purchaseDate: "2021-05-12",
//     reason: "Exceeded revision period",
//     description: "High-performance regulator with titanium components",
//   },
//   {
//     id: 2,
//     category: "Fins",
//     manufacturer: "Mares",
//     model: "Avanti Quattro+",
//     purchaseDate: "2022-01-20",
//     reason: "Broken strap",
//     description: "Classic design fins with efficient channel thrust technology",
//   },
//   {
//     id: 3,
//     category: "Computers",
//     manufacturer: "Suunto",
//     model: "D4i Novo",
//     purchaseDate: "2023-03-10",
//     reason: "Battery failure",
//     description: "Compact dive computer with wireless air integration",
//   },
//   {
//     id: 4,
//     category: "Masks",
//     manufacturer: "Atomic Aquatics",
//     model: "Venom",
//     purchaseDate: "2022-09-15",
//     reason: "Cracked lens",
//     description: "Frameless mask with UltraClear lenses",
//   },
//   {
//     id: 5,
//     category: "Accessories",
//     manufacturer: "LUXFER",
//     model: "Aluminum Dive Tank",
//     purchaseDate: "2020-12-01",
//     reason: "Exceeded hydrostatic test date",
//     description: "Lightweight aluminum tank with standard K-valve",
//   },
// ];

// const DeactivatedEquipmentPage = () => {
//   const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

//   const handleCategorySelect = (category: string | null) => {
//     setCategoryFilter(category);
//   };

//   return (
//     <Container fluid>
//       <h2>Deactivated Equipment</h2>
//       <Form>
//         <Form.Group controlId="categoryFilter">
//           <Form.Label>Filter by Category</Form.Label>
//           <Dropdown onSelect={handleCategorySelect}>
//             <Dropdown.Toggle variant="primary" id="dropdown-category">
//               {categoryFilter ? categoryFilter : "Select Category"}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               <Dropdown.Item eventKey="Regulators">Regulators</Dropdown.Item>
//               <Dropdown.Item eventKey="Fins">Fins</Dropdown.Item>
//               <Dropdown.Item eventKey="Computers">Computers</Dropdown.Item>
//               <Dropdown.Item eventKey="Masks">Masks</Dropdown.Item>
//               <Dropdown.Item eventKey="Accessories">Accessories</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         </Form.Group>
//       </Form>

//       <h3 className="mt-4">Deactivated Equipment List</h3>
//       <FilteredEquipmentList
//         equipment={deactivatedEquipment}
//         categoryFilter={categoryFilter}
//       />
//     </Container>
//   );
// };

// export default DeactivatedEquipmentPage;
