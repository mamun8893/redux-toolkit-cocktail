import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" fixed="top" variant="light">
      <Container>
        <Navbar.Brand href="#home" className="text-success">
          <h2> Find Your Favorite Cocktail</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
