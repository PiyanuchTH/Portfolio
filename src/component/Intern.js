import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import intern from "../assets/img/intern.jpg";
export const Intern = () => {
  return (
    <section className="intern" id="experience">
      <Row>
        <Container style={{ width: "45%" }}>
          <Row>
            <div className="intern-bx">
              <Col>
                <TrackVisibility>
                  <div style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: "45px", fontWeight: 700 }}>
                      Work Experience
                    </h2>
                    <h1>Samsung SDS Global SCL (Thailand) Co.,Ltd </h1>
                    <p style={{ textAlign: "center" }}>
                      Programmer <br />
                      (February 2025 - December 2025)
                    </p>
                  </div>
                </TrackVisibility>
              </Col>
              <Row style={{ paddingTop: "30px" }}>
                <Col xs={12} md={12}>
                  <div style={{ padding: "20px" }}>
                    <p
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "Bold",
                      }}
                    >
                      Developed an internal PC-based web application used by
                      nationwide branches for order management, route planning,
                      and delivery cost calculation
                    </p>

                    <p style={{ textAlign: "left" }}>
                      Tech Stack: Angular, .NET Core, MS SQL Server Database,
                      API Google
                    </p>

                    <p style={{ textAlign: "left" }}>
                      ✔ Developed a branch-facing web system for order entry and
                      submission
                    </p>
                    <p style={{ textAlign: "left" }}>
                      ✔ Built an admin system to manage and consolidate orders
                      from multiple branches
                    </p>
                    <p style={{ textAlign: "left" }}>
                      ✔ Implemented automatic route grouping based on nearby
                      delivery areas
                    </p>
                    <p style={{ textAlign: "left" }}>
                      ✔ Integrated Google Maps and Distance Matrix API to
                      generate delivery routes and calculate travel distance and
                      duration
                    </p>
                    <p style={{ textAlign: "left" }}>
                      ✔ Developed Excel export reports for operational
                    </p>
                    <p style={{ textAlign: "left" }}>
                      ✔ Collaborated with cross-functional teams to support
                      logistics operation
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>

        <Container style={{ width: "45%" }}>
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
                      Internship as Front-End Developer at Minerta Technology
                      Co.,Ltd <br />
                      (November 27, 2023 - March 15, 2024)
                    </p>
                  </div>
                </TrackVisibility>
              </Col>
              <Row style={{ paddingTop: "30px" }}>
                <Col xs={12} md={5} style={{ padding: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingBottom: 40,
                    }}
                  >
                    <img
                      src={intern}
                      alt="intern"
                      style={{
                        width: "250px",
                        height: "352px",
                        //   borderRadius: 50,
                      }}
                    />
                  </div>
                </Col>
                <Col xs={12} md={7} style={{ padding: "20px" }}>
                  <div>
                    <p
                      style={{
                        textAlign: "left",
                        fontSize: "20px",
                        fontWeight: "Bold",
                      }}
                    >
                      The project to develop electronic service provision for
                      the public
                    </p>

                    <p style={{ textAlign: "left" }}>
                      Project to develop a web application interface that
                      connects citizens with officials within the organization.
                      Its purpose is to receive complaints, petitions, and other
                      activities from the public. It also includes a Back Office
                      system for efficient internal operations.
                      <br />
                      <br />
                      <p style={{ textAlign: "left" }}>
                        Tech Stack: Next.JS, Figma, Postman
                      </p>
                      ✔ Designed web applications for government agencies
                      according to received Terms of Reference, utilizing Figma
                      for the design process.
                    </p>
                    <p style={{ textAlign: "left" }}>
                      ✔ Developed web applications following the designs using
                      the Next.js framework along with Material UI library.
                    </p>
                    <p style={{ textAlign: "left" }}>
                      ✔ Connected APIs using RESTful API connection and HTTP
                      methods such as GET and POST.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </Row>

      <img className="background-image-left" src={colorSharp} alt="bg-img" />
    </section>
  );
};
