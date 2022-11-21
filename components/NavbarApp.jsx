import Image from "next/image";
import React from "react";

import logo from "../public/logo.png";

import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

function NavbarApp(props) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Program Bootcamp" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Frontend</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Backend</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home">Promo & Harga</Nav.Link>
              <Nav.Link href="#link">Tentang Kegiatan</Nav.Link>
              <Button className="ms-3">Daftar Sekarang</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarApp;
