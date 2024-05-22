import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
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
import postman from "../assets/img/postman.png";
import vscodelogo from "../assets/img/vscodelogo.png";
import gitlogo from "../assets/img/gitlogo.png";
import StarsCanvas from "../component/Stars";
export const Skills = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const speed = 200;
  const pauseDuration = 2000;

  const content = "My Skills";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < content.length) {
        setText((prevText) => prevText + content[index]);
        setIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval); // Clear the interval
        setTimeout(() => {
          setText(""); // Clear the text
          setIndex(0); // Reset the index
        }, pauseDuration);
      }
    }, speed);

    // Clear the interval when the component unmounts
    return () => clearInterval(typingInterval);
  }, [index, content, speed, pauseDuration]);

  return (
    <section className="skill" id="skill">
      <Container>
        <Row>
          <div>
            <Row style={{  paddingTop: 130 }}>
              <Col
                xs={12}
                md={5}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column"
                }}
              >
                  <h2 className="typing-text">{text}</h2>
                  <h4>I'm skilled Front-End Developer with experience in<br/>
                    JavaScript, HTML, and CSS. I have utilized libraries and
                    frameworks such as  React.js, Next.js, Vue.js,<br/> Bootstrap, and Material UI.
                    I'm a fast learner and<br/> always eager to expand my knowledge.</h4>
               
              </Col>

              <Col xs={12} md={7}>
                <Row style={{ marginRight: "10px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 150,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={javascriptlogo}
                      alt="javascriptlogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>JavaScript</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 110,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={htmllogo}
                      alt="htmllogo "
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>HTML</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 100,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={CSSlogo}
                      alt="CSSlogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>CSS</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 140,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={reactlogo}
                      alt="reactlogo"
                      style={{ width: "35px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>React.JS</h3>
                  </div>
                </Row>
                <Row style={{ paddingTop: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 130,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={nextlogo}
                      alt="nextlogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>Next.JS</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 140,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={vuelogo}
                      alt="vuelogo"
                      style={{ width: "40px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>Vue.JS</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 145,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={bootstraplogo}
                      alt="bootstraplogo"
                      style={{ width: "50px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>Bootstrap</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 156,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={materiallogo}
                      alt="materiallogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>Material UI</h3>
                  </div>
                </Row>
                <Row style={{ paddingTop: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 110,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={figmalogo}
                      alt="figmalogo"
                      style={{ width: "25px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>Figma</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 170,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={photoshoplogo}
                      alt="photoshoplogo"
                      style={{ width: "90px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10  }}>Photoshop</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 140,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={vscodelogo}
                      alt="vscodelogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>VS Code</h3>
                  </div>
                </Row>
                <Row style={{ paddingTop: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 140,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={postman}
                      alt="postman"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>Postman</h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 100,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={gitlogo}
                      alt="gitlogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10 }}>Git</h3>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} /> */}
      <StarsCanvas />
    </section>
  );
};
