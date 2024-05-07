import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import intern from "../assets/img/intern.jpg";
export const Intern = () => {
  
  return (
    <section className="intern" id="interns">
      <Container>
        <Row>
          <div className="intern-bx">
            <Col>
              <TrackVisibility>
                <div style={{ textAlign: "center" }}>
                  <h2 style={{ fontSize: "45px", fontWeight: 700 }}>
                    Internship Experience
                  </h2>
                  <h1>Minerta Technology co.,ltd</h1>
                </div>
              </TrackVisibility>
            </Col>
            <Row style={{ paddingTop: "30px" }}>
              <Col xs={12} md={5}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    src={intern}
                    alt="intern"
                    style={{
                      width: "365px",
                      height: "467px",
                      //   borderRadius: 50,
                    }}
                  />
                </div>
              </Col>
              <Col xs={12} md={7}>
                <div>
                  <p style={{ paddingTop: "50px", textAlign: "left" }}>
                    Internship as Front-End Developer <br />
                    (November 27, 2023 - March 15, 2024)
                  </p>

                  <p style={{ textAlign: "left" }}>
                    Detail :
                    <br />
                    <br />
                    ✔ Designed web applications for government agencies according
                    to
                    <br />
                    received Terms of Reference (TOR), utilizing Figma for the
                    design process.
                  </p>
                  <p style={{ textAlign: "left" }}>
                    ✔ Developed web applications following the designs using the
                    Next.js framework <br />
                    along with Material UI library.
                  </p>
                  <p style={{ textAlign: "left" }}>
                    ✔ Studied and implemented the use of React-quill, React-PDF,
                    and PDF-Lib libraries <br /> to integrate features like adding
                    logos and signatures.
                  </p>
                  <p style={{ textAlign: "left" }}>
                    ✔ Connected APIs using RESTful API connection and HTTP methods
                    such as GET and POST.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="bg-img"/>
    </section>
  );
};
