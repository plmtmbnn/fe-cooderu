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
          <Navbar.Collapse className="basic-navbar-nav">
            <Nav className="me-auto fw-semi-bold">
              <NavDropdown
                title="Program Bootcamp"
                className="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#our-program">
                  Frontend
                </NavDropdown.Item>
                <NavDropdown.Item href="#our-program">Backend</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#price">Promo & Harga</Nav.Link>
              <Nav.Link href="#benefit">Tentang Kegiatan</Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link
                href="https://docs.google.com/forms/d/e/1FAIpQLScJWeMYElbgWHcT6VrLrhMM28g6UQN85hLrKIc1UW3_JHbccA/viewform"
                className="btn btn-primary text-white ms-0 ms-lg-3"
                target={"_blank"}
              >
                Daftar Sekarang
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarApp;
