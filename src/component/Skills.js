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
import vuelogo from "../assets/img/vuelogo.png";
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
            <Row >
              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ display: "contents" }}>
                    <div style={{ paddingTop: 50 }}>
                      <img
                        src={javascriptlogo}
                        alt="javascriptlogo"
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ paddingTop: 50 }}>
                    <img
                      src={htmllogo}
                      alt="htmllogo "
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ paddingTop: 50 }}>
                    <img
                      src={CSSlogo}
                      alt="CSSlogo"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ paddingTop: 50 }}>
                    <img
                      src={reactlogo}
                      alt="reactlogo"
                      style={{ width: "110px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ paddingTop: 50 }}>
                    <img
                      src={nextlogo}
                      alt="nextlogo"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ paddingTop: 50 }}>
                    <img
                      src={vuelogo}
                      alt="vuelogo"
                      style={{ width: "120px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>

              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ paddingTop: 50 }}>
                    <img
                      src={bootstraplogo}
                      alt="bootstraplogo"
                      style={{ width: "120px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ paddingTop: 50 }}>
                    <img
                      src={materiallogo}
                      alt="materiallogo"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ paddingTop: 50 }}>
                    <img
                      src={figmalogo}
                      alt="figmalogo"
                      style={{ width: "80px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
              <Col xs={12} md={2}>
                <Tilt>
                  <div style={{ paddingTop: 50 }}>
                    <img
                      src={photoshoplogo}
                      alt="photoshoplogo"
                      style={{ width: "170px", height: "100px" }}
                    />
                  </div>
                </Tilt>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
