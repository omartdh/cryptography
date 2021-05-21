import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cryptos from "./pages/Cryptos";
import Detail from "./pages/Detail";
import Signup from "./pages/Signup/index";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/cryptos"]}>
            <Cryptos />
          </Route>
          <Route exact path="/cryptos/:id">
            <Detail />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
