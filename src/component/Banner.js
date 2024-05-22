import { useState } from "react";
import { Container, Row, Col, Nav} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import womendeveloper from "../assets/img/womendeveloper.png";

export const Banner = () => {
  const [activeLink, setActiveLink] = useState("home");

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <section className="banner" id="home" style={{ paddingBottom: 100 }}>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hello I'm Piyanuch`}</h1>
                  <p>
                    I would like to be a Front-End Developer or UX/UI Designer.
                  </p>
                  <Nav.Link
                    href="#aboutme"
                    className={
                      activeLink === "aboutme"
                        ? "active navbar-link"
                        : "navbar-link"
                    }
                    onClick={() => onUpdateActiveLink("aboutme")}
                  > 
                    <div style={{paddingTop:60,paddingLeft:20 ,display: "flex",
                  alignItems: 'center',
                  justifyContent: 'flex-start',}}>
                      <button>
                      Let's get to know me
                      <ArrowRightCircle size={25} />
                    </button>
                    </div>
                    
                  </Nav.Link>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={womendeveloper} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
