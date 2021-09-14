import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Grapplepedia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Add Technique</Nav.Link>
              {/* List of positions */}
              <NavDropdown title="Wrestling Positions" id="basic-nav-dropdown">

                <NavDropdown.Item href="#action/3.3">
                  Standing/Neutral
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Top</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Bottom</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="BJJ Positions" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                  Full Guard
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Half Guard
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Open Guard
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Side Control
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Mount</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
