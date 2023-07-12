import React from "react";
import TableData from "../Components/Table/Table.js";

import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../Components/Header/Header.js";
import { Experiences } from "../Components/ExperiencesAwardsProjects/Experiences.js";
import { Companies } from "../Components/Companies/Companies.js";
import { SayHi } from "../Components/SayHi/SayHi.js";
const ExperiencesRender = () => {
  return (
    <React.Fragment>
      <Header />
      <Container fluid className="ProjectSectionColor">
        <Row>
          <Col
            lg={6}
            sm={10}
            md={10}
            style={{
              paddingTop: "10%",
              paddingBottom: "5%",
              paddingLeft: "60px",
            }}
          >
            <TableData />
          </Col>
          <Col lg={6} style={{ paddingTop: "10%", paddingBottom: "5%" }}>
            <Experiences />
          </Col>
        </Row>
      </Container>
      <Container fluid className="ProjectSectionColor">
        <Companies />
      </Container>
      <SayHi />
    </React.Fragment>
  );
};
export default ExperiencesRender;
