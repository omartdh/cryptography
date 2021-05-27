import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cryptos from "./pages/Cryptos/Cryptos";
import Detail from "./pages/Details/Details"
import CoinDetailPage from "./pages/CoinDetailPage/index"
import Signup from "./pages/Signup";
// import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch/NoMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login/index";
// import withAuth from "./withAuth"
// import withAuth from '../../middleware';
// import Secret from './Secret';
// import Login from './Login';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/cryptos"]}>
            <Cryptos />
          </Route>
          {/* <Route exact path="/cryptos/:id" componenet={withAuth(Detail)} /> */}
          <Route exact path="/cryptos/:id">
            <Detail />
          </Route>
          <Route exact path="/coins/:id">
             <CoinDetailPage />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
