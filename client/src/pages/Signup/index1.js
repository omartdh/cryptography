import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

//  const handleInputChange = e => {
//     setUsername(e.target);
//     setPassword(e.target)
//   }

 const onSubmit = e => {
    e.preventDefault();
    fetch('/api/authenticate', {
      method: 'POST',
      // body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error registering in please try again');
    });
  }

    return (
          <div>
            <div className="mt-4">
              <h2>  Sign Up to Cryptogroghy</h2>
            </div>
            <form onSubmit={onSubmit}>
              <Container className="mt-3 px-5">
                <Row className="form-group">
                  <Col size="12">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      required
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col size="12">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={onChangePassword}
                      required
                    />
                  </Col>
                </Row>
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </Container>
              <Container className="mt-4">
              <p>testing</p>
              </Container>
            </form>
          </div>
        );
      }



// function Signup() {
//   const [username, setUsername] = useState();
//   const [password, setPassword] = useState();

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log("username is " + username);
//     console.log("password is " + password);
//   };

//   return (
//     <div>
//       <div className="mt-4">
//         <h2>  Sign Up to Cryptogroghy</h2>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <Container className="mt-3 px-5">
//           <Row className="form-group">
//             <Col size="12">
//               <input
//                 className="form-control"
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 onChange={e => setUsername(e.target.value)}
//               />
//             </Col>
//           </Row>
//           <Row className="form-group">
//             <Col size="12">
//               <input
//                 className="form-control"
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 onChange={e => setPassword(e.target.value)}
//               />
//             </Col>
//           </Row>
//           <button className="btn btn-success" type="submit">
//             Submit
//           </button>
//         </Container>
//         <Container className="mt-4">
//           <h3>Hello {username}!</h3>
//         </Container>
//       </form>
//     </div>
//   );
// }

export default Signup;
