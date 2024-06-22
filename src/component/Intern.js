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
                  <p style={{ textAlign: "center" }}>
                    Internship as Front-End Developer at Minerta Technology co.,ltd <br />
                    (November 27, 2023 - March 15, 2024)
                  </p>
                </div>
              </TrackVisibility>
            </Col>
            <Row style={{ paddingTop: "30px" }}>
              <Col xs={12} md={5}>
                <div style={{ display: "flex", justifyContent: "center", paddingBottom: 40  }}>
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
                  
                  <p style={{ textAlign: "left",fontSize:'20px', fontWeight:'Bold' }}>The project to develop eletronic service provision for the public</p>

                  <p style={{ textAlign: "left" }}>
                    This project is a government project to develop a web application interface that<br />
                    connects citizens with officials within the organization. Its purpose is to receive<br />
                    various complaints, petitions, and other activities from the public. It also includes<br />
                    a Back Office system for efficient internal operations, allowing officials to work  <br />
                    swiftly. Additionally, it enables the generation of complaint reports and updating<br />
                    various documents of the organization on the website.
                    <br />
                    <br />
                    <p style={{ textAlign: "left" }}>The assigned task :</p>
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
