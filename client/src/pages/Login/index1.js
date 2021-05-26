// import React from 'react'
// import axios from 'axios'

// // import Auth from '../../lib/Auth'
// // import Flash from '../../lib/Flash'
// import Container from "../../components/Container";
// import Col from "../../components/Col";
// import Row from "../../components/Row";

// class Login extends React.Component {
//   constructor() {
//     super()

//     this.state = {
//       data: {
//         email: '',
//         password: ''
//       }
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   handleSubmit(e) {
//     e.preventDefault()
//     axios
//       .post('/api/login', this.state.data)
//       .then((res) => {
//         Auth.setToken(res.data.token)
//         Flash.setMessage('success', res.data.message)
//         this.props.history.push('/dashboard')
//       })
//       .catch(() => {
//         Flash.setMessage('danger', 'Authorization failed')
//         this.props.history.push('/login')
//       })
//   }

//   handleChange({ target: {name, value}}) {
//     const data = {...this.state.data, [name]: value }
//     this.setState({ data })
//   }

//   render() {
//     return (
        
//       <form onSubmit={this.onSubmit}>
//           <Container className="mt-3 px-5">
//                 <Row className="form-group">
//                   <Col size="12">
//         <h1>Login Below!</h1>
//         <input
//                     className="input"
//                     name="username"
//                     placeholder="Username"
//                     value={this.state.username}
//                     onChange={this.handleChange}
//                   />
//         </Col>
//         </Row>
//         <Row className="form-group">
//         <Col size="12">
//         <input
//                     className="input"
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={this.state.password}
//                     onChange={this.handleChange}
//                   />
//         </Col>
//                 </Row>
//                 <button className="button">Log in</button>
//         </Container>
//       </form>
//     );
//   }
// }
// export default Login