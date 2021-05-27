  
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import "./style.css"
function Detail(props) {
  const [crypto, setCrypto] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getCrypto(id)
      .then(res => setCrypto(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
              <div className="page-header">
                {crypto.title} 
              </div>
              <div className="amont-holding">holding: {crypto.amount}</div>
              <div className="line-1"></div>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <p>
                {crypto.synopsis}
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;