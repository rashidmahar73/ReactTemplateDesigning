import React from "react";
import { Header } from "../Components/Header/Header.js";
import { SayHi } from "../Components/SayHi/SayHi.js";
import { Container } from "react-bootstrap";
const ContactRender = () => {
  return (
    <React.Fragment>
      <Container fluid className="ProjectSectionColor">
        <Header />
      </Container>
      <Container fluid className="ProjectSectionColor">
        <SayHi />
      </Container>
    </React.Fragment>
  );
};
export default ContactRender;
