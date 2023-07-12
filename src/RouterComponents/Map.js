import React from "react";
import { Header } from "../Components/Header/Header.js";
import { Container, Row, Col } from "react-bootstrap";
import { SayHi } from "../Components/SayHi/SayHi.js";

 const Map = () => {
  return (
    <React.Fragment>
      <Header />
      <SayHi />

      <Container fluid className="MapContainerColor">
        <Row>
          <Col lg={2}/>
          <Col lg={8}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7057641.8143801065!2d63.70803221053095!3d30.262328131872888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1689051575220!5m2!1sen!2s"
              style={{ width: 1300, height: 700,marginTop:"10px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
          <Col lg={2}/>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Map;