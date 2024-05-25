import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

export function Layout() {
    return (
        <div className="app">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand>
                        <Link to="/" className="d-block">
                            <Image src="images/image_logo.png" className="logo" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link>
                                <Link to="/" className="d-block">Home</Link>
                            </Nav.Link>

                            <NavDropdown title="Profile" id="navbarScrollingDropdown" className="ms-2 me-2">
                                <NavDropdown.Item>
                                    <Link to="/Certificates" className="d-block">Certificates</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/Logbook" className="d-block">Logbook</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/Statistics" className="d-block">Statistics</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/Buddys" className="d-block">Buddys</Link>
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Sign in" id="navbarScrollingDropdown" className="ms-2 me-2">
                                <Form>
                                    <Form.Group className="mb-3 ms-2 me-2" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 ms-2 me-2" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Enter Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 ms-2 me-2" controlId="formBasicButton">
                                        <Button variant="primary" type="signIn">
                                            Sign in
                                        </Button>
                                    </Form.Group>
                                    </Form>
                            </NavDropdown>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Find"
                                className="me-2"
                                aria-label="Find"
                            />
                            <Button variant="outline-success">Find</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="px-3">
                <Container fluid>
                    <Outlet />
                </Container>
            </div>
        </div>
    )
}