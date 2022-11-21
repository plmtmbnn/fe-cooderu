/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";

import {
  Card,
  Col,
  Container,
  Row,
  Nav,
  Tab,
  Button,
  Badge,
} from "react-bootstrap";
import FooterApp from "../components/FooterApp";
import NavbarApp from "../components/NavbarApp";
import {
  _headerCard,
  _pricing,
  _silabusBE,
  _silabusFE,
  _whyUs,
  _ourTeam,
  _payment,
} from "../static";

// images
import imgReact from "../public/react-logo.png";
import imgNode from "../public/node-logo.png";
import checkMark from "../public/checkmark.svg";
import { FaReact, FaNodeJs, FaGenderless, FaStar } from "react-icons/fa";

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
      <section className="py-5 bg-header">
        <Container>
          <Row className="py-10">
            <Col md={6}>
              <h1 className="fw-bold">
                Mulai karirmu
                <br /> bersama{" "}
                <span className="text-secondary h1 fw-bold">Cooderu</span>
              </h1>
              <p className="fw-semi-bold mt-3">
                Asah potensi diri kamu menjadi developer handal bersama praktisi
                berpengalaman dan kembangkan karir digital kamu sekarang!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className="hanging-cards">
            {_headerCard.map((data, i) => (
              <Col key={i} md={3}>
                <Card className="h-100 py-4 pb-2">
                  <Card.Body>
                    <h5
                      className="fw-semibold bt-start"
                      style={{ borderColor: data.color }}
                    >
                      <span className="h5 ms-1 fw-bold">{data.title}</span>
                    </h5>
                    <p className="mt-3">{data.desc}</p>
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
            <h5 className="fw-normal text-primary">Mulai belajar sekarang</h5>
            <h2 className="fw-bold">Program Bootcamp</h2>
          </div>
          <Tab.Container defaultActiveKey="first">
            <Nav className="justify-content-center mt-3">
              <Nav.Item>
                <Nav.Link eventKey="first" className="custom-tabs">
                  <FaReact className="rci" /> Frontend
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="custom-tabs">
                  <FaNodeJs className="rci" /> Backend
                </Nav.Link>
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
                  <h5 className="fw-semi-bold text-primary">Silabus</h5>
                  <h4 className="fw-bold">Apa yang akan kamu pelajari?</h4>
                  <ul className="column mt-4 list-unstyled">
                    {_silabusFE.map((data, i) => (
                      <li key={i} className="mb-3">
                        <Card className="learning">
                          <Card.Body>
                            <FaGenderless className="rci text-primary me-2" />
                            {data}
                          </Card.Body>
                        </Card>
                      </li>
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
                    <Button variant="secondary text-white" className="mt-4">
                      Daftar Sekarang
                    </Button>
                  </Col>
                </Row>
                <div className="mt-4">
                  <h5 className="fw-semi-bold text-secondary">Silabus</h5>
                  <h4 className="fw-bold">Apa yang akan kamu pelajari?</h4>
                  <ul className="column mt-4 list-unstyled">
                    {_silabusFE.map((data, i) => (
                      <li key={i} className="mb-3">
                        <Card className="learning">
                          <Card.Body>
                            <FaGenderless className="rci text-secondary me-2" />
                            {data}
                          </Card.Body>
                        </Card>
                      </li>
                    ))}
                  </ul>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </section>
      <Container className="mt-5">
        <hr />
      </Container>
      <section className="py-5">
        <Container>
          <h5 className="text-secondary fw-semi-bold">Benefit</h5>
          <h3 className="fw-bold">Mengapa Cooderu?</h3>
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
          <h3 className="fw-bold">Daftar Batch Terbaru Sekarang!</h3>
          <p>Pendaftaran akan dibuka pada 5 November 2022</p>
          <Row className="mt-5">
            {_pricing.map((data, i) => (
              <Col key={i} md={4} className="text-start">
                <Card
                  className="pricing h-100"
                  style={{
                    borderTopColor: data.special ? "#9747FF" : "#EFA35E",
                  }}
                >
                  <Card.Body className="py-4">
                    <p className="fw-bold">
                      {data.title}
                      {data.special ? (
                        <Badge className="px-3 py-2">BEST DEAL</Badge>
                      ) : null}
                    </p>
                    <h6 className="strike">{data.out_price}</h6>
                    <h3 className="fw-bold">{data.price}</h3>
                    <hr />
                    <ul className="list-unstyled">
                      {data.benefits.map((data, i) => (
                        <li key={i} className="my-3">
                          <Image width={20} src={checkMark} alt="" />
                          <span className="ms-3">{data}</span>
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

      <section className="py-5">
        <Container className="my-5">
          <div className="text-center">
            <h2 className="fw-bold">Metode Pembayaran</h2>
            <p>
              Cooderu memudahkan kamu untuk memilih berbagai metode pembayaran
            </p>
          </div>
          <Row className="mt-5">
            {_payment.map((data, i) => (
              <Col key={i} md={3}>
                <Card
                  className="h-100 payment"
                  style={{ borderColor: `${data.style}` }}
                >
                  <Card.Body className="text-center py-4">
                    <Image
                      src={data.icon}
                      alt="icon"
                      className="mx-auto d-block"
                    />
                    <h5 className="fw-semibold my-4 px-2">{data.title}</h5>
                    <p>{data.desc}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="my-5">
        <Container>
          <div className="text-center">
            <h5 className="fw-semi-bold text-primary">Testimoni</h5>
            <h3 className="fw-bold">Apa Kata Alumni?</h3>
          </div>
          <Row className="justify-content-center mt-4">
            <Col md={4}>
              <Card>
                <Card.Body>
                  <div className="d-flex">
                    <img
                      src="https://via.placeholder.com/75"
                      alt=""
                      className="h-100 rounded-circle"
                    />
                    <div className="ms-3 mt-2">
                      <h6 className="mb-0">Oscar</h6>
                      <h6 className="mb-0">Alumni Batch I</h6>
                      <div style={{ color: "#F2C763" }}>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </div>
                  </div>
                  <h6 className="mt-4 fw-normal">
                    “Mentor berpengalaman dan cepat tanggap sangat membantu saya
                    untuk memahami setiap materi dan menyelesaikan masalah yang
                    saya temui selama mengikuti Bootcamp.“
                  </h6>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-5">
        <Container>
          <h2 className="fw-bold text-center">Tim Kami</h2>
          <Row className="justify-content-center">
            {_ourTeam.map((data, i) => (
              <Col key={i} md={2}>
                <Card className="h-100 py-4">
                  <Card.Body>
                    <Image src={data.image} alt={data.name} width={70} />
                    <h6 className="fw-semibold">{data.name}</h6>
                    <span>{data.desc}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="my-5">
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
