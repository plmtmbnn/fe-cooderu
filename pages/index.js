import Head from "next/head";
import Image from "next/image";

import { Card, Col, Container, Row, Nav, Tab, Button } from "react-bootstrap";
import FooterApp from "../components/FooterApp";
import NavbarApp from "../components/NavbarApp";
import {
  _headerCard,
  _silabusBE,
  _silabusFE,
  _benefit,
  _payment,
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
                  <h3 className="fw-bold">Apa yang akan kamu pelajari?</h3>
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
      <section className="mt-5">
        <Container>
          <Row>
            <Col md={6}>
              <div className="mt-4">
                <span>Benefit</span>
                <h4 className="fw-bold">Mengapa Cooderu?</h4>
                <p>
                  Program komprehensif kami mempersiapkan siswa untuk memasuki
                  dunia kerja sebagai pengembang adaptif cepat yang
                  berkontribusi sebagai anggota tim berkinerja tinggi dalam
                  peran pertama mereka setelah lulus.
                </p>
              </div>
            </Col>
          </Row>
          <div>
            <Row className="justify-content-center">
              {_benefit.map((data, i) => (
                <Col key={i} md={6}>
                  <Card className="h-80 py-2 px-2 my-4">
                    <Card.Body className="d-flex">
                      <Image src={data.icon} alt="icon" className="p-2" />
                      <div className="p-2">
                        <h4 className="fw-semibold">{data.title}</h4>
                        <span>{data.desc}</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
      <section section className="mt-5">
        <Container>
          <div className="text-center">
            <span>Biaya Bootcamp</span>
            <h2 className="fw-bold">Daftar Batch Terbaru Sekarang!</h2>
            <p>Pendaftaran akan dibuka pada 5 November 2022</p>
          </div>
          <Row className="text-center">
            <Col md={4}>
              <Card className="h-100 py-4 px-2 my-4"></Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 py-4 px-2 my-4"></Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 py-4 px-2 my-4"></Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section section className="mt-5">
        <Container>
          <div className="text-center">
            <h2 className="fw-bold">Metode Pembayaran</h2>
            <p>
              Cooderu memudahkan kamu untuk memilih berbagai metode pembayaran
            </p>
          </div>
          <Row>
            {_payment.map((data, i) => (
              <Col key={i} md={3}>
                <Card className="h-80 py-4 px-2 my-4">
                  <Card.Body>
                    <Image src={data.icon} alt="icon" className="text-center" />

                    <h4 className="fw-semibold text-center my-4 px-2">
                      {data.title}
                    </h4>
                    <span className="text-center">{data.desc}</span>
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
            <span>Testimoni</span>
            <h2 className="fw-bold">Apa Kata Alumni</h2>
          </div>
        </Container>
      </section>
      <section className="mt-5">
        <Container>
          <h2 className="fw-bold text-center">Tim Kami</h2>
        </Container>
      </section>
      <section className="mt-5">
        <Container>
          <div className="text-center">
            <h2 className="fw-bold">FAQ</h2>
            <span>
              Kamu juga bisa menghubungi kami untuk mengetahui informasi lebih
              lanjut
            </span>
          </div>
        </Container>
      </section>
      <FooterApp />
    </>
  );
}
