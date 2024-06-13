// import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";

// const LoginForm = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Tutaj można dodać logikę do logowania, np. wysłanie danych do serwera
//     console.log(
//       `Logging in with username: ${username} and password: ${password}`
//     );
//   };

//   return (
//     <Form onSubmit={handleLogin}>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Username</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Log In
//       </Button>
//     </Form>
//   );
// };

// export default LoginForm;
