import { Container, Col, Row } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import profilepics from "../assets/img/profilepics.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const AboutMe = () => {
  return (
    <section id="aboutme" >
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{fontSize:'60px' , fontWeight:700 , paddingBottom: 50,paddingTop:50 }}>About Me</h2>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
        <Row style={{paddingBottom: 100}}>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div style={{paddingBottom:50}}
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    src={profilepics}
                    alt="Header Img"
                    style={{ width: "227.6px", height: "287.2px" }}
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
          <p style={{textAlign:"center",fontSize:25 , fontWeight:'bold'}}>Education</p>
            <p style={{textAlign:"left"}}>
              Bachelor of Computer Engineering and Informatics at
              Kasetsart University Si Racha Campus (2020 - 2024)
              <br/> GPAX: 2.79 
            </p>
            <p style={{textAlign:"left"}}>Secondary Education at Satri Phatthalung School (2014 - 2019)</p>

            <p style={{textAlign:"center",fontSize:25 , fontWeight:'bold',paddingTop:20}}>Contact</p>
            <p style={{textAlign:"left"}}> <BsFillTelephoneFill style={{marginRight:20}}/>0980915461</p>
            <p style={{textAlign:"left"}}> <MdEmail style={{marginRight:20}} />deardear060344@gmail.com</p>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-img"></img>
    </section>
  );
};
