import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import javascriptlogo from "../assets/img/javascriptlogo.png";
import angularlogo from "../assets/img/Angular.png";
import htmllogo from "../assets/img/htmllogo.png";
import CSSlogo from "../assets/img/CSSlogo.png";
import reactlogo from "../assets/img/reactlogo.png";
import nextlogo from "../assets/img/nextlogo.png";
import bootstraplogo from "../assets/img/bootstraplogo.png";
import materiallogo from "../assets/img/materiallogo.png";
import figmalogo from "../assets/img/figmalogo.png";
import postman from "../assets/img/postman.png";
import vscodelogo from "../assets/img/vscodelogo.png";
import gitlogo from "../assets/img/gitlogo.png";
import StarsCanvas from "../component/Stars";
import dotnetcorelogo from "../assets/img/net_core_logo.png";
import sqllogo from "../assets/img/sql-logo.png";
import sqlserverlogo from "../assets/img/microsoft-sql-server-logo.png";

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
            <Row style={{  paddingTop: 130, paddingBottom:90 }}>
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
               
              </Col>

              <Col xs={12} md={7} style={{paddingTop:'20px' }}>
                <Row style={{ marginRight: "10px" , justifyContent:'center'}}>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 140,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={angularlogo}
                      alt="angularlogo"
                      style={{ width: "35px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10, color: "#fff" }}>Angular.TS</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                    <h3 style={{ margin: 10, color: "#fff" }}>React.JS</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                    <h3 style={{ margin: 10, color: "#fff" }}>Next.JS</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                    <h3 style={{ margin: 10, color: "#fff" }}>JavaScript</h3>
                  </div>
                  

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                    <h3 style={{ margin: 10, color: "#fff" }}>HTML</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                    <h3 style={{ margin: 10, color: "#fff" }}>CSS</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                    <h3 style={{ margin: 10, color: "#fff" }}>Bootstrap</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 160,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={materiallogo}
                      alt="materiallogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10, color: "#fff" }}>Material UI</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 100,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={dotnetcorelogo}
                      alt="dotnetcorelogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10, color: "#fff" }}>.Net core</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 100,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={sqllogo}
                      alt="sqllogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10, color: "#fff" }}>SQL</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 170,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={sqlserverlogo}
                      alt="sqlserverlogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10, color: "#fff" }}>MS SQL Server</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                    <h3 style={{ margin: 10, color: "#fff" }}>Figma</h3>
                  </div>

                <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderRadius: 50,
                      paddingTop: 5,
                      paddingBottom: 5,
                      paddingLeft: 15,
                      width: 160,
                      marginRight: 10,
                    }}
                  >
                    <img
                      src={vscodelogo}
                      alt="vscodelogo"
                      style={{ width: "30px", height: "30px" }}
                    />
                    <h3 style={{ margin: 10, color: "#fff" }}>VS Code</h3>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                    <h3 style={{ margin: 10 , color: "#fff"}}>Postman</h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
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
                    <h3 style={{ margin: 10, color: "#fff" }}>Git</h3>
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
