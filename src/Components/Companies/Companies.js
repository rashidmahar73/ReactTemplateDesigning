import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import "../Companies/Companies.scss";

export const Companies = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let items = [
    {
      src: "https://templatemo.com/templates/templatemo_578_first_portfolio/images/clients/cachet.svg",
    },
    // {
    //   src: "https://templatemo.com/templates/templatemo_578_first_portfolio/images/clients/guitar-center.svg",
    // },
    {
      src: "https://templatemo.com/templates/templatemo_578_first_portfolio/images/clients/tokico.svg",
    },
    {
      src: "https://templatemo.com/templates/templatemo_578_first_portfolio/images/clients/shopify.svg",
    },
    {
      src: "https://templatemo.com/templates/templatemo_578_first_portfolio/images/clients/profil-rejser.svg",
    },
  ];

  const chunks = [];
  while (items.length) {
    chunks.push(items.splice(0, 2));
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col lg={1} />
          <Col lg={10}>
            <h1 className="companiesHeading mb-5 mt-5">
              Companies I've worked with
            </h1>
            <Carousel interval={null} indicators={false}>
              {chunks.map((chunk, index) => (
                <Carousel.Item className="carouselItem" key={index} style={{position:"relative"}}>
                  <Row>
                    {chunk.map((item, itemIndex) => (
                      <Col key={itemIndex} sm={6}>
                        <img
                          className="companies-image"
                          src={item.src}
                          alt={`Slide ${index}`}
                        />
                      </Col>
                    ))}
                  </Row>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col lg={1} />
        </Row>
      </Container>
    </React.Fragment>
  );
};

