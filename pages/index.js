import Head from "next/head";
import Image from "next/image";

import { Card, Col, Container, Row, Nav, Tab, Button } from "react-bootstrap";
import FooterApp from "../components/FooterApp";
import NavbarApp from "../components/NavbarApp";
import { _headerCard, _silabusBE, _silabusFE } from "../static";

// images
import imgReact from "../public/react-logo.png";
import imgNode from "../public/node-logo.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Cooderu | We help and prepare a thousand fast adaptive inexperienced
          tech talent
        </title>
        <meta
          name="description"
          content="Cooderu | We help and prepare a thousand fast adaptive inexperienced tech talent"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarApp />
      <section className="py-5 bg-info">
        <Container>
          <Row>
            <Col md={4}>
              <h1>Mulai karirmu bersama Cooderu</h1>
              <p>
                Asah potensi diri kamu menjadi developer handal bersama praktisi
                berpengalaman dan kembangkan karir digital kamu sekarang!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {_headerCard.map((data, i) => (
              <Col key={i} md={3}>
                <Card className="h-100 py-4">
                  <Card.Body>
                    <h4 className="fw-semibold">{data.title}</h4>
                    <span>{data.desc}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="mt-5">
        <Container>
          <div className="text-center">
            <span>Mulai belajar sekarang</span>
            <h2 className="fw-bold">Program Bootcamp</h2>
          </div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills" className="justify-content-center mt-3">
              <Nav.Item>
                <Nav.Link eventKey="first">Frontend</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Backend</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content className="mt-5">
              <Tab.Pane eventKey="first">
                <Row>
                  <Col
                    md={{ span: 4, offset: 1 }}
                    className="align-self-center"
                  >
                    <Image
                      className="img-fluid m-auto"
                      alt="cooderu"
                      src={imgReact}
                      placeholder="blur"
                    />
                  </Col>
                  <Col
                    md={{ span: 5, offset: 1 }}
                    className="align-self-center"
                  >
                    <h4 className="fw-bold">Frontend Developer</h4>
                    <p>
                      Latih dan tingkatkan keterampilan yang dibutuhkan untuk
                      memulai karir Back End Developer yang andal dalam 12
                      minggu.
                    </p>
                    <p>
                      Dasar-dasr JS, Nodejs, API, Middleware, dan banyak lagi
                      serta beberapa latihan dan project.
                    </p>
                    <Button className="mt-4">Daftar Sekarang</Button>
                  </Col>
                </Row>
                <div className="mt-4">
                  <span>Silabus</span>
                  <h4 className="fw-bold">Apa yang akan kamu pelajari?</h4>
                  <ul className="column mt-3">
                    {_silabusFE.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))}
                  </ul>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row>
                  <Col
                    md={{ span: 4, offset: 1 }}
                    className="align-self-center"
                  >
                    <Image
                      className="img-fluid m-auto"
                      alt="cooderu"
                      src={imgNode}
                      placeholder="blur"
                    />
                  </Col>
                  <Col
                    md={{ span: 5, offset: 1 }}
                    className="align-self-center"
                  >
                    <h4 className="fw-bold">Backend Developer</h4>
                    <p>
                      Latih dan tingkatkan keterampilan yang dibutuhkan untuk
                      memulai karir Front End Developer yang andal hanya dalam
                      12 minggu.
                    </p>
                    <p>
                      Dasar-dasar HTML, CSS, JS, ReactJS, dan banyak lagi serta
                      beberapa latihan dan project.
                    </p>
                    <Button className="mt-4">Daftar Sekarang</Button>
                  </Col>
                </Row>
                <div className="mt-4">
                  <span>Silabus</span>
                  <h4 className="fw-bold">Apa yang akan kamu pelajari?</h4>
                  <ul className="column mt-3">
                    {_silabusBE.map((data, i) => (
                      <li key={i}>{data}</li>
                    ))}
                  </ul>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
      <FooterApp />
    </>
  );
}
