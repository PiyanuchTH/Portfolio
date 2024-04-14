import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import javascriptlogo from "../assets/img/javascriptlogo.png";
import htmllogo from "../assets/img/htmllogo.png";
import CSSlogo from "../assets/img/CSSlogo.png";
import reactlogo from "../assets/img/reactlogo.png";
import nextlogo from "../assets/img/nextlogo.png";
import bootstraplogo from "../assets/img/bootstraplogo.png";
import materiallogo from "../assets/img/materiallogo.png";
import figmalogo from "../assets/img/figmalogo.png";
import photoshoplogo from "../assets/img/photoshoplogo.png";
import { Tilt } from "react-tilt";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <div className="skill-bx">
            <Col>
              <h2>Skills</h2>
            </Col>
            <Row style={{ paddingTop: "60px" }}>
              <Col xs={12} md={4}>
                <div style={{ display: "contents", alignContent: "center" }}>
                  <p>JavaScript</p>
                  <img
                    src={javascriptlogo}
                    alt="javascriptlogo"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={4} >
                <Tilt>
                  <div
                    style={{
                      borderWidth: "4px",
                      borderRadius: "20PX", // Rounded corners
                      borderStyle: "solid",
                      borderImage: "linear-gradient(to bottom, blue, purple) 1",
                      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)", // Drop shadow
                      padding: "20px 0",
                    }}
                  >
                    <p>HTML</p>

                    <img
                      src={htmllogo}
                      alt="htmllogo "
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={4}>
                <div>
                  <p>CSS</p>
                  <img
                    src={CSSlogo}
                    alt="CSSlogo"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div>
                  <p>React.js</p>
                  <img
                    src={reactlogo}
                    alt="reactlogo"
                    style={{ width: "110px", height: "100px" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div>
                  <p>Next.js</p>
                  <img
                    src={nextlogo}
                    alt="nextlogo"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div>
                  <p>Bootstrap</p>
                  <img
                    src={bootstraplogo}
                    alt="bootstraplogo"
                    style={{ width: "120px", height: "100px" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <Tilt>
                  <div>
                    <p>Material UI</p>
                    <img
                      src={materiallogo}
                      alt="materiallogo"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={4}>
                <div>
                  <p>Figma</p>
                  <img
                    src={figmalogo}
                    alt="figmalogo"
                    style={{ width: "80px", height: "100px" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div>
                  <p>Photoshop</p>
                  <img
                    src={photoshoplogo}
                    alt="photoshoplogo"
                    style={{ width: "170px", height: "100px" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
