import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
/* import Cart from './Cart'; */
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
useContext;

function Navbars() {
  const { getQuantity, totalPrice } = useContext(CartContext);

  return (
    <Navbar bg="dark" expand="md" data-bs-theme="dark">
      <Container>
        <Navbar.Brand className="text-white">Pizzería Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="me-2">
              <Button variant="outline-warning" className="text-white">
                🍕 Home
              </Button>
            </Link>
            <Link to="/register" className="me-2">
              <Button variant="outline-warning" className="text-white">
                🔒 Register
              </Button>
            </Link>
            <Link to="/login" className="me-2">
              <Button variant="outline-warning" className="text-white">
                🔒 Login
              </Button>
            </Link>
            <Link to="/cart" className="me-2">
              <Button variant="outline-warning" className="text-white">
                🔒 Cart
              </Button>
            </Link>
            <Link to="/Profile" className="me-2">
              <Button variant="outline-warning" className="text-white">
                🔒 Profile
              </Button>
            </Link>

            <Link to="/404" className="me-2">
              <Button variant="outline-warning" className="text-white">
                🔒 NotFound
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex me-4">
          <Link to="/cart">
            <Button variant="outline-primary">
              Total: $ {totalPrice}
              {"  "}
              CARRITO: {getQuantity()}
            </Button>
          </Link>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Navbars;
