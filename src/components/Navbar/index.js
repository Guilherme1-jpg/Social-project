import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import LogoIcon from "../../_assets/img/logoPreview.png";
import "./Styled.css";

const NavbarToggle = () => {
  return (
    <>
      <Navbar className="navbar-custom">
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo-config" src={LogoIcon} />
          </Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarToggle;
