import React, { Component } from 'react';
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";
import axios from "axios"

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    axios.post('/api/register',
      this.state
    )
    .then(res => {
      console.log("res",res)
      if (res.status === 200) {
        this.props.history.push('/');
      }
      else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert("Registered account!")
    });
  }

render() {
    return (
        
      <form onSubmit={this.onSubmit}>
          <Container className="mt-3 px-5">
                <Row className="form-group">
                  <Col size="12">
        <h1>Register New Account</h1>
        <input
          type="username"
          name="username"
          placeholder="Enter username"
          value={this.state.username}
          onChange={this.handleInputChange}
          required
        />
        </Col>
        </Row>
        <Row className="form-group">
        <Col size="12">
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        </Col>
                </Row>
        <input type="submit" value="Submit"/>
        </Container>
      </form>
    );
  }
}
export default Signup