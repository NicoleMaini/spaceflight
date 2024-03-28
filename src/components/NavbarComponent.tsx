import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function NavbarComponent() {
  const location = useLocation();
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          <Link
            to="/info-article/:id"
            className={location.pathname === "/info-article/:id" ? "nav-link active" : "nav-link"}
          >
            Article
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
