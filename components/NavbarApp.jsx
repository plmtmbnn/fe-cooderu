import Image from "next/image";
import React from "react";

import logo from "../public/logo.png";

import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

function NavbarApp() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <Image src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fw-semi-bold">
              <NavDropdown title="Program Bootcamp" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Frontend</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Backend</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Promo & Harga</Nav.Link>
              <Nav.Link href="#">Tentang Kegiatan</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href="#"
                className="btn btn-primary text-white ms-0 ms-lg-3"
              >
                Daftar Sekarang
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarApp;
