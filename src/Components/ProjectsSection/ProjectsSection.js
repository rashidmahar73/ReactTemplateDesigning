import React from "react";
import "../ProjectsSection/ProjectsSection.scss";
import { Row, Col, Container } from "react-bootstrap";
export const ProjectsSection = () => {
  return (
    <React.Fragment>
      <Container >
        <Row>
          <Col lg={4} sm={1} md={4} />
          <Col lg={8} md={8} sm={11}>
            <div className="globalClassForThisGreenColor projectsMainDiv mb-5 mt-5">
              <img
                className="projects-Card-image"
                alt="img"
                src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/white-desk-work-study-aesthetics.jpg"
              />
              <h1 className="projectsHeading">Projects</h1>
            </div>
          </Col>
        </Row>
        <Row>
          {/* <Col sm={2}/> */}
          <Col lg={4} sm={8} md={6}>
            <div className="projectsCardMainDiv mb-5">
              <div
                className="projectsContentDivs"
              >
                <span className="projectCardHeading">branding</span>
                <h2 className="projectCardSubHeading">Zoik agency</h2>
                <img
                  alt="img"
                  src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/projects/nikhil-KO4io-eCAXA-unsplash.jpg"
                  className="card-Image"
                />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={8} md={6}>
            <div className="projectsCardMainDiv darkModeClass">
              <div
                className="projectsContentDivs "
                // style={{ backgroundColor: "#f9f9f9" }}
              >
                <span className="projectCardHeading">PHOTOGRAPHY</span>
                <h2 className="projectCardSubHeading">The Watch</h2>
                <img
                  alt="img"
                  src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/projects/the-5th-IQYR7N67dhM-unsplash.jpg"
                  className="card-Image"
                />
              </div>
            </div>
          </Col>
          <Col lg={4} sm={8} md={6} className="mb-5">
            <div className="projectsCardMainDiv">
              <div
                className="projectsContentDivs"
                style={{ backgroundColor: "#f9f9f9" }}
              >
                <span className="projectCardHeading">WEBSITE</span>
                <h2 className="projectCardSubHeading">Polo</h2>
                <img
                  alt="img"
                  src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg"
                  className="card-Image"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
