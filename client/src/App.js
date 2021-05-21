import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Signup from "./pages/Signup";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/books/:id">
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
