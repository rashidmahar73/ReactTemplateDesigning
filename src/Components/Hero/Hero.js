import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Hero/Hero.scss";
export const Hero = () => {
  return (
    <React.Fragment>
      <Container fluid className="HeroContainer">
        <Row>
          <Col lg={7} md={12} sm={12} className="HeroForMediaQuery">
            <div className="HeroMainDiv">
              <span>
                <img
                  alt="img"
                  className="heroMainFirstImage"
                  src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/happy-bearded-young-man.jpg"
                />
                <span className="HeroHeading"> Hello friend! </span>
              </span>
            </div>
            <div className="HeroDescriptionDiv">
              <span className="HeroDescription">I'm available for freelance work.</span>
            </div>
            <div className="HeroButtonDiv">
              <Button variant="outline-success" className="Hero-Btn">
                Let's begin
              </Button>
            </div>
          </Col>
          <Col lg={5} sm={12} md={12}>
            <div className="heroSecondColumnImageDiv">
              <img
                alt="img"
                className="heroSecondImage"
                src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/portrait-happy-excited-man-holding-laptop-computer.png"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
