import Head from "next/head";
import Image from "next/image";

import { Card, Col, Container, Row, Nav, Tab, Button } from "react-bootstrap";
import FooterApp from "../components/FooterApp";
import NavbarApp from "../components/NavbarApp";
import {
  _headerCard,
  _pricing,
  _silabusBE,
  _silabusFE,
  _whyUs,
} from "../static";

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
            <h5>Mulai belajar sekarang</h5>
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
                  <h5>Silabus</h5>
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
                  <h5>Silabus</h5>
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
      <section className="py-5">
        <Container>
          <h5>Benefit</h5>
          <h4 className="fw-bold">Mengapa Cooderu?</h4>
          <p>
            Program komprehensif kami mempersiapkan siswa untuk memasuki dunia
            <br />
            kerja sebagai pengembang adaptif cepat yang berkontribusi sebagai
            anggota
            <br />
            tim berkinerja tinggi dalam peran pertama mereka setelah lulus.
          </p>

          <Row>
            {_whyUs.map((data, i) => (
              <Col key={i} md={6} className="d-flex my-3">
                <Image
                  src={data.img}
                  alt={data.title}
                  width={60}
                  className="mt-3"
                />
                <div className="ms-4">
                  <p className="fw-bold">{data.title}</p>
                  <p>{data.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container className="text-center">
          <h5>Biaya Bootcamp</h5>
          <h4 className="fw-bold">Daftar Batch Terbaru Sekarang!</h4>
          <p>Pendaftaran akan dibuka pada 5 November 2022</p>
          <Row>
            {_pricing.map((data, i) => (
              <Col key={i} md={4} className="text-start">
                <Card className="pricing h-100">
                  <Card.Body className="py-4">
                    <p className="fw-bold">{data.title}</p>
                    <h6 className="strike">{data.out_price}</h6>
                    <h3 className="fw-bold">{data.price}</h3>
                    <hr />
                    <ul className="list-unstyled">
                      {data.benefits.map((data, i) => (
                        <li key={i}>
                          <span>{data}</span>
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                  <Card.Footer>
                    <Button>Daftar sekarang</Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container></Container>
      </section>
      <FooterApp />
    </>
  );
}
