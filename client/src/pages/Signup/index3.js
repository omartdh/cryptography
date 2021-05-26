import React from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'
import Flash from '../../lib/Flash'
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

class Signup extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/register', this.state.data)
      .then((res) => {
        Flash.setMessage('success', res.data.message)
        this.props.history.push('/login')
      })
      .catch(() => {
        Flash.setMessage('danger', 'Registration failed')
        this.props.history.push('/register')
      })
  }


  handleChange({target: {name, value }}) {
    const data = {...this.state.data, [name]: value }
    this.setState({ data })
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state.data
    return (
        
      <form onSubmit={this.onSubmit}>
          <Container className="mt-3 px-5">
                <Row className="form-group">
                  <Col size="12">
        <h1>Register New Account</h1>
        <input
                    className="input"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={this.handleChange}
                  />
        </Col>
        </Row>
        <Row className="form-group">
        <Col size="12">
        <input
                    className="input"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                  />
        </Col>
                </Row>
                <button className="button">Submit</button>
                <Link to="/login">
                <button className="button register">Already Registered?</button> </Link>
        </Container>
      </form>
    );
  }
}
export default Signup