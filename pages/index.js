import Head from "next/head";
import { Card, Col, Container, Row } from "react-bootstrap";
import NavbarApp from "../components/NavbarApp";

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
            <Col md={3}>
              <Card>
                <Card.Body>
                  <h4 className="fw-semibold">Kurikulum Terbaru</h4>
                  <p>
                    Anda akan belajar bersama instruktur yang berpengalaman
                    sehingga memudahkan Anda untuk memahami dengan cepat.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
