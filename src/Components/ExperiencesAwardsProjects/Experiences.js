import React from "react";
import { Row, Col } from "react-bootstrap";
import "../ExperiencesAwardsProjects/Experiences.scss";
export const Experiences = () => {
  return (
    <React.Fragment>
      <Row >
        <Col
          lg={6}
          md={6}
          sm={6}
          style={{
            borderBottom: "1px solid",
            borderRight: "1px solid",
            borderColor: "#e9eaeb",
          }}
          className="ExperienceColFirstMediaQuery"
        >
          <div className="experienceText">
          <span className="experienceHeading">7+</span>
          <p className="exprienceDetail">Months of Experiences</p>
          </div>
        </Col>
        <Col
          lg={6}
          md={6}
          sm={6}
          style={{ borderBottom: "1px solid", borderColor: "#e9eaeb" }}
          className="ExperienceColSecondMediaQuery"
        >
          <div className="experienceText">
          <span className="experienceHeading">3</span>
          <p className="exprienceDetail"> Happy TeamLeads</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col
          lg={6}
          md={6}
          sm={6}
          style={{ borderRight: "1px solid", borderColor: "#e9eaeb" }}
          className="ExperienceColFirstMediaQuery"
        >
          <div className="experienceText">
          <span className="experienceHeading">5+</span>
          <p className="exprienceDetail">Project Finished</p>
          </div>
        </Col>
        <Col lg={6} md={6} sm={6} className="ExperienceColSecondMediaQuery"> 
        <div className="experienceText">
          <span className="experienceHeading">0</span>
          <p className="exprienceDetail">Unawarded</p>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};
