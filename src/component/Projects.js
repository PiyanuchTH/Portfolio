import { Container, Col, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import topgun1 from "../assets/img/topgun1.jpg";
import carla2 from "../assets/img/carla2.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Hackathonku from "../assets/img/Hackathonku.jpg";
import embeded1 from "../assets/img/embeded1.jpg";
import hydroponic from "../assets/img/hydroponic.jpg"
import cer1 from "../assets/img/cer1.jpg"
import cer2 from "../assets/img/cer2.jpg"
import cer3 from "../assets/img/cer3.jpg"
import se from "../assets/img/se.jpg"
import innovative from "../assets/img/innovative.jpg"
import computersecur from "../assets/img/computersecur.jpg"
import mobiledev from "../assets/img/mobiledev.jpg"
import { useState } from "react";
export const Projects = () => {
  const projects = [
    {
      title: "Top Gun Rally 16th",
      description:
        "Organized by TESA and Chitralada Institute of Technology (CDTI)",
      imgUrl: topgun1,
    },
  ];

  const projects2 = [
    {
      title: "Carla Contest",
      description:
        "Organized by NETH and TDET in collaboration with the TESA and the Faculty of Engineering Kasetsart University Bangkhen Campus",
      imgUrl: carla2,
    },
  ];

  const projects3 = [
    {
      title: "Young Socialpreneur Hackathon",
      description: "Organized by Kasetsart University Si Racha Campus",
      imgUrl: Hackathonku,
    },
  ];

  const projects4 = [
    {
      title: "Intro to Embedded System ",
      description: "Door Alarm Project (IoT)",
      imgUrl: embeded1,
    },
  ];

  const projects5 = [
    {
      title: "	Exploratory Project in Computing",
      description: "Smart Plant Project : Lazy Hydroponic (IoT)",
      imgUrl: hydroponic,
    },
  ];
  
  const projects6 = [
    {
      title: "Mobile Application Development",
      description: "Project : Find Your Best Place For You (Application)",
      imgUrl: mobiledev,
    },
  ];
  const projects7 = [
    {
      title: "Software Engineer",
      description: "EV Car Simulator Project (Website & Game)", 
      imgUrl: se,
    },
  ];
  const projects8 = [
    {
      title: "Computer Security",
      description: "Login System Project",
      imgUrl: computersecur,
    },
  ];
  const projects9 = [
    {
      title: "Innovative Thinking",
      description: "KU Passadu Project (UX/UI Design)",
      imgUrl: innovative,
    },
  ];
  const projects10 = [
    {
      title: "Reponsive Web Design",
      description: "FreeCodeCamp",
      imgUrl: cer1,
    },
  ];
  const projects11 = [
    {
      title: "Top Gun Rally 16th",
      description: "Organized by TESA and Chitralada Institute of Technology (CDTI)",
      imgUrl: cer2,
    },
  ];
  const projects12 = [
    {
      title: "Young Socialpreneur Hackathon",
      description: "Organized by Kasetsart University Si Racha Campus",
      imgUrl: cer3,
    },
  ];

  
  const [activeKey, setActiveKey] = useState("first");
  
  const handleSelect = (key) => {
    console.log(key);
    setActiveKey(key);
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12} style={{paddingBottom:40}}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2 style={{paddingBottom:20}} >Project</h2>



                  <Tab.Container id="projects-tabs" defaultActiveKey="first" activeKey={activeKey} onSelect={handleSelect}>
                    <Nav
                      variant="pills"
                      className="mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ background: activeKey === "first" ? 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' : '', fontSize: '15px' }}>
                          Participating Competitions
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" style={{ background: activeKey === "second" ? 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' : '', fontSize: '15px'  }}>
                          Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" style={{ background: activeKey === "third" ? 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)' : '', fontSize: '15px'  }}>
                          Certificates</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                          {projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                          {projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects4.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          {projects5.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          {projects6.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          {projects7.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          {projects8.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          {projects9.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects10.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          {projects11.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                          {projects12.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bg-img"></img>
    </section>
  );
};
