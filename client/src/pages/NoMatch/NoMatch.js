import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./style.css"

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
            <div className="not-found">404 Page Not Found</div>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
