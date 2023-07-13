import { Container, Row, Col } from "react-bootstrap";
import { Services } from "../Services/Services.js";
import { Header } from "../Header/Header.js";
import React from "react";
import "../DesigningCompoenents/HomeComponent.scss";
import TableData from "../Table/Table.js";
import { Hero } from "../Hero/Hero.js";
import { About } from "../About/About.js";
import { Companies } from "../Companies/Companies.js";
import { Experiences } from "../ExperiencesAwardsProjects/Experiences.js";
import { ProjectsSection } from "../ProjectsSection/ProjectsSection.js";
import { SayHi } from "../SayHi/SayHi.js";
import img from "./wave.svg";
const HomeComponent = () => {
  return (
    <React.Fragment>
      <Header />
      <Container fluid className="gx-0 designingComponentContainer">
        <img src={img} className="mainContainerBgSvg" />
        <Hero />
      </Container>
      <Container fluid className="AboutMainContainer">
        <About />
        <Row className="experienceRowBackgroundColor">
          <Col lg={6} sm={10} md={10} className="ExperiencesAndTable">
            <TableData />
          </Col>
          <Col lg={6} className="ExperiencesAndTable">
            <Experiences />
          </Col>
        </Row>
      </Container>
      <Container fluid className="AboutMainContainer">
        <Companies />
      </Container>
      <Services />
      <Container fluid className="ProjectSectionColor">
        <ProjectsSection />
      </Container>
      <SayHi />
    </React.Fragment>
  );
};
export default HomeComponent;
