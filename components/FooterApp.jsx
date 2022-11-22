import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../public/coderu1.svg";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
} from "react-icons/fa";

function FooterApp() {
  return (
    <div className="mx-auto bg-darkgreen py-4" style={{ color: "white" }}>
      <Container>
        <Row className="mx-auto">
          <Col className="my-2">
            <p>
              <FaEnvelope /> hello@cooderu.com
            </p>
            <p>
              <FaPhoneAlt /> (+62)812 2345 6789
            </p>
          </Col>
          <Col className="text-center">
            <Image src={logo} alt="cooderu" height={90} />
          </Col>
          <Col className="text-end my-2">
            <p>Menara Citicon, Jl. S. Parman Kav 72,</p>
            <p>Jakarta Barat, Indonesia</p>
          </Col>
        </Row>
        <Row>
          <div className="flex flex-row text-center p-3">
            <a href="" className="me-2 text-reset">
              <FaLinkedin size="25px" />
            </a>
            <a href="" className="me-2 text-reset">
              <FaFacebookSquare size="25px" />
            </a>
            <a href="" className="me-2 text-reset">
              <FaInstagram size="25px" />
            </a>
          </div>
        </Row>
        <Row className="text-center">
          <p>
            Copyright &copy; {new Date().getFullYear()} Cooderu. All rights
            reserved
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default FooterApp;
