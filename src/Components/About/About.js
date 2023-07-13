import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../About/About.scss";
export const About = () => {
  
  return (
    <React.Fragment>
      <Container className="AboutMediaQuery">
        <Row className="paddingData">
          <Col lg={6} md={12} sm={12}>
            <div>
              <img
                alt="img"
                className="about-first-image"
                src="https://images.idgesg.net/images/article/2018/07/code_coding_javascript_laptop_by_clement_h_cc0_via_unsplash_1200x800-100763703-large.jpg?auto=webp&quality=85,70"
              />
            </div>
          </Col>

          <Col lg={6} md={12} sm={12}>
            <div className="aboutSecondColumnMainDiv">
              <h1 className="Heading">My Story</h1>
              <span>
                <img
                  alt="img"
                  className="about-second-image"
                  src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/happy-bearded-young-man.jpg"
                />
              </span>
            </div>
            <br />
            <div>
              <h1 className="about-heading">a little bit about Rashid</h1>
              <br />
              <p className="about-description-Text">
                I'm a Reactjs Developer. Designed this template in Reactjs.
                I have used ReactBootstrap,Sass,React Router DOM, Bootstrap 
                and also used media queries to handle responsiveness.
                Images are currently random but soon will be changed. 
                {/* This one-page HTML portfolio is provided by TemplateMo. This
                layout is based on Bootstrap v5.1.3 CSS and JS libraries. Image
                credits go to Unsplash and FreePik for images used in this page. */}
              </p>
              <p className="about-description-Text">
                You are allowed to use this template for your websites. You are
                not allowed to redistribute the template ZIP file on any other
                website. Please contact us for more info.
              </p>
            </div>
          </Col>
        </Row>
        
      </Container>
    </React.Fragment>
  );
};
