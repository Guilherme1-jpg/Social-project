import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import LogoIcon from "../../_assets/img/logoPreview.png";
import "./Styled.css";

const NavbarToggle = () => {
  return (
    <>
      <Navbar className="navbar-custom">
        <Container>
          <Navbar.Brand href="/home" className="justify-content-center">
            <img className="logo-config" src={LogoIcon} />
          </Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/vocation">Vocação</Nav.Link>
            <Nav.Link href="/shop">Produtos</Nav.Link>
            <Nav.Link href="/santaBeatriz">Santa Beatriz</Nav.Link>
            <Nav.Link href="/prey">Oração</Nav.Link>
            <Nav.Link href="/contact">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarToggle;
