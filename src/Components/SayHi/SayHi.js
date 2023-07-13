import React, { useRef, useState } from "react";
import "../SayHi/SayHi.scss";
import { keys } from "./env.key.js";
import "bootstrap/dist/css/bootstrap.min.css";
// import  EmailJSResponseStatus  from "@emailjs/browser";
import EmailJSResponseStatus from "@emailjs/browser";
// sendForm
// import { EmailJSResponseStatus } from "@emailjs/browser";
import {
  Container,
  Row,
  Col,
  Button,
  ButtonToolbar,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faLightbulb,
  faMobile,
  faG,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faPinterest,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const SayHi = () => {
  let formData = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    EmailJSResponseStatus.sendForm(
      keys.APP_SERVICES_ID,
      keys.APP_TEMPLATE_ID,
      formData.current,
      keys.APP_PUBLIC_KEY
    )
      .then((result) => console.log(result,"result"))
      .then((error) => console.log(error.text));
  };
  return (
    <React.Fragment>
      <Container fluid className="SayHiContainerBackgroundColor">
        <Row>
          <Col lg={1} sm={2} md={1} />
          <Col lg={5} md={8} sm={8}>
            <div className="globalClassForThisGreenColor sayHiMainDiv mb-5">
              <img
                className="sayHiHeaderImage"
                alt="img"
                src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/aerial-view-man-using-computer-laptop-wooden-table.jpg"
              />
              <h1 className="sayHiHeading">Say Hi</h1>
            </div>
          </Col>
          <Col lg={6} md={3} sm={2}></Col>
        </Row>
      </Container>
      <Container fluid className="SayHiContainerBackgroundColor">
        <Container>
          <Row>
            <Col lg={3} sm={10} md={6} className="removingPadding mb-5">
              <div className="servicesSectionMainDiv mt-4">
                <span className="servicesSectionHeading mb-3">services</span>
                <div>
                  <ButtonToolbar>
                    <Button bsSize="large" className="servicesSectionButtons">
                      Websites
                    </Button>
                    <Button bsSize="large" className="servicesSectionButtons">
                      Branding
                    </Button>
                  </ButtonToolbar>
                </div>
                <div className="servicesSectionButtonsDiv">
                  <ButtonToolbar>
                    <Button bsSize="large" className="servicesSectionButtons">
                      Ecommerce
                    </Button>
                    <Button bsSize="large" className="servicesSectionButtons">
                      SEO
                    </Button>
                  </ButtonToolbar>
                </div>

                <div className="stayConnectedSection mt-4 mb-3">
                  <span className="stayConnectedHeading ">STAY CONNECTED</span>
                  <br />
                  <div
                    style={{ display: "inline-flex" }}
                    className="mt-3 IconsMainDivMediaQuery"
                  >
                    <div className="iconsClassDiv">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="avatar-icon"
                      />
                    </div>
                    <div className="iconsClassDiv forSpacing">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="avatar-icon"
                      />
                    </div>
                    <div className="iconsClassDiv forSpacing">
                      <FontAwesomeIcon
                        icon={faPinterest}
                        className="avatar-icon"
                      />
                    </div>
                    <div className="iconsClassDiv forSpacing">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="avatar-icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="stayConnectedSection mt-1">
                  <span className="stayConnectedHeading">START A PROJECT</span>
                  <p className="descriptionServices mt-3">
                    I’m available for freelance projects
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={10} md={6} className="removingPaddingSecondColumn">
              <div className="AboutSecondMainDiv mt-4">
                <span className="AboutSecondMainDivHeading mb-3">ABOUT</span>
                <p className="aboutSecondDescription  mb-2">
                  Rashid is a professional web developer. Feel free to get in
                  touch with me.
                </p>

                <span className="AboutSecondMainDivHeading mt-4 mb-5">
                  EMAIL
                </span>
                <p className="aboutSecondDescription  ">
                  rashidshahbaz123@gmail.com
                </p>

                <span className="AboutSecondMainDivHeading mt-4">CALL</span>
                <p className="aboutSecondDescription  mb-0 ">030-454-88885</p>
              </div>
            </Col>
            <Col lg={6} className="mt-4">
              <form ref={formData} onSubmit={sendEmail}>
                <div className="formFloatingNameAndEmail">
                  <input
                    type="text"
                    name="user_name"
                    className="form-control formInputField"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    className="form-control formInputField"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="formFloatingArea mt-4 ">
                  <input
                    type="text"
                    name="Area"
                    className="form-control formFloatingAreaInput"
                    placeholder="Area"
                    required
                  />
                </div>
                <div className="formFloatingTextArea mt-4">
                  <textarea
                    name="textArea"
                    className="form-control formFloatingTextAreaInput "
                    placeholder="Tell me about the project"
                    required
                  />
                </div>
                <div className="formBtnDiv">
                  <input className="formBtn mt-4" type="submit" value="Send" />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Row className="SayHiContainerBackgroundColor">
          <div className="footer">
            <span className="footerText">
              Copyright © 2023 First Portfolio Company. All rights reserved.
            </span>
            <span className="footerText">
              Design:{" "}
              <span>
                <b>Rashid Shahbaz</b>
              </span>
            </span>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};