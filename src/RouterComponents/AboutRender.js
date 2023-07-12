import React from "react";
import { About } from "../Components/About/About.js";
import { Header } from "../Components/Header/Header.js";
import { SayHi } from "../Components/SayHi/SayHi.js";
import { Container } from "react-bootstrap";
 const AboutRender = () => {

  return (
    <React.Fragment>
      <Header />
      <Container fluid className="AboutMainContainer">
      <About />
      <SayHi />
      </Container>
    </React.Fragment>
  );
};
export default AboutRender;