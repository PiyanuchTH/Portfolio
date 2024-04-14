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
      title: "Intro to Embedded System",
      description: "Door Alarm Project ",
      imgUrl: embeded1,
    },
  ];

  const projects5 = [
    {
      title: "	Exploratory Project in Computing",
      description: "Smart Plant : Lazy Hydroponic",
      imgUrl: hydroponic,
    },
  ];
  // const projects6 = [
  //   {
  //     title: "	Exploratory Project in Computing",
  //     description: "Smart Plant : Lazy Hydroponic",
  //     imgUrl: hydroponic,
  //   },
  // ];
  const projects7 = [
    {
      title: "Reponsive Web Design",
      description: "FreeCodeCamp",
      imgUrl: cer1,
    },
  ];
  const projects8 = [
    {
      title: "Top Gun Rally 16th",
      description: "Organized by TESA and Chitralada Institute of Technology (CDTI)",
      imgUrl: cer2,
    },
  ];
  const projects9 = [
    {
      title: "Young Socialpreneur Hackathon",
      description: "Organized by Kasetsart University Si Racha Campus",
      imgUrl: cer3,
    },
  ];

  return (
    <section className="projects" id="projects">
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
                  <h2 style={{fontSize:'45px' , fontWeight:700}}>Project</h2>
                  <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Participating Competitions
                          {/* Competition experience   */}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Project</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certificates</Nav.Link>
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
                          {/* {projects6.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })} */}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
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
                      {/*<Tab.Pane eventKey="third">
                                            <Row>
                                                    {
                                                        projects3.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
