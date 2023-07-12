import React from "react";
import "../Services/Services.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faG } from "@fortawesome/free-solid-svg-icons";

export const Services = () => {
  return (
    <React.Fragment>
      <Container
        fluid
       className="servicesContainerColor"
      >
        <Container className="ServicesHeadingContainerMediaQuery">
        <Row>
          <Col lg={1} md={2} sm={2} />
          <Col lg={10} sm={12} md={10} className="ServicesMediaQuery">
            <div className="globalClassForThisGreenColor servicesMainDiv mb-5 mt-5 ">
              <img
                className="services-image"
                alt="img"
                src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/handshake-man-woman-after-signing-business-contract-closeup.jpg"
              />
              <h1 className="servicesHeading">Services</h1>
            </div>
          </Col>
          <Col lg={1}/>
        </Row>
        <Row >
          <Col lg={1} md={1} sm={1} />
          <Col lg={5} md={12} sm={12}>
            <div className="servicesCard">
              <div className="servicesCardMainDiv">
                <h1 className="cardHeading">Websites</h1>
                <p className="cardPriceDesign">$2,400</p>
                <div class="services-price-overlay"></div>
              </div>
              <p className="cardDescriptionText">
              <hr className="hrWidth" />
                You may want to explore Too CSS for great collection of free
                HTML CSS templates.
              </p>
              <Button
                variant="light"
                className="Services-card-btn"
                bsSize="large"
              >
                Discover More
              </Button>
              <div className="services-icon-wrap">
                <FontAwesomeIcon icon={faGlobe} className="icon" />
              </div>
            </div>
          </Col>
          <Col lg={5} md={12} sm={12}>
            <div className="servicesCard secondMediaQuery">
              <div className="servicesCardMainDiv">
                <h1 className="cardHeading">Branding</h1>
                <p className="cardPriceDesign">$1,200</p>
                <div class="services-price-overlay"></div>
              </div>
              <p className="cardDescriptionText">
              <hr className="hrWidth" />
                You can explore more CSS templates on TemplateMo website by
                browsing through different tags.
              </p>
              <Button
                variant="light"
                className="Services-card-btn"
                bsSize="large"
              >
                Discover More
              </Button>
              <div className="services-icon-wrap">
                <FontAwesomeIcon icon={faLightbulb} className="icon" />
              </div>
            </div>
          </Col>
          <Col lg={1} md={1} sm={1} />
        </Row>
        <Row>
          <Col lg={1} sm={1} md={1} />
          <Col lg={5} md={12} sm={12}>
            <div className="servicesCard">
              <div className="servicesCardMainDiv">
                <h1 className="cardHeading">Ecommerce</h1>
                <p className="cardPriceDesign">$3,600</p>
                <div class="services-price-overlay"></div>
              </div>
              <p className="cardDescriptionText">
              <hr className="hrWidth" />
                If you need a customized ecommerce website for your business,
                feel free to discuss with me.
              </p>
              <Button
                variant="light"
                className="Services-card-btn"
                bsSize="large"
              >
                Discover More
              </Button>
              <div className="services-icon-wrap">
                <FontAwesomeIcon icon={faMobile} className="icon" />
              </div>
            </div>
          </Col>
          <Col lg={5} md={12} sm={12}>
            <div className="servicesCard SEOMediaQuery">
              <div className="servicesCardMainDiv">
                <h1 className="cardHeading">SEO</h1>
                <p className="cardPriceDesign">$1,450</p>
                <div class="services-price-overlay"></div>
              </div>
              <p className="cardDescriptionText">
              <hr className="hrWidth" />
                To list your website first on any search engine, we will work
                together. First Portfolio is one-page CSS Template for free
                download.
              </p>
              <Button
                variant="light"
                className="Services-card-btn"
                bsSize="large"
              >
                Discover More
              </Button>
              <div className="services-icon-wrap">
                <FontAwesomeIcon icon={faG} className="icon" />
              </div>
            </div>
          </Col>
          <Col lg={1} sm={1} md={1} />
        </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
};
