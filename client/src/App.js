import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cryptos from "./pages/Cryptos";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/cryptos"]}>
            <Cryptos />
          </Route>
          <Route exact path="/cryptos/:id">
            <Detail />
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
