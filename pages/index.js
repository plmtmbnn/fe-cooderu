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
  Accordion,
  useAccordionButton,
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
  _almusnus,
  _faq,
  _logoPartner,
} from "../static";

// images
import imgReact from "../public/react-logo.png";
import imgNode from "../public/node-logo.png";
import checkMark from "../public/checkmark.svg";
import { FaReact, FaNodeJs, FaGenderless, FaStar } from "react-icons/fa";

import alumnusOne from '../public/testimonial/testimonial-user-01.png';
import alumnusTwo from '../public/testimonial/testimonial-user-02.png';
import alumnusThree from '../public/testimonial/testimonial-user-03.png';

import BackToTop from './components/BackToTop';
import Link from "next/link";

const alumnus = {
  0: alumnusOne,
  1: alumnusTwo,
  2: alumnusThree
}
export default function Home() {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
      <Card.Header
        className="border-bottom-0 py-3 pointer-event"
        onClick={decoratedOnClick}
      >
        <span className="fw-semi-bold">{children}</span>
      </Card.Header>
    );
  }

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
        <link rel="icon" href="/favicon.png" />
        <meta name="description"
          content="cooderu.com , bootcamp frontend, bootcamp backend, belajar coding, belajar programming, kursus programing" />
        <meta property="og:title" content="cooderu.com - Online Bootcamp - Belajar Coding" />
        <meta property="og:description"
          content="cooderu.com , bootcamp frontend, bootcamp backend, belajar coding, belajar programming, kursus programing"/>
        <meta property="og:url" content="https://cooderu.com/"/>
        <meta property="og:type" content="website"></meta>
      </Head>
      <BackToTop />
      <NavbarApp />
      <section className="py-5 bg-header">
        <Container>
          <Row className="py-10">
              <Col md={6}>
                  <h1 className="fw-bold">
                    Telah dibuka Bootcamp
                    <br /> Batch 3{" "}
                    <span className="text-secondary h1 fw-bold">Cooderu</span>
                  </h1>
                  <p className="fw-semi-bold mt-3">
                    Asah potensi diri kamu menjadi developer handal bersama praktisi
                    berpengalaman dan kembangkan karir digital kamu dan daftar sekarang!
                    <hr/>
                    Kelas akan mulai 30 Januari 2023
                  </p>
                  <div>
                  <a
                      href="https://linktr.ee/cooderu"
                      className="btn btn-primary text-white ms-0 ms-lg-3"
                      target={'_blank'} rel="noreferrer"
                      style={{ background: '#aed033', border: '0px'}}
                    >
                      Daftar Sekarang
                    </a>
                  </div>
              </Col>
            <Col md={6} hidden>
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
              <Col key={i} md={3} className="my-2">
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
      <section className="mt-5" id='our-program'>
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
                      className="img-fluid m-auto py-4 px-5"
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
                    <Link target={'_blank'} href="https://linktr.ee/cooderu">
                      <Button className="mt-4">Daftar Sekarang</Button>
                    </Link>
                    
                  </Col>
                </Row>
                <div className="mt-4">
                  <h5 className="fw-semi-bold text-primary">Silabus</h5>
                  <h4 className="fw-bold">Apa yang akan kamu pelajari?</h4>
                  <ul className="column mt-4 list-unstyled learn-ul">
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
                      className="img-fluid m-auto py-4 px-5"
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
                    <Link target="_blank" href="https://linktr.ee/cooderu">
                     <Button variant="secondary text-white" className="mt-4">
                      Daftar Sekarang
                    </Button></Link>
                  </Col>
                </Row>
                <div className="mt-4">
                  <h5 className="fw-semi-bold text-secondary">Silabus</h5>
                  <h4 className="fw-bold">Apa yang akan kamu pelajari?</h4>
                  <ul className="column mt-4 list-unstyled learn-ul">
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
      <section className="py-5" id='benefit'>
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
      <section id='price'>
        <Container className="text-center">
          <h5>Biaya Bootcamp</h5>
          <h3 className="fw-bold">Daftar Batch Terbaru Sekarang!</h3>
          <p>Pendaftaran akan dibuka pada 5 November 2022</p>
          <Row className="mt-lg-5 mt-3">
            {_pricing.map((data, i) => (
              <Col key={i} md={4} className="text-start my-3">
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
                  <Link target="_blank" href="https://linktr.ee/cooderu">
                    <Button>Daftar sekarang</Button>
                  </Link>
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
              <Col key={i} md={3} className="my-2">
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
            {_almusnus.map((data, i) => (
              <Col md={3} key={i} className="my-2">
                <Card className="alumnus">
                  <Card.Body>
                    <div className="d-flex">
                      <Image
                        src={alumnus[i]}
                        alt=""
                        className="h-50 rounded-circle"
                        style={{width: '60px'}}
                      />
                      <div className="ms-3 mt-2">
                        <h6 className="mb-0">{data.name}</h6>
                        <h6 className="mb-0">{data.almnus}</h6>
                        <div style={{ color: "#F2C763" }}>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                    </div>
                    <h6 className="mt-4 fw-normal">{data.desc}</h6>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="my-5">
        <Container>
          <h2 className="fw-bold text-center">Tim Kami</h2>
          <Row className="justify-content-center">
            {_ourTeam.map((data, i) => (
              <Col key={i} md={2} xs={6}>
                <Card className="h-100 py-4 border-0">
                  <Image
                    variant="top"
                    src={data.image}
                    alt="team"
                    className="mx-auto"
                  />
                  <Card.Body className="text-center">
                    <h6 className="fw-semibold">{data.name}</h6>
                    <span>{data.desc}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-info">
        <Container>
          <div className="text-center mb-4">
            <h2 className="fw-bold">FAQ</h2>
            <span>
              Kamu juga bisa menghubungi kami untuk mengetahui
              <br /> informasi lebih lanjut
            </span>
          </div>

          <Accordion defaultActiveKey="0">
            <Row>
              {_faq.map((data, i) => (
                <Col md={6} key={i}>
                  <Card className="my-3">
                    <CustomToggle eventKey={i}>{data.ask}</CustomToggle>
                    <Accordion.Collapse eventKey={i}>
                      <Card.Body>
                        <h6>{data.answer}</h6>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Col>
              ))}
            </Row>
          </Accordion>

          <div className="text-center mt-5 mb-4">
            <h2 className="fw-bold">Partner Kami</h2>
            <span>Kami berkolaborasi untuk membuat dampak bagi orang lain</span>
            <ul className="list-unstyled mt-5">
              {_logoPartner.map((data, i) => (
                <li key={i} className="d-inline mx-4 clients">
                  <Image width={"100%"} src={data} alt="" />
                </li>
              ))}
            </ul>
            <p className="fw-bold mt-4">dan 20+ partner kami lainnya.</p>
          </div>
        </Container>
      </section>
      <FooterApp />
    </>
  );
}
