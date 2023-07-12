import { Table } from "react-bootstrap";
import React from "react";
import "../Table/Table.scss";
import { Container, Row, Col } from "react-bootstrap";
export const TableData = () => {
  return (
    <React.Fragment>
      <Container className="">
        <Row className="TableRowCSS TableMediaQuery">
          <Col lg={1} />
          <Col lg={10} >
            <Table
              striped
              bordered
              hover
              size="sm"
              className="tableMainClass"
            >
              <thead>
                <tr>
                  <th colSpan={2}>
                    <h4 className="tableHeading">Information</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tableDataHeading">Name</td>
                  <td className="tableDataDetails">Rashid Shahbaz</td>
                </tr>
                <tr>
                  <td className="tableDataHeading">Birthday</td>
                  <td className="tableDataDetails">Jan 31, 1986</td>
                </tr>
                <tr>
                  <td className="tableDataHeading">Phone</td>
                  <td className="tableDataDetails">0304-548-8885</td>
                </tr>
                <tr>
                  <td className="tableDataHeading">Email</td>
                  <td className="tableDataDetails"> rashidshahbaz123@gmail.com</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={1} />
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default TableData;
